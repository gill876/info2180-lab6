# info2180-lab6

BELOW ARE PARTS OF CODE THAT MIGHT BE LOOKED AT IN THE FUTURE:
/*$.get("superheroes.php",
        {
            query: searchName
        }).done(function(response){
            let resp = response;
            $('#result').html(resp);
        }).fail(function(){
            alert('There was an issue with the request.');
        });*/
        
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