/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { useState } from "react";


function FormsReact() {
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const handlerChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
    if(e.target.value == "js"){
      setData("JS is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS")
    }
    if(e.target.value == "php"){
      setData("PHP is a general-purpose scripting language geared toward web development.PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or as a Common Gateway Interface (CGI) executable.") 
    }
    if(e.target.value == "python"){
      setData("Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.") 
    }
    if(e.target.value == "choose"){
      setData("") 
    }
  };

  return (
    <div>
      <select value={value} onChange={handlerChange}>
      <option value="choose">Выберите язык программирования</option>
        <option value="js">javaScript</option>
        <option value="php">PHP</option>
        <option value="python">Python</option>
      </select>
      <p>{data}</p>
    </div>
  );
}

export default FormsReact;