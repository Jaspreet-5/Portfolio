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


function openInstagram(event, username) {
    event.preventDefault();

    const appLink = `instagram://user?username=${username}`;
    const webLink = `https://www.instagram.com/${username}/`;

    // Try Instagram app
    window.location.href = appLink;

    // Fallback to Instagram website
    setTimeout(() => {
        if (document.visibilityState === "visible") {
            window.location.href = webLink;
        }
    }, 1500);
}

function toggleProjectDetails (button) {

    const project = button.closest(".project");
    const details = project.querySelector(".details")

    details.classList.toggle("hidden");

    if(details.classList.contains("hidden")){
        button.innerText = "View More..."
    }
    else{
        button.innerText = "View Less"
    }

}

function toggleNavbarLinks(button){
    
    const navbar = button.closest(".navbar");
    const menuBar = navbar.querySelector(".menu-bar");
    const links = navbar.querySelector(".links")

    if(menuBar.src.toString().includes("menu-bar.svg")){
        menuBar.src = "./Assets/close-bar.svg"

        links.classList.toggle("hidden")
    }
    else{
        menuBar.src = "./Assets/menu-bar.svg"
        links.classList.toggle("hidden")
    }

}