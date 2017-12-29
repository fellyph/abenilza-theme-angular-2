export class ClientItemService {
  clientItems = [{
      id: 1,
      name: 'Cliente 1',
      gender: 'feminino',
      category: 'curto',
      year: 2017,
      likes: 10
    },
    {
      id: 2,
      name: 'Cliente 2',
      gender: 'feminino',
      category: 'curto',
      year: 2017,
      likes: 10
    },
    {
      id: 3,
      name: 'Cliente 3',
      gender: 'feminino',
      category: 'curto',
      year: 2017,
      likes: 10
    },
    {
      id: 4,
      name: 'Cliente 4',
      gender: 'feminino',
      category: 'curto',
      year: 2017,
      likes: 10
    }
  ];

  get () {
    return this.clientItems;
  }

  add (clientItem) {
    this.clientItems.push(clientItem)
  }

  like (clientItem) {

  }
  
}
