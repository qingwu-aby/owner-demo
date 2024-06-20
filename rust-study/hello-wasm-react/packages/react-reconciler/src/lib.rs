use std::{any::Any, rc::Rc};

/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-06-05 20:45:16
 * @LastEditTime: 2024-06-05 21:53:29
 */
//  https://github.com/facebook/react/blob/main/packages/react-reconciler/README.md
pub trait HostConfig {
    /**
     * @timing {渲染阶段}
     * @description: 1. 用来返回新创建的节点,Dom渲染器设置属性
     * 2. 用它访问与该树管理的根容器
     * 3. 跟踪有关树中的位置信息
     * 4. 这个方法发生在「渲染阶段」，它返回刚刚创建的新节点，但是不修改其他节点
     * 它不在树上注册事件处理程序
     * @param {*} self
     * @param {Rc} _type
     * @return {*}
     */  
    fn create_instance(&self, _type: Rc<dyn Any>) -> Rc<dyn Any>;
    fn host_context(&self, _type: Rc<dyn Any>) -> Rc<dyn Any>;
    fn get_child_host_context(&self, _type: Rc<dyn Any>) -> Rc<dyn Any>;

    /**
     * @timing 「渲染阶段」
     * @description: 将子项添加到子项列表中 eg. parentInstance.appendChild(child)
     * @param {*} self
     * @param {Rc} parent
     * @param {Rc} child
     * @return {*}
     */      
    fn append_initial_child(&self, parent: Rc<dyn Any>, child: Rc<dyn Any>);
    fn append_child_to_container(&self, child:Rc<dyn Any>, parent: Rc<dyn Any>);
    
}

pub struct Reconciler {
  host_config: Box<dyn HostConfig>,
}

impl Reconciler {
  pub fn new(host_config: Box<dyn HostConfig>) -> Self {
    Reconciler { host_config }
  }
  pub fn 
}