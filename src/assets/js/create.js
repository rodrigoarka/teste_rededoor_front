document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("film-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const titulo = document.getElementById("name").value;
    const synopsis = document.getElementById("synopsis").value;
    const rating = document.getElementById("rating").value;
    const disponivel = true;

    const response = await fetch("http://localhost:3000/filmes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo, synopsis, rating, disponivel }),
    });

    if (response.ok) {
      alert("Filme cadastrado com sucesso!");
      document.getElementById("film-form").reset();
    } else {
      alert("Erro ao cadastrar o filme.");
    }
  });
});
