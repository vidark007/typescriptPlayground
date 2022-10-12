import React from 'react';
//Tuple
let person : [number, string, boolean] = [1,'zez',true];

let employee :  [number,string][]

employee = [
    [1,'Brad'], [2,'Gustav']]

enum Direction1{
    Up= 'Up',
    Down ='Down',
    Left='Left',
    Right='Right'
}

console.log(Direction1.Up)
///Objects
type User= {
    id: number,
    name:string
}

let user01:User={
    id:1,
    name: 'stefan'
}

//Type assertion
let cid: any =1;
let customerId = <number>cid;
