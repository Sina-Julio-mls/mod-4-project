export const renderCollection = (collection) => {
    const collectionList = document.querySelector('#collection-list');

    collectionList.replaceChildren();

    collection.forEach((painting) => {
        const li = document.createElement('li');
        const titleH3 = document.createElement('h3');
        const artistP = document.createElement('p');

        li.dataset.id = painting.id;

        if(painting.image_id){
            const img = document.createElement('img');
            img.src = `https://www.artic.edu/iiif/2/${painting.image_id}/full/843,/0/default.jpg`;
            img.alt = `${painting.title} by ${painting.artist_display}`;

            img.onerror = () => {
            img.remove();
            };
            
            li.append(img);
        }

        titleH3.textContent = painting.title;
        artistP.textContent = painting.artist_display;

        li.append(titleH3, artistP);
        collectionList.append(li);
    })
}




const singleArt = document.getElementById('single-art-container')
const section = document.querySelector('#single-art-container')

export const renderSingleArt = (art) =>{
    section.innerHTML = ''
    
    const img = document.createElement('img')
    const h2 = document.createElement('h2') 
   
    h2.textContent = art.title
    img.src = img.src = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`
    img.alt = art.title
    

    section.append(img,h2)
};