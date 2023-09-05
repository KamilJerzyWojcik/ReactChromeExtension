import React from 'react';
import { createRoot } from 'react-dom/client';
import "./popup.css";

const test = <img src="icon.png" />;

const domNode = document.createElement('div');
document.body.appendChild(domNode);

const root = createRoot(domNode);
root.render(test);
