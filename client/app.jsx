import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';

const headerContainer = document.getElementById('header-component');
const footerContainer = document.getElementById('footer-component');

ReactDOM.render(<Header />, headerContainer);
ReactDOM.render(<Footer />, footerContainer);