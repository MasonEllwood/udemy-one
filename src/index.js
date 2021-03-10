// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

// create a react component

const App = () => {
    const buttonText = {text: 'Click Me!'};
    const labelTect = 'Enter Name:';

    return (
        <div>
            <label className="name" htmlFor="name">
                {labelTect}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>  
    );
};

// take react component and show it to the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);