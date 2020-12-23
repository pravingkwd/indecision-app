/*
const  obj = {
    name:'Pravin',
    getName()
    {
        return this.name;
    },
    age:33
}

const pravin = obj.getName;

console.log(pravin());

*/

//console.log(obj.getName());

class IndecisionApp extends React.Component {

    constructor(props)
    {
        super(props)
        {
            this.state = {
                options : props.options
             }
        }

        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this); 
    }
    componentDidMount()
    {   
        try {
        const options = JSON.parse(localStorage.getItem('options'))
        if(options) 
        {
            this.setState( () =>  ( { options} )

             )
        }
    }
    catch(e) {
        // invalid json
    }
    }
    componentDidUpdate(prevState)
    {
       if(prevState.options !== this.state.options) { 
       const json = JSON.stringify(this.state.options);
       localStorage.setItem('options',json);
       console.log('saving data',prevState.options);
       }
    }
    componentWillUnmount()
    {
        console.log('component will umount');
    }
    handleRemoveOption (optionName) {

        
        this.setState( (prevState) => ( {

            options : prevState.options.filter( (option) => {
                  return optionName !== option;  
            } )
        
        } )) 

    }

    handleDeleteOption () {

        /*this.setState( ()=>{
            return { options:[] }
        });
*/
        this.setState( () => ({ options:[] }) )

    }

    handlePick ()
    {
        const randomNum = Math.floor(Math.random() * this.state.options.length);

        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOptions (option) {

        if(!option) {
          return 'Please enter valid item';  
        }
        else if (this.state.options.indexOf(option)>-1)
        {
            return 'This option is already exist';
        }


        /*this.setState((prevState)=> { 

            return {
                options: prevState.options.concat([option])
            }

        });

        */

        this.setState( (prevState)=> ({ options: prevState.options.concat([option]) }) )
    }

    render()
    {

        
        const subtitle ='Put yur life in hands of a computers ?';

        

        return (
            <div>
            <Header subt={subtitle}/>
            <Actions hasOptions={this.state.options.length>0 } handlePick={this.handlePick}  />
            <Options option={this.state.options} handleDelete={this.handleDeleteOption} handleRemoveOption={this.handleRemoveOption} />
            <AddOptions addOptions={this.handleAddOptions} />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subt && <h2>{props.subt}</h2> }
        </div>
    );
}

Header.defaultProps = {
    title : 'Indecision App'
}

IndecisionApp.defaultProps = {
    options : []
}

/*class Header extends React.Component 
{
    render() 
    {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subt}</h2>
            </div>
        );
    }
}
*/
const Actions = (props) => {

    return (
        <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions} >What shoud i do?</button>
        </div>
    );
}

/*class Actions extends React.Component 
{
    
    render()
    {
        return (
            <div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions} >What shoud i do?</button>
            </div>
        );
    }
}*/


const Options = (props) => {
    return (
        <div>   {props.option.length === 0 && <p>There is no item in options array . pleae add item .</p> }
                {   props.option.map((name) => {
                        return <Option key={name} optionText={name} handleRemoveOption={props.handleRemoveOption} />
                    })
                }
            <button onClick={props.handleDelete}>Remove all</button>
            
        </div>
    );
}

/*class Options extends React.Component {

   render()
    {
        return (
            <div>
                    {   this.props.option.map((name) => {
                            return <Option key={name} optionText={name} />
                        })
                    }
                <button onClick={this.props.handleDelete}>Remove all</button>
                
            </div>
        );
    }
}*/


const Option = (props) => {
    return (
        <div>
        <ul>
        <li>{props.optionText}</li>
        <button onClick={ (e) => {
            props.handleRemoveOption(props.optionText)
        } } >Remove</button>
        </ul>
        </div>
    );
}


/*class Option extends React.Component
{
    render() {
        return (
            <div>
            <ul>
            <li>{this.props.optionText}</li>
            </ul>
            </div>
        );
    }

}*/

class AddOptions extends React.Component {

    constructor(props)
    {
    super(props);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.state = {
        error:undefined
    }
    }
    

    handleAddOptions (e) {
        e.preventDefault();
        const option = e.target.elements.options.value.trim();

        const error =this.props.addOptions(option);
        
        //this.setState(()=>{ return { error } });

        this.setState( () => ({ error }) )

        if(!error) {
            e.target.elements.options.value = '';
        }
    }

    render()
    {
        return (
            <div>
            <form onSubmit={this.handleAddOptions}>
            {this.state.error && <p>{this.state.error}</p>}
            <input type='text' name='options' />
            <button>Add Options</button>
            </form>
            </div>
        )
    }
}




ReactDOM.render(<IndecisionApp  />,document.getElementById('app'));





