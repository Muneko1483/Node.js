'use stric'

let myData = require('./my-data.js'),
    //Clock = require('./clock-em5.js')
    Clock = require('./clock-em6.js'), 
    cucu = new Clock() 

console.log( 
    myData.name,
    myData.email, 
) 
 cucu = new Clock()

cucu.on('tictac', function(){ 
    cucu.theTime() 
}) 