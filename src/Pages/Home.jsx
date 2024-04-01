import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import './Home.css'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {

  const [uploadVideoStatus,setUploadVideoStatus] =useState({})
  const [videoDragAndRemoveStatus,setVideoDragAndRemoveStatus]=useState(false)

  return (
   <>
   <div className="container d-flex justify-content-between align-items-center mt-5">
     <Add setUploadVideoStatus={setUploadVideoStatus}/>
     <Link id="link">Watch History</Link>
   </div>
   <div className="row p-3 ">
      <div className="col-md-9">
        <h4 className='mt-4'>All Videos</h4>
        <View uploadVideoStatus={uploadVideoStatus} setVideoDragAndRemoveStatus={setVideoDragAndRemoveStatus}/>
      </div>
      <div className="col-md-3 px-4">
        <Category setVideoDragAndRemoveStatus={setVideoDragAndRemoveStatus} videoDragAndRemoveStatus={videoDragAndRemoveStatus}/>
      </div>
   </div>
   </>
  )
}

export default Home