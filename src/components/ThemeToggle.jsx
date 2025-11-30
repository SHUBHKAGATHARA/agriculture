import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDark ? 'લાઇટ મોડ' : 'ડાર્ક મોડ'}
      title={isDark ? 'લાઇટ મોડ' : 'ડાર્ક મોડ'}
    >
      {isDark ? <FaSun /> : <FaMoon />}
      <span className="theme-label">{isDark ? 'લાઇટ મોડ' : 'ડાર્ક મોડ'}</span>
    </button>
  );
};

export default ThemeToggle;
