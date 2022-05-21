$(document).ready(function () {
    $(document).on("click", "#button", function () {
        alert("Gönderildi.")
        setTimeout(function () {
            $("#name").val("");
            $("#surname").val("");
            $("#mail").val("");
            $("#text").val("");
        }, 500);

    });
});