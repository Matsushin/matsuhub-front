import { createSlice} from '@reduxjs/toolkit';
import { createCanvas } from 'api/canvasesAPI';
import { getCanvas } from 'api/canvasesAPI';
import { AppThunk } from 'app/store';
import { Canvas } from 'models/canvases';
import toastMessage from 'features/toastMessage/toastMessage';

interface CanvasState {
  createdCanvas: Canvas | null;
  canvas: Canvas | null;
}

const initialState: CanvasState = {
  createdCanvas: null,
  canvas: null
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState: initialState,
  reducers: {
    createCanvasSuccess: (state, action) => {
      state.createdCanvas = action.payload;
    },
    createdCanvasReset: state => {
      state.createdCanvas = undefined;
    },
    getCanvasSuccess: (state, action) => {
      state.canvas = action.payload;
    }
  }
});
export default canvasSlice.reducer;

export const {
         createCanvasSuccess,
         getCanvasSuccess,
         createdCanvasReset
       } = canvasSlice.actions;

export const newCanvas = (title): AppThunk => async dispatch => {
  try {
    const canvas: Canvas = await createCanvas(title);

    dispatch(createCanvasSuccess(canvas));
    toastMessage(['キャンバスを作成しました'], 'success');
  } catch (err) {
    console.log(err);
    toastMessage([`キャンバス作成に失敗しました　${err}`], 'error');
  }
};

export const fetchCanvas = (canvasId): AppThunk => async dispatch => {
  try {
    const canvas: Canvas = await getCanvas(canvasId);

    dispatch(getCanvasSuccess(canvas));
  } catch (err) {
    console.log(err);
    toastMessage(
      [`キャンバス情報の取得に失敗しました　${err}`],
      'error'
    );
  }
};