/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2024-02-20 16:40:55
 * @LastEditTime: 2024-02-20 17:28:00
 */
use std::io;

pub fn loop_tag() {
    let mut count = 0;
    println!("开始");

    // 如果存在嵌套循环，`break`和`continue`应用于此时最内层的循环
    // 指定一个循环标签，将上述的`break`和`continue`与标签一起使用
    // 使得这些关键字应用于当前的循环标签内
    'continue_1: loop {
        println!("count = {count}");

        let mut remain = 10;

        loop {
            println!("remain = {remain}");

            if (remain == 9) {
                break;
            }

            if count == 2 {
                break 'continue_1;
            }
            remain -= 1;
        }
        count += 1;
    }
    println!("final count = {count}");
}

pub fn loop_for() {
    let arr = [1, 2, 3, 3, 4, 65];

    for ele in arr {
        println!("current num = {ele}")
    }
}

pub fn loop_for_off() {
    for ele in (1..4) {
        println!("current num = {ele}")
    }
    println!("over")
}

// 摄氏度转华氏度
pub fn c_to_f() {
    loop {
        let mut celsius: String = String::new();
        println!("请输入当前温度（摄氏度）");
        io::stdin().read_line(&mut celsius).expect("读取失败");
        println!("摄氏度 = {celsius}");
        let celsius: f32 = celsius.trim().parse().expect("类型转换失败");

        let mut fahrenheit: f32 = celsius * 1.8 + 32.0;
        println!("华氏度 = {fahrenheit}");
    }
}

// fib-斐波那契数列
pub fn fib() {
    let mut fib: String = String::new();
    println!("请输入数列位数");
    io::stdin().read_line(&mut fib).expect("读取失败");

    let fib: u32 = fib.trim().parse().expect("类型转换失败");
    let mut sum: i128 = 1;
    let mut last: i128 = 0;
    let mut prev: i128 = 1;

    if (fib == 0) {
        println!("非法字符");
    } else if (fib == 1) {
        println!("fib = 1");
    }
    for _ in 1..fib {
        sum = last + prev;
        last = prev;
        prev = sum;
    }
    println!("fib = {sum}");
}
