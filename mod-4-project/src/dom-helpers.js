export const renderCollection = (collection) => {
    const collectionList = document.querySelector('#collection-list');

    collectionList.replaceChildren();

    collection.forEach((painting) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const titleH3 = document.createElement('h3');
        const artistP = document.createElement('p');

        li.dataset.id = painting.id;

        img.src = painting.thumbnail?.lqip || '';
        img.alt = painting.thumbnail?.alt_text || painting.title;

        titleH3.textContent = painting.title;
        artistP.textContent = painting.artist_display;

        li.append(img, titleH3, artistP);
        collectionList.append(li);
    })
}