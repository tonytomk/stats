import { MatchData } from "./MatchData";
import { WinzAnalysis } from "./analyzers/WinzAnalysis";
import { HtmlReport } from "./reports/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {

  constructor(public analyzer: Analyzer,
    public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }

  static winsAnalsisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinzAnalysis(team),
      new HtmlReport()
    );
  }

}