// Define a method hello that returns "Hello, Name!" to a given name, or says
// Hello, World! if name is not given (or passed as an empty String).
//
// Assuming that name is a String and it checks for user typos to return a name
// with a first capital letter (Xxxx).
//
// Examples:
//
// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String

function capitalize() {
  return this[0].toUpperCase() + this.substr(1).toLowerCase();
}

function hello(name) {
  if (name === '' || name === undefined) {
    return 'Hello, World!';
  } else {
    var withName = capitalize.bind(name);
    return `Hello, ${withName()}!`
  }
}

console.log(hello('johN'));
console.log(hello('alice'));
console.log(hello());
console.log(hello(''));
