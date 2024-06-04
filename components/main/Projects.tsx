import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
   <section
   id='projects'
   >
     <div className=' flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src="/Jobportal.png"
          title="Full Stack Job Portal "
          description="MERN Full Stack project created in the final year of my graduation."
          link='https://github.com/anantec'
        />
        <ProjectCard
          src="/pokemoncard.png"
          title="Pokemon Card"
          description="Uses api from the web to generate random card of pokemon."
          link='https://github.com/anantec'
        />
        <ProjectCard
          src="/parallax.png"
          title="Paralax Website"
          description="Created a parallax website using animations applied using JavaScript. "
          link='https://github.com/anantec'
        />
        
        </div>
    </div>
   </section>
  )
}

export default Projects
