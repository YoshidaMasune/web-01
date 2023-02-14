const productsTemplate = document.getElementById('products-template');

window.addEventListener('DOMContentLoaded', function(){
  const products = getProducts()
  genProducts(products);
});

// genProduct
function genProducts(products) {
   products.map((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
    <div class="product-item">
      <div class="product-img">
        <img src=${product.img} alt="">
      </div>
      <article class="product-info">
        <p>${product.title}</p>
        <p>${product.price}</p>
      </article>
      <div class="hover-icons">
        <ul>
          <li><img src="public/icons/cart.svg" alt=""></li>
          <li><img src="public/icons/eye.svg" alt=""></li>
          <li><img src="public/icons/hart.svg" alt=""></li>
        </ul>
      </div>
      <button class="add-to-cart">
        ADD TO CART
      </button>
    </div>
    `
     productsTemplate.appendChild(productDiv)
  })
}

// demo data

function getProducts() {
  return [
    {
      title: 'Lira Earrings',
      img: '/public/img/products/01.png',
      price: '20,00'
    },
    {
      title: 'Hal Earrings',
      img: '/public/img/products/02.png',
      price: '25,00'
    },
    {
      title: 'Kaede Hair Pin Set Of 3',
      img: '/public/img/products/03.png',
      price: '30,00'
    },
    {
      title: 'Hair Pin Set of 3',
      img: '/public/img/products/04.png',
      price: '30,00'
    },
    {
      title: 'Plaine Necklace',
      img: '/public/img/products/05.png',
      price: '19,00'
    },
    {
      title: 'Yuki Hair Pin Set of 3',
      img: '/public/img/products/06.png',
      price: '29,00'
    },
  ];
}

const products = [
  {
    title: 'Lira Earrings',
    img: '/public/img/products/',
    price: '20,00'
  },
  {
    title: 'Hal Earrings',
    img: '/public/img/products/',
    price: '25,00'
  },
  {
    title: 'Kaede Hair Pin Set Of 3',
    img: '/public/img/products/',
    price: '30,00'
  },
  {
    title: 'Hair Pin Set of 3',
    img: '/public/img/products/',
    price: '30,00'
  },
  {
    title: 'Plaine Necklace',
    img: '/public/img/products/',
    price: '19,00'
  },
  {
    title: 'Yuki Hair Pin Set of 3',
    img: '/public/img/products/',
    price: '29,00'
  },
];