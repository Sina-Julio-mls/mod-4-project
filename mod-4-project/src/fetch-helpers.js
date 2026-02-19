export const getCollection = async() => {
    try{
        const response = await fetch('https://api.artic.edu/api/v1/artworks')
        //const response = await fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,thumbnail');
        if (!response.ok) {
            throw new Error('Failed to get collection');
        }

        const data = await response.json();

        return { data: data.data, error: null };

    } catch (error) {
        console.warn(error);
        return { data: null, error: error };
    }
}




export const getSingleArt = async (id) =>{
    try{
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
        
        if(!response.ok){
            throw new Error("Failed to fetch art!")
        }
        const result = await response.json()
        return { data: result.data, error: null}
    }
    catch(error){
        console.warn(error.message)
        return { data: null, error };
    }
};
