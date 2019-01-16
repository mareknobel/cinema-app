import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/Movies';

const App = () => {
return <Movies />
};

ReactDOM.render(<App />, document.querySelector('#root'));