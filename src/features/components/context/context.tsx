import { createContext } from 'react';
import { Robot } from '../../models/robot';

const initialContext: {
    robots: Array<Robot>;
    // handleAdd: (newRobot: Robot) => void;
    handlerEraser: (deletedID: number) => void;
} = {
    robots: [],
    // handleAdd: () => undefined,
    handlerEraser: () => undefined,
};

export const RobotContext = createContext(initialContext);
