const greaterthan10 = (number) => {
  new Promise((resolve, reject) => {
    if (number >= 10) {
      resolve("the number greater than 10");
    } else {
      reject("the number less than 10");
    }
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
greaterthan10(10);
greaterthan10(7);
