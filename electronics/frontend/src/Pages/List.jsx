import React, { useEffect, useState } from 'react'
import { backend_url } from '../api/main_url';
import axios from 'axios';
import { Link } from 'react-router-dom';
function List() {
  let [allDatas,setAllDatas]=useState([]);
  useEffect(()=>{
    async function Api(){
        const url=await axios.get(backend_url+"/list");
        setAllDatas(url.data);
    }
    Api()
  },[])
  return (
    <>
      <table className='table border table-striped'>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Image</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
          {allDatas.map((e,i)=>(
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>
                  <img src={backend_url+"/image/"+e.img} alt="" height={'50'}/>
                </td>
                <td>{e.mobile}</td>
                <td>
                    <Link to={'/view/'+e._id}>
                        <i className='btn fa fa-eye text-primary'></i>
                    </Link>
                    <Link to={'/edit/'+e._id}>
                        <i className='btn fa fa-edit  text-success'></i>
                    </Link>
                    <i className='btn fa fa-trash text-danger'></i>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default List
