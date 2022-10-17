window.addEventListener("load", () => {
    let req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/posts");
    req.send();
    req.onload = () => {
        
        let responseData = JSON.parse(req.response);
        let parentUl = document.querySelector("#posts ul")
        console.log(responseData);
        responseData.map((post) => {
            let newChild = document.createElement("li");
            let innerHtml = `<li>
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            </li>`
            newChild.innerHTML = innerHtml;
            parentUl.appendChild(newChild);
        });
    }

    req.onreadystatechange = () => {
        // console.log(req.readyState);
        if (req.readyState == 4) {
            if (req.status !== 200) {
                console.error("Error Happened")
            }
        }
    }
    req.onerror = () => {
        console.error("Error");
    }  

});