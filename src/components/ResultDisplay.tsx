import React from 'react';
import { Alert } from 'react-bootstrap';

interface ResultDisplayProps {
    result: string;
    isError?: boolean; // Optional prop with a default value
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, isError = false }) => {
    return (
        <div className="mt-4">
            {result ? (
                <Alert variant={isError ? 'danger' : 'success'} className="text-center">
                    <h4>
                        {isError ? result : `Equivalent Roman Numeral: ${result}`}
                    </h4>
                </Alert>
            ) : (
                <Alert variant="info" className="text-center">
                    Enter a number to see the Roman numeral result.
                </Alert>
            )}
        </div>
    );
};

export default ResultDisplay;
