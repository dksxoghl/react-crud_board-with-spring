import React, { useState, useCallback } from 'react';

function BoardForm({createBoard}) {
    const [board, setBoard] = useState({});
    const handleChange = useCallback((e) => {
        setBoard({[e.target.name]: e.target.value});
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
    
    const handleSave = () => {
        createBoard(board);
        setBoard({});
    }
    return (
        <div>
            <input placeholder="title" name="brdtitle" value={board.brdtitle} onChange={handleChange} />
            <input placeholder="name" name="brdwriter" value={board.brdwriter} onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default BoardForm;