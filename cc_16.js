// Task 2 
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
