function openCity(event, cityName) {
  let tabContent, tabLinks
  
  tabContent = document.getElementsByClassName('tabcontent')
  tabLinks = document.getElementsByClassName('tablinks')
  
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none'
  }

  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className.replace(" active", "");
  }
  
  document.getElementById(cityName).style.display = 'block'
  event.currentTarget.className += ' active'
}

document.getElementById("defaultOpen").click();