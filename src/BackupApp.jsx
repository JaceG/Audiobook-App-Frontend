import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'

function App() {
 const [todoList, setTodoList] = useState([
    {
    title: "Ttask 1",
    description: "This is task 1",
    isDone: true
    },
    {
      title: "Ttask 2",
      description: "This is task 1",
      isDone: false
      }

 ])
  return (
    <div>
      {
        todoList.map((todo,i) => {
          return (
            <Item
            title={todo.title}
            description={todo.description}
            isDone={todo.isDone}
            onDoneChange={(e) => {
              console.log(e.target.checked);
              const newTodoList = todoList.map((todo,index) => {
                if(i === index) {
                  return {...todo, isDone: e.target.checked}
                }
                return {...todo}
              })
              setTodoList(newTodoList);
            }}
            handleRemove={() => {
              const newTodoList=todoList.filter((_,index) => {

                return !(i === index);
              })

              setTodoList(newTodoList);
            }}
            ></Item>

          );
        })
      }
    </div>
  )
}


export default App
