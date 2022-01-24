const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    console.log(`obj: ${this.first_name}`);
    setTimeout(function () {
      console.log(this);
    });
  },
};

class MyObj {
  constructor() {
    this.first_name = "Mafia";
    this.last_name = "Code";
  }

  printFullName() {
    console.log(`obj2: ${this.first_name}`);
  }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();
