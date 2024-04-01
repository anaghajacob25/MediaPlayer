import axios from "axios";

export const commonAPI=async (httpmethod,url,reqBody)=>{
    let reqConfig={
        method:httpmethod,
        url,        //mean url:url
        data:reqBody,
        Headers:{
            'Content-Type':'application/json'
        }
    }

  return  await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}


//content-type 
//1.application/json - content in net
//2.multiparts/home  - system upload content 