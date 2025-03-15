// Notification bar

// TODO: add close function

// function closeButton() {

// }

// --------------------------------------------

// CATEGORIES

// data
const categories = [
  {
    name: "Living Room",
    imagePath: "/src/assets/img/image-living-room.png",
    height: "377px",
    link: "#",
  },
  {
    name: "Bedroom",
    imagePath: "/src/assets/img/image-bedroom.png",
    height: "180px",
    link: "#",
  },
  {
    name: "Kitchen",
    imagePath: "/src/assets/img/image-kitchen.png",
    height: "181px",
    link: "#",
  },
];

// container
const categoriesContainer = document.getElementById("categories-container");

// data iteration
categories.forEach((category) => {
  // category container
  const div = document.createElement("div");
  div.classList.add("category");
  div.style.background = `url("${category.imagePath}")`;
  div.style.height = category.height;

  // category header
  const header = document.createElement("h3");
  header.classList.add("category-header");
  header.textContent = category.name;
  div.appendChild(header);

  // category button
  const link = document.createElement("a");
  link.textContent = "Shop Now";
  link.classList.add("category-button");
  link.href = category.link;

  // TODO: add arrow

  // appned button to category container
  div.appendChild(link);

  // appending element into main container
  categoriesContainer.appendChild(div);
});

// --------------------------------------------

// PRODUCTS

// data
const products = [
  {
    name: "Loveseat Sofa",
    price: 400,
    discount: 50,
    rating: 5,
    imagePath: "/src/assets/img/image-loveseat-sofa.png",
  },
  {
    name: "Table lamp",
    price: 24.99,
    discount: 0,
    rating: 5,
    imagePath: "/src/assets/img/image-table-lamp.png",
  },
  {
    name: "Beige table lamp",
    price: 24.99,
    discount: 0,
    rating: 5,
    imagePath: "/src/assets/img/image-beige-table-lamp.png",
  },
  {
    name: "Bamboo basket",
    price: 24.99,
    discount: 0,
    rating: 5,
    imagePath: "/src/assets/img/image-bamboo-basket.png",
  },
];

//containers
const newArrivals = document.getElementById("new-arrivals");
const productsContainer = document.createElement("div");
productsContainer.classList.add("products-container");

// data iteration
products.forEach((product) => {
  // product container
  const div = document.createElement("div");
  div.classList.add("product");

  // product picture container
  const productImg = document.createElement("div");
  productImg.classList.add("product-image");
  productImg.style.backgroundImage = `url("${product.imagePath}")`;

  // top
  const productTop = document.createElement("div");
  productTop.classList.add("product-top");

  // top right
  const productTopLeft = document.createElement("div");
  productTopLeft.classList.add("product-top-left");

  // sign
  const sign = document.createElement("span");
  sign.classList.add("sign");
  sign.textContent = "new";
  productTopLeft.appendChild(sign);

  // discount
  if (product.discount != 0) {
    const discount = document.createElement("span");
    discount.classList.add("discount");
    discount.textContent = `-${product.discount}%`;
    productTopLeft.appendChild(discount);
  }

  // append top left to top container
  productTop.appendChild(productTopLeft);

  // Wishlist button
  const wishlistButton = document.createElement("button");
  wishlistButton.classList.add("wishlist-button");
  wishlistButton.style.backgroundImage = 'url("/src/assets/img/heart.svg")';
  productTop.appendChild(wishlistButton);

  // append product top to image container
  productImg.appendChild(productTop);

  // append image to product container
  div.appendChild(productImg);

  // rating container
  const rating = document.createElement("div");
  rating.classList.add("rating");
  for (let i = 0; i < product.rating; i++) {
    const star = document.createElement("img");
    star.src = "/src/assets/img/star.svg";
    rating.appendChild(star);
  }

  // append rating to product container
  div.appendChild(rating);

  // product name
  const productName = document.createElement("span");
  productName.classList.add("product-name");
  productName.textContent = product.name;

  // append name to product container
  div.appendChild(productName);

  // TODO: add price and discount
  const price = document.createElement("div");
  price.classList.add("price");

  const currentPrice = document.createElement("span");
  currentPrice.classList.add("current-price");

  if (product.discount === 0) {
    currentPrice.textContent = `$${product.price}`;
    price.appendChild(currentPrice);
  } else {
    const prevPrice = document.createElement("span");
    prevPrice.classList.add("prev-price");
    currentPrice.textContent = `$${(product.price * product.discount) / 100}`;
    prevPrice.textContent = `$${product.price}`;
    price.appendChild(currentPrice);
    price.appendChild(prevPrice);
  }

  // append price to product container
  div.appendChild(price);

  // append element to main container
  productsContainer.appendChild(div);
});

newArrivals.appendChild(productsContainer);
