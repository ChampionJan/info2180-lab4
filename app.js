window.addEventListener('load', ()=>{

    document.querySelector("button#submit_button").addEventListener("click", ()=>{
        //alert("Heeeeey")
        fetch('http://localhost:8080/superheroes.php')
        //alert("Heeeeey")
        .then(resp => resp.text())
        .then(data => alert(data))

    });
});