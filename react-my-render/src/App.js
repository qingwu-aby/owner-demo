/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-04-24 16:18:01
 * @LastEditTime: 2024-04-24 17:37:52
 */
import './App.css';

const Text = props => {
  return <p className={props.className}>{props.content}</p>
}
function App() {
  return (
    <div>
      <Text className="hello-class" content="Hello" />
      <span style={{ color: "blue" }}>World</span>
    </div>
  )
}

export default App;
