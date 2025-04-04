import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend_url } from '../api/main_url';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  let navigate=useNavigate();
  let {id}=useParams();
  let formDatas={
    name:"",
    age:"",
    mobile:"",
    img:"",
    pwd:""
  }
  let [allDatas,setAllDatas]=useState(formDatas);

  let valueTyping=(e)=>{
    let {name,value}=e.target;
    
    setAllDatas((prev)=>{
      return {
        ...prev,[name]:value
      }
    })
  }

  let submitData=(e)=>{

    e.preventDefault();
    let editUrl=backend_url+"/update";
    axios.post(editUrl,allDatas,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(()=>{
      navigate('/')
    })
    .catch((e)=>{
      console.log(e.message);
      
    })
  }
  console.log(allDatas);
  
  useEffect(()=>{
    async function Api(){
        const url=await axios.get(backend_url+"/edit/"+id);
        setAllDatas(url.data);
    }
    Api()
  },[])
  return (
    <>
    <form >
      <input onChange={valueTyping} type="text" name="name" placeholder="Enter Name" value={allDatas.name}/>
      <br/><br/>
      <input onChange={valueTyping} type="number" name="age" placeholder="Enter Age" value={allDatas.age}/>
      <br/><br/>
      <input onChange={valueTyping} type="text" name="mobile" placeholder="Enter Mobile" value={allDatas.mobile}/>
      <br/><br/>
      <input onChange={valueTyping} type="password" name="pwd" placeholder="Enter Password" value={allDatas.pwd}/>
      <input onChange={valueTyping} type="hidden" name="_id" placeholder="Enter Password" value={allDatas._id}/>
      <br/><br/>
      
      <label for="myImg">
          <img src={backend_url+"/image/"+allDatas.img} height="100" alt="" id="img_label"/>
      </label>
      <br/>
      <input type="file" name="img" id="myImg" hidden accept="image/*"/>
      <input  type="submit" onClick={submitData}/>
    </form>
    </>
  )
}

export default Edit
