import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Login from './components/Login';
import "./App.css"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Create />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
