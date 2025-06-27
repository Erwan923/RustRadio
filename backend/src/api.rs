
use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use crate::runtime::RustRadioRuntime;
use crate::config::ContainerConfig;
use crate::registry::ContainerRegistry;
use std::sync::Mutex;
use std::path::PathBuf;

struct AppState {
    runtime: Mutex<RustRadioRuntime<'static>>,
}

async fn create_container(data: web::Data<AppState>, config: web::Json<ContainerConfig>) -> impl Responder {
    let mut runtime = data.runtime.lock().unwrap();
    match runtime.create_container(config.into_inner()).await {
        Ok(id) => HttpResponse::Ok().body(id),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}

async fn execute_container(data: web::Data<AppState>, id: web::Path<String>) -> impl Responder {
    let mut runtime = data.runtime.lock().unwrap();
    match runtime.execute_in_container(&id.into_inner()).await {
        Ok(output) => HttpResponse::Ok().body(output),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}

async fn list_containers(data: web::Data<AppState>) -> impl Responder {
    let runtime = data.runtime.lock().unwrap();
    let containers = runtime.registry.list();
    HttpResponse::Ok().json(containers)
}


#[actix_web::main]
pub async fn main() -> std::io::Result<()> {
    static mut REGISTRY: Option<ContainerRegistry> = None;
    unsafe { REGISTRY = Some(ContainerRegistry::new()); }

    let runtime = RustRadioRuntime::new(&PathBuf::from("/tmp/rust_radio"), unsafe { REGISTRY.as_mut().unwrap() });
    let app_state = web::Data::new(AppState {
        runtime: Mutex::new(runtime),
    });

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .route("/containers", web::post().to(create_container))
            .route("/containers", web::get().to(list_containers))
            .route("/containers/{id}/execute", web::post().to(execute_container))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
