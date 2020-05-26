// "this" here is "exports"

this.id = 'abc';

const f1 = function () {
 console.log('f1', this);
}

const f2 = () => {
  console.log('f2', this);
}

const testerObj = {
  func1 () {
    console.log('func1', this);
  },

  f : () => {
    console.log('func2', this);
  }
};

f1();
f2();
testerObj.func1();
testerObj.func2();
