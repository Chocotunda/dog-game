// import { setCorrectAnswer } from "./fetch";


// export function buttonClick() {
//     console.log("hey", correct)
//     return function (value){
//       if (value === setCorrectAnswer) {
//           return console.log("true")
//       }  else {
//           console.log("false")
//       }
// }
// }

export function button () {
    return function (dispatch){
    const try1 = "green"
  
    dispatch(setColor(try1))
  }
}


export function setColor(payload) {
    return {
      type: "SET_COLOR",
      payload: payload
    };
  }
