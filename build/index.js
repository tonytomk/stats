"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('./data/football.csv');
reader.read();
var manUnitedWins = 0;
var matchResult;
(function (matchResult) {
    matchResult["HomeWin"] = "H";
    matchResult["AwayWin"] = "A";
    matchResult["Draw"] = "D";
})(matchResult || (matchResult = {}));
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United'
        && match[5] === matchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United'
        && match[5] === matchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchester united won " + manUnitedWins + " games");
