var clickyButtonNode = document.getElementById("clickyButton")

var clickness = 0;

function onClicky() {
  if(clickness === 0) {
    clickyButtonNode.textContent = "clong"
    clickness = 1
  } else {
    clickyButtonNode.textContent = "clicly cclock"
    clickness = 0
  }
} 


clickyButtonNode.addEventListener("click", onClicky)
