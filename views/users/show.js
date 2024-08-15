<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= pageOwner.username %>'s Pantry</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <%- include('../partials/_navbar.ejs') %>
  <h1>Welcome to <%= pageOwner.username %>'s Pantry</h1>
  <% if(pageOwner.pantry.length) { %>
  <p>Currently stocked with:</p>
  <ul>
    <% pageOwner.pantry.forEach((food)=>{ %>
      <li><%= food.name %></li>
    <% }) %>
  </ul>
  <% } else { %>
    <p>There are no items in this pantry.</p>
  <% } %>
</body>
</html>