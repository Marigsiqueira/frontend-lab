const container = document.querySelector(".loop-produtos")

function criarCard(produto){
    return `
    <div class="card">
        <div class="produto">
            <img src="${produto.urlImg}" alt="${produto.name}">
        </div>
        <h3 class="nome">${produto.name}</h3>
        <a class="link" href="#">${produto.link}</a>
        <p class="valor">${produto.valor}</p>
    </div>
    `;
}

fetch("../../api-produtos/produtos.json")
.then(response => response.json())
.then(data =>{
    const produtos = data.produtos;

    produtos.forEach(produto => {
        container.innerHTML += criarCard(produto)
        console.log(produto);
        console.log(criarCard(produto));
    });
})
.catch(error =>{
    console.error("Erro ao carregar os produtos", error)
});


