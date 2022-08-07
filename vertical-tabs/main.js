function openCity(evt, cityName) {
  let tabContent, tabLink

  tabContent = document.getElementsByClassName('tabcontent')
  tabLink = document.getElementsByClassName('tablinks')

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none"
  }

  for (let i = 0; i < tabLink.length;  i++) {
    tabLink[i].className = tabLink[i].className.replace(' active', '')
  }
  
  document.getElementById(cityName).style.display = 'block'
  evt.currentTarget.className += ' active'
}

document.getElementById("defaultOpen").click();