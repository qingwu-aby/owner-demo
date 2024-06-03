/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-06-03 16:47:28
 * @LastEditTime: 2024-06-03 17:50:03
 */
// import React from 'react'
import { createRoot } from 'react-dom'
import { log} from '../utils/log-enhancer';
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const comp = <div>hello world!!!</div>;
log.info('react', comp);
log.info('react-dom', createRoot(document.getElementById('root')));
