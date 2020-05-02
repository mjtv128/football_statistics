"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
//Create an object that satistifes the DataReader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something 
//satisfying the 'Data Reader"interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
//just creating is not enough
//you need to load it to tell it to assign it to type prop
matchReader.load();
//matchReader.matches <-- info to be iterated
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
