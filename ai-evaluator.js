function evaluateStats(stats) {
  let feedback = "";

  // WR Stats Evaluation
  if (stats.receptions !== undefined && stats.yards !== undefined && stats.tds !== undefined) {
    feedback += `Wide Receiver Evaluation:\n`;
    feedback += `Catches: ${stats.receptions}, Yards: ${stats.yards}, Touchdowns: ${stats.tds}\n`;

    if (stats.receptions < 5) {
      feedback += "Focus on improving your catching consistency.\n";
    } else if (stats.yards < 50) {
      feedback += "Work on gaining more yards after the catch.\n";
    } else {
      feedback += "Great job as a WR this week! Keep it up!\n";
    }
  }

  // DB Stats Evaluation
  if (stats.tackles !== undefined && stats.interceptions !== undefined && stats.passBreakups !== undefined) {
    feedback += `\nDefensive Back Evaluation:\n`;
    feedback += `Tackles: ${stats.tackles}, Interceptions: ${stats.interceptions}, Pass Breakups: ${stats.passBreakups}\n`;

    if (stats.tackles < 3) {
      feedback += "Focus on improving your tackling form.\n";
    } else if (stats.interceptions < 1) {
      feedback += "Try to read the quarterback better to force turnovers.\n";
    } else {
      feedback += "Excellent performance as a DB this week!\n";
    }
  }

  return feedback;
}

// Example Usage:
const exampleStats = {
  receptions: 4,
  yards: 60,
  tds: 1,
  tackles: 5,
  interceptions: 0,
  passBreakups: 2
};

console.log(evaluateStats(exampleStats));