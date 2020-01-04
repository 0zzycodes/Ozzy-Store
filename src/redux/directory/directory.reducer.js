const INITIAL_STATE = {
  sections: [{
      title: 'mens',
      imageUrl: 'https://media2.fdncms.com/sacurrent/imager/u/original/4971502/blake.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    },
    {
      title: 'womens',
      imageUrl: 'https://ak4.picdn.net/shutterstock/videos/1024014014/thumb/7.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'unisex',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27RMTuY4MT9thjcS-0p81hRmkBDxplpvVrvymYXvQZS1LM0c5&s',
      size: 'large',
      id: 6,
      linkUrl: 'shop/unisex'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;