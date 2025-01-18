console.log("filters.js loaded successfully");

// const recipes = {{ site.recipes | jsonify }};
const recipes = [
    { name: "Chicken Curry", url: "/recipes/chicken-curry", category:"indian" },
    { name: "Paneer Tikka", url: "/recipes/paneer-tikka" },
    { name: "Sushi", url: "/recipes/sushi", category:"asian" },
    { name: "Pad Thai", url: "/recipes/pad-thai" , category:"asian"},
    { name: "Spaghetti Bolognese", url: "/recipes/spaghetti-bolognese" },
    { name: "Tacos", url: "/recipes/tacos" }
  ];

function print_recipes() {
    recipes.forEach(recipe => {
      console.log(recipe.name); // Logs each recipe name
    });
  }


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
function applyFilters() {
    const selectedCategory = "asian"; // Example filter
    const filteredRecipes = recipes.filter(recipe => recipe.category === selectedCategory);
    console.log(filteredRecipes); // Check filtered output
  }