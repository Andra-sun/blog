window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");

    fetch("/posts.json")
        .then((response) => response.json())
        .then((posts) => {
            const post = posts.find((post) => post.id === postId);
            if (post) {
                document.getElementById("post-title").textContent = post.title;
                document.getElementById("post-content").textContent = post.content;
                document.getElementById("post-date").textContent = post.date;
            } else {
                console.error("Post não encontrado");
            }
        })
        .catch((error) => console.error("Erro ao carregar o post:", error));
};
