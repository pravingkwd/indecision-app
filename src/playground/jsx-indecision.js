console.log('app.js is running');

// JSX - Javascrip XML


const app ={
    title : 'Indecision App',
    subtitle:'Put your lief in hand of computers ',
    options:[]

}


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value ;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value='';
        renderApp();
    }

}

const removeAll = () => {

    app.options=[];
    renderApp();
}


const user = {

    name:'Pravin',
    age:33,
    location:'pune'

}

function getLocation(location) {

    if  (location)
    return <p>{location}</p>
    else return 'unknown';

}


const templateTwwo = (
    <div>
    <h1>{user.name ? user.name : 'Ananomus'}</h1>
    {(user.age && user.age>=18) && <p> Age : {user.age}</p>}
    <p>Location : {user.location}</p>


    </div>
);


const appRoot = document.getElementById('app');

//var appRootTwo = document.getElementById('app');

//ReactDOM.render(templateTwwo,appRootTwo);

const onMakeDecision = () => {

    const randomNum = Math.floor(Math.random() * app.options.length);

    const option = app.options[randomNum];

    alert(randomNum);

}

const renderApp = () => {

    const template = (
        <div>
       <h1>{app.title}</h1>
       {app.subtitle && <p>{app.subtitle}</p>}
       <p>{app.options.length >0 ? 'Here are your options' : 'No Options' } </p>
       <button disabled={app.options.length=== 0 } onClick={onMakeDecision}>What should i do ?</button>
       <ol>
       { app.options.map((option)=>{
           return <li id={option}>{option}</li>
       }) }
       </ol>
       <form onSubmit={onFormSubmit}>
       <input type='text' name='option' />
       <button>Add</button>
       <button onClick={removeAll}>Remove All</button>
       </form>
        </div>
       );
       ReactDOM.render(template,appRoot);
}

renderApp();