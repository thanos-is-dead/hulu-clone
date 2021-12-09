const modal= document.querySelector('.modal')
const Loginbtn = document.querySelector ('.login-btn')
const closebtn= document.querySelector ('.close')

Loginbtn.addEventListener('click', openmodal)
closebtn.addEventListener('click', closemodal)
window.addEventListener('click',outsideClick)

function openmodal() {
  modal.style.display = 'block'
}
function closemodal() {
  modal.style.display = 'none'
}
function outsideClick (e){
  if (e.target == modal) {
    closemodal()
  }
}
