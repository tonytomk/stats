"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinzAnalysis_1 = require("./analyzers/WinzAnalysis");
var HtmlReport_1 = require("./reports/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    Summary.winsAnalsisWithHtmlReport = function (team) {
        return new Summary(new WinzAnalysis_1.WinzAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    return Summary;
}());
exports.Summary = Summary;
