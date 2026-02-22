export const getCollection = async() => {
    try{
        //const response = await fetch('https://api.artic.edu/api/v1/artworks/search?q=landscape&query[term][is_public_domain]=true&limit=100&fields=id,title,image_id,artwork_type_title')
        const response = await fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,image_id&is_public_domain=true');
        if (!response.ok) {
            throw new Error('Failed to get collection!');
        }

        const result = await response.json();

        return { data: result.data, error: null };

    } catch (error) {
        console.warn(error);
        return { data: null, error: error };
    }
};

export const getSingleArt = async (id) => {
    try{
        //const response = await fetch('https://api.artic.edu/api/v1/artworks/129884')
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,artist_display,fiscal_year,artwork_type_title,credit_line,description,place_of_origin`)

        
        if(!response.ok) {
            throw new Error("Failed to fetch art!")
        }
        const result = await response.json()
        return { data: result.data, error: null}
    }
    catch(error) {
        console.warn(error.message)
        return { data: null, error };
    }
};

export const searchPaintings = async (query) => {
    try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&fields=id,title,image_id,artist_display&is_public_domain=true`);

        if(!response.ok) {
            throw new Error('Failed to search painting!');
        }

        const result = await response.json();

        return { data: result.data, error: null };

    } catch (error) {
        console.warn(error.message);
        return { data: null, error: error };
    }
};