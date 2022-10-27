import { useContext } from 'react';
import { RobotContext } from '../context/context';
import { Robot } from '../../models/robot';

import { RobotItem } from '../robots/robot.item';

export function RobotList() {
    const { robots } = useContext(RobotContext);
    console.log(robots);

    return (
        <>
            <section className="robots-List">
                <h2>Robots</h2>

                <ul className="robots-List">
                    {robots.map((item: Robot) => (
                        <RobotItem item={item}></RobotItem>
                    ))}
                </ul>
            </section>
        </>
    );
}
