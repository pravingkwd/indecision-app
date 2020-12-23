/*import isSenior,{ isAdult, isDrink }  from './person.js';
 
console.log('app is running!');

console.log(isAdult(22));

console.log(isDrink(25));

console.log(isSenior(56));
*/

/*import validator from 'validator';

console.log(validator.isEmail('foo@bar.com'));

*/

import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
 


class OldSyntac {
    constructor() {
        this.name = 'Pravin';
    }

    getGreeting() {
        return `Hi my name ${this.name}`;
    }
}

const oldsyntax = new OldSyntac();
const getGreeting = oldsyntax.getGreeting;
//console.log(getGreeting());

class NewSyntax {
    name = 'P1';

getGreeting = () => {
        return `Hi my name ${this.name}`;
    }
}
const newsyntax = new NewSyntax();

const newgetGreeting = newsyntax.getGreeting;


console.log(newgetGreeting());

const Layout = (props) => {
    return <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
            </div>
}


//ReactDOM.render(<Layout><p>This is main page</p></Layout>,document.getElementById('app'));
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));