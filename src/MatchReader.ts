import {dateStringToDate} from './utils'
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void,
  data: string[][]
}

export class MatchReader {
  constructor(public reader: DataReader) {}
  matches: MatchData[] = [];
  load() : void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, // Type assertions
        row[6]
      ] 
    });
  }

  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
}