/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2024-01-15 20:24:31
 * @LastEditTime: 2024-01-18 20:39:12
 */
// #[macro_use]
use moe;
use rocket;

#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
    moe::rocket().launch().await?;
    Ok(())
}
