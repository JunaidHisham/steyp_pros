$(document).ready(function () {
    $(document).on("submit", "form.ajax-form", function (e) {
        e.preventDefault();
        var $this = $(this);

        var url = $this.attr("action");
        var method = $this.attr("method");

        jQuery.ajax({
            type: method,
            url: url,
            dataType: "json",
            data: new FormData(this),
            processData: false,
            contentType: false,
            cache: false,
            success: function (data) {
                console.log("success");
                console.log(data);

                var title = data["title"];
                var message = data["message"];
                var status = data["status"];

                Swal.fire({
                    icon: status,
                    title: title,
                    showConfirmButton: true,
                    text: message,
                    timer: 2000,
                });

                if (status == "success") {
                    $this.trigger("reset");
                }
            },
            error: function (error) {
                console.log("error");
            },
        });
    });
})