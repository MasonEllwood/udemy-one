// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

// create a react component

const App = () => {
    const buttonText = 'Click Me!';

    return (
        <div>
            <label className="name" for="name">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText}
            </button>
        </div>  
    );
};

// take react component and show it to the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);