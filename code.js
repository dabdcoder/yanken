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
  let computer_choice = getComputerChoice()
  if(
    (computer_choice == "paper" && player_choice == "rock") || 
    (computer_choice == "rock" && player_choice == "scissor") || 
    (computer_choice == "scissor" && player_choice == "paper")
    ){
    console.log("player: " + player_choice + " vs " + "computer: " + computer_choice)
    console.log("computers win")
    return "computer"
  }else if(
    (computer_choice == "rock" && player_choice == "paper") || 
    (computer_choice == "scissor" && player_choice == "rock") || 
    (computer_choice == "paper" && player_choice == "scissor")
    ){
    console.log("player: " + player_choice + " vs " + "computer: " + computer_choice)
    console.log("player wins")
    return "player"
   }else{
    console.log("player: " + player_choice + " vs " + "computer: " + computer_choice)
    console.log("draw")
    return "draw"
   }
}

function game(){
  let victoria_usuario = 0
  let victoria_maquina = 0
  for(let i = 1; i <= 5; i++){
    let resultado = play_round()
    if(resultado == "computer"){
      victoria_maquina++
    }else if(resultado == "player"){
      victoria_usuario++
    }
  }

  if(victoria_maquina > victoria_usuario){
    return "la maquina gana con: " + victoria_maquina + " victorias de 5"
  }else if(victoria_usuario > victoria_maquina){
    return "el usuario gana con: " + victoria_usuario + " victorias de 5"
  }else{
    return "empataron 5 veces los enfermitos estos wtf"
  }
}
console.log(game())
