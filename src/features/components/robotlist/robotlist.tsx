import { useContext } from 'react';
import { RobotContext } from '../context/context';
import { Robot } from '../../models/robot';
import { AddRobot } from '../robots/add.robot';
import { RobotItem } from '../robots/robot.item';

export function RobotList() {
    const title = 'RobotList component';
    const { robots } = useContext(RobotContext);

    return (
        <section>
            <h2>Robots</h2>
            <AddRobot></AddRobot>
            <ul>
                {robots.map((item: Robot) => (
                    <RobotItem item={item}></RobotItem>
                ))}
            </ul>
        </section>
    );
}
