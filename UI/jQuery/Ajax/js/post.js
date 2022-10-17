$(document).on("submit", "form", function (e) {
    e.preventDefault();
    var $this = $(this);

    var data = $this.serialize();
    var action = $this.attr("action");
    var method = $this.attr("method");

    $.ajax({
        type: method,
        url: action,
        data: data,
        success: function (response) {
            Swal.fire({
                title: "Success",
                text: "Successfully Submitted",
                icon: "success",
                position:"center",
                IconColor:"red",
            });
        },
        error: (error) => {
            Swal.fire({
                title: "Error",
                text: "Something went Wrong",
                icon: "error",
            });
        },
    });

    // console.log("Form Submitted");
});
