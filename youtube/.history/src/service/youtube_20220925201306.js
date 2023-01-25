class Youtube {
  constructor(key){
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular(){
    return fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4", 
    this.requestOptions
    )
      .then(response => response.json(),)
      .then(result => setVideos(result.items));
  }

  search(query){
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4`, 
    this.requestOptions
    )
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }
}
