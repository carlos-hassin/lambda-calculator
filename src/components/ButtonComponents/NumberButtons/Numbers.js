import React, {useState} from "react";
import NumberButton from "./NumberButton";
import data from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbers, setNumbers] = useState(data.numbers);
  return (
    <div className="button_container">
      {numbers.map(number => <NumberButton key={number} number={number}/>)}
    </div>
  );
};

export default Numbers;