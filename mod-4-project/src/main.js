import { getSingleArt, getCollection } from "./fetch-helpers.js";
import { renderSingleArt, renderCollection } from "./dom-helpers.js";
const collectionList = document.querySelector('collection-list');
const errorMessage = document.querySelector('#error-message');
const searchForm = document.querySelector('#search-item');

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
    event.preventDefault;

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
})