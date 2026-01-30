import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'
    return storageTheme
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon/>
  }
    
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to='/'
        aria-label='Ir para Home'
        title='ir para Home'
      >
        <HomeIcon />
      </Link>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
