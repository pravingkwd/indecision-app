import React from 'react';





const Actions = (props) =>  (
        <div>
        <button className="big-button" onClick={props.handlePick} disabled={!props.hasOptions} >What shoud i do?</button>
        </div>
    );



export default Actions;