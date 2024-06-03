/* eslint-disable import/no-anonymous-default-export */
/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-04-24 16:21:33
 * @LastEditTime: 2024-04-24 17:49:25
 */
import ReactReconciler from "react-reconciler";
const hostConfig = {
  getRootHostContext: (...args) => {
    console.info('getRootHostContext', ...args);
  },
  getChildHostContext: (...args) => {
    console.info('getChildHostContext', ...args);
  },
  shouldSetTextContent: (...args) => {
    console.info('shouldSetTextContent', ...args);
  },
  prepareForCommit: (...args) => {
    console.info('prepareForCommit', ...args);
  },
  resetAfterCommit: (...args) => {
    console.info('resetAfterCommit', ...args);
  },
  createTextInstance: (...args) => {
    console.info('createTextInstance', ...args);
  },
  createInstance: (...args) => {
    console.info('createInstance', ...args);
  },
  appendAllChildren: (...args) => {
    console.info('appendAllChildren', ...args);
  },
  appendChildToContainer: (...args) => {
    console.info('appendChildToContainer', ...args)
  },
  // 解决appendAllChildrennot function问题，需要设置返回为true来分配内部函数
  supportsMutation: (...args) => {
    console.info('supportsMutation', ...args);
    return true;
  },
  clearContainer: (...args) => {
    console.info('clearContainer', ...args);
  },
  appendInitialChild: (...args) => {
    console.info('appendInitialChild', ...args);
  },
  finalizeInitialChildren: (...args) => {
    console.info('finalizeInitialChildren', ...args);
  }
};
// 1. 将hostconfig作为参数创建一个reconciler实例
const reactReconciler = new ReactReconciler(hostConfig);
export default {
  /**
   * 
   * @param {*} reactElement react组件 ---> App 组件
   * @param {*} renderDom 将应用渲染到该根元素之下
   * @param {*} callback 
   */
  render: (reactElement, renderDom, callback) => {
    console.info(reactElement, renderDom, callback);
    //
    const isAsync = false;
    // 2. 创建一个根fiber root node节点, 创建一个和renderDom对应的节点
    // 该container将会被reconciler用来管理后续renderdom的更新
    const container = reactReconciler.createContainer(renderDom, isAsync);

    // 默认设置一个父节点, default null;
    const parentElement = null;
    /**
     * updateContainer(
            element: ReactNode,
            container: OpaqueRoot,
            parentComponent?: Component<any, any> | null,
            callback?: (() => void) | null,
        ): Lane;
     */
    reactReconciler.updateContainer(reactElement, container, parentElement, callback,);
  }
};