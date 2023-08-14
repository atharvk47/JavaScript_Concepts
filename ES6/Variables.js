// This file describes the difference between keywords: let, var and const.

/* Javascript has three different ways of declaring a variable 
 1) Using keyword 'var'
 2) Using keyword 'let'
 3) Using keyword 'const'
*/

/* Keyword 'var' is used when a variable is limited to function scope. 
It is accessible outside a block within a function. For e.g:
*/

function print(){
    for( var i = 0; i < 5;i++){
        console.log(i);
    }
    console.log(i);
}

print()

/* Output:
0
1
2
3
4
5
6

Here, 6 also gets printed in the output as var is accessible from anywhere within a function.
*/

/* Keyword 'let' is used when a variable is limited to block scope. 
It is not accessible outside a block within a function. For e.g:
*/

function print(){
    for( let i = 0; i < 5;i++){
        console.log(i);
    }
    console.log(i);
}

print()
 
/* Output:
0
1
2
3
4
5
Error: i is not defined.

Here, an error occurs because i was limited to the for-loop block only.
*/

/* Keyword 'const' is used when a variable is limited to block scope and variable is not to be overwritten. 
It is not accessible outside a block within a function. For e.g:
*/

const number = 67;
console.log(number);
number = 68;
console.log(number);

/* Output:
67
Error: assignment to const variable

Here, number is trying to be overwritten when 'const' is used hence an error occurs.
*/
