/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-28 11:23:40
 * @LastEditTime: 2023-12-28 14:28:13
 */
use tauri::{App, Manager};
use window_vibrancy::{self, NSVisualEffectMaterial};

/// omb setup
pub fn init(app: &mut App) -> std::result::Result<(), Box<dyn std::error::Error>> {
    let win = app.get_window("main").unwrap();

    #[cfg(target_os = "macos")]
    window_vibrancy::apply_vibrancy(&win, NSVisualEffectMaterial::FullScreenUI, None, None)
        .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

    #[cfg(target_os = "windows")]
    window_vibrancy::apply_blur(&win, Some((18, 18, 18, 125)))
        .expect("Unsupported platform! 'apply_blur' is only supported on Windows");

    Ok(())
}
