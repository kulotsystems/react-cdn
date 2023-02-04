const App = () => {
    const [counter, setCounter] = React.useState(1);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src="images/react.svg" className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Hello World!</h1>
            <div className="card">
                <button onClick={increment}>
                    count is { counter }
                </button>
            </div>
        </div>
    )
};

const root = document.querySelector("#app");
ReactDOM.createRoot(root).render(<App />);
