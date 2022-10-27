import { useContext } from 'react';
import { Robot } from '../../models/robot';
import { RobotContext } from '../context/context';
import { Robot } from '../../models/robot';

export function RobotItem({ item }: { item: Robot }) {
    const { handlerEraser, handlerComplete } = useContext(RobotContext);

    const handleClick = () => {
        handlerEraser(item.id);
    };
    const handleChange = () => {
        handlerComplete(item);
    };
    return (
        <li className={styles.host}>
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={handleChange}
            />
            <span>{item.id}</span> -<span>{item.name}</span>
            <span className="button" onClick={handleClick}>
                🗑️
            </span>
        </li>
    );
}
