$(document).ready(function(){
    $(".searchButton").click(function(){
        let httpRequest = new XMLHttpRequest();
        let url = "superheroes.php";
        let showHeroes = function(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if(httpRequest.status === 200){
                    let response = httpRequest.response;
                    alert(response);
                } else {
                    alert("There was a problem with the request.");
                }
            }
        };
        
        httpRequest.onreadystatechange = showHeroes;
        httpRequest.open('GET', url);
        httpRequest.send();
    });
});