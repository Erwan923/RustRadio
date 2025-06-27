use std::path::Path;
use tokio::process::Command;
use crate::{config::ContainerConfig, registry::ContainerRegistry};
use crate::container::Container;

pub struct RustRadioRuntime<'a> {
    base_path: String,
    pub registry: &'a mut ContainerRegistry,
}

impl<'a> RustRadioRuntime<'a> {
    pub fn new(base: &Path, registry: &'a mut ContainerRegistry) -> Self {
        Self {
            base_path: base.to_string_lossy().into_owned(),
            registry,
        }
    }

    pub async fn initialize(&self) -> std::io::Result<()> {
        tokio::fs::create_dir_all(&self.base_path).await?;
        Ok(())
    }

    pub async fn create_container(&mut self, cfg: ContainerConfig) -> std::io::Result<String> {
        let mut c = Container::new(cfg);
        let id = c.id.clone();
        self.registry.register(c);
        Ok(id)
    }

    pub async fn execute_in_container(&mut self, id: &str) -> std::io::Result<String> {
        let container = self.registry.get(id).unwrap();

        let cmd = &container.config.command;
        let output = Command::new(&cmd[0])
            .args(&cmd[1..])
            .output()
            .await?;

        let stdout = String::from_utf8_lossy(&output.stdout).to_string();
        Ok(stdout)
    }
}