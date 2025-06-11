import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Olá!</h1>
      <p className={styles.subtitle}>Seja bem vind@!</p>
      
      <div className={styles.linksContainer}>
        <Link to="/tema" className={styles.link}>
          Tema 🌘
        </Link>
        
        <Link to="/mensagem" className={styles.link}>
          Boas Vindas ✨
        </Link>
        
        <Link to="/tarefas" className={styles.link}>
          To Do List ✅
        </Link>
      </div>
    </div>
  );
}

export default Home;