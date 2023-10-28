'use client'
import  {React, useState} from 'react'
import ImageUploading from 'react-images-uploading';

const test = () => {

    const [images, setImages] = useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

  return (
    <div className='w-full h-screen'>
        <input className='w-60 h-10 border-2 rounded-lg px-6' placeholder='Enter the username'/>
        <div className="App">
            <ImageUploading
                multiple={false}
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            />
        </div>
    </div>
  )
}

export default test