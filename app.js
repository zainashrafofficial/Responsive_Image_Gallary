$(document).ready(function () {
    $(".grid-item").each(function () {
        var itemTitle = $(".grid-item-title");

        // Add a Class on Mouse Enter in the Grid

        $(this).on("mouseenter", function () {
            if ($(this).data("title")) {
                itemTitle.html("<span>" + $(this).data("title") + "</span>");
                itemTitle.addClass("visible");
            }
        })

        // Move Title on Mouse Move
        $(document).on("mousemove", function (e) {
            itemTitle.css({
                left: e.clientX - 10,
                top: e.clientY + 25,
            });
        });

        // Remove Class on Mouse Leave From Grid-Item
        $(this).on("mouseleave", function () {
            itemTitle.removeClass("visible");
        })
    });
})