import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// Router is no longer needed for navigation, but we keep the structure just in case
// We will just render Home which contains everything.

import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
    return (
        <Layout>
            <Home />
        </Layout>
    );
}

export default App;
