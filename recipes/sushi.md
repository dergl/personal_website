---
layout: recipes_layout
title: Sushi
css: filters.css
js: filters.js  # Ensure the correct path to your JS file
# category: asian  # Example of adding category
# excerpt: "Fresh Japanese sushi rolls with raw fish and rice."
# url: "/recipes/sushi"
# css: recipes.css
# js: recipes.js  # Ensure the correct path to your JS file
---
<!-- Ensure proper path -->
<!-- <script src="{{ '/assets/js/recipes.js' | relative_url }}"></script>   -->

<!-- Ensure recipes are accessible in this page -->
<!-- <script>
  const recipes = {{ site.recipes | jsonify }};  // Pass recipes to the page
  console.log(recipes);
</script> -->

<!-- <script type="module">
  import { recipes } from '/../assets/js/recipes_list.js';
  
  // Ensure the function is scoped properly
  document.addEventListener('DOMContentLoaded', () => {
    function showSuggestions(query) {
      const suggestionsList = document.getElementById('suggestions');
      suggestionsList.innerHTML = ''; // Clear previous suggestions

      if (query.length === 0) return;

      const suggestions = recipes.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));

      suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion.name;
        li.onclick = () => {
          window.location.href = suggestion.url;  // Redirect to recipe page
        };
        suggestionsList.appendChild(li);
      });
    }

    document.getElementById('search-bar').addEventListener('input', (event) => {
      showSuggestions(event.target.value);
    });
  });
</script>

{% if page.js %}
<script src="{{ '/assets/js/' | relative_url }}{{ page.js }}"></script>
{% endif %} -->

# Sushi

<!-- # Sushi Recipe -->

## Ingredients

- 2 cups sushi rice
- 1/2 cup rice vinegar
- 2 tbsp sugar
- 1 tsp salt
- Nori (seaweed)
- Fresh sushi-grade fish (like tuna, salmon, etc.)
- Cucumber, avocado, and other fillings (optional)

## Instructions

1. Rinse the sushi rice thoroughly until the water runs clear.
2. Cook the rice according to the package instructions.
3. In a small bowl, mix rice vinegar, sugar, and salt until dissolved.
4. After the rice is cooked, gently mix the vinegar mixture into the rice.
5. Lay out nori sheets, spread rice, and add fillings.
6. Roll the sushi tightly and slice into pieces.

---

## Related Recipes

- **Chicken Curry**
- **Paneer Tikka**
- **Pad Thai**
- **Spaghetti Bolognese**
- **Tacos**

{% for recipe in site.recipes %}
  <li><a href="{{ recipe.url }}">{{ recipe.name }}</a></li>
{% endfor %}