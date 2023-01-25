import axios from 'axios';

class Youtube {
  constructor(key){
    this.youtube = axios.create({
      baseURL:'https://youtube.googleapis.com/youtube/v3',

    });
  }

  async mostPopular(){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getrequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query){
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getrequestOptions
    );
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;