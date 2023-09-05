import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';

const test = <h1>Hello World</h1>;

const domNode = document.createElement('div');
document.body.appendChild(domNode);

const root = createRoot(domNode);
root.render(test);