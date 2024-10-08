import TodoData from "./component/learn/TodoData"
import TodoNew from "./component/learn/TodoNew"
import "./component/todo/todo.css"
import reactLogo from  "./assets/react.svg"

// () => {}: arrow function
// Component = html + css + js


const App = () => {
  const name = "VPManh"
  const age = "21"
  const data = {
    address : "DaNang",
    country : "vietnam"
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData
          name = {name}
          age =  {age}
          data = {data}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
