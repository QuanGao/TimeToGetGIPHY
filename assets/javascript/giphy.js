$(document).ready(function(){
var topics = ["Lion King","Frozen","Mulan","Aladin","The Little Mermaid","Beauty and the Beast","Moana",
    "Bambi","Zootopia","Sleeping Beauty","Rick and Morty","Finding Nemo", "Cinderella","Pinocchio","Lady and the Tramp"]

var addbutton = function(buttonName){
    var newbutton = $("<button class='item'>");
    newbutton.text(buttonName);
    newbutton.attr("data-name",buttonName)
    $(".buttons").append(newbutton);
    
}

for (var i=0; i < topics.length; i++){
    addbutton(topics[i]);
};

$(".buttons").on("click",".item",function(){
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + 
                    "&api_key=hX8Lvi8FoCPzl3YJE8GGqPDBwOkZ74kf&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response.data)
        $(".gifs").empty();    
        for (var j=0; j<10; j++){
            var data = response.data[j];
            var rating = $("<p class = 'ratings'>").text(`Rating: ${data.rating}`);
            var gif = $("<img data-state='still'>")
            var still_link = data.images.fixed_height_still.url;
            var animated_link = data.images.fixed_height.url;
            gif.attr("data-still",still_link);
            gif.attr("data-animated",animated_link);
            gif.attr("src",still_link);
            var newDiv = $("<div class = 'imgRating'>")
            newDiv.append(rating).append(gif);
            $(".gifs").append(newDiv);
        }
    })
})

$(".gifs").on("click","img",function(){
    if($(this).attr("data-state")==="still"){
        $(this).attr("src",$(this).attr("data-animated"));
        $(this).attr("data-state","animated");
    } else {
        $(this).attr("src",$(this).attr("data-still"));
        $(this).attr("data-state","still");
    }
})

$("button[type=submit]").on("click",function(){
    var newName = $("input[type=text").val();
    addbutton(newName);
})
});