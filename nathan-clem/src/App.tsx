function App() {
<link rel="stylesheet" href="App.css" />
  const ToDoApp = url => {
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