---
layout: default
---

<script type="module">
  import { recipes } from '/assets/js/recipes_list.js';
  
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
{% endif %}

<header>
  <h1 style="text-align: center; font-size: 48px; font-weight: bold;">Recipes</h1>
</header>

<div class="search-container">
  <input type="text" id="search-bar" placeholder="Search recipes...">
  <ul id="suggestions" class="suggestions-list"></ul>
</div>



<main>
  {{ content }}
</main>

<style>
  .search-container {
    position: relative;
    width: 300px;
  }

  #search-bar {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }

  .suggestions-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    border: 1px solid #ddd;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 10;
  }

  .suggestions-list li {
    padding: 10px;
    cursor: pointer;
  }

  .suggestions-list li:hover {
    background-color: #f0f0f0;
  }
</style>
