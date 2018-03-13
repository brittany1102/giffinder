// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  
  function giphyURLWithSearchTerm(searchTerm) {
    var NewUrl ="https://api.giphy.com/v1/stickers/search?q=" + searchTerm +"&api_key=dc6zaTOxFJmzC";
    return NewUrl;
    
}

function appendImageToBody(srcURL) {
    $('#container').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: giphyURLWithSearchTerm(searchTerm) ,
      method: "GET",
      success: function(response) {
          console.log(response.data);
          for(var i=0;i< response.data.length;i++){
          var url = response.data[i].images.original.url;
           appendImageToBody(url);
          }
           
      },
    }); 
}

//Add a click handler below to call the function when the button is clicked
$("button").click(function(){
    $("#container").empty();
    var searchTerm = $("input").val();
    return callGiphyAPIWithSearchTerm(searchTerm);
});
  
});
