import React from 'react';
import BoardItem from './BoardItem'
function BoardList({readBoard,deleteBoard,boards}) {
  return (
    <div>
    <table border="1">
        <tbody>
        <tr align="center">
            <td width="50">No.</td>
            <td width="300">Title</td>
            <td width="100">Name</td>
            <td width="100">Date</td>
        </tr>
        {
            boards.map(row =>
                (<BoardItem key={row.bno} row={row} readBoard={readBoard} deleteBoard={deleteBoard} />)
            )
        }
        </tbody>
    </table>
</div>
  );
}

export default BoardList;