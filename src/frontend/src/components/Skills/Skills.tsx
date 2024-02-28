import React from 'react'
import { useAppDispatch, useAppSelector } from "@hooks/useRedux"

import { setSelectedPL } from '@store/features/system/systemSlice'
import JavascriptIcon from "@assets/images/icons/js.png"
import HTMLIcon from "@assets/images/icons/html-5.png"
import CSSIcon from "@assets/images/icons/css.png"
import BSIcon from "@assets/images/icons/bootstrap.png"
import WebpackIcon from "@assets/images/icons/webpack.png"
import DockerIcon from "@assets/images/icons/docker.png"
import GithubIcon from "@assets/images/icons/git.png"
import MySQLIcon from "@assets/images/icons/mysql.png"
import NGINXIcon from "@assets/images/icons/nginx.png"
import NodeJSIcon from "@assets/images/icons/nodejs.png"
import ReactIcon from "@assets/images/icons/react.png"
import RestAPIIcon from "@assets/images/icons/rest.png"
import TWIcon from "@assets/images/icons/tailwind.svg"
import TSIcon from "@assets/images/icons/typescript.png"
import VueIcon from "@assets/images/icons/vue.svg"
import ExpressIcon from "@assets/images/icons/express-js.png"
import ReduxIcon from "@assets/images/icons/redux.png"
import FirebaseIcon from "@assets/images/icons/firebase.svg"

const PLList = [
  {
    name: "JavaScript",
    icon: JavascriptIcon,
    desc: "One of my favorite programming language that I am using for the past years.",
    exp: "9/10"
  },
  {
    name: "TypeScript",
    icon: TSIcon,
    desc: "Lots of typing but fun experience. Been using alot than javascript.",
    exp: "9/10"
  },
  {
    name: "HTML",
    icon: HTMLIcon,
    desc: "Manipulating DOM and virtual DOM.",
    exp: "9/10"
  },
  {
    name: "CSS",
    icon: CSSIcon,
    desc: "All basic CSS and its fundamentals.",
    exp: "9/10"
  },
  {
    name: "Boostrap",
    icon: BSIcon,
    desc: "One of my best partner and helps me speed up designing a page.",
    exp: "9/10"
  },

  {
    name: "Docker",
    icon: DockerIcon,
    desc: "Dockerizing apps. Strong understanding in Kubernetes Deployments, Pods, Services and more.",
    exp: "9/10"
  },
  {
    name: "Git",
    icon: GithubIcon,
    desc: "Sharing code and engaging myself with creative developers.",
    exp: "9/10"
  },
  {
    name: "SQL",
    icon: MySQLIcon,
    desc: "Been practicing my backend skills to become full-stack dev. Currently mastering 'Sequelize'.",
    exp: "7/10"
  },
  {
    name: "NGINX",
    icon: NGINXIcon,
    desc: "I use this for proxy forwarding and serving of static files.",
    exp: "9/10"
  },
  {
    name: "NodeJS",
    icon: NodeJSIcon,
    desc: "ExpressJS and Dealing with CORS. I used this to run my code in container. ",
    exp: "9/10"
  },
  // {
  //   name: "PHP",
  //   icon: PHPIcon,
  //   desc: "Not been using this lately but I still remember some basics of it.",
  //   exp: "7/10"
  // },
  {
    name: "ReactJS",
    icon: ReactIcon,
    desc: "My favorite library to build strong web applications. ",
    exp: "9/10"
  },
  {
    name: "Restful API",
    icon: RestAPIIcon,
    desc: "Collaborating with backends, using PostMan and handling response.",
    exp: "9/10"
  },
  {
    name: "Tailwind",
    icon: TWIcon,
    desc: "Been using this framework alot. Super easy to use. I can't live without TW!",
    exp: "9/10"
  },
  {
    name: "Redux",
    icon: ReduxIcon,
    desc: "State management tool for react. For Vue, I use Vuex.",
    exp: "9/10"
  },
  {
    name: "VueJS",
    icon: VueIcon,
    desc: "Been using framework alot in my MLM projects.",
    exp: "9/10"
  },
  {
    name: "Express",
    icon: ExpressIcon,
    desc: "Creating Restful API and serving of static files.",
    exp: "8/10"
  },
  {
    name: "Webpack",
    icon: WebpackIcon,
    desc: "Bundler I always use in React and Vue. ",
    exp: "9/10"
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
    desc: "Cloud functions, free web hosting, real-time database and noSQL database.",
    exp: "9/10"
  },

]
type PLTypes = {
  icon?: string,
  name?: string,
  desc?: string,
  exp?: string
}


function Skills() {
  const dispatch = useAppDispatch()
  const selectedPL = useAppSelector((state) => state.system.selectedPL)
  
  const handleSelectProgrammingLanguage = (data: PLTypes) => {
    dispatch(setSelectedPL(data))
  }

  const ProgrammingIcon = (data: PLTypes) => {
    return (
      <div className="flex justify-center rounded-[20px] drop-shadow-xl no-animation"
        role='button'
        onClick={() => { handleSelectProgrammingLanguage(data) }}
      >
        <div className="flex justify-center flex-col items-center text-center no-animation">
          <img src={data.icon} alt=""
            className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] rounded-[10px] hover:scale-[1.3] hover:animate-pulse hover:transition-all"
          />
          <div className={`no-animation ${selectedPL?.name == data?.name ? 'text-yellow-300' : 'text-[#ccc] '} text-[10px] sm:text-[14px] mt-2`}> {data.name}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="no-animation programming-icons mt-4 grid grid-cols-5 md:grid-cols-5 sm:flex lg:grid lg:grid-cols-10 xl:flex gap-3 lg:gap-1 xl:gap-3 flex-wrap">
    {PLList.map((data) => (
      <ProgrammingIcon key={data.name} {...data} />
    ))}
  </div>
  )
}

export default Skills