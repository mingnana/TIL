import { useState } from 'react';
import './Hook.css';
import Page from './Page';
import { ThemeContext } from './Context/ThemeContext';
import {UserContext} from './Context/UserContext';

function Hook() {
    const [isDark, setIsDark] = useState(false);
    return (
        <UserContext.Provider value={'사용자'}>
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page/>
        </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

export default Hook;
