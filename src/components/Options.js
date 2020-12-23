import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div> 
        <div className="widget-header">
        <h3 className="widget-header__title">Your option</h3>
        <button className="button button--link" onClick={props.handleDelete}>Remove all</button>
        </div>
        {props.option.length === 0 && <p className="widget__message">There is no item in options array . pleae add item .</p> }
                {   props.option.map((name,index) => {
                        return <Option key={name} optionText={name} handleRemoveOption={props.handleRemoveOption} count={index+1} />
                    })
                }
            
           </div> 
        
    );
}

export default Options;