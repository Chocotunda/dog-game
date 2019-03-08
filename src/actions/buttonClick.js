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

export function setResult () {
    return function (dispatch){
    const try1 = 1
  
    dispatch(buttonClick(try1))
  }
}


export function buttonClick(payload) {
    return {
      type: "BUTTON_CLICK",
      payload: payload
    };
  }


