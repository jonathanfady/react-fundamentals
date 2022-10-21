import { useDrop } from 'react-dnd'
import { ItemTypes } from './Chess'

function Overlay({ color }) {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: color,
            }}
        />
    )
}

export default function Square({ x, y, moveKnight, canMoveKnight, children }) {
    const black = (x + y) % 2 === 1

    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: ItemTypes.KNIGHT,
            canDrop: () => canMoveKnight(x, y),
            drop: () => moveKnight(x, y),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        }),
        [moveKnight, canMoveKnight]
    )


    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}
        >
            <div
                style={{
                    backgroundColor: black ? 'black' : 'white',
                    color: black ? 'white' : 'black',
                    width: '100%',
                    height: '100%'
                }}>
                {children}
            </div>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    )
}