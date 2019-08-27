import React from 'react';
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import 'antd/dist/antd.css';


function App() {
    return (
        <React.Fragment>
            <h1 style={{textAlign:"center"}}>William Clifford | Junior Developer</h1>
            <Aboutme />
            <Portfolio />
            <TechStack />
            <Contact />
        </React.Fragment>
    );
}

export default App;
