import React, {useState} from "react";
import data from "../../../data"
import OperatorButton from "./OperatorButton";
import "../../../App.css"
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
	// STEP 2 - add the imported data to state
	
	const [operator, setOperator] = useState(data.operators);
  return (
    <div className="operators-container">
      {operator.map(opr => <OperatorButton key={opr.id} buttonChar={opr.char}/>)}
    </div>
  );
};
export default Operators;