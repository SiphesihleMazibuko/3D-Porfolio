import { skills, experiences } from "../constants"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Siphesihle Mazibuko</span></h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>An ambitious and enthusiastic developer
              with a strong determination to break free from the status quo and
              establish a notable presence in the tech industry. I blend my work
              ethic and creative thinking to navigate the intricate world of
              code, and I possess a deep interest and talent for
              problem-solving. My passion for technology is the driving force
              behind my actions, and I see obstacles as opportunities to learn
              and grow, continually honing my skills in various programming
              languages while staying abreast of the latest advancements.
              Transforming ideas into practical, user-centered solutions is
              where I thrive, and my meticulous attention to detail underscores
              my commitment to delivering high-quality work. Beyond being just a
              developer, I consider myself a visionary, eager to make a
              significant difference and contribute meaningfully to the swiftly
              evolving field of technology </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My Skills
        </h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill)=>(
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>With my experience as a technician, I have built on the foundation of hands-on experience gained through various school projects. These projects helped me develop key skills in software development, problem-solving, and teamwork. In my current role, I have expanded these abilities by working with real-world technologies, troubleshooting issues, and collaborating with teams to deliver effective solutions. Additionally, my responsibility for presenting my work to live audiences during my studies has been further refined in my professional role, enabling me to communicate complex technical concepts clearly and effectively. This combination of academic and professional experience has equipped me to adapt quickly and contribute meaningfully to technical projects.</p>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement key={experience.company_name} date={experience.date} icon={<div className="flex justify-center items-center w-full h-full" ><img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/></div>} iconStyle={{background: experience.iconBg}}contentStyle={{borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.iconBg, boxShadow: 'none'}}>
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`}className="text-black-500/50 font-normal pl-1 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default About
