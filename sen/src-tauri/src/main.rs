/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-27 17:48:26
 * @LastEditTime: 2023-12-28 14:50:48
 */
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri_app_lib::run()
}
