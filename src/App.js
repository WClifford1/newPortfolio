import React from 'react';
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Contact from './components/Contact';


function App() {
    return (
        <React.Fragment>
            <Aboutme />
            <Portfolio />
            <TechStack />
            <Contact />
            
        </React.Fragment>
    );
}

export default App;
