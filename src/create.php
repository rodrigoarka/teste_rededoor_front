<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Filmes</title>
    <link rel="stylesheet" href="assets/css/styles.css"> <!-- Link para o CSS -->
</head>
<body>
    <h1>Cadastro de Filmes</h1>
    <form id="film-form">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="synopsis">Sinopse:</label>
        <textarea id="synopsis" name="synopsis" rows="4" required></textarea><br><br>
        
        <label for="rating">Classificação:</label>
        <input type="text" id="rating" name="rating" required><br><br>
        
        <button type="submit">Cadastrar Filme</button>
    </form>

    <script src="assets/js/create.js"></script> <!-- Link para o JavaScript -->
</body>
</html>
