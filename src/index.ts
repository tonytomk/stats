import {CsvFileReader} from './CsvFileReader'
const reader = new CsvFileReader('./data/football.csv')
reader.read();

let manUnitedWins = 0;

enum matchResult {
  HomeWin = 'H',
  AwayWin = "A",
  Draw = "D"
}

for(let match of reader.data) {
  if (match[1] === 'Man United' 
  && match[5] === matchResult.HomeWin) {
    manUnitedWins++;
  } else if(match[2] === 'Man United'
  && match[5] === matchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester united won ${manUnitedWins} games`);