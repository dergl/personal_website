console.log("filters.js loaded successfully");

// const recipes = {{ site.recipes | jsonify }};
const recipes = [
    { name: "Chicken Curry", url: "/recipes/chicken-curry", category:"indian" },
    { name: "Paneer Tikka", url: "/recipes/paneer-tikka" ,category: "indian"},
    { name: "Sushi", url: "/recipes/sushi", category:"asian" },
    { name: "Pad Thai", url: "/recipes/pad-thai" , category:"asian"},
    { name: "Spaghetti Bolognese", url: "/recipes/spaghetti-bolognese" ,category: "italian"},
    { name: "Tacos", url: "/recipes/tacos" ,category: "mexican"}
  ];
// const recipes = {{ site.recipes | jsonify }};

function print_recipes() {
    recipes.forEach(recipe => {
      console.log(recipe.name); // Logs each recipe name
    });
  }


function applyFilters() {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const selectedCategories = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    const recipeCards = document.querySelectorAll(".recipe-card");
  
    // Show all recipes by default if no checkbox is selected
    if (selectedCategories.length === 0) {
      recipeCards.forEach(recipe => recipe.style.display = "block");
      return;
    }
  
    // Filter recipes by selected categories
    recipeCards.forEach(recipe => {
      const recipeCategory = recipe.dataset.category;
      recipe.style.display = selectedCategories.includes(recipeCategory) ? "block" : "none";
    });
  }

// function applyFilters() {
//     const selectedCategory = "asian"; // Example filter
//     const filteredRecipes = recipes.filter(recipe => recipe.category === selectedCategory);
//     console.log(filteredRecipes); // Check filtered output
//   }

// function displayRecipeLinks() {
//     // Get the container element where links will be added
//     const container = document.getElementById('recipe-links');

//     // Clear any existing content (to prevent duplication)
//     container.innerHTML = '';

//     // Loop through the recipes array and create links
//     recipes.forEach(recipe => {
//         // Create an anchor element for each recipe
//         const link = document.createElement('a');
//         link.href = recipe.url;       // Set the URL
//         link.textContent = recipe.name; // Set the display text
//         link.classList.add('recipe-link'); // Optional: Add a class for styling

//         // Append the link to the container
//         container.appendChild(link);

//         // Add a line break for spacing (optional)
//         container.appendChild(document.createElement('br'));
//     });
//   }
  
//   // Call the function when the page loads
//   document.addEventListener('DOMContentLoaded', displayRecipeLinks);

function filterRecipes() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('.filter-checkbox');
  
    // Get selected categories
    const selectedCategories = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked) // Keep only checked boxes
      .map(checkbox => checkbox.value);    // Extract their values
  
    // Filter recipes
    const filteredRecipes = selectedCategories.length === 0
      ? recipes // If no category is selected, show all recipes
      : recipes.filter(recipe => selectedCategories.includes(recipe.category));
  
    // Display filtered recipes
    displayRecipeLinks(filteredRecipes);
  }
  
  function displayRecipeLinks(filteredRecipes) {
    const container = document.getElementById('recipe-links');
    container.innerHTML = ''; // Clear existing content
  
    filteredRecipes.forEach(recipe => {
      const link = document.createElement('a');
      link.href = recipe.url;
      link.textContent = recipe.name;
      link.classList.add('recipe-link');
  
      container.appendChild(link);
      container.appendChild(document.createElement('br'));
    });
  }
  
  // Display all recipes on page load
  document.addEventListener('DOMContentLoaded', () => displayRecipeLinks(recipes));
  