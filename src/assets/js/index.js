// Notification bar
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
  // item container
  const div = document.createElement("div");
  div.classList.add("category");
  div.style.background = `url("${category.imagePath}")`;
  div.style.height = category.height;

  // header
  const header = document.createElement("h3");
  header.classList.add("category-header");
  header.textContent = category.name;
  div.appendChild(header);

  // button
  const link = document.createElement("a");
  link.textContent = "Shop Now";
  link.classList.add("category-button");
  link.href = category.link;
  div.appendChild(link);

  // appending element into container
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
const newArrivals = document.getElementById("new-arrivals")
const productsContainer = document.createElement("div")
productsContainer.classList.add("products-container")

// data iteration
products.forEach((product) => {
  // item container
  const div = document.createElement("div")
  div.classList.add("product")

  // product picture
  const productImg = document.createElement("img")
  productImg.classList.add("product-image")
  productImg.src = product.imagePath
  div.appendChild(productImg)

  // rating container
  const rating = document.createElement("div")
  rating.classList.add("rating")
  for (let i = 0; i < product.rating; i++) {
    const star =  document.createElement("img")
    star.src = "/src/assets/img/star.svg"
    rating.appendChild(star)
  }

  div.appendChild(rating)

  // product name
  const productName = document.createElement("span")
  productName.classList.add("product-name")
  productName.textContent = product.name

  div.appendChild(productName)

  const price = document.createElement("div")
  price.classList.add("price")

  productsContainer.appendChild(div);
})

newArrivals.appendChild(productsContainer)