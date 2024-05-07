import React from 'react'
import {skills} from "../constants"
import CTA from "../components/CTA"

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Iris Tsui</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="indent-6">
        A third-year Linguistics & Computer Science student at UCLA, looking for opportunities relate to Game Development and Artificial Intelligence, also interested in Game Design and Narrative.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className= "mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src= {skill.imageUrl}
                  alt= {skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                <div className="btn-front rounded-xl opacity-0 hover:opacity-100 duration-200 absolute inset-0 z-10 flex justify-center items-center text-base font-semibold">
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA/>

    </section>
  )
}

export default About