/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-27 17:48:26
 * @LastEditTime: 2023-12-28 15:03:10
 */
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
mod setup;
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(setup::init)
        // .plugin(tauri_plugin_shell::init())
        // .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
