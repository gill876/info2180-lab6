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