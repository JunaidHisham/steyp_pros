window.addEventListener("load", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((response) => {
            return response.json();
    }).then((responseData) => {
        let parentUl = document.querySelector("#posts ul")
        responseData.forEach(post => {
            let newChild = document.createElement("li");
            let innerHtml = `<li>
                <h1>name: ${post.name}</h1>
                <h3>email: ${post.email}</h3>
                <p>${post.body}</p>
            </li>`

            newChild.innerHTML = innerHtml;
            parentUl.appendChild(newChild);
        });
    })
})