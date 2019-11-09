$(document).ready(function(){
    $(".searchButton").click(function(){
        
        let searchName = $('#search_name').val();
        searchName = searchName.trim();
        $.ajax("superheroes.php", {
            method: 'GET',
            data: {
                query: searchName
            }
        }).done(function(response){
            let resp = response;
            $('#result').html(resp);
        }).fail(function(){
            alert('There was an issue with the request.');
        });
    });
});



/*let httpRequest = new XMLHttpRequest();
        let url = "superheroes.php";
        
        let showHeroes = function(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if(httpRequest.status === 200){
                    let response = httpRequest.response;
                    //alert(response);
                    $("#result").html(response);
                } else {
                    alert("There was a problem with the request.");
                }
            }
        };
        
        httpRequest.onreadystatechange = showHeroes;
        httpRequest.open('GET', url);
        httpRequest.send();*/