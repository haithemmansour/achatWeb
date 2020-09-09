const INITIAL_STATE = {
  sections: [
    {
      title: 'Montres',
      imageUrl: "https://i.ibb.co/54YR2HN/montre.jpg"  ,
      id: 1,
      linkUrl: 'shop/montres'

    },
    {
      title: 'costume',
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
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/chaussures'
    },
    {
      title: 'Femmes',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/femmes'
    },
    {
      title: 'Hommes',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 6,
      linkUrl: 'shop/hommes'
    },
    {
      title: 'Chapeaux',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
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
