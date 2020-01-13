const CREATE = 'CREATE';
const READ = 'READ';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';

export const onCreate = (data) => ({
    type: CREATE,
    data
})
export const onDelete = (bno) => ({
    type: DELETE,
    bno
})
export const onRead = (bno) => ({
    type: READ,
    bno
})
//전체글리스트반환
export const board_list = () => ({ type: UPDATE });

const initialState = {
    maxNo: 2,
    boards: [
         {
            bno: 1,
            brdwriter: 'Lee SunSin',
            brdtitle: 'If you intend to live then you die',
            brddate: new Date()
         },
    ],
    selectedBoard: {}
};
export default function board_reducer(state = initialState, action) {
    let boards = state.boards;
    switch (action.type) {
        case CREATE:
            let data = action.data;
            let maxNo = state.maxNo;
            if (!data.bno) {    // new : Insert
                return { maxNo: maxNo + 1, boards: boards.concat({ ...data, bno: maxNo, brddate: new Date() }), selectedBoard: {} };
            }
            return { ...state, boards: boards.map(row => data.bno === row.bno ? { ...data } : row), selectedBoard: {} };
        case DELETE:
            return { ...state, boards: boards.filter(row => row.bno !== action.bno), selectedBoard: {} };
        case READ:
            return {
                ...state,
                selectedBoard: boards.find(row => row.bno === action.bno)
            };
        default:
            return state;
    }
}