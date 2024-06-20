/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-06-20 14:42:04
 * @LastEditTime: 2024-06-20 22:16:42
 */
import Layout from './components/layout/Layout';
import { CroppersWizard } from './components/CroppersWizard'
import './app.scss';
import 'react-advanced-cropper/dist/style.css';

function App() {

  return (
    <Layout>
     <CroppersWizard />
    </Layout>
  )
}

export default App
