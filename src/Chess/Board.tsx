import { useState, useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Square from './Square';
import Knight from './Knight';

export default function Board() {
    const [knightPosition, setKnightPosition] = useState([0, 0]);

    const squares = useMemo(() => {
        const renderSquare = (i, knightPosition) => {
            const x = i % 8
            const y = Math.floor(i / 8)

            const canMoveKnight = (toX, toY) => {
                const [x, y] = knightPosition
                const dx = toX - x
                const dy = toY - y

                return (
                    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
                    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
                )
            };

            const moveKnight = (toX, toY) => setKnightPosition([toX, toY]);

            const renderPiece = (x, y, [knightX, knightY]) => {
                if (x === knightX && y === knightY) {
                    return <Knight />
                }
            }

            return (
                <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
                    <Square x={x} y={y} moveKnight={moveKnight} canMoveKnight={canMoveKnight}>
                        {renderPiece(x, y, knightPosition)}
                    </Square>
                </div>
            )
        };

        const squares = [];

        for (let i = 0; i < 64; i++) {
            squares.push(renderSquare(i, knightPosition))
        }

        return squares;
    }, [knightPosition]);

    return (
        <DndProvider backend={HTML5Backend}>
            {squares}
        </DndProvider>
    )
}