import React from "react";

function log(message : string| number):void {

}

interface UserInterface{
    readonly id:number;
    name?:string;  //<= means it's optional
}

let user1:UserInterface={
    id:1,
    name:""
}

interface Mathfunc{
    (x:number, y:number) :number
}

const add : Mathfunc = (a:number, b:number): number =>{
    return a+b;
}

