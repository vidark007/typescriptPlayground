import React from "react";

function getArray<T>(items: T[]) :T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4,5,6,7,8,9])
let strArray = getArray<string>(["one","two","three",".."])

//Not possible because defined <t> as number
numArray.push(1);
