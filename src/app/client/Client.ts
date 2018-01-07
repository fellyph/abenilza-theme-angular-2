class Client {
  private like = 0;

  constructor(public id: Number = 0,
              public name: string = '',
              public gender: string = '',
              public category: string = '') {}

  addLike() {
    this.like ++;
  }

  getLike() {
    return this.like;
  }
}

export default Client;

