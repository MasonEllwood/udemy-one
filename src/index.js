// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

// create a react component

const App = () => {
    return <div>Hi there!</div>;
}

// take react component and show it to the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);