 varName = 'Pravin';

var varName = "Gaikwad11";

console.log(varName);


let letName = 'Pravin';

letName = "Gaikwad";


console.log('letName',letName);
const constName ='Pravin Const';

console.log('constName',constName);


var Name = 'Pravin121 Gaikwad121';

let firstName;

if(Name)
{
    const firstName = Name.split(' ')[0];
    console.log('inscope',firstName);
}


console.log('outside scope',firstName);