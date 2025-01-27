import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

interface HeaderProps {
    onToggleTheme: () => void;
    darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme, darkMode }) => {
    return (
        <Navbar bg={darkMode ? 'dark' : 'primary'} variant={darkMode ? 'dark' : 'light'} className="mb-4">
            <Container>
                <Navbar.Brand href="#">Roman Numeral Converter</Navbar.Brand>
                <Button
                    variant={darkMode ? 'outline-light' : 'outline-dark'}
                    onClick={onToggleTheme}
                    className="d-flex align-items-center"
                >
                    {darkMode ? (
                        <>
                            <i className="bi bi-sun-fill me-2"></i> Light Mode
                        </>
                    ) : (
                        <>
                            <i className="bi bi-moon-fill me-2"></i> Dark Mode
                        </>
                    )}
                </Button>
            </Container>
        </Navbar>
    );
};

export default Header;

