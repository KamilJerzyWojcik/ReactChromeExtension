import React from 'react';
import { createRoot } from 'react-dom/client';
import "./options.css";

const test = <h1>Hello World from Options!</h1>;

const domNode = document.createElement('div');
document.body.appendChild(domNode);

const root = createRoot(domNode);
root.render(test);