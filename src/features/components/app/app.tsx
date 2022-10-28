import React from 'react';

import './App.css';
import { RobotList } from '../robotlist/robotlist';
import { Layout } from '../layout/layout';
import { RobotContextProvider } from '../context/provider';

function App() {
    return (
        <div className="App">
            <h2>Robots</h2>
            <Layout>
                <RobotContextProvider>
                    <p>Estamos trabajando para mejorar la experiencia</p>
                </RobotContextProvider>
            </Layout>
        </div>
    );
}
export default App;
