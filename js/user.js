//Accès à l'application
const input = document.getElementById('input');
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const username = this.value.toLowerCase().trim();  //convertit le texte entré en minuscules
    if (username === "dav" || username === "lili") {
      window.location.href = "accueil.html";     
    } else {     
      alert('NOM UTILISATEUR INCORRECT');
      input.value='';      
    }
  }
});  
