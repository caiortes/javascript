// Scope Rules

function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo";
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
    console.log(baz);
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}

run();

// Var - é acessivel em qualquer escopo, global scope
// Let - só pode ser utilizada dentro do escopo onde foi declarada, block scope
