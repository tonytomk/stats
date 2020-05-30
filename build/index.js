"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
// Data reader inerface
var csvFileReader = new CsvFileReader_1.CsvFileReader('./data/football.csv');
var reader = new MatchReader_1.MatchReader(csvFileReader);
reader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United'
        && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United'
        && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchester united won " + manUnitedWins + " games");
