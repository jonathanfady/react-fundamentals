const HEAD = (
    <div key="HEAD"
        style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "50px",
            right: "-20px",
        }} />
)

const BODY = (
    <div key="BODY"
        style={{
            width: "10px",
            height: "80px",
            background: "black",
            position: "absolute",
            top: "100px",
            right: 0,
        }} />
)

const RIGHT_ARM = (
    <div key="RIGHT_ARM"
        style={{
            width: "70px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "120px",
            right: "-65px",
            transform: "skewY(-20deg)"
        }} />
)

const LEFT_ARM = (
    <div key="LEFT_ARM"
        style={{
            width: "70px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "120px",
            right: "5px",
            transform: "skewY(20deg)"
        }} />
)

const RIGHT_LEG = (
    <div key="RIGHT_LEG"
        style={{
            width: "70px",
            height: "15px",
            background: "black",
            position: "absolute",
            top: "205px",
            right: "-60px",
            transform: "skewY(50deg)"
        }} />
)

const LEFT_LEG = (
    <div key="LEFT_LEG"
        style={{
            width: "70px",
            height: "15px",
            background: "black",
            position: "absolute",
            top: "205px",
            right: "1px",
            transform: "skewY(-50deg)"
        }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div style={{ position: "relative" }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{ position: "absolute", top: 0, right: 0, width: "10px", height: "50px", background: "black" }} />
            <div style={{ marginLeft: "95px", width: "150px", height: "10px", background: "black" }} />
            <div style={{ marginLeft: "95px", width: "10px", height: "280px", background: "black" }} />
            <div style={{ width: "200px", borderTop: "10px solid black" }} />
        </div>
    )
}