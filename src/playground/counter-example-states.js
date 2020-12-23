class Counter extends React.Component {

    constructor(props)
    {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0
        }
    }

    componentDidMount() {
        
        const count = parseInt(localStorage.getItem('count'),10)

        if(!isNaN(count))
        {
            this.setState( () => ({ count }) )
        }

    }

    componentDidUpdate(prevProps,prevState){
        
        if(prevState.count!==this.state.count) 
        {
            const num = this.state.count;
            localStorage.setItem('count',num);
        }
    }

    handleAddOne (){
       
        this.setState((prevState)=> {
            return {
                count : prevState.count + 1 
            }
        
        });
        console.log('add one'+this.state.count);
    }

    handleMinusOne()
    {   
        this.setState((prevState) => {
            return { count : prevState.count - 1 }
        });

        console.log('Mius One',+this.state.count);
        
    }

    handleReset()
    {
        this.setState(() => {
           return  { count :0 }

         } )
        
    }

    render()
    {
        return (
            <div>
            <h1>Counter : {this.state.count}</h1>
            <button onClick={this.handleAddOne} >+1</button>
            <button onClick={this.handleMinusOne} >-1</button>
            <button onClick={this.handleReset }>Reset</button>
            </div>

        );
    }


    


}

//Counter.defaultProps = { count:0 }

ReactDOM.render(<Counter />,document.getElementById('app'));