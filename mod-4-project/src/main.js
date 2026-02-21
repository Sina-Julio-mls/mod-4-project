const collectionList = document.querySelector('#collection-list');
const errorMessage = document.querySelector('#error-message');
const searchForm = document.querySelector('#search-item');
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

getSingleArt(12345).then((result) =>{
  if (!result.data){
    console.log("Failed to load art work")
    return;
  }
   //renderSingleArt(result.data)
  console.log(result)
});

getCollection()
    .then(result => {
        if(result.error) {
            errorMessage.textContent = result.error.message;
            return;
        }
        errorMessage.textContent = '';
        renderCollection(result.data);  
    })

collectionList.addEventListener('click', (event) => {
    const clickedPainting = event.target.closest('li');

    if (!clickedPainting) return;

    const paintingId = clickedPainting.dataset.id;

    getSingleArt(paintingId).then(result => {
        if(result.error) {
            document.querySelector('#error-message').textContent = result.error.message;
            return;
        }

        document.querySelector('#error-message').textContent = '';

        renderSingleArt(result.data);
    });
});

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(searchForm);
    const query = formData.get('query');

    const result = await searchPaintings(query);

    if (result.error) {
        errorMessage.textContent = result.error.message;
        return;
    }
    
    errorMessage.textContent = '';
    
    renderCollection(result.data);
    
    searchForm.reset();
});


//Event lister for one time // Click on collection item
collectionList.addEventListener("click", async (event) => {
  const clickedItem = event.target.closest("li");
  if (!clickedItem) return;

  const id = clickedItem.dataset.id;

  const result = await getSingleArt(id);

  if (result.error) {
    console.error(result.error.message);
    return;
  }

  renderSingleArt(result.data);
});