function makeAllCaps(arrayOfwords) {
  return new Promise((resolve, reject) => {
    if (arrayOfwords.every((element) => typeof element === "string")) {
      console.log("a");
      resolve(arrayOfwords.map((element) => element.toUpperCase()));
    } else {
      reject("the array dosnt contains string error ");
    }
  });
}
function sortWords(arrayOfwords) {
  return new Promise((resolve, reject) => {
    if (arrayOfwords.every((element) => typeof element === "string")) {
      resolve(arrayOfwords.sort());
    } else {
      reject("the array dosnt contains string ");
    }
  });
}
makeAllCaps(["amal", "lolo", "ziad"])
  .then((result) => sortWords(result))
  .then((finalResult) => console.log(`final result : ${finalResult}`))
  .catch((error) => console.log(error));
