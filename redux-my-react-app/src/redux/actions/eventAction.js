const SET_TEXT = 'SET_TEXT'; //-->상태값 변경을 위한 선언

const setText = (obj)=>({
  type: SET_TEXT,
  color: SET_TEXT,
  ...obj
})
export default{
  SET_TEXT,
  setText
}
/*


*/
