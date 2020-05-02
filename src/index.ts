import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {MatchResult} from './MatchResult'

//Create an object that satistifes the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

//Create an instance of MatchReader and pass in something 
//satisfying the 'Data Reader"interface
const matchReader = new MatchReader(csvFileReader)
//just creating is not enough
//you need to load it to tell it to assign it to type prop
matchReader.load()

//matchReader.matches <-- info to be iterated

let manUnitedWins = 0 

for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++
    } 
}

console.log(`Man United won ${manUnitedWins} games`)




