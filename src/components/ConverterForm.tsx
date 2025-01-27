import React, { useState, useEffect } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

interface ConverterFormProps {
    onConvert: (value: number) => void;
}

const ConverterForm: React.FC<ConverterFormProps> = ({ onConvert }) => {
    const [value, setValue] = useState<number>(1);

    // Automatically call conversion when the value changes
    useEffect(() => {
        onConvert(value);
    }, [value, onConvert]);

    const handleIncrement = () => {
        if (value < 3999) {
            setValue(value + 1); // Update value
        }
    };

    const handleDecrement = () => {
        if (value > 1) {
            setValue(value - 1); // Update value
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.target.value);
        if (inputValue >= 1 && inputValue <= 3999) {
            setValue(inputValue); // Update value within valid range
        }
    };

    return (
        <Form className="p-3 border rounded">
            <h2 className="text-center mb-3">Enter a number</h2>
            <InputGroup className="mb-3">
                <Button variant="secondary" onClick={handleDecrement}>
                    -
                </Button>
                <Form.Control
                    type="number"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    min={1}
                    max={3999}
                    className="text-center"
                />
                <Button variant="secondary" onClick={handleIncrement}>
                    +
                </Button>
            </InputGroup>
        </Form>
    );
};

export default ConverterForm;
