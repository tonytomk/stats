import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

// Data reader inerface
const csvFileReader = new CsvFileReader('./data/football.csv');
const reader = new MatchReader(csvFileReader)
reader.load();


let manUnitedWins = 0;


for(let match of reader.matches) {
  if (match[1] === 'Man United' 
  && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if(match[2] === 'Man United'
  && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester united won ${manUnitedWins} games`);