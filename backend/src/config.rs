use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::path::Path;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ContainerConfig {
    pub name: String,
    pub image: String,
    pub command: Vec<String>,
    pub working_dir: Option<String>,
    pub environment: HashMap<String, String>,
    pub ports: Vec<String>,
    pub volumes: Vec<String>,
    pub restart_policy: RestartPolicy,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "PascalCase")]
pub enum RestartPolicy {
    Never,
    Always,
    OnFailure,
    UnlessStopped,
}

impl ContainerConfig {
    pub fn from_file<P: AsRef<Path>>(path: P) -> anyhow::Result<Self> {
        let content = std::fs::read_to_string(path.as_ref())?;
        let cfg: ContainerConfig = serde_yaml::from_str(&content)?;
        Ok(cfg)
    }
}