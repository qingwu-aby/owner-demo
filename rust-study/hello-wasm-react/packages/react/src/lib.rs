use shared::REACT_ELEMENTY_TYPE;

use js_sys::{Object, Reflect, Symbol};
use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern "C" {
//     fn alert(s: &str);
// }
// 此处运行时jsx需要返回一个符合原bak.ts类型的对象
// 在此处直接构造成对应的对象

#[wasm_bindgen(js_name = jsxDEV)]
pub fn jsx_dev(_type: &JsValue, config: &JsValue, key: &JsValue) -> JsValue {
    // 初始化一个对象
    let react_element = Object::new();
    Reflect::set(
        &react_element,
        &"$$typeof".into(),
        &JsValue::from_str(REACT_ELEMENTY_TYPE)
    ).expect("$$typeof panic!");

    Reflect::set(
        &react_element,
        &"_type".into(),
        _type
    ).expect("_type panic!");

    Reflect::set(
        &react_element,
        &"key".into(),
        key
    ).expect("key panic!");

    let conf = config.dyn_ref().unwrap();
    let props = Object::new();

    for prop in Object::keys(conf) {
        let val = Reflect::get(conf, &prop);
        match prop.as_string() {
            None => {}
            Some(item) => {
                if val.is_ok() {
                    Reflect::set(&react_element, &JsValue::from(item), &val.unwrap()).expect("prop panic!");
                }
            }
        }
    }

    Reflect::set(&react_element, &"props".into(), &props).expect("props panic!");

    return react_element.into();
}
