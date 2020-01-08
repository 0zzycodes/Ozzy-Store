const INITIAL_STATE = {
  sections: [{
      title: 'hoodies',
      imageUrl: 'https://www.nairaland.com/attachments/2985044_image_jpeg9f360c5ab7736510df54c882e9dbf188',
      size: 'large',
      id: 5,
      linkUrl: 'shop/hoodies'
    },
    {
      title: 'tees',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Nxl4HIg_WBmOdHdK2-2ESTqseKaryDCxOHzlbrUEkIfbpiXdsA&s',
      size: 'large',
      id: 4,
      linkUrl: 'shop/tees'
    },
    {
      title: 'accessories',
      imageUrl: 'https://cdn.hiconsumption.com/wp-content/uploads/2018/04/Best-Mens-Accessories-For-The-Wrist.jpg',
      size: 'large',
      id: 6,
      linkUrl: 'shop/accessories'
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