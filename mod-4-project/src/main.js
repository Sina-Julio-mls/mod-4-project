// import { renderCollection } from "./dom-helpers.js";
// import { getCollection, getSingleArt } from "./fetch-helpers.js";

// getCollection().then((result) =>{
//     console.log(result.data)
// })
// let id = 27992
// getSingleArt(id).then((result)=>{
//     console.log(result.data)
// })

import { getCollection, getSingleArt, searchPaintings } from "./fetch-helpers.js";
import { renderCollection, renderSingleArt } from "./dom-helpers.js";

const errorMessage = document.querySelector('#error-message');
const collectionList = document.querySelector('#collection-list');
const searchForm = document.querySelector('#search-item');
const singleArtContainer = document.getElementById('single-art-container');
const collectionSection = document.getElementById('collection');
const randomBtn = document.getElementById('random');

let collectionCache = []; // Store collection for random button and search

// --- Initial Load ---
const init = async () => {
    const result = await getCollection();
    if(result.error) {
        errorMessage.textContent = result.error.message;
        return;
    }
    collectionCache = result.data; // store collection
    renderCollection(result.data);
};
init();

// --- Clicking on a collection item ---
collectionList.addEventListener('click', async (event) => {
    const clickedPainting = event.target.closest('li');
    if (!clickedPainting) return;

    const paintingId = clickedPainting.dataset.id;
    const result = await getSingleArt(paintingId);
    if(result.error) {
        errorMessage.textContent = result.error.message;
        return;
    }

    collectionSection.style.display = 'none';
    singleArtContainer.style.display = 'block';
    renderSingleArt(result.data);

    document.getElementById('close-single').addEventListener('click', () => {
        singleArtContainer.style.display = 'none';
        collectionSection.style.display = 'block';
    });
});

// --- Search functionality ---
searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchForm.query.value;

    const result = await searchPaintings(query);
    if(result.error) {
        errorMessage.textContent = result.error.message;
        return;
    }
    collectionCache = result.data; // update cache
    errorMessage.textContent = '';
    renderCollection(result.data);
    searchForm.reset();
});

// --- Random artwork button ---
randomBtn.addEventListener('click', async () => {
    if (!collectionCache.length) {
        errorMessage.textContent = 'Collection not loaded yet';
        return;
    }

    const randomIndex = Math.floor(Math.random() * collectionCache.length);
    const randomArt = collectionCache[randomIndex];

    const result = await getSingleArt(randomArt.id);
    if (result.error || !result.data) {
        errorMessage.textContent = result.error?.message || 'Failed to load random artwork';
        return;
    }

    errorMessage.textContent = '';
    collectionSection.style.display = 'none';
    singleArtContainer.style.display = 'block';
    renderSingleArt(result.data);

    document.getElementById('close-single').addEventListener('click', () => {
        singleArtContainer.style.display = 'none';
        collectionSection.style.display = 'block';
    });
});
