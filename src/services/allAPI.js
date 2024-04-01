
import { commonAPI } from "./commonAPI"
import { serverURL }  from "./serverUrl"



//api for uploading video

export const uploadVideoApi= async (reqBody)=>{
  return  await  commonAPI('POST',`${serverURL}/video`,reqBody)
}

//api to get uploaded video

export const getUploadedVideoApi= async ()=>{
return await commonAPI('GET',`${serverURL}/video`,'')
}

//api to delete a particular video

export const deleteAVideo=async(id)=>{
 return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}


//api to add video into history

export const AddToHistory=async(reqBody)=>{
 return await commonAPI('POST',`${serverURL}/history`,reqBody)
}

//api to get video from history

export const getAllVideoHistory=async()=>{
 return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete watch history

export const deleteWatchHistory =async(id)=>{
 return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add a category

export const addCategoryAPI=async(reqBody)=>{
  return await commonAPI('POST',`${serverURL}/category`,reqBody)
}

//api to get category
export const getCategoryAPI =async()=>{
  return await commonAPI('GET',`${serverURL}/category`,"")
}

//api to delete category

export const deleteCategoryAPI=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to get a single video from videos
export const getVideoAPI=async(id)=>{
  return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}

//api to update category
export const updateCategory=async(id,reqBody)=>{
  return await commonAPI('PUT',`${serverURL}/category/${id}`,reqBody)
}