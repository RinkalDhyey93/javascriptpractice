//immedeatelt invoked function expression(IIFE)
// to remove globle(variable value) scope poluatuion.
//named iife => function with name
//simple iife=> aerrow function
//two iife in one file than first iife end with semicolon
(function chai()
{
    console.log(`Db connected`)
})(); //must end with semicolon

( (name)=>{console.log(`db connected two ${name}`)})('rinkal')