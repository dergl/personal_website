// // Ensure the path to filters and recipes functions
// const recipes = {{ site.recipes | jsonify }};
  
// function showSuggestions(query) {
//   const suggestionsList = document.getElementById('suggestions');
//   suggestionsList.innerHTML = ''; // Clear previous suggestions
//   if (query.length === 0) return;

//   const suggestions = recipes.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));

//   suggestions.forEach(suggestion => {
//     const li = document.createElement('li');
//     li.textContent = suggestion.name;
//     li.onclick = () => {
//       window.location.href = suggestion.url;
//     };
//     suggestionsList.appendChild(li);
//   });
// }

// function applyFilters() {
//   const checkboxes = document.querySelectorAll(".filter-checkbox");
//   const selectedCategories = Array.from(checkboxes)
//     .filter(checkbox => checkbox.checked)
//     .map(checkbox => checkbox.value);

//   const recipes = document.querySelectorAll(".recipe-card");

//   if (selectedCategories.length === 0) {
//     recipes.forEach(recipe => recipe.style.display = "block");
//     return;
//   }

//   recipes.forEach(recipe => {
//     const recipeCategory = recipe.dataset.category;
//     recipe.style.display = selectedCategories.includes(recipeCategory) ? "block" : "none";
//   });
// }