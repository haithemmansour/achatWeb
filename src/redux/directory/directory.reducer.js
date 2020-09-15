const INITIAL_STATE = {
  sections: [
    {
      title: 'Montres',
      imageUrl: "https://i.ibb.co/54YR2HN/montre.jpg"  ,
      id: 1,
      linkUrl: 'shop/montres'

    },
    {
      title: 'Costume',
      imageUrl: "https://i.ibb.co/9c23WLz/costume.jpg"   ,
      id: 2,
      linkUrl: 'shop/costume'

    },
    {
      title: 'Vestes',
      imageUrl: "https://i.ibb.co/546rJjw/veste.jpg",
      id: 3,
      linkUrl: 'shop/vestes'
    },
    {
      title: 'Chaussures',
      imageUrl: 'https://i.ibb.co/fNKffv3/shoes.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/chaussures'
    },
    {
      title: 'Femmes',
      imageUrl: 'https://i.ibb.co/frfMhk0/women.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/femmes'
    },
    {
      title: 'Hommes',
      imageUrl: 'https://i.ibb.co/qYXyzL3/mens.jpg',
      size: 'large',
      id: 6,
      linkUrl: 'shop/hommes'
    },
    {
      title: 'Chapeaux',
      imageUrl: 'https://i.ibb.co/1n1WnJT/caps.jpg',
      size: 'large',
      id: 7,
      linkUrl: 'shop/chapeaux'
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
