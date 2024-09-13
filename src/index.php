<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Locadora de Filmes - Reservas</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

  <header>
    <h1>Locadora de Filmes</h1>
    <p>Reserve seu filme favorito online e retire na loja!</p>
  </header>

  <main>
    <section id="lista-filmes">
      <h2>Filmes Disponíveis</h2>
      <div id="filmes-container">
        <!-- Filmes serão carregados via JS -->
      </div>
    </section>

    <section id="reserva-filme">
      <h2>Reserva de Filme</h2>
      <form id="reservaForm">
        <label for="movie">Escolha um filme:</label>
        <select name="movie" id="movie-select" required>
          <!-- Opções de filmes preenchidas via JS -->
        </select>

        <button type="submit">Reservar Filme</button>
      </form>
      <p id="mensagem-reserva"></p>
    </section>
  </main>

  <script src="assets/js/script.js"></script>
</body>
</html>