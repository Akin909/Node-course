let square = a => a*a;

console.log(square(9));

var user = {
  name: 'Akin',
  sayHi: ( ) => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`)
  },
  sayHiAlt(){
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};
 user.sayHi(1,2,4);
 user.sayHiAlt(1,2,3);
