/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2024-02-01 21:31:49
 * @LastEditTime: 2024-02-01 21:41:28
 */
pub fn const_concept() {
    let mut x = 1; // 通过mut使得变量x变为可变的类型

    // 使用const 定义一个常量
    const THIS_IS_A_CONST: &str = "nihao";
    println!("打印常量 {THIS_IS_A_CONST}");
    println!("原始数据 {x}");
    x = 3;
    println!("不可变数据类型 {x}");
}

// 定义一个名称相同的变量
// 此时编译器「遮蔽」了第一个变量，在作用域内仅能看到最后一次的变量值
// mut和隐藏的区别是，
// 当再次使用let的时候，
// 相当于创建了一个新的变量，
// 此时我们还能改变值的类型，并且复用该名称
pub fn shadowing() {
    let a = 3;
    let a = a + 1;
    let b = "nihao";
    println!("原始的b的值 {b}");
    let b = b.len();

    {
        let a = a * 2;
        println!("作用域内a的值  {a}");
    }

    println!("作用域外a的值 {a}");
    println!("作用域外b的值 {b}");
}
