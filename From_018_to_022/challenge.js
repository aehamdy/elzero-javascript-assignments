/* Challenge 1 */

let a = 10, b = "20", c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    [++a] [+] [+b++] [+] [+c++] [-] [+a++]

    [++a] => Value: 11 | Explain: pre-increment
    [+] => addition operator
    [+b++] => Value: 20 | Explain: unary plus to convert it to number, then post increment
    [+c++] => Value: 80 | Explain: unary plus does nothing because it is already a number,
                                    then post-increment
    [-] => minus operator
    [+a++] => Value: 11 | Explain: unary plus does nothing because it is already a number,
                                    then post-increment
*/

/*
    [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]

    [++a] => Value: 11 | Explain: pre-increment
    [+] => addition operator
    [-b] => Value: 20 | Explain: unary negation
    [+] => addition operator
    [+c++] => Value: 81 | Explain: unary plus does nothing because it is already a number,
                                    then post-increment
    [-] => minus operator
    [-a++] => Value: 11 | Explain: unary plus does nothing because it is already a number,
                                    then post-increment
    [+] => addition operator
    [+a] => Value: 12 | Explain: unary plus does nothing because it is already a number,
*/

/*
    let a = 10, b = "20", c = 80;

    [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]

    [--c] => Value: 79 | Explain: pre-decrement the Value
    [+] => addition operator
    [+b] => Value: 20 | Explain: unary plus converts the string into a number
    [+] => addition operator
    [--a] => Value: 9 | Explain: pre-decrement the Value
    [*] => multiply operator
    [+b++] => Value: 20 | Explain: unary plus converts the string into a number then post-increment
    [-] => minus operator
    [+b] => Value: 21 | Explain: unary plus converts the string into a number
    [*] => multiply operator
    [a] => Value: 9
    [+] => addition operator
    [--a] => Value: 8 | Explain: pre-decrement
    [-] => minus operator
    [+true] => Value: 1 | Explain: unary plus converted the true value into a number
*/

/* Challenge 2 */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * e); //2000
console.log(-d + ++e * ++g + ++f); // 173