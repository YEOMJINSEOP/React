class Youtube {
  constructor(key){
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }
}