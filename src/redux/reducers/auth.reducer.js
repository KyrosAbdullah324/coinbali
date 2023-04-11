const initialState = {
  user: 'fdsf'
};

export default function authReducer(state = initialState, action) {
  const temp = { ...state };
  switch (action.type) {
    case "setUser":
      console.log(action.data);
      temp.user = action.data;
      return temp;
    default:
      return temp;
  }
}
