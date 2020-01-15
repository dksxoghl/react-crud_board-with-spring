import { combineReducers } from 'redux';
import boards from './boards';
import board_reducer from './boards';

const rootReducer = combineReducers({
    boards
    // boards:board_reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;