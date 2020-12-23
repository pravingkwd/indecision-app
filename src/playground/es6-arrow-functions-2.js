

const multiplier = {
    numbers : [10,20,30],
    multiplyBy : 3 ,
    multifly() {

        return this.numbers.map((number)=>{

            return number * this.multiplyBy ;

        })

    }
}

console.log(multiplier.multifly());


function add(a,b)  {
    console.log(arguments);
    return a+b;


}

console.log(add(1,6));

const add1 = (a,b) => {

    //console.log(arguments);
    return a+b;
}

console.log(add1(11,67));


const user = {

    name: 'Pravin',
    city :[1,2,3,4],
    print: () =>{
        
        this.city.forEach((c) =>{

          console.log(this.name + c);

        })


    }
}

console.log(user.print());