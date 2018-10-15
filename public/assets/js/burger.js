$(function () {
    $(".add-burger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        var newBurger = {
            burger_name: $("#burg").val().trim(),
        };

        console.log(newBurger.burger_name);

        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created New Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".notdevoured").on("click", function (event) {
        var id = $(this).data("id");

        console.log(id);

        var newDevouredState = {
            sleepy: true,
        };

        // Send the DELETE request.
        $.ajax("/api/burgers/update/" + id, {
            type: "PUT",
            data: newDevouredState,
        }).then(
            function () {
                console.log("Devoured burger #", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });

    $(".yesdevoured").on("click", function (event) {
        var id = $(this).data("id");

        console.log(id);

        var newDevouredState = {
            sleepy: true,
        };

        // Send the DELETE request.
        $.ajax("/api/burgers/delete/" + id, {
            type: "DELETE",
            data: newDevouredState,
        }).then(
            function () {
                console.log("Deleted burger #", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });
});