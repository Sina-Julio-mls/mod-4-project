// const singleArtContainer = document.querySelector('#single-art-container')
// const collectionList = document.querySelector('#collection-list');

//Render collection list
export const renderCollection = (collection) => {
    const collectionList = document.getElementById('collection-list');
    collectionList.innerHTML = ''; // clear previous collection


    collection.forEach((painting) => {
        const li = document.createElement('li');
        li.dataset.id = painting.id;

        if(painting.image_id){
            const img = document.createElement('img');
            img.src = `https://www.artic.edu/iiif/2/${painting.image_id}/full/843,/0/default.jpg`;
            img.alt = `${painting.title} by ${painting.artist_display}`;

            img.onerror = () => 
            img.remove();
            li.append(img);
            }
        
        const titleH3 = document.createElement('h3');
        const artistP = document.createElement('p');

        titleH3.textContent = painting.title;
        artistP.textContent = painting.artist_display;

        li.append(titleH3, artistP);
        collectionList.append(li);
    });
};

//Render single artwork
export const renderSingleArt = (art) =>{
    const section = document.getElementById('single-art-container');
    section.innerHTML = "";

    //close button
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-single';
    closeBtn.textContent = 'Close';
    
    const img = document.createElement('img')
    const h2 = document.createElement('h2') 
    const artwork = document.createElement('p')
    const year = document.createElement('p')
    const credit = document.createElement('p')
    const description = document.createElement('p')
    const history = document.createElement('p')
    const place = document.createElement('p')

   

    
    img.src = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`
    img.alt = art.title
    h2.textContent = `Title: ${art.title}`
    artwork.textContent = `Artwork Type: ${art.artwork_type_title}`
    year.textContent = `Year: ${art.fiscal_year}`
    credit.textContent = `Credit: ${art.credit_line}`
    description.textContent = `Description: ${art.description}`
    place.textContent = `Place of orgign: ${art.place_of_origin}`
    
   

    section.append(closeBtn,img,h2,artwork,year,credit,place,description)
};
