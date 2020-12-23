import React from 'react';

export default class AddOptions extends React.Component {
    state = {
        error : undefined
    }
        

    handleAddOptions = (e) => {
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
            <div >
            {this.state.error && <p className="add-option__error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.handleAddOptions}>
            <input className="add-option__input" type='text' name='options' autoComplete='off' />
            <button className="button">Add Options</button>
            </form>
            </div>
        )
    }
}