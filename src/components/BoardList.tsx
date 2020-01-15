import React from 'react';
import BoardItem from './BoardItem'
import { Board } from '../modules/boards';

type BoardListProps = {
    readBoard: (bno: number) => void;
    onDelete: (bno: number) => void;
    boards: Board[];
}

function BoardList({ readBoard, onDelete, boards }: BoardListProps) {
    return (
        <div>
             <table>
                <tbody>
                    <tr>
                        <td>No.</td>
                        <td>Subject</td>
                        <td >Content</td>
                        <td >Writer</td>
                        <td>Date</td>
                    </tr>
                    {
                        boards.map(row =>
                            (<BoardItem key={row.bno} row={row} readBoard={readBoard} onDelete={onDelete} />)
                        )
                    }
                </tbody>
            </table>
            {/* <table border="1">
                <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <td width="300">Subject</td>
                        <td width="100">Content</td>
                        <td width="100">Writer</td>
                        <td width="100">Date</td>
                    </tr>
                    {
                        boards.map(row =>
                            (<BoardItem key={row.bno} row={row} readBoard={readBoard} onDelete={onDelete} />)
                        )
                    }
                </tbody>
            </table> */}
        </div>
    );
}

export default BoardList;