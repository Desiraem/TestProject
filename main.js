var locations = [["California", "Alisal"], ["Idaho", "Red Mountain Ranch"],["Colorado", "Valle Verdi Ranch"],["Nevada", "Yucca Wilderness Ranch"],["Utah", "Rockin' R Ranch"]]
function GetRanch(){
  var curState = document.getElementById('state');
  
  for(var i=0;i<locations.length;i++)
  if (curState.value == locations[i][0]){
    return alert(locations[i][1])
  } else {
    return alert("Sorry, No ranch found in " + curState.value)
  }
}