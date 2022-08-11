let textToCopy = document.querySelector('.text span')
let notification = document.querySelector('.notification')

textToCopy.addEventListener('click', copyOnClick)

function copyOnClick(e) {
  navigator.clipboard.writeText(e.target.innerHTML)
     .then(function () {
       notification.style.opacity = 1
       setTimeout(function(){
         notification.style.opacity = 0
       }, 2500)
       

     })
}

