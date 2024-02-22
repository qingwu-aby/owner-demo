/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2024-01-18 16:12:33
 * @LastEditTime: 2024-01-18 20:38:04
 */
use rocket::config::Config;
use rocket::figment::Figment;
use std::collections::HashMap;
use std::env;

pub const TOKEN_PREFIX: &'static str = "Token";
pub const DATE_FORMET: &'static str = "%Y-%m-%dT%H:%M:%S%.3fZ";
// 配置项合并
pub fn from_env() -> Figment {
    let port = env::var("PORT")
        .unwrap_or_else(|_| "9090".to_string()) // |_|意思是这个闭包需要一个参数，但是你不想使用「这个闭包需要一个参数，但是我不想给」
        .parse::<u16>()
        .expect("PORT must be a number");
    let mut database = HashMap::new();
    let mut database_config = HashMap::new();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL NOT FOUND");
    database_config.insert("url", database_url);
    database.insert("diesel_postgres_pool", database_config);

    Config::figment()
        .merge(("port", port))
        .merge(("databases", database))
}
