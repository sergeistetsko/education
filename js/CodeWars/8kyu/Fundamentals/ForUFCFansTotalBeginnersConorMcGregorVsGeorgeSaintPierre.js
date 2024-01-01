function quote(winner) {
    winner = winner.toLowerCase();
    if (winner === "george saint pierre") {
        return "I am not impressed by your performance.";
    } else if (winner === "conor mcgregor") {
        return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
    } else {
        return "Unknown fighter";
    }
}
