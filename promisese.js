const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise.then(result => {
  console.log(result); // Success!
});

//Promise with reject
const failPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong.");
  }, 1000);
});

failPromise
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Something went wrong.

  //chaining promises
  function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => resolve(x * 2), 2000);
  });
}

doubleAfter2Seconds(5)
  .then(result => {
    console.log(result); // 10
    return doubleAfter2Seconds(result);
  })
  .then(result => {
    console.log(result); // 20
  });


  //promise.all example

  const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.all([p1, p2]).then(values => {
  console.log(values); // [1, 2]
});

//async/await example
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

async function load() {
  const data = await fetchData();
  console.log(data); // Data loaded
}
load();