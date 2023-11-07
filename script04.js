function rainbow(num){
  if (num == 1){
    return "Red";
  }
  else if (num == 2){
    return "Orange";
  }
  else if (num == 3){
    return "Yellow";
  }
   else if (num == 4){
    return "Green";
  }
   else if (num == 5){
    return "Blue";
  }
   else if (num == 6){
    return "Indigo";
  }
   else if (num == 7){
    return "Violet";
  }
  else {
    return "There are only 7 colours in rainbow!";
  }
}

console.log(rainbow(6));
