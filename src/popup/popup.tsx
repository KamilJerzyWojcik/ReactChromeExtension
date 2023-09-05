import React from 'react';
import { createRoot } from 'react-dom/client';
import "./popup.css";

const App: React.FC<{}> = () => {
    return (
        <div className="App">
        <header className="App-header">
            <h1>Hello World Popup</h1>
            <img src="icon.png" />
        </header>
        </div>
    );
};

const domNode = document.createElement('div');
document.body.appendChild(domNode);
createRoot(domNode).render(<App />);
