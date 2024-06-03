/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-06-03 16:34:21
 * @LastEditTime: 2024-06-03 17:30:06
 */
mod utils;

use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern "C" {
//     fn alert(s: &str);
// }

#[wasm_bindgen(js_name = createRoot)]
pub fn create_root(container: &JsValue) -> JsValue {
    JsValue::null()
}
