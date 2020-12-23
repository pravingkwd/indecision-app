

class Person {

    constructor(name='ananomus',age=0)
    {
        this.name=name;
        this.age=age;

    } 

    showName() {
        return `Name is ${this.name}`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

}

class Traveller extends Person {
    constructor(name,age,location)
    {
        super(name,age);
        this.location = location ;

    }

    getDescription() 
    {
        let description = super.getDescription();

        if(this.location)
            return description += ` I am vissting from ${this.location}`;
        else return description;    
        

    }

}

const p1 = new Traveller('Pravin',33,'pune');

const p2 = new Traveller();

console.log(p1.getDescription());
console.log(p2.getDescription());