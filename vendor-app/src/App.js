import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendorList from './VendorList';
import VendorForm from './VendorForm';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                <Route path="/" element={<VendorList />} />
                    <Route path="/add-vendor" element={<VendorForm />} /> 
                    </Routes>
            </div>
        </Router>
    );
}

export default App;