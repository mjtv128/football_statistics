import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {WinsAnalysis} from './analysers/WinsAnalysis'
import {ConsoleReport} from './reportTargets/ConsoleReport'
import {Summary} from './Summary'
import {HtmlReport} from './reportTargets/HtmlReport'

//Create an object that satistifes the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

//Create an instance of MatchReader and pass in something 
//satisfying the 'Data Reader"interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(
    new WinsAnalysis("Man United"), 
    new HtmlReport()
)
summary.buildAndPrintReport(matchReader.matches)


