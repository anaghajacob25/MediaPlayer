import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllVideoHistory } from '../services/allAPI'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function WatchHistory() {

  const [historyVideo,setHistoryVideo]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)


  //function get all videos in history
  const getHistory=async()=>{
    const response=    await getAllVideoHistory()
    // console.log(response);

    setHistoryVideo(response.data)
  }
  // console.log(historyVideo);

  //function to delete video from history
  const handleDelete=async(id)=>{
    const response=await deleteWatchHistory(id)
    // console.log(response);
    if(response.status>=200 && response.status<300){
         setDeleteVideoStatus(true)
    }else{
      toast.error('something went wrong')
    }
  }


  useEffect(()=>{
    getHistory()
    setDeleteVideoStatus(false)
  },[deleteVideoStatus])

  return (
   <>
      <div className='d-flex justify-content-between align-items-center mx-5 p-5'>
        <h3>Watch History</h3>
       <h5> <Link to={'/home'} style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faArrowLeft} beat className='me-3' />Back to Home</Link></h5>
      </div>

  <div className='d-flex justify-content-between align-items-center mx-5 p-4'>
  {historyVideo?.length>0?
        <table className='table m-5'>
          
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
  
          <tbody>
            {historyVideo.map((item,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><a href={item.url} target='_blank'>{item.url}</a></td>
              <td>{item.timeStamp}</td>
              <td>
                <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
              </td>
            </tr>
            ))}
          </tbody>

        </table>: 
        <p className='text-danger fa-4'>No Watch History</p>
            }  
  </div>
  <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

   </>
  )
}

export default WatchHistory