window.addEventListener('load', () => {
    let req = new XMLHttpRequest();
    req.open("GET", "https://reqres.in/api/users?page=2");
    req.send();
    req.onload = () => {
        // console.log(JSON.parse(req.response));
        let responseData = JSON.parse(req.response);
        let users = responseData.data;
        let parentUl = document.querySelector("#users ul")

        users.forEach(user => {
            // console.log(user);
            let newChild = document.createElement("li");
            let innerHtml = `<div class="left">
                <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" />
            </div>
            <div class="right">
                <h2>${user.first_name} ${user.last_name}</h2>
                <a href="mailto:${user.email}">${user.email}</a>
            </div>`
            newChild.innerHTML = innerHtml;
            parentUl.appendChild(newChild);
        });
    }
    // Error Handling
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


    let form = document.querySelector("form");
    let action = form.getAttribute("action");
    let method = form.getAttribute("method");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let loginReq = new XMLHttpRequest();
        loginReq.open(method, action);
        loginReq.setRequestHeader("Content-Type", "application/json")
        let email = document.getElementById("id_email").value;
        let password = document.getElementById("id_password").value;
        loginReq.send(
            JSON.stringify({
                email: email,
                password: password
            })
        );
    })
    
})