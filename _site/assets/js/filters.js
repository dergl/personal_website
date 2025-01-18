import { recipes } from "./recipes_list.js";

function filterRecipes() {
    const checkboxes = document.querySelectorAll(".filter-checkbox:checked");
    const activeFilters = Array.from(checkboxes).map(cb => cb.value);

    const filteredRecipes = recipes.filter(recipe =>
        activeFilters.every(filter => 
            Array.isArray(recipe.category) 
                ? recipe.category.includes(filter) 
                : recipe.category === filter
        )
    );

    const linksContainer = document.getElementById("recipe-links");
    
    if (filteredRecipes.length > 0) {
        // If there are matching recipes, display them as links
        linksContainer.innerHTML = filteredRecipes.map(recipe =>
            `<a href="${recipe.url}">${recipe.name}</a>`
        ).join("<br>");
    } else {
        // If no recipes match, display the "No recipes" message
        linksContainer.innerHTML = "<p>No recipe matches your criteria.</p>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    filterRecipes(); // Initial render
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", filterRecipes);
    });
});

  
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
  