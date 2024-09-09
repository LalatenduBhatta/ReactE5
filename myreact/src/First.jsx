
function First({ children }) {
    console.log(children);
    return (
        <div>
            <h1>This is Function Component</h1>
            <h2>{children}</h2>
        </div>
    )
}

export default First