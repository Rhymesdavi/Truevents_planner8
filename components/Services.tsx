import React from 'react';
import Image from 'next/image';
import { FaGlassCheers } from 'react-icons/fa';

const Services = () => {
  return (
    <section className='my-16 py-24 flex flex-col justify-center items-center w-full' id="services">
      <div className='px-8 pt-24 py-24 flex flex-col gap-4 justify-center items-center w-full'>
        <span className='text-[#F88109] text-4xl font-bold'>Our Services</span>
        <span className='text-gray-700 text-3xl mb-8 font-semibold text-center'>We Offer The Best Services In The Country</span>
        <div className='flex flex-col gap-32 w-full px-4 lg:px-24'>
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 w-full items-center'>
            <div className='order-1 md:order-none flex justify-center relative z-10'>
              <Image
                className='rounded-md object-cover h-full w-full'
                src={'/assets/img1.jpeg'}
                width={584}
                height={584}
                alt=''
              />
            </div>
            <div 
              className='flex flex-col gap-2 px-4 pt-4 md:pt-6 bg-[#f8f8f6] rounded-md w-full h-full justify-center'
            >
              <div className='flex gap-4 text-[#F88109] justify-center md:justify-start'>
                <FaGlassCheers size={34} />
                <span className='text-3xl font-semibold'>Event Decor</span>
              </div>
              <p className='max-w-md text-center md:text-left'>
              We specialize in transforming ordinary venues into breathtaking settings that capture the essence of your celebration. Whether it is a wedding, corporate event, or private party, our team carefully designs every detail—from stunning floral arrangements to elegant lighting and sophisticated table settings. We work closely with you to bring your vision to life, ensuring a beautifully crafted environment that leaves a lasting impression on you and your guests.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full items-center'>
            <div 
              className='flex flex-col gap-2 px-4 pt-4 md:pt-6 bg-[#f8f8f6] rounded-md w-full h-full justify-center'
            >
              <div className='flex gap-4 text-[#F88109] justify-center md:justify-start'>
                <FaGlassCheers size={34} />
                <span className='text-3xl font-semibold'>Event Planning</span>
              </div>
              <p className='max-w-md text-center md:text-left'>
              We handle every detail from start to finish, ensuring your event runs smoothly and stress-free. From venue selection to final execution, our team ensures a seamless and memorable experience.
              </p>
            </div>
            <div className='flex justify-center relative z-10'>
              <Image
                className='rounded-md object-cover h-full w-full'
                src={'/assets/img1.jpeg'}
                width={584}
                height={584}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full items-center'>
            <div className='order-1 md:order-none flex justify-center relative z-10'>
              <Image
                className='rounded-md object-cover h-full w-full'
                src={'/assets/img1.jpeg'}
                width={584}
                height={584}
                alt=''
              />
            </div>
            <div 
              className='flex flex-col gap-2 px-4 pt-4 md:pt-6 bg-[#f8f8f6] rounded-md w-full h-full justify-center'
            >
              <div className='flex gap-4 text-[#F88109] justify-center md:justify-start'>
                <FaGlassCheers size={34} />
                <span className='text-3xl font-semibold'>Theme Design</span>
              </div>
              <p className='max-w-md text-center md:text-left'>
                We create distinctive and personalized themes that perfectly capture the essence of your event, ensuring a cohesive and memorable atmosphere for any occasion.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full items-center'>
            <div 
              className='flex flex-col gap-2 px-4 pt-4 md:pt-6 bg-[#f8f8f6] rounded-md w-full h-full justify-center'
            >
              <div className='flex gap-4 text-[#F88109] justify-center md:justify-start'>
                <FaGlassCheers size={34} />
                <span className='text-3xl font-semibold'>Floral Arrangements</span>
              </div>
              <p className='max-w-md text-center md:text-left'>
                Enhance your event with stunning floral designs that bring elegance and sophistication to every corner. Our expert florists craft bespoke arrangements that complement your theme, adding a touch of natural beauty that elevates the ambiance and creates a memorable experience for all.
              </p>
            </div>
            <div className='flex justify-center relative z-10'>
              <Image
                className='rounded-md object-cover h-full w-full'
                src={'/assets/img1.jpeg'}
                width={584}
                height={584}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 w-full items-center'>
            <div className='order-1 md:order-none flex justify-center relative z-10'>
              <Image
                className='rounded-md object-cover h-full w-full'
                src={'/assets/img1.jpeg'}
                width={584}
                height={584}
                alt=''
              />
            </div>
            <div 
              className='flex flex-col gap-2 px-4 pt-4 md:pt-6 bg-[#f8f8f6] rounded-md w-full h-full justify-center'
            >
              <div className='flex gap-4 text-[#F88109] justify-center md:justify-start'>
                <FaGlassCheers size={34} />
                <span className='text-3xl font-semibold'>Lighting & Ambiance</span>
              </div>
              <p className='max-w-md text-center md:text-left'>
                Elevate your event with our expert lighting solutions that transform spaces and set the perfect mood. From soft, romantic glows to vibrant, dynamic displays, we tailor every aspect of lighting to complement your theme and create an unforgettable atmosphere. Our commitment to excellence ensures that your event will not only be successful but truly extraordinary, leaving a lasting impression on every guest.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="w-full py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-14 md:px-8 lg:px-24 items-center">
          <div className="w-full h-[300px] md:h-full rounded-md overflow-hidden relative flex justify-center">
            <Image
              src={'/assets/img7.jpeg'}
              layout='fill'
              objectFit='cover'
              alt=''
            />
          </div>
          <div className="flex flex-col justify-center md:w-full md:h-full gap-4 text-center md:text-left">
            <span className="text-[#F88109] text-2xl md:text-3xl font-bold">
              How It Works
            </span>
            <span className="text-gray-700 text-xl md:text-3xl font-semibold">
              Simplifying Event Planning & Decoration
            </span>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 md:gap-4 text-[#F88109] justify-center md:justify-start">
                  <FaGlassCheers size={24} />
                  <span className="text-xl md:text-3xl font-semibold">Consultation</span>
                </div>
                <p className="text-sm md:text-base">
                  We understand your vision, needs, and preferences. We then gather all the details to tailor our services specifically to your event.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 md:gap-4 text-[#F88109] justify-center md:justify-start">
                  <FaGlassCheers size={24} />
                  <span className="text-xl md:text-3xl font-semibold">Design & Planning</span>
                </div>
                <p className="text-sm md:text-base">
                  We work closely with you to design a personalized plan, including theme, decor, and layout.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 md:gap-4 text-[#F88109] justify-center md:justify-start">
                  <FaGlassCheers size={24} />
                  <span className="text-xl md:text-3xl font-semibold">Execution</span>
                </div>
                <p className="text-sm md:text-base">
                  On the day of the event, our team handles everything—from setting up the decor to coordinating the logistics—so you can relax and enjoy your special day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <div className='flex flex-wrap gap-4 justify-center w-full mt-8 px-4'>
        <div className='flex justify-center'>
          <Image
            src={'/assets/log1.jpeg'}
            width={284}
            height={84}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/log2.jpeg'}
            width={284}
            height={84}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/asset9.jpeg'}
            width={284}
            height={64}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/log4.jpg'}
            width={284}
            height={64}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/log3.png'}
            width={284}
            height={64}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/log5.png'}
            width={284}
            height={64}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/log6.jpg'}
            width={284}
            height={64}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/log7.jpeg'}
            width={284}
            height={64}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/log8.jpeg'}
            width={284}
            height={64}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/asset12.jpeg'}
            width={284}
            height={64}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
