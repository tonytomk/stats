import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reports/ConsoleReport';
import { WinzAnalysis } from './analyzers/WinzAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reports/HtmlReport';

// Data reader inerface
const csvFileReader = new CsvFileReader('./data/football.csv');
const reader = new MatchReader(csvFileReader)
reader.load();

// const reader1 = MatchReader.fromCsv('./data/football.csv');
// reader1.load();
// Summary.winsAnalsisWithHtmlReport('Man United');

const summary = new Summary(
  new WinzAnalysis('Man United'),
  new ConsoleReport());

summary.buildAndPrintReport(reader.matches);

const summary1 = new Summary(
  new WinzAnalysis('Man United'),
  new HtmlReport());

summary1.buildAndPrintReport(reader.matches);

