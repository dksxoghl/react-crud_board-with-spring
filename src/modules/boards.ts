import * as boardApi from '../api/apiBoard'
import { Dispatch } from 'react';

const CREATE = 'CREATE' as const;
const READ = 'READ' as const;
const GETLIST = 'GETLIST' as const;
const DELETE = 'DELETE' as const;




export type Board = {
    bno: number;
    subject: string;
    content: string;
    writer: string;
    reg_date: string;
}
export type Boards = {
    maxNo: number;
    boards: Array<Board>;
    selectedBoard: Board;
}
export const onCreate = (data: Board) => ({
    type: CREATE,
    data
})
export const onDelete = (bno: Board["bno"]) => ({
    type: DELETE,
    bno
})
export const onRead = (bno: Board["bno"]) => ({
    type: READ,
    bno
})
//전체글리스트반환
export const board_list = (list: Boards["boards"]) => ({
    type: GETLIST, list
});

type BoardAction = ReturnType<typeof onCreate> | ReturnType<typeof onDelete> | ReturnType<typeof onRead> | ReturnType<typeof board_list>


export const getBoards = () => async (dispatch: Dispatch<BoardAction>) => {
    try {
        const list = await boardApi.getLists(); // API 호출
        dispatch(board_list(list)); // 성공
        // board_list(list);
    } catch (e) {
        console.log(e.message) // 실패
    }
};
export const createBoards = (data: Board) => async (dispatch: Dispatch<BoardAction>) => {
    try {
        await boardApi.addList(data); // API 호출
        dispatch({ type: CREATE, data }); // 성공
        // board_list(list);
    } catch (e) {
        console.log(e.message) // 실패
    }
};
export const updateBoards = (data: Board, bno: Board["bno"]) => async (dispatch: Dispatch<BoardAction>) => {
    try {
        await boardApi.updateList(data, bno); // API 호출
        dispatch({ type: CREATE, data }); // 성공
        // board_list(list);
    } catch (e) {
        console.log(e.message) // 실패
    }
};
export const deleteBoard = (bno: Board["bno"]) => async (dispatch: Dispatch<BoardAction>) => {
    try {
        await boardApi.deleteList(bno); // API 호출
        //    onDelete(bno);
        console.log(bno)
        dispatch(onDelete(bno)); // 성공
    } catch (e) {
        console.log(e.message) // 실패
    }
};



const initialState: Boards = {
    maxNo: 1,
    boards: [
        //  {
        //     bno: 1,
        //     brdwriter: 'Lee SunSin',
        //     brdtitle: 'If you intend to live then you die',
        //     brddate: new Date()
        //  },
        // {bno: 14, subject: "asd", content: "asd", writer: "asd", reg_date: ""},
    ],
    selectedBoard: {
        bno: 0, subject: "", content: "", writer: "", reg_date: ""
    }
};

export default function board_reducer(state: Boards = initialState, action: BoardAction): Boards {
    let boards = state.boards;
    switch (action.type) {
        case GETLIST:
            console.log(action.list.length, '????');
            // console.log(action.list.boards,action.list.boards.length,'번호찌겅');
            // console.log(action.list, action.list.bno,'번호찌겅');
            return { ...state, maxNo: action.list[action.list.length - 1].bno, boards: boards.concat(action.list), selectedBoard: { bno: 0, subject: "", content: "", writer: "", reg_date: "" } };
        case CREATE:
            let data = action.data;
            let maxNo = state.maxNo;
            console.log('create no', maxNo)
            if (data.bno == 0 || !data.bno) {    // new : Insert
                const timestamp = Date.now(); // This would be the timestamp you want to format
                const time = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp);
                // console.log(new Intl.DateTimeFormat('ko-KR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
                return { maxNo: maxNo + 1, boards: boards.concat({ ...data, bno: maxNo + 1, reg_date: time }), selectedBoard: { bno: 0, subject: "", content: "", writer: "", reg_date: "" } };
            }
            return { ...state, boards: boards.map(row => data.bno === row.bno ? { ...data } : row), selectedBoard: { bno: 0, subject: "", content: "", writer: "", reg_date: "" } };
        case DELETE:
            return { ...state, boards: boards.filter(row => row.bno !== action.bno), selectedBoard: { bno: 0, subject: "", content: "", writer: "", reg_date: "" } };
        case READ:
            return {
                ...state,
                selectedBoard: boards.find(row => row.bno === action.bno)|| {
                    bno: 0, subject: "", content: "", writer: "", reg_date: ""
                }
            };
        default:
            return state;
    }
}