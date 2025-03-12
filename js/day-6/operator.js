// types oF operators
// 1.arithmetic (+,-,*,/,%,**)            //number
// 2.assignment (+=,-=,*=,/=)             //number
// 3.comparision (==,!=,!==,===)            //boolean
// 4.relational (<,>,<=,>=)            //boolean
// 5.logical  (&&, ||, !)            //boolean
// 6.ternary   (condition)?true part:false part   //based on condition
// 7.unary     (a++,++a,a--,--a)          //number

// arithmetic Operator
// alert(10+2) //12
// alert(10-2) //8
// alert(10*2) //20
// alert(10/2) //5
// alert(10%2) //0
// alert(10**3) //100

//assignment operator
//a=a+10  a+=10
//a=a-10  a-=10
//a=a*10  a*=10
//a=a/10  a/=10
// var a=10;
// alert(a+=10)  //20
// alert(a+10)   //30
// alert(a-10)   //10
// alert(a-=5)   //15
// alert(a+=5)   //20
// alert(a)      //20

//comparision
// var a=10;
// alert(a=="10")   //compare only values
// alert(a==="10")  //compare values with datatype
// alert(a!="10")   //false
// alert(a!=="10")  //true

// Relational Operator
// alert(7<7)
// alert(7>7)
// alert(7<=7)
// alert(7>=7)


// Logical Operator
// alert(!(6==6))
// alert(6==6 && 7==7)
// alert(6==6 || 7==7)

// ternary operator
// var a='Admin1';
// (a=='Admin')?location.href='new.html':window.open('error.html');
(5==15)?alert('a is equal to 5'):alert('a is not equal to 5');

(15==15)?alert('a is equal to 5'):alert('a is not equal to 5');


//unary operator
// var a=10;
// // a++   a=a+1
// // ++a   a=a+1

// alert(a++ + a++)   //21
// alert(++a + a++)   //26
// alert(a)           //14
