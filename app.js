function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div style={{
            textAlign: "center",
            marginTop: "100px",
            fontFamily: "Arial"
        }}>
            <div style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                display: "inline-block",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)"
            }}>
                <h2>React Counter Application</h2>

                <h1>{count}</h1>

                <button onClick={() => setCount(count + 1)}>
                    Increment (+)
                </button>

                <button onClick={() => setCount(count - 1)} style={{marginLeft: "10px"}}>
                    Decrement (-)
                </button>

                <br /><br />

                <button onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);