import { getSingleArt } from "./fetch-helpers.js"
import { renderSingleArt } from "./dom-helpers.js"


getSingleArt(12345).then((result) =>{
  if (!result.data){
    console.log("Failed to load art work")
    return;
  }
   renderSingleArt(result.data)
  console.log(result)
});