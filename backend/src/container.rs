use chrono::{DateTime, Utc};
use uuid::Uuid;
use crate::config::{ContainerConfig, RestartPolicy};
use serde::Serialize;

#[derive(Debug, Clone, Serialize)]
pub enum ContainerState {
    Created,
    Running,
    Stopped,
    Error(String),
}

#[derive(Debug, Serialize)]
pub struct Container {
    pub id: String,
    pub config: ContainerConfig,
    pub state: ContainerState,
    pub pid: Option<u32>,
    pub created_at: DateTime<Utc>,
    pub started_at: Option<DateTime<Utc>>,
    pub stopped_at: Option<DateTime<Utc>>,
}

impl Container {
    pub fn new(config: ContainerConfig) -> Self {
        let now = Utc::now();
        Container {
            id: Uuid::new_v4().to_string(),
            config,
            state: ContainerState::Created,
            pid: None,
            created_at: now,
            started_at: None,
            stopped_at: None,
        }
    }

    pub fn set_state(&mut self, new_state: ContainerState) {
        match &new_state {
            ContainerState::Running => self.started_at = Some(Utc::now()),
            ContainerState::Stopped => {
                self.stopped_at = Some(Utc::now());
                self.pid = None;
            }
            ContainerState::Error(_) => self.stopped_at = Some(Utc::now()),
            _ => {}
        }
        self.state = new_state;
    }
}