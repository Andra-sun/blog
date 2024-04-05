function loadPosts() {
    fetch("/posts.json")
        .then((response) => response.json())
        .then((posts) => {
            const postsContainer = document.getElementById("posts-container");
            postsContainer.innerHTML = "";
            posts.forEach((post) => {
                const article = document.createElement("article");
                article.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <a href="posts.html?id=${post.id}">Leia mais</a>
                `;
                postsContainer.appendChild(article);
            });
        })
        .catch((error) => console.error("Erro ao carregar os artigos:", error));
}

window.onload = loadPosts;
