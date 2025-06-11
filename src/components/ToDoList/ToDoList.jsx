import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './toDoList.module.css';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        ← Voltar
      </Link>
      
      <div className={styles.content}>
        <h1 className={styles.title}>To Do List 📄</h1>
        
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite uma tarefa..."
            className={styles.input}
          />
          <button onClick={addTask} className={styles.addButton}>
            Adicionar
          </button>
        </div>
        
        <div className={styles.tasksContainer}>
          {tasks.length === 0 ? (
            <p className={styles.emptyMessage}>Nenhuma tarefa adicionada ainda.</p>
          ) : (
            <ul className={styles.tasksList}>
              {tasks.map((t) => (
                <li key={t.id} className={styles.taskItem}>
                  <span className={styles.taskText}>{t.text}</span>
                  <button 
                    onClick={() => removeTask(t.id)}
                    className={styles.removeButton}
                  >
                    Feito ✅
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {tasks.length > 0 && (
          <div className={styles.summary}>
            <p>Total de tarefas: {tasks.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;