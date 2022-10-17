window.addEventListener("load", () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        let responseData = response.data;

        let parentUl = document.querySelector("#posts ul")
        responseData.forEach(post => {
            let newChild = document.createElement("li");
            let innerHtml = `<li>
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            </li>`

            newChild.innerHTML = innerHtml;
            parentUl.appendChild(newChild);
        });
    })
})