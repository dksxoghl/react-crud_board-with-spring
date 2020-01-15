import React from 'react';
import { Board } from '../modules/boards';


type BoardItemProps = {
    row:Board;
    readBoard: (bno: number) => void;
    onDelete: (bno: number) => void;
}
function BoardItem({row, readBoard,onDelete}:BoardItemProps){
    const handleRead = () => {
        readBoard(row.bno);
    }
    const handleDelete = () => {
        onDelete(row.bno);
    }
    return (
        <tr>
            <td>{row.bno}</td>
            <td><p onClick={handleRead}>{row.subject}</p></td>
            <td>{row.content}</td>
            <td>{row.writer}</td>
            <td>{row.reg_date}</td>
            <td><p onClick={handleDelete}>X</p></td>
            {/* .toLocaleDateString('ko-KR') */}
        </tr>
    );
}

export default BoardItem;