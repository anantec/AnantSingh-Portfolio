import React from 'react'

const Aboutme = () => {
  return (
    <section
      id='about-me'
    >

      <div className=' flex flex-col items-center justify-center py-20'>
        <h1>
          <span className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            About
          </span>
        </h1>

        
          <span className='cursive text-[40px] font-semibold text-transparent text-white'>
            Anant Singh Dugtal
          </span>
        

        <div className='flex flex-col cursor-pointer relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]  w-full h-full mt-3 p-4'>
          <p className=' text-white text-center flex justify-center items-center 1-[1010px] font-semibold text-[20px]'>
            Anant Singh Dugtal is a passionate Software Engineer having curiosity of learning new things. Experienced in Full Stack Development. Along being a Software Engineer he is a Entertainer.
            Interested in Content Creation, Video Editng and Gaming. Had a strong knowlege about the DataBase.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Aboutme