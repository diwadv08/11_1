import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { backend_url } from '../api/main_url';
function View() {
  let {id}=useParams();
  
  let [allDatas,setAllDatas]=useState([]);
  useEffect(()=>{
    async function Api(){
        const url=await axios.get(backend_url+"/view/"+id);
        setAllDatas(url.data);
    }
    Api()
  },[])
  
  return (
    <>
      <h1>{allDatas.name}</h1>
      <h4>{allDatas.age}</h4>
      <img src={backend_url+"/image/"+allDatas.img} alt="" height={'300'}/>
      <button>{allDatas.mobile}</button>
    </>
  )
}

export default View
