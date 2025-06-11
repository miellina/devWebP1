import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import WelcomeMessage from './components/WelcomeModule/WelcomeMessage';
import TodoList from './components/ToDoList/ToDoList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tema" element={<ThemeToggle />} />
          <Route path="/mensagem" element={<WelcomeMessage />} />
          <Route path="/tarefas" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;