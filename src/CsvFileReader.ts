import fs from 'fs'
import {MatchResult} from './MatchResult'

type MatchData = [Date, string, string, number, number, MatchResult, string]

export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public filename: string) {}

    //implemented by child class
    //abstract methods
    abstract mapRow(row: string[]): T;
    
    read(): void {
    this.data = fs
        .readFileSync(this.filename, {
        encoding: "utf8",
        })
        .split("\n")

        .map((row: string): string[] => {
        return row.split(",");
        })

        .map(this.mapRow);
    }
    }


