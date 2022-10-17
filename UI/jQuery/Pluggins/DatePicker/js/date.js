$(document).ready(() => {
    $('[data-toggle="datepicker"]').datepicker({
        format: "dd-mm-yyyy",
        endDate: new Date(),
    });
    $("select").selectric();
});
