import React from 'react';
import BoardForm from '../components/BoardForm';
import BoardList from '../components/BoardList';
import { useDispatch, useSelector } from 'react-redux';
import { onCreate,onDelete, onRead } from '../modules/board';

function BoardContainer() {
    const boards= useSelector((state)=>state.boards);
    const dispatch=useDispatch();
    const createBoard=(data)=>{
        dispatch(onCreate(data));
    }
    const deleteBoard=(bno)=>{
        dispatch(onDelete(bno));
    }
    const readBoard=(bno)=>{
        dispatch(onRead(bno));
    }
  return (
    <div>
      <BoardForm createBoard={createBoard}/>
      <BoardList readBoard={readBoard} deleteBoard={deleteBoard} boards={boards}/>
    </div>
  );
}

export default BoardContainer;