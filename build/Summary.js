"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    //KEY
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    return Summary;
}());
exports.Summary = Summary;
new Summary(new WingsAnalysis(), new ConsoleReport());
