$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "https://reqres.in/api/users",
        success: function (response) {
            console.log(response.data);
            let html_data = "";
            response.data.forEach((user) => {
                html_data += `<div>
                    <img
                        src="${user.avatar}"
                        alt="${user.first_name}${user.last_name}"
                    />
                    <p>${user.first_name}${user.last_name}</p>
                    <p>${user.email}</p>
                </div>`;
            });
            $(".flex").html(html_data);
        },
        error: function (error) {},
    });
});
