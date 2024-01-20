function myFunc(callback) {
  callback();
}

function main() {
  myFunc(function() {
    console.log('Hi there!');
  });
}

main();
