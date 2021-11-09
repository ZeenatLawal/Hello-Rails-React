import apiGreetings from "./Api";

const GET_GREETINGS = 'hello-rails-react/greetings/GET_GREETINGS';

const initialState = {};

const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

export const getGreetingsSuccess = () => async (dispatch) => {
  const greetings = await apiGreetings();

  if (greetings) {
    dispatch(getGreetings(greetings));
  }
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default greetingsReducer;
