import { useCallback, useEffect, useState } from 'react'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'
import words from './wordList.json'

function GetWord() {
    return words[Math.floor(Math.random() * words.length)];
}

export default function Hangman() {
    const [wordToGuess, setWordToGuess] = useState(GetWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter))
    const lose = (incorrectLetters.length >= 6)
    const win = wordToGuess.split("").every((letter) => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || win || lose) return

        setGuessedLetters((currentLetters) => [...currentLetters, letter])

    }, [guessedLetters, win, lose])

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key;
            if (!key.match(/^[a-z]$/)) return

            addGuessedLetter(key)
        }
        document.addEventListener("keyup", handler)

        return () => { document.removeEventListener("keyup", handler) }
    }, [guessedLetters])

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (event.key !== "Enter") return

            setGuessedLetters([])
            setWordToGuess(GetWord)
        }

        document.addEventListener("keyup", handler)

        return () => { document.removeEventListener("keyup", handler) }
    }, [])

    return (
        <div className="d-flex flex-column g-2 align-items-center">
            <h3 className={win ? "text-success" : ""}>
                {
                    win ?
                        "You win ! Refresh or press 'Enter' to play again."
                        : lose ? "You lose... Refresh or press 'Enter' to try again." : ""
                }
            </h3>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} reveal={lose} />
            <Keyboard
                activeLetters={guessedLetters.filter(letter => (wordToGuess.includes(letter)))}
                inactiveLetters={incorrectLetters}
                addGuessedLetter={addGuessedLetter}
                isDisabled={win || lose} />
        </div>
    )
}
