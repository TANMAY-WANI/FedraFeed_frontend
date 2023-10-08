import {React, useEffect, useState} from 'react'
import {AiOutlineLeftCircle, AiOutlineRightCircle} from "react-icons/ai"
import axios from "axios"
import {FallingLines} from "react-loader-spinner"
import { motion, useAnimation } from "framer-motion";

const Carousel = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const [imageArray, setImageArray] = useState([])
    const imageAnimation = useAnimation();

    useEffect(() => {
        axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")
          .then((response) => {
            const responseData = response.data.photos;
            setImageArray(Object.values(responseData))
            console.log(Object.values(responseData))
          })
          .catch((error) => {
            console.error("API request failed:", error);
          });
      }, [imageIndex]);
      

    const handleLeftChange =async () =>{
        await imageAnimation.start({ opacity: 0 });
        setImageIndex((imageIndex+1) % (imageArray.length))
        imageAnimation.start({ opacity: 1 });
    }

    const handleRightChange = async () =>{
        await imageAnimation.start({ opacity: 0 });
        setImageIndex((imageIndex + -1 + imageArray.length) %(imageArray.length) )
        imageAnimation.start({ opacity: 1 });
    }

  return (
    <>
    <div className='w-screen flex flex-col items-center'>

        <h1 className='text-8xl font-semibold'>Welcome to APP</h1>

        <div className='w-full flex justify-center mt-20'>
            <div className='w-96 flex gap-4 items-center'>
            <span><AiOutlineLeftCircle className='text-black text-2xl cursor-pointer' onClick={handleLeftChange}/></span>
            {imageArray.length > 0 && imageArray[imageIndex] ? <>
            
                <motion.img
                initial = {{
                    opacity: 1
                }}
                animate={imageAnimation}
                src={imageArray[imageIndex].url} alt="" className='rounded-md'/>
            </>:
            <>
            <FallingLines color="#36d7b7"/>
            </>}
           
            <span><AiOutlineRightCircle className=' text-black text-2xl cursor-pointer' onClick={handleRightChange}/></span>
            </div>
        </div>

    </div>
    </>
  )
}

export default Carousel
