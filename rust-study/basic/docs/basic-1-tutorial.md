<!--
 * @Author: yangyuan
 * @Description: https://kaisery.github.io/trpl-zh-cn/ch02-00-guessing-game-tutorial.html
 * @Date: 2024-02-01 21:14:23
 * @LastEditTime: 2024-02-01 21:14:24
-->
### 归档

``` rust
/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2024-01-31 17:41:25
 * @LastEditTime: 2024-02-01 21:13:00
 */
use rand::Rng;
use std::cmp::Ordering;
use std::io;

extern crate rand;

fn main() {
    println!("开始");
    let num2 = "test"; // 一个不可变变量test
    let secret = rand::thread_rng().gen_range(1..=100);

    // println!("随机数 {secret}");

    loop {
        let mut num: String = String::new(); // 创建变量来存储用户输入
        println!("请输入");
        // stdin 函数返回一个std::io::Stdin实例，代表终端输入句柄的类型；将用户输入追加到一个string中
        io::stdin()
            // read_line从标准输入句柄获取用户输入， `&` 表示该参数是一个「引用」
            // 允许多处代码访问同一处数据，无需多次内存拷贝
            /* *
             * Result 返回类型
             * pub enum Result<T, E> {
             *      Ok(T),
             *      Err(E),
             *   }
             *
             */
            .read_line(&mut num)
            // 实例失败的时候返回
            .expect("读取失败");
        // 和上述定义的变量重复，rust允许用一个新的值隐藏变量之前的值
        // 使用match来对可能的结果进行处理，如果ok则返回parse之后的值，否则进入下一次循环
        let num: u32 = match num.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
        println!("我的输入--- {num} ---");
        match num.cmp(&secret) {
            Ordering::Less => println!("数据太小"),
            Ordering::Greater => println!("数据太大"),
            Ordering::Equal => {
                println!("win");
                break;
            }
        }
    }
}
```
