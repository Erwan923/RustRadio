use std::collections::HashMap;
use crate::container::Container;

pub struct ContainerRegistry {
    pub containers: HashMap<String, Container>,
}

impl ContainerRegistry {
    pub fn new() -> Self {
        Self { containers: HashMap::new() }
    }

    pub fn register(&mut self, container: Container) {
        self.containers.insert(container.id.clone(), container);
    }

    pub fn list(&self) -> Vec<&Container> {
        self.containers.values().collect()
    }

    pub fn get(&self, id: &str) -> Option<&Container> {
        self.containers.get(id)
    }

    pub fn get_mut(&mut self, id: &str) -> Option<&mut Container> {
        self.containers.get_mut(id)
    }

    pub fn remove(&mut self, id: &str) -> Option<Container> {
        self.containers.remove(id)
    }
}