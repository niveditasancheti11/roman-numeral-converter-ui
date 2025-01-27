import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ConverterForm from '../components/ConverterForm';
import ResultDisplay from '../components/ResultDisplay';
import Footer from '../components/Footer';
import { BASE_URL } from '../constants';
import useRomanNumeralConverter from '../hooks/useRomanNumeralConverter';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false); // Dark Mode State
  // Use custom hook to handle Roman numeral conversion
  const { result, isError, convertToRoman } = useRomanNumeralConverter(BASE_URL);

  const handleConvert = (value: number) => {
    convertToRoman(value);
  };

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light-mode' : 'dark-mode'; // Apply theme to body
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header onToggleTheme={toggleTheme} darkMode={darkMode} />
      <main className="container mt-10">
        <ConverterForm onConvert={handleConvert} />
        <ResultDisplay result={result} isError={isError} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
