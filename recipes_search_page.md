---
layout: recipes_layout
title: Raphael Adalid Braun
css: filters.css
js: filters.js
---

# Recipe Page

<!-- <div class="filters-container">
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
</div> -->

<div class="filters-container">
  <h3>Filter by Category</h3>
  <label>
    <input type="checkbox" class="filter-checkbox" value="indian" onchange="filterRecipes()"> Indian
  </label>
  <label>
    <input type="checkbox" class="filter-checkbox" value="italian" onchange="filterRecipes()"> Italian
  </label>
  <label>
    <input type="checkbox" class="filter-checkbox" value="mexican" onchange="filterRecipes()"> Mexican
  </label>
  <label>
    <input type="checkbox" class="filter-checkbox" value="asian" onchange="filterRecipes()"> Asian
  </label>
  <label>
    <input type="checkbox" class="filter-checkbox" value="vegetarian" onchange="filterRecipes()"> Vegetarian
  </label>
</div>

<!-- ## other filters
<div class="filters-container">
  <h3>Filter by Category</h3>
  <label>
    <input type="checkbox" class="filter-checkbox" value="vegetarian" onchange="filterRecipes()"> Vegetarian
  </label>
</div> -->

# Test container for links

<div id="recipe-links-container">
  <h3>Recipe Links</h3>
  <div id="recipe-links"></div>
</div>

