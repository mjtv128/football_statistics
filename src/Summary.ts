import {MatchData} from './MatchData'

export interface Analyzer {
    run(matches: MatchData[]): string 
}

export interface OutputTarget{
    print(report: string): void
}

export class Summary{
    //KEY
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}
}


new Summary(new WingsAnalysis(), new ConsoleReport());


