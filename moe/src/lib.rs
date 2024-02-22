/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2024-01-16 20:51:22
 * @LastEditTime: 2024-01-31 17:34:01
 */
// #![feature(proc_macro_hygiene, decl_macro)]
// 导出该模块内所有宏，从而使得宏所在的模块在所定义的模块结束之后还能使用
#[macro_use]
extern crate rocket;
use rocket::serde::json::Json;
use rocket::serde::json::Value;

#[macro_use]
extern crate rocket_sync_db_pools;

extern crate rocket_cors;
use rocket_cors::{Cors, CorsOptions};

#[macro_use]
extern crate diesel;

mod config;
mod services;

use dotenv::dotenv;
use serde_json::json;

#[get("/hello", format = "json")]
fn index() -> Value {
    json!({
      "status": "success",
      "code": 1,
      "message": "Hello world",
    })
}
#[get("/hello/<name>", format = "json")]
fn hello(name: &str) -> Value {
    json!({
      "status": "success",
      "code": 1,
      "message": name,
    })
}

#[catch(404)]
fn not_found() -> Value {
    json!({
      "status": "error",
      "code": -1,
      "message": "Resource not found",
    })
}

fn cors_fairing() -> Cors {
    CorsOptions::default().to_cors().expect("Can't create cors")
}

#[launch]
pub fn rocket() -> _ {
    dotenv().ok();
    rocket::custom(config::from_env())
        .mount("/api/v1", routes![index])
        .mount("/api/v1", routes![hello])
        .attach(services::DbConnect::fairing())
        .attach(cors_fairing())
        .register("/", catchers![not_found])
}
