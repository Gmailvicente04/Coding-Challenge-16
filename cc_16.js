// Task 2: Fetch Products with .then() method
const BASE_URL = 'https://www.course-api.com/javascript-store-products'; // API URL 

// using function fetchProductThen()
function fetchProductsThen() {
  fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok"); // Error message if the response is not ok
      }
      return response.json(); 
    })
    .then(products => {
      products.forEach(product => console.log(product.fields.name));
    }) // Logs each product’s name to the console
    .catch(error => {
      console.error('Fetch failed:', error);
    }); // Use .catch() to log any errors
}

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok"); // Error message if the response is not ok
      }
      const products = await response.json(); 
      displayProducts(products); // used to render product to the page.
    } catch (error) {
      handleError(error); // If an error occurs, passes it to handleError(error)
    }
  }

  
// Task 4: Display the Products
function displayProducts(products) {
    const container = document.getElementById("product-container"); 
    container.innerHTML = "";
  
    products.slice(0, 5).forEach(product => {
      const {name, price, image} = product.fields; 
      const productElement = document.createElement("div");
      productElement.classList.add("product");
  
      // Adding product content (image, name, and price)
      productElement.innerHTML = `
        <img src="${image[0].url}" alt="${name}">
        <h2>${name}</h2>
        <p>$${(price / 100).toFixed(2)}</p>
      `;
  
      container.appendChild(productElement); 
    });
  }
  
// Task 5: Reusable Error Handler
function handleError(error) {
    console.error("An error occurred:", error.message);
  }
  
// Task 6: Call Your Fetch Functions 
fetchProductsThen();
fetchProductsAsync();