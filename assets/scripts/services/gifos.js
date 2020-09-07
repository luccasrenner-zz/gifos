const CONSTANTS = {
    APIKEY: "mWgDc90Lnu1WpJJ9CXvOUE33gpSFaebM",
    BASE_PATH: 'https://api.giphy.com/v1/gifs',
    TRENDING: '/trending',
    SEARCH: '/search'
}

const get = (url, callback, isASearch = false) => {

    const query = (isASearch) ? "&q="+isASearch.query : '';
    
    fetch( url + '?api_key=' + CONSTANTS.APIKEY + query )
    .then( dataType => dataType.json() )
    .then( apiResponse => callback(apiResponse) );
}

const getTrendings = () => {
    get( CONSTANTS.BASE_PATH + CONSTANTS.TRENDING, ( apiReturn ) => {
        
        const { data } = apiReturn;

        data.forEach( (gifItem) => {
            const {
                title,
                images,
            } = gifItem;
            const imagesOriginal = images.original.url

            
        });
    });
}

const searchGif = ( query ) => {
    get(CONSTANTS.BASE_PATH + CONSTANTS.SEARCH, 
    (apiReturn) => {
        console.log(apiReturn);
    }, 
    {query})
}

const modules_export = {
    getTrendings,
    searchGif
}

export default modules_export;

/*
const CONSTANTS = {
    APIKEY: "mWgDc90Lnu1WpJJ9CXvOUE33gpSFaebM",
    BASE_PATH: 'https://api.giphy.com/v1/gifs',
    TRENDING: '/trending'
}

class GiphyService {

    static get(url, callback) {
        fetch(url + '?api_key=' + CONSTANTS.APIKEY )
        .then( dataType => dataType.json() )
        .then( data => callback(data) );
    }
    
    static trendingHandler = (data) => {
        console.log(data);
    }

    static trending() {
        this.get(CONSTANTS.BASE_PATH + CONSTANTS.TRENDING, this.trendingHandler);
    }
 
}

export default GiphyService;
*/
