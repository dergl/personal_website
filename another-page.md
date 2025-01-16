---
layout: default
title: Another page
description: This is just another page
---
<head>
    <!--
    <style>
    .btn {
        padding: 10px 20px;
        background-color: #157878;
        color: white;
        text-decoration: none;
        border-radius: 5px;
    }
    .btn:hover {
        background-color: #145454;
    }
    </style>
    -->
</head>

## Welcome to another page

_yay_

[back](./)

### Ein einfacher Button 

<a href="https://example.com" class="btn" style="padding: 10px 20px; background-color: #157878; color: white; text-decoration: none; border-radius: 5px;">Klicke mich</a>


### Ein Dropdown-Menü mit css?
<style>
/* Dropdown-Container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Button für Dropdown */
.dropbtn {
  background-color: #157878;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

/* Dropdown-Inhalt */
.dropdown-content {
  display: none; /* Versteckt die Optionen standardmäßig */
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
}

/* Links im Dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Hover-Effekt für Links */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Zeige Dropdown-Inhalt bei Hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Ändere Button-Farbe bei Hover */
.dropdown:hover .dropbtn {
  background-color: #145454;
}
</style>

<div class="dropdown">
  <button class="dropbtn" style>Menü öffnen</button>
  <div class="dropdown-content">
    <a href="#option1">Option 1</a>
    <a href="#option2">Option 2</a>
    <a href="#option3">Option 3</a>
  </div>
</div>

```js
// CSS für Styling (optional, in <style> oder separater CSS-Datei einfügen)
<style>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropbtn {
  background-color: #157878;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
  padding: 8px;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>

```