import React from 'react';
import { ITask } from '../Interfaces/Interfaces';


interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

export const TodoTask = ({ task }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button></button>
        </div>
    )
}