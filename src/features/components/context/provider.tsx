import { useState } from 'react';
import { Robot } from '../../models/robot';

export function TodoContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots: Array<Robot> = [];
    const [robots, setRobots] = useState(initialRobots);

    const handleAdd = (newRobot: Robot) => {
        setRobots([...robots, newRobot]);
    };
    const handlerEraser = (deletedID: number) => {
        
        setRobots(robots.filter((item) => item.id !== deletedID));
            
        
    };
    const handlerComplete = (robot: Robot) => {
        updateRobot(robot.id, { isComplete: !robot.isComplete }); 
            (robot: { id: number; }) => {
                robots.map((item) =>
                    item.id === robot.id
                        ? { ...item, isComplete: !item.isComplete }
                        : item
                )};
            
        
    };

function updateRobot(id: number, arg1: { isComplete: boolean; }) {
    throw new Error('Function not implemented.');
}

