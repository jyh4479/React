const SET_TEXT = 'SET_TEXT';

const setText = (obj)=>({
  type: SET_TEXT,
  ...obj
})
export default{
  SET_TEXT,
  setText
}
