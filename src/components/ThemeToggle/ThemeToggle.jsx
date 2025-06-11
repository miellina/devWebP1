import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './themeToggle.module.css';

function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`${styles.container} ${isDarkTheme ? styles.dark : styles.light}`}>
      <Link to="/" className={`${styles.backButton} ${isDarkTheme ? styles.darkButton : styles.lightButton}`}>
        ← Voltar
      </Link>
      
      <div className={styles.content}>
        <button 
          onClick={toggleTheme}
          className={`${styles.themeButton} ${isDarkTheme ? styles.darkThemeButton : styles.lightThemeButton}`}
        >
          {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;