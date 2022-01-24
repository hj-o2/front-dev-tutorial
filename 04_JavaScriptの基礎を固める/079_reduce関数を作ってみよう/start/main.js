const str = "animation";
const strArray = str.split("");

const tag = (accu, curr) => {
    // console.log(accu, curr);
  return `${accu}<${curr}>`;
};

const reduce = (array, callback, defaultValue) => {
  let accu = defaultValue;

  for (let i in array) {
    let curr = array[i];
    accu = callback(accu, curr);
  }

  return accu;
};

const result = reduce(strArray, tag,"");
console.log(result);
