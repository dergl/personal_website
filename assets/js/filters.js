console.log("filters.js loaded successfully");

// const recipes = {{ site.recipes | jsonify }};
const recipes = [
    { name: "Chicken Curry", url: "/recipes/chicken-curry", category:"indian" },
    { name: "Paneer Tikka", url: "/recipes/paneer-tikka" ,category: ["indian", "vegetarian"]},
    { name: "Sushi", url: "/recipes/sushi", category:"asian" },
    { name: "Pad Thai", url: "/recipes/pad-thai" , category:"asian"},
    { name: "Spaghetti Bolognese", url: "/recipes/spaghetti-bolognese" ,category: "italian"},
    { name: "Tacos", url: "/recipes/tacos" ,category: "mexican"}
  ];
// const recipes = {{ site.recipes | jsonify }};




// function applyFilters() {
//     const checkboxes = document.querySelectorAll(".filter-checkbox");
//     const selectedCategories = Array.from(checkboxes)
//       .filter(checkbox => checkbox.checked)
//       .map(checkbox => checkbox.value);
  
//     const recipeCards = document.querySelectorAll(".recipe-card");
  
//     // Show all recipes by default if no checkbox is selected
//     if (selectedCategories.length === 0) {
//       recipeCards.forEach(recipe => recipe.style.display = "block");
//       return;
//     }
  
//     // Filter recipes by selected categories
//     recipeCards.forEach(recipe => {
//       const recipeCategory = recipe.dataset.category;
//       recipe.style.display = selectedCategories.includes(recipeCategory) ? "block" : "none";
//     });
//   }

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
      : recipes.filter(recipe => {
          // Check if all selected categories exist in the recipe's category list
          return selectedCategories.every(category => recipe.category.includes(category));
      });
  
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
  