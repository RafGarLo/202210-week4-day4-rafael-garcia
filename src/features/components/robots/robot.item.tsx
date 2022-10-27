import { useContext } from 'react';
import { Robot } from '../../models/robot';
import { RobotContext } from '../context/context';
import styles from './robot.item.module.css';

export function RobotItem({ item }: { item: Robot }) {
    const { handlerEraser } = useContext(RobotContext);

    const handleClick = () => {
        handlerEraser(item.id);
    };

    return (
        <li className={styles.host}>
            <img src={item.image} alt={item.name} />
            <div>
                <span>
                    <h2>Nombre: {item.name}</h2>
                </span>
                <span>Velocidad: {item.strength}</span>
                <span>Resistencia: {item.endurance}</span>
                <span>Nacimiento: {item.creationDate}</span>
                <span className={styles.button} onClick={() => handleClick()}>
                    🗑️
                </span>
            </div>
        </li>
    );
}
