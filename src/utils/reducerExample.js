export const reducer = (state, action) => {
  // console.log({state, action})
  switch (action.key) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

      break;
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
      break;
    case "Reset":
      return {
        ...state,
        counter: 0,
      };
      break;
    case "firstName":
      return {
        ...state,
        firstName: action.payload,
      };
      break;
    case "lastName":
      return {
        ...state,
        lastName: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
//   if (action.key == "increment") {
//     return {
//       ...state,
//       counter: state.counter + action.payload,
//     };
//   } else if (action.key == "decrement") {
//     return {
//       ...state,
//       counter: state.counter - action.payload,
//     };
//   } else if (action.key == "Reset") {
//     return {
//       ...state,
//       counter: 0,
//     };
//   } else if (action.key == "firstName") {
//     return {
//       ...state,
//       firstName: action.payload,
//     };
//   } else if (action.key == "lastName") {
//     return {
//       ...state,
//       firstName: action.payload,
//     };
//   } else {
//     return state;
//   }

  // console.log(state)
  // console.log(action)
};

export const initialState = {
  counter: 0,
  firstName: "jaskaran",
  lastName: "Singh",
};
