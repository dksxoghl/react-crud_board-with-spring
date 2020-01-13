import React from 'react';

function BoardItem({row, readBoard,deleteBoard}) {
    const handleRead = () => {
        readBoard(row.bno);
    }
    const handleDelete = () => {
        deleteBoard(row.bno);
    }
    return (
        <tr>
            <td>{row.bno}</td>
            <td><a onClick={handleRead}>{row.brdtitle}</a></td>
            <td>{row.brdwriter}</td>
            <td>{row.brddate.toLocaleDateString('ko-KR')}</td>
            <td><a onClick={handleDelete}>X</a></td>
        </tr>
    );
}

export default BoardItem;