function githubRedirect(){
    window.location.href = "https://github.com/Jaspreet-5"
}

(function renderCoreTechnologies() {

    fetch("./pages/core-technologies.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("core-technologies").innerHTML = html;
        });

})();