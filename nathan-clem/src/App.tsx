import './App.css'

function App() {
  const ToDoApp = (url: string): void => {
    window.open(url)
  }
  
  
  return (
    <>
    <h1>My projects</h1>
    <button type="button" onClick={()=> ToDoApp('https://to-do-app-s4j7.onrender.com/index.html')}>To Do App</button>
    </>
  )
}



export default App