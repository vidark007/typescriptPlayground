import React from "react";
class Person implements PersonInterface{
    id: number;
    name:string

    constructor(id:number, name:string) {
        this.id = id;
        this.name=name;
    }

    register(){
        return `${this.name} is now registered !`
    }
}

const person01 = new Person(1,'Brad')
const person02 = new Person(2,'Thomas')

interface PersonInterface{
    readonly id :number;
    name : string;
    register() : string; //method returns a string
}

class Employee extends Person{
    position:string;

    constructor(id:number,name:string,position:string) {
        super(id,name);
        this.position =position
    }
}

const employee01 = new Employee(1,"brug","manager")