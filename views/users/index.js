<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Community Page</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <%- include('../partials/_navbar.ejs') %>
  <h1>Our Members</h1>
  <ul>
    <% allUsers.forEach((user)=>{ %>
      <li><h3><%= user.username %></h3></li>
    <% }) %>
  </ul>
</body>
</html>