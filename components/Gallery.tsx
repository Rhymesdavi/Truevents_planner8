import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <section className='my-16 flex justify-center items-center px-8 py-16' id='gallery'>
      <div className='flex flex-col pt-24'>
        <div className='flex flex-col gap-2 text-center mb-8'>
          <span className='text-[#F88109] text-3xl font-bold'>Our Gallery</span>
          <span className='text-gray-700 text-3xl font-semibold'>We Provide The Best Services for You Events</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, commodi quaerat? Voluptatibus tempora laboriosam a enim.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset1.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset2.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset3.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset4.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset5.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset6.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset17.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset18.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset19.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset20.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset21.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset22.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset23.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
          <div className='relative w-full h-64'>
            <Image 
              src='/assets/asset24.jpeg' 
              alt='Gallery' layout='fill' 
              objectFit='cover' 
              className='rounded-lg transition-transform duration-300 hover:scale-110'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery