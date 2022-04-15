import {
  createSlice,
  createDraftSafeSelector,
  PayloadAction,
} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

interface PlayerState {
  startPlayer: string;
  firstPlayerStatus: Array<any>;
  secondPlayerStatus: Array<any>;
}

const scheduleInitialState: PlayerState = {
  startPlayer: 'player1',
  firstPlayerStatus: [],
  secondPlayerStatus: [],
};

const slice = createSlice({
  name: 'game',
  initialState: scheduleInitialState,
  reducers: {
    changeStartPlayer(state: PlayerState, {payload}: PayloadAction<string>) {
      state.startPlayer = payload;
    },
  },
});

const selectSchedule = createDraftSafeSelector(
  (state: PlayerState) => state.startPlayer,
  startPlayer => ({
    startPlayer,
  }),
);

export const scheduleSelector = {
  scheduleInfo: state => selectSchedule(state[GAME]),
};

export const GAME = slice.name;
export const gameReducer = slice.reducer;
export const gameAction = slice.actions;
