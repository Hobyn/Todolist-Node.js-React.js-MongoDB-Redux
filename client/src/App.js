import './App.css';

// components 

import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';
import Todos from './components/Todos.jsx';


function App() {
  return (
    <div className="App">
        <Header/>
        <TodoForm/>
        <Todos/>
    </div>
  );
}

export default App;
