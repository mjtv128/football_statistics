"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//Create an object that satistifes the DataReader interface
// const csvFileReader = new CsvFileReader('football.csv')
//Create an instance of MatchReader and pass in something 
//satisfying the 'Data Reader"interface
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()
// const summary = new Summary(
//     new WinsAnalysis("Man United"), 
//     new HtmlReport()
// )
//shortcut for summary
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
