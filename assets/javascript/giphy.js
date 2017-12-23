$(document).ready(function(){
var movies = ["Lion King","Frozen","Mulan","Aladin","The Little Mermaid","Beauty and the Beast","Moana",
    "Bambi","Zootopia","Sleeping Beauty","Finding Nemo", "Cinderella","Pinocchio","Lady and the Tramp"]

var addbutton = function(buttonName){
    var newbutton = $("<button>");
    newbutton.text(buttonName);
    $(".buttons").append(newbutton);
}

for (var i=0; i < movies.length; i++){
    addbutton(movies[i]);
};

var queryURL = 

// $.ajax({
//     url:"",
//     method: "GET"
// }).done(function(){

// })
});