// creating the variable projectList
function toggleProjects(){
  var projectList = document.getElementById("projectList");
  if(projectList.style.display == 'none'){
      //used to group statements
    projectList.style.display = 'block'
  }
  else{
    projectList.style.display = 'none'
  }
}

function toggleTech(){
  var techList = document.getElementById("techList");
  if(techList.style.display == 'none'){
    techList.style.display = 'block'
  }
  else{
    techList.style.display = 'none'
  }
}
