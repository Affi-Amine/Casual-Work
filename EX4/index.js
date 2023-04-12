//we select all the li s
const Items = document.querySelectorAll(".list-group li");

const ol = document.querySelector(".list-group");

ol.addEventListener("click",function(){
  
})

Items.forEach(
  /**
   * A function that picks a random number for the color and assign it to the text
   * @param {*} item : the li we want to change
   */
  function(item) {
    item.addEventListener("click", function() {
      // Génère une couleur aléatoire
      let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
      // Modifie la couleur de fond et le texte de l'élément li
      item.style.backgroundColor = randomColor;
      item.style.color = "#ffffff"; // pour rendre le texte plus lisible sur la nouvelle couleur de fond
    });
  });
  