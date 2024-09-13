document.addEventListener("DOMContentLoaded", function () {
  const filmesContainer = document.getElementById("filmes-container");
  const movieSelect = document.getElementById("movie-select");
  const reservaForm = document.getElementById("reservaForm");
  const mensagemReserva = document.getElementById("mensagem-reserva");

  // Função para buscar filmes da API (substituir pela URL da sua API)
  async function fetchFilmes() {
    try {
      const response = await fetch("http://localhost:3000/filmes/disponiveis");
      const filmes = await response.json();
      console.log("listando filmes");

      // Preencher lista de filmes
      filmes.forEach((filme) => {
        // Adicionar filmes na tela
        console.log(filme);

        const divFilme = document.createElement("div");
        divFilme.classList.add("filme");
        divFilme.innerHTML = `<h3>${filme.name}</h3><p>${filme.synopsis}</p>`;
        filmesContainer.appendChild(divFilme);

        // Adicionar filmes ao select
        const option = document.createElement("option");
        option.value = filme.id;
        option.textContent = filme.name;
        movieSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  }

  // Função para reservar filme
  reservaForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const movieId = movieSelect.value;

    try {
      const response = await fetch("http://localhost:3000/filmes/reservar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId }),
      });

      const result = await response.json();
      mensagemReserva.textContent = `Filme reservado com sucesso! ID da reserva: ${result.reserveId}`;
    } catch (error) {
      console.error("Erro ao reservar filme:", error);
      mensagemReserva.textContent = "Erro ao realizar a reserva.";
    }
  });

  // Inicializar com filmes
  fetchFilmes();
});
