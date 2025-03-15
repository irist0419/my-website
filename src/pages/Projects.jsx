import {gprojects, wprojects} from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'
import CTA2 from "../components/CTA2"


const Projects = () => {
  return (
      <section className="max-container">
          <h1 className="head-text text-left">
              My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
          </h1>

          <div className="mt-5 flex flex-col gap-3 text-slate-500">
              <p>
                  These are some projects I have spent time building. Along with some school projects, there are also
                  personal projects (including this website!).
                  Feel free to explore the codebase and share your piece of mind.
              </p>
          </div>

          <div className="subhead-text mt-5 flex flex-col text-gray-600 text-center">
              <p>
                  Game Development
              </p>
          </div>

          <div className="snap-x mb-10 overflow-x-scroll">
              <div className="flex flex-nowrap mt-5 mb-5 gap-5">
                  {gprojects.map((project) => (
                      <div className="snap-center card ">
                          <div className="lg:w-[400px] w-full" key={project.name}>
                              <Link to={project.link}>
                                  <img
                                      src={project.imageUrl}
                                      alt="Project Image"
                                      className="w-[383px] h-1/2 object-contain rounded-t-lg"
                                  />
                              </Link>
                          </div>

                          <div className="p-5 flex flex-col">
                              <h4 className="text-2xl font-poppins font-semibold">
                                  {project.name}
                              </h4>
                              <p className="mt-2 text-slate-500">
                                  {project.description}
                              </p>
                              <div className="mt-5 flex items-center gap-2 font-poppins">
                                  <Link to={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-blue-600">
                                      See More
                                  </Link>
                                  <img
                                      src={arrow}
                                      alt="arrow"
                                      className="w-4 h-4 object-contain"
                                  />
                              </div>
                          </div>
                      </div>

                  ))}
              </div>
          </div>

          <div className="subhead-text mt-5 flex flex-col text-gray-600 text-center">
              <p>
                  Web Development
              </p>
          </div>

          <div className="snap-x my-1 overflow-x-scroll">
              <div className="flex flex-nowrap mt-5 mb-5 gap-5">
                  {wprojects.map((project) => (
                      <div className="snap-center card ">
                          <div className="lg:w-[400px] w-full" key={project.name}>
                              <Link to={project.link}>
                                  <img
                                      src={project.imageUrl}
                                      alt="Project Image"
                                      className="w-[383px] h-1/2 object-contain rounded-t-lg"
                                  />
                              </Link>
                          </div>

                          <div className="p-5 flex flex-col">
                              <h4 className="text-2xl font-poppins font-semibold">
                                  {project.name}
                              </h4>
                              <p className="mt-2 text-slate-500">
                                  {project.description}
                              </p>
                              <div className="mt-5 flex items-center gap-2 font-poppins">
                                  <Link to={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-blue-600">
                                      See More
                                  </Link>
                                  <img
                                      src={arrow}
                                      alt="arrow"
                                      className="w-4 h-4 object-contain"
                                  />
                              </div>
                          </div>
                      </div>

                  ))}
              </div>
          </div>

          <hr className="border-slate-200"/>

          <CTA2/>

      </section>
  )
}

export default Projects