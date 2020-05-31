"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./reports/ConsoleReport");
var WinzAnalysis_1 = require("./analyzers/WinzAnalysis");
var Summary_1 = require("./Summary");
var HtmlReport_1 = require("./reports/HtmlReport");
// Data reader inerface
var csvFileReader = new CsvFileReader_1.CsvFileReader('./data/football.csv');
var reader = new MatchReader_1.MatchReader(csvFileReader);
reader.load();
// const reader1 = MatchReader.fromCsv('./data/football.csv');
// reader1.load();
// Summary.winsAnalsisWithHtmlReport('Man United');
var summary = new Summary_1.Summary(new WinzAnalysis_1.WinzAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(reader.matches);
var summary1 = new Summary_1.Summary(new WinzAnalysis_1.WinzAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary1.buildAndPrintReport(reader.matches);
