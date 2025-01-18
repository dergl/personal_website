---
layout: recipes_layout
title: Recipes
css: filters.css
js: filters.js
---

# Recipe Page

<div class="filters-container">
  <h3>Filter by Category</h3>
  <label>
    <input type="checkbox" class="filter-checkbox" value="indian" onchange="applyFilters()"> Indian
  </label>
  <label>
    <input type="checkbox" class="filter-checkbox" value="asian" onchange="applyFilters()"> Asian
  </label>
  <label>
    <input type="checkbox" class="filter-checkbox" value="italian" onchange="applyFilters()"> Italian
  </label>
  <label>
    <input type="checkbox" class="filter-checkbox" value="mexican" onchange="applyFilters()"> Mexican
  </label>
</div>
<!-- <script>
  function print_recipes() {
    for (let i = 0; i < recipes.length; i++) {
      console.log(i);
      console.log(recipes[i]);
    }
  }
</script> -->
<div class="filters-container">
  <h3>Filter by Category</h3>
  <label>
    <input type="checkbox" class="filter-checkbox" value="indian" onchange="print_recipes()"> Indian
  </label>
</div>


<div class="recipe-container">
  {% for recipe in site.recipes %}
    <div class="recipe-card" data-category="{{ recipe.category }}">
      <h3><a href="{{ recipe.url }}">{{ recipe.title }}</a></h3>
      <p>{{ recipe.excerpt }}</p>
    </div>
  {% endfor %}
</div>

<!-- <div class="filters-container">
  <h3>Print recipes</h3>
  <label>
    <input class="btn"  onchange="print_recipes()">
  </label>
</div> -->



<script>
  // Check if recipes exist within the DOM -> they are not, the console return is 'null'
  console.log(document.querySelector('.recipe-card')); 
</script>

{% if site.recipes %}
  <p>jsonify:</p>
  <pre>{{ site.recipes | jsonify }}</pre>
{% endif %}

{% if site.recipes %}
  <p>Recipes available 1</p>
  <p>{{ site.recipes }}</p>
  {% for recipe in site.recipes %}
    <p>{{ recipe.title }}</p>
    <p>{{ recipe.category }}</p>
    <p>{{ recipe.excerpt }}</p>
    <p><a href="{{ recipe.url }}">Read more</a></p>
  {% endfor %}
{% else %}
  <p>No recipes available.</p>
{% endif %}

{% if site.recipes %}
  <p>Recipes available 2</p>
  {% for recipe in site.recipes %}
    <div class="recipe-card">
      <h3><a href="{{ recipe.url }}">{{ recipe.title }}</a></h3>
      <p>{{ recipe.excerpt }}</p>
    </div>
  {% endfor %}
{% else %}
  <p>No recipes available.</p>
{% endif %}

{% if site.recipes %}
  <p> Test </p>
  <pre>{{ site.recipes | to_yaml }}</pre>
  {% for recipe in site.recipes %}
    <p>{{ recipe.title }}</p>
    <p>{{ recipe.url }}</p>
  {% endfor %}
{% else %}
  <p>No recipes available.</p>
{% endif %}

{% assign recipe_count = site.recipes | size %}
{% if recipe_count > 0 %}
  {% for recipe in site.recipes %}
    <div class="recipe-card">
      <h3><a href="{{ recipe.url }}">{{ recipe.title }}</a></h3>
      <p>{{ recipe.excerpt }}</p>
    </div>
  {% endfor %}
{% else %}
  <p>0 recipes available.</p>
{% endif %}


{% for recipe in site.recipes %}
  {{ recipe | jsonify }}
{% endfor %}
