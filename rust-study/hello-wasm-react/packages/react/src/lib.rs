mod utils;

use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern "C" {
//     fn alert(s: &str);
// }

#[wasm_bindgen(js_name = jsxDEV)]
pub fn jsx_dev() -> String {
    return "hello world".to_string();
}