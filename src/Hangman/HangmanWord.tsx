type HangmanWordProps = {
    wordToGuess: string,
    guessedLetters: string[],
    reveal: boolean
}

export function HangmanWord({ wordToGuess, guessedLetters, reveal }: HangmanWordProps) {
    return <div className="d-flex gap-3 font-monospace fs-1 fw-bold text-uppercase">
        {wordToGuess.split("").map((letter, index) => (
            <span key={index} className="border-bottom border-dark border-5">
                <span className={guessedLetters.includes(letter) ? "" : reveal ? "text-danger" : "invisible"}>{letter}</span>
            </span>
        ))}
    </div>
}