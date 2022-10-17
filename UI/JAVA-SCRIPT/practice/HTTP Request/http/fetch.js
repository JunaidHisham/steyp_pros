window.addEventListener("load", () => {
    fetch("https://reqres.in/api/users").then((response) => {
        console.log(response.status);
        return response.json()
    }).then((responseData) => {
        console.log(responseData);

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
    }).catch((err) => {
        console.log(err.message);
    });


    let form = document.querySelector("form");
    let action = form.getAttribute("action");
    let method = form.getAttribute("method");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let email = document.getElementById("id_email").value;
        let password = document.getElementById("id_password").value;
        
        fetch(action, {
            method:method,
            body:JSON.stringify({
                email,
                password,
            }),
            headers:{
                "Content-Type": "application/json",
            },
        }).then((response) => {
            return response.json();
        }).then((responsedata) => {
            console.log(responsedata);
        });
    });
});