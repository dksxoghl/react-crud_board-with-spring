import React, { useState, useCallback, useEffect, FormEvent, ChangeEvent } from 'react';
import { Board } from '../modules/boards';
// import { useSelector } from 'react-redux';

type BoardFormProps = {
    createBoard: (board: Board) => void;
    selectedBoard: Board;
    updateBoard: (board:Board, bno: number) => void;
}

function BoardForm({ createBoard, selectedBoard ,updateBoard}:BoardFormProps) {
    // const selectedBoard = useSelector((state) => state.boards.selectedBoard);
    const initialSelectedBoard = {
        bno: 0,
        subject: "",
        content: "",
        writer: "",
        reg_date: ""
    };
    const [board, setBoard] = useState(initialSelectedBoard);
    const [select, setSelect] = useState(false);
    const handleChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value)
        setBoard({ ...board, [e.target.name]: e.target.value });
    }, [board]); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
    // const handleChange = (e) => {
    //     console.log(e.target.name,e.target.value)
    //     setBoard({...board, [e.target.name]: e.target.value });
    // }; 

    const handleSave = (e: FormEvent) => {
        e.preventDefault();
        console.log(select)
        {
            select ?
            updateBoard(board,selectedBoard.bno)
            : createBoard(board)
        }
        setBoard(initialSelectedBoard);
    }

    useEffect(() => {
        console.log('changed', selectedBoard);
        if (selectedBoard.bno>0) {
            setSelect(true);
            console.log('setSelect', true);
        }
        setBoard(selectedBoard);
    }, [selectedBoard])

    return (
        <form onSubmit={handleSave}>
            <input placeholder="subject" type="text" name="subject" value={board.subject || ""} onChange={handleChange} />
            <input placeholder="content" type="text" name="content" value={board.content || ""} onChange={handleChange} />
            <input placeholder="writer" type="text" name="writer" value={board.writer || ""} onChange={handleChange} />
            <button type="submit">Save</button>
        </form>
    );
}

export default React.memo(BoardForm);