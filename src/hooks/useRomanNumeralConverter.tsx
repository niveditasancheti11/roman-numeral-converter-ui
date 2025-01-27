import { useState } from 'react';
import axios from 'axios';

const useRomanNumeralConverter = (baseUrl: string) => {
    const [result, setResult] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);

    const convertToRoman = async (value: number) => {
        try {
            const response = await axios.get(`${baseUrl}/romannumeral/${value}`);
            setIsError(false);
            setResult(response.data.output);
        } catch (error) {
            setIsError(true);
            if ((error as any).response && (error as any).response.data === 'Error: Number out of range (1-3999)') {
                setResult('Invalid input. Please enter a number between 1 and 3999.');
            } else {
                setResult('Error: Failed to convert to Roman numeral.');
            }
        }
    };

    return { result, isError, convertToRoman };
};

export default useRomanNumeralConverter;
