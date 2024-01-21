import React, { useEffect, useState } from 'react'
import HomeBannerImage from './bannerComponents/HomeBannerImage'
import UserButtons from './bannerComponents/UserButtons'

const HomeBanner = () => {
    const [currentBannerComponent, setCurrentBannerComponent] = useState('image')

    const renderBannerComponents = () =>{
        if (currentBannerComponent === 'image'){
            return <HomeBannerImage />
        }else if (currentBannerComponent === 'button'){
            return <UserButtons />
        }
    }

    const changeComponent = () =>{
        if (currentBannerComponent === 'image'){
            setCurrentBannerComponent('button')
        }else{
            setCurrentBannerComponent('image')
        }
    }
    
    useEffect(() => {
        // Invoke the function here
        renderBannerComponents();
    }, [currentBannerComponent]);

  return (
    <div>
        <div className="bg-white relative ">
            <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
                <div className="pr-2 md:mb-14 py-14 md:py-0">
                    <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span className="block w-full">Get a financial experience</span> for growing your business!</h1>
                    <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
                        Empowering you to make better financial decisions, We truly are professional money planners...
                    </p>

                    <div className="mt-4">
                        {
                            currentBannerComponent === 'image' ? (
                                <a onClick={()=> changeComponent()} 
                                    className="px-5 py-3 text-lg cursor-pointer tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group">
                                        <>Join With Us</>
                                </a>
                            ) :
                            <></>
                        }
                    </div>

                </div>

                {renderBannerComponents()}




            </div>
        </div>

    </div>
  )
}

export default HomeBanner