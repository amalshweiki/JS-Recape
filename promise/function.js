// const getIDs = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([532, 543, 753, 1, 5]);
//     }, 1500);
//   });

// const getRecipe = (recipeID) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (ID) => {
//         const recipe = {
//           title: "Fresh tomato pasta",
//           publisher: "Pinchas Hodadad",
//         };
//         resolve(`${ID}: ${recipe.title}`);
//       },
//       1500,
//       recipeID
//     );
//   });
// };
// getIDs()
//   .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   .catch((error) => {
//     console.log("It is an error!");
//   });
async function getIDs() {
  try {
    const IDS = [532, 543, 753, 1, 5];
    console.log(IDS);
    await getRecipe(IDS[2]);
  } catch (error) {
    console.log("It is an error!");
  }
}
async function getRecipe(recipeID) {
  const recipe = {
    title: "Fresh tomato pasta",
    publisher: "Pinchas Hodadad",
  };
  try {
    console.log(`${recipeID}: ${recipe.title}`);
  } catch (error) {
    console.log("It is an errorrrrrrrrr!");
  }
}
getIDs();
