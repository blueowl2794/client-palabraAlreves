import {React, useState, useRef} from 'react'
import { getText } from '../store/reducer';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import './search.css';

const Main = () => {

  const { texts } = useSelector(state => state.text);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  
  function handleChange(e){
    // e.preventDefault();
    setText(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(texts);
      dispatch(getText(text));
      setText("")
  }

  return (
    <div>
        <Search handleSubmit={handleSubmit} handleChange={handleChange}  text={text}/>
        <h1 className="mb-3">Results...</h1>
        <ul className="list-group">
          
          {
            texts? texts.map((i, index)=><List key={index} value={i} /> ) : <h2>no hay resultados..</h2>
            
          }
          
        </ul>
        
    </div>
  )
}

export default Main
