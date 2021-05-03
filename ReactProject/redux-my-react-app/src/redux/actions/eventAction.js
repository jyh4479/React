const SET_TEXT = 'SET_TEXT'; //-->상태값 변경을 위한 선언
const SET_COLOR = 'SET_COLOR';

const setText = (obj)=>({
  type: SET_TEXT,
  ...obj
})
const setColor = (obj)=>({
  type: SET_COLOR,
  ...obj
})
export default{
  SET_TEXT,
  SET_COLOR,
  setText,
  setColor
}