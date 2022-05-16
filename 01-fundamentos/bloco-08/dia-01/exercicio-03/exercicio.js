const lottery = (bet, lotteryNum) => lotteryNum === bet;
const betNum = (bet, lottery) => {
  const randomLoterry = Math.floor(Math.random() * 5) + 1;
  return lottery(bet, randomLoterry) ? 'Parabéns você ganhou' : 'Tente novamente';
}


console.log(betNum(3, lottery));