  
import React, {useState} from "react";
import "../../../App.css";
import SpecialButton from "../SpecialButtons/SpecialButton";
import data from "../../../data";

const Specials = () => {
 // STEP 2 - add the imported data to state
 const [specials, setSpecials] = useState(data.specials);
 return (
   <div className="special-buttons-container">
     {specials.map(special => <SpecialButton key={special} character={special} />)}
   </div>
 );
};
export default Specials;
