---
layout: default
---

{% if page.js %}
<script src="/assets/js/{{ page.js }}"></script>
{% endif %}

<header>
  <h1>{{ page.title }}</h1>
</header>

<div class="search-container">
  <input type="text" id="search-bar" placeholder="Search recipes..." oninput="showSuggestions(this.value)">
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

<script>
//   const recipes = [
//     { name: "Chicken Curry", url: "/recipes/chicken-curry" },
//     { name: "Paneer Tikka", url: "/recipes/paneer-tikka" },
//     { name: "Sushi", url: "/recipes/sushi", category: "asian" },
//     { name: "Pad Thai", url: "/recipes/pad-thai" },
//     { name: "Spaghetti Bolognese", url: "/recipes/spaghetti-bolognese" },
//     { name: "Tacos", url: "/recipes/tacos" }
//   ];

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
</script>

<!-- <div class="recipes-container">
  {% for recipe in site.recipes %}
    <div class="recipe-card">
      <h3><a href="{{ recipe.url }}">{{ recipe.title }}</a></h3>
      <p>{{ recipe.excerpt }}</p>
    </div>
  {% endfor %}
</div> -->
