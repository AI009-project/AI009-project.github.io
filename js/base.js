$(".content").fadeIn(1000)

$("img").attr("oncontextmenu", "return false;")
$("img").attr("onselectstart", "return false;")
$("img").attr("onmousedown", "return false;")

$("#charactor-description").attr("onselectstart", "return false;")
setInterval(() => {
    const mcHeight = parseInt($("#main-charactor").css("height"))
    $("#charactor-story-wrap").css("height", mcHeight)
}, 100)