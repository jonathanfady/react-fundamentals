import { useDrag } from "react-dnd"
import { ItemTypes } from './Chess'

export default function Knight() {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return <div
        className="text-center"
        ref={drag}
        style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 40,
            fontWeight: 'bold',
            cursor: 'move',
        }}
    >
        ♘
    </div>
}