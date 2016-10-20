var petSelect = function(yourPetChoice) {
  // checks petChoice and shows specific image on user choice//
  // yourPetChoice is the parameter here//
  if (yourPetChoice === "ferret") {
    $(".ferret").show();
  }
  else if (yourPetChoice === "sloth") {
    $(".sloth").show();
  }
  else if (yourPetChoice === "jango fett") {
    $(".jango").show();
  }

  else {
    alert("Thats not a real pet! refresh page!")
  }
}

$(document).ready(function(){
  var petChoice = prompt("Pick yourself an animal! Please enter either, 'Ferret', 'Sloth', or 'Jango Fett'").toLowerCase();
  petSelect(petChoice); // call petSelect function with petChoice//

});
