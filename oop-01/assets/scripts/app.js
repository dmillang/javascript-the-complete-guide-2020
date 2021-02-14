class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // price;
  // description;

  constructor(title, image, price, descriptions) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = descriptions;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$ ${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'Soft pillow',
      'https://i.etsystatic.com/19864675/r/il/533dfb/1940699137/il_570xN.1940699137_bnsg.jpg',
      19.99,
      'A soft taupe mellow pillow'
    ),
    new Product(
      'Zebra carpet',
      'https://www.amara.com/static/uploads/images-2/products/x/huge/1060719/zebra-carpet-856212.jpg',
      69.99,
      'Zebra printed floor carpet'
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.classList.add('product-list');
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;
  
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();