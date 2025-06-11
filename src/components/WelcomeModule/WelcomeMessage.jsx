import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './welcomeMessage.module.css';

function WelcomeMessage() {
  const [message, setMessage] = useState('Olá!');
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setMessage('Bem-vind@! 🤙🏻');
    setHasEntered(true);
  };

  const resetMessage = () => {
    setMessage('Olá! 🙂');
    setHasEntered(false);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        ← Voltar
      </Link>
      
      <div className={styles.content}>
                
        <div className={styles.messageContainer}>
          <p className={styles.message}>{message}</p>
          
          <div className={styles.buttonContainer}>
            {!hasEntered ? (
              <button onClick={handleEnter} className={styles.enterButton}>
                Entrar
              </button>
            ) : (
              <button onClick={resetMessage} className={styles.resetButton}>
                Reiniciar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeMessage;