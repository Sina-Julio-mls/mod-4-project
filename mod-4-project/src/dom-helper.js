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