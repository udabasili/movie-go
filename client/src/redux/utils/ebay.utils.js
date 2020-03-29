import { fetchEbaySuccess} from '../actions/moviego.actions';
const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API

function fetchProducts(name) {
    const itemName = name;
    const ebayApi = fetch("/api/ebay",
                      {
                        method: "POST",
                        cache: "no-cache",
                        headers:{
                          "Content-Type": "application/json"
                            },
                        body:JSON.stringify({itemName:itemName})
                      }
                    );
   const youtubeApi = fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}%20movie%20trailer&key=${youtubeApiKey}`);
  return (dispatch) => {
    Promise.all([ebayApi, youtubeApi])
      .then( values =>  Promise.all(values.map(value =>{
        return value.json()
          })
        ))
      .then(res => {
        const youtube = `https://www.youtube.com/embed/${res[1].items[0].id.videoId}?autoplay=1&showinfo=0&rel=0`;
        dispatch(fetchEbaySuccess(res[0],youtube));
        return (res[0], res[1].items[0].id.videoId)
      })
      .catch((error) => {
      });
  };
}

export default fetchProducts;
