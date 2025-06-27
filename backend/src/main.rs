pub mod api;
pub mod config;
pub mod container;
pub mod registry;
pub mod runtime;

fn main() {
    api::main().unwrap();
}