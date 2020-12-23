const appRoot = document.getElementById('app')

let count =0;

const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
   count--;
   renderCounterApp();
}

const resetOne = () => {
    count = 0;
    renderCounterApp();
}



const renderCounterApp = () => {

    const templateThree = (
        <div>
        <h1>Count is { count } </h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetOne}>Reset</button>
        </div>
    );
    
    ReactDOM.render(templateThree,appRoot);

}

renderCounterApp();