function myAsyncFunc() {
  const p=new Promise((resolve, reject) => {
    // setTimeout(() => { resolve('Hi there!'); }, 5000);
    resolve('Hi there!');
  });
  return p;
}

async function main() {

  // myAsyncFunc() has an promise in return, promise is an asynchronous function 
  // an asynchronous function will execute the below code after promise, until promise complete  
  // but the await will wait until promise is completed 
  // then after priomise execute it will execute the below code.
  // if we use an await before promise then we have to make an function to be an async

  const value=await myAsyncFunc();
  console.log(value);
}

main();