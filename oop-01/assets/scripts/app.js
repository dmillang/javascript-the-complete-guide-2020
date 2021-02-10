
const productList = {
  products: [
    {
      title: 'Soft pillow',
      imageUrl:
        'https://hniesfp.imgix.net/8/images/detailed/145/taupe_mellow_cushion.jpg',
      price: 19.99,
      description: 'A soft taupe mellow pillow.',
    },
    {
      title: 'Zebra carpet',
      imageUrl:
        'https://www.amara.com/static/uploads/images-2/products/x/huge/1060719/zebra-carpet-856212.jpg',
      price: 89.99,
      description: 'Zebra printed floor carpet',
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.classList.add('product-list');
    renderHook.append(prodList);
  }
};