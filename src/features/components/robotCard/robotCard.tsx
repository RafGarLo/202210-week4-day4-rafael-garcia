import { Robot } from '../../models/robot';

export function RobotCard({ robot }: { robot: Robot }) {
    console.log(robot);
    return (
        <>
            <li className=".robots-List__item">
                <div>
                    <img src={robot.image} alt={robot.name} />
                </div>
                <ul>
                    <li>Name: {robot.name}</li>
                    <li>Endurance: {robot.endurance}</li>
                    <li>Speed: {robot.strength}</li>
                    <li>Date Creation: {robot.creationDate}</li>
                </ul>
            </li>
        </>
    );
}
