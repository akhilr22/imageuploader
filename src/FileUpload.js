import React,{useState} from "react";
import TopBarProgress from "react-topbar-progress-indicator";

function FileUpload(){
    const[image,setImage]=useState('')
    const[loading,setLoading]=useState(false)

    const uploadImage = async e =>{
        const files= e.target.files
        const data =new FormData()
        data.append('file',files[0])
        data.append('upload_preset','Akhilrmenon')
        setLoading(true)
        const res= await fetch(
            'https://api.cloudinary.com/v1_1/dsljwglky/image/upload',
            {
              method:'POST',
              body:data
            }
          )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }

    return (
        <>
        <h1>Upload Image </h1>
        <div >
        <button>
        <input type="file"  accept="image/png" placeholder="Upload an image"  onChange={uploadImage}>
        </input>
        </button> 
        </div>
        {loading ? (
            <TopBarProgress/>
                
        ):(
            <div ><img src={image} style={{width:'300px'}} alt="uploaded_img"/></div>
        )}
        </>
    )
}
export default FileUpload;