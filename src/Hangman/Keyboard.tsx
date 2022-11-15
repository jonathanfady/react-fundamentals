const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    isDisabled: boolean
}


export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, isDisabled }: KeyboardProps) {
    return <div className="grid text-center gap-1 mt-3">
        {
            KEYS.map((key, index) => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)

                return <button
                    className={`btn btn-lg rounded-0 text-uppercase ${isActive ? "btn-success" : isInactive ? "btn-outline-danger" : "btn-outline-dark"} ${(isActive || isInactive || isDisabled) ? "disabled" : ""}`}
                    type="button"
                    key={key}
                    onClick={() => addGuessedLetter(key)}>
                    {key}
                </button>
            })
        }
    </div>
}