import Board from "./Board";

export const ItemTypes = {
    KNIGHT: 'knight'
}

export default function Chess() {
    return (
        <div
            style={{
                width: '40rem',
                height: '30rem',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
            <Board />
        </div>
    )
}