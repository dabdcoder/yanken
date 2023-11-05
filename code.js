function getComputerChoice(){
  let opt = Math.floor(Math.random() * 3) + 1
  if (opt == 1){
    opt = "rock"
  } else if (opt == 2){
    opt = "scissor"
  } else{
    opt = "paper"
  }
  return opt
}
function play_round(){
  let player_choice = prompt("Digit rock, paper, scissor: ").toLowerCase()
  console.log("user:" + player_choice)
  let computer_choice = getComputerChoice()
  console.log("computer: " + computer_choice)
  if(
    (computer_choice == "paper" && player_choice == "rock") || 
    (computer_choice == "rock" && player_choice == "scissor") || 
    (computer_choice == "scissor" && player_choice == "paper")
    ){
    return "computer wins"
  }
   else if(
    (computer_choice == "rock" && player_choice == "paper") || 
    (computer_choice == "scissor" && player_choice == "rock") || 
    (computer_choice == "paper" && player_choice == "scissor")
    ){
    return "user wins"
   }
   else{
    return "draw"
   }
}
console.log(play_round())
