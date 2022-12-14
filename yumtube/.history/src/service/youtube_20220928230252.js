class Youtube{
  constructor(key){
    this.key = key;
    this.getRequestOptions ={
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular(){
    return fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4", 
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => result.items)
      // .catch(error => console.log('error', error));
  }

  search(){
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4`,
    this.getRequestOptions)
      .then(response => response.json())
      .then(result => 
        result.items.map(item => ({...item, id: item.id.videoId})))
      // .catch(error => console.log('error', error));
  }
}