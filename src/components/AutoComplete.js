import React,{useState} from "react";

const AutoComplete=({suggestions})=>{
 
  let [classChange,setClassChange]=useState("disable")
  let [inputVal,setInputVal]= useState("");

  function handleChange(e){
    setInputVal(e.target.value.toLowerCase());
    if(e.target.value===""){

      setClassChange("disable")
    }
    else{
      setClassChange("active")

    }
  }
  function handleSelectChange(e){
    setInputVal(e.target.value);
    setClassChange("disable");
  }
  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} value={inputVal}></input>
        <select className={classChange} onChange={handleSelectChange}>

          { suggestions.filter(country=> country.toLowerCase().includes(inputVal) ).map(item=> <option key={item} value={item}>{item}</option>)}
        </select>
      </form>
  
    </div>
  )
}

export default AutoComplete;