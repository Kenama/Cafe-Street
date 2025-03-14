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
categories.forEach((item) => {
  // creating container
  const div = document.createElement("div");
  div.classList.add("category");
  div.style.background = `url("${item.imagePath}")`;
  div.style.height = item.height;

  // creating header
  const header = document.createElement("h3");
  header.classList.add("category-header");
  header.textContent = item.name;
  div.appendChild(header);

  // creating button
  const link = document.createElement("a");
  link.textContent = "Shop Now";
  link.classList.add("category-button");
  link.href = item.link;
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
    imagePath: "",
  },
  {
    name: "Table lamp",
    price: 24.99,
    discount: 0,
    rating: 5,
    imagePath: "",
  },
  {
    name: "Beige table lamp",
    price: 24.99,
    discount: 0,
    rating: 5,
    imagePath: "",
  },
  {
    name: "Bamboo basket",
    price: 24.99,
    discount: 0,
    rating: 5,
    imagePath: "",
  },
  {
    name: "Toaster",
    price: 224.99,
    discount: 0,
    rating: 5,
    imagePath: "",
  },
];
