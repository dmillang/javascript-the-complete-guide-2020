
const productList = {
  products: [
    {
      title: 'Soft pillow',
      imageUrl:
        'https://i.etsystatic.com/19864675/r/il/533dfb/1940699137/il_570xN.1940699137_bnsg.jpg',
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
    for (const product of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${product.imageUrl}" alt="${product.title}">
          <div class="product-item__content">
            <h2>${product.title}</h2>
            <h3>\$ ${product.price}</h3>
            <p>${product.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();