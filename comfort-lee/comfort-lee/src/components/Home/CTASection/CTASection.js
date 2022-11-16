import React from 'react'
import img1 from '../../../img/image 346.png'
import img2 from '../../../img/image 347.png'
import img3 from '../../../img/image 348.png'
import img4 from '../../../img/image 349.png'
const CTASection = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-10">        
        <div className="grid md:grid-cols-4 grid-cols-2">
            <div className="px-5 md:px-10 my-5 flex items-center">
                <img src={img1} className="h-10"/>
                <div className="pl-5">
                    <p className="md:text-sm text-xs font-semibold">Home Delivery</p>
                    <p className="text-gray-600 text-xs">24-72 Hours</p>
                </div>
            </div>
            <div className="px-5 md:px-10 my-5 flex items-center">
                <img src={img2} className="h-10"/>
                <div className="pl-5">
                    <p className="md:text-sm text-xs font-semibold">Authentic Product</p>
                    <p className="text-gray-600 text-xs">Buy Original Products</p>
                </div>
            </div>
            <div className="px-5 md:px-10 my-5 flex items-center">
                <img src={img3} className="h-10"/>
                <div className="pl-5">
                    <p className="md:text-sm text-xs font-semibold">Secure Shopping</p>
                    <p className="text-gray-600 text-xs">100% Safe Transactions</p>
                </div>
            </div>
            <div className="px-5 md:px-10 my-5 flex items-center">
                <img src={img4} className="h-10"/>
                <div className="pl-5">
                    <p className="md:text-sm text-xs font-semibold">We Support</p>
                    <p className="text-gray-600 text-xs">24/7 Amazing Services</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CTASection