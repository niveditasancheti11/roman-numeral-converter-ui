import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ConverterForm from '../components/ConverterForm';
import ResultDisplay from '../components/ResultDisplay';
import Footer from '../components/Footer';
import { BASE_URL } from '../constants';

const Home: React.FC = () => {
  const [romanNumeral, setRomanNumeral] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false); // Dark Mode State
  const [isError, setIsError] = useState<boolean>(false);

  const handleConvert = async (value: number) => {
    try {
      const response = await axios.get(`${BASE_URL}/romannumeral/${value}`);
      setIsError(false);
      setRomanNumeral(response.data.output);
    } catch (error) {
      setIsError(true);
      console.error('Error fetching Roman numeral:', error);
      if ((error as any).response && (error as any).response.data == 'Error: Number out of range (1-3999)') {
        setRomanNumeral('Invalid input. Please enter a number between 1 and 3999.');
      } else {
        setRomanNumeral('Error: Failed to convert to Roman numeral.');
      }
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light-mode' : 'dark-mode'; // Apply theme to body
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header onToggleTheme={toggleTheme} darkMode={darkMode} />
      <main className="container mt-5">
        <ConverterForm onConvert={handleConvert} />
        <ResultDisplay result={romanNumeral} isError={isError} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
