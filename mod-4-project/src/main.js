import { getSingleArt, getCollection } from "./fetch-helpers.js"
import { renderCollection, renderSingleArt} from "./dom-helpers.js"


// getSingleArt(12345).then((result) =>{
//   if (!result.data){
//     console.log("Failed to load art work")
//     return;
//   }
//    renderSingleArt(result.data)
//   console.log(result)
// });

getSingleArt(12345)
  .then((result) => {
    console.log("Full result:", result.data);

    if (!result.data || !result.data) {
      console.log("Failed to load artwork");
      return;
    }

    renderSingleArt(result.data);
  })
  .catch((error) => {
    console.error("Fetch failed:", error);
  });

getCollection()
  .then((result) => {
    console.log("Full result:", result);

    if (!result.data) {
      console.log("Failed to load collection");
      return;
    }

    renderCollection(result.data);
  })
  .catch((error) => {
    console.error("Fetch failed:", error);
  });

// getSingleArt(27992)
//   .then((result) => {
//     console.log("Result:", result.data);
//   });

// getCollection(1234)
// .then((data) =>{
//     console.log(data)
// })
import { getSingleArt } from "./fetch-helpers.js"
import { renderSingleArt } from "./dom-helpers.js"


getSingleArt(12345).then((result) =>{
  if (!result.data){
    console.log("Failed to load art work")
    return;
  }
   //renderSingleArt(result.data)
  console.log(result)
});
