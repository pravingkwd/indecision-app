import React from 'react';

import AddOptions from './AddOptions'

import { Option } from './Option';
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options : [],
        selectedOption : undefined
    }

    
    handleRemoveOption = (optionName) => {

        
        this.setState( (prevState) => ( {

            options : prevState.options.filter( (option) => {
                  return optionName !== option;  
            } )
        
        } )) 

    }

    handleDeleteOption = () => {

        /*this.setState( ()=>{
            return { options:[] }
        });
*/
        this.setState( () => ({ options:[] }) )

    }

    handlePick = () =>
    {
        const randomNum = Math.floor(Math.random() * this.state.options.length);

        const option = this.state.options[randomNum];
        
        this.setState(()=> ({ selectedOption: option }))
    }

    handleAddOptions = (option) => {

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

    handleSelectedoption = () => {

        this.setState( () => ( { selectedOption : undefined } ) )
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
    

    render()
    {

        
        const subtitle ='Put yur life in hands of a computers ?';

        

        return (
            <div>
            <Header subt={subtitle}/>
            <div className="container">
            <Actions hasOptions={this.state.options.length>0 } handlePick={this.handlePick}  />
            <div className="widget">
            <Options option={this.state.options} handleDelete={this.handleDeleteOption} handleRemoveOption={this.handleRemoveOption} />
            <AddOptions addOptions={this.handleAddOptions} />
            </div>
            </div>
            <OptionModal selectedOption={this.state.selectedOption} handleSelectedoption={this.handleSelectedoption} />
            </div>
        );
    }
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