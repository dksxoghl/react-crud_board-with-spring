import React, { useEffect } from 'react';
import BoardForm from '../components/BoardForm';
import BoardList from '../components/BoardList';
import { useDispatch, useSelector } from 'react-redux';
import {  onRead, getBoards ,deleteBoard, createBoards, updateBoards, Board} from '../modules/boards';
import { RootState } from '../modules';

function BoardContainer() {
    const boards = useSelector((state:RootState) => state.boards);
    console.log(boards)
    const dispatch = useDispatch();

    // 컴포넌트 마운트 후 포스트 목록 요청
    useEffect(() => {
    //   if(boards) return;
      dispatch(getBoards());
    }, [dispatch]);
// boards,
    const createBoard = (data:Board) => {
        // dispatch(onCreate(data));
        dispatch(createBoards(data));
    }
    const updateBoard = (data:Board,bno:Board["bno"]) => {
        dispatch(updateBoards(data,bno));
    }
    const onDeleteB = (bno:Board["bno"]) => {
        // dispatch(onDelete(bno));
        // deleteBoard( dispatch(onDelete(bno)));
        dispatch(deleteBoard(bno));
    }
    const readBoard = (bno:Board["bno"]) => {
        dispatch(onRead(bno));
    }
    return (
        <div>
            <BoardForm createBoard={createBoard} updateBoard={updateBoard} selectedBoard={boards.selectedBoard} />
            <BoardList readBoard={readBoard} onDelete={onDeleteB} boards={boards.boards} />
        </div>
    );
}

export default BoardContainer;