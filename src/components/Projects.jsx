import React from 'react'
import ProjectItem from './ProjectItem'
import cmImg from "../assets/cm.jpg"
import ebsImg from "../assets/ebs.jpg"
import geImg from "../assets/ge.jpg"
import gearboxControllerImg from "../assets/gearboxController.jpg"
import sinamicsImg from "../assets/sinamics.png"
import steeringImg from "../assets/steering.jpg"

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] py-8'>Projects</h1>
       <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={cmImg} title='Car Multimedia Project in Bosch ' url='https://www.bosch-mobility.com/en/solutions/infotainment/display-and-interaction-systems/'/>
        <ProjectItem img={ebsImg} title='Electronic Battery Sensor in Bosch ' url='https://www.bosch-mobility.com/en/solutions/sensors/electronic-battery-sensor/'/>
        <ProjectItem img={geImg} title='Current Lighting Solutions smart Daintree networks in GE Current ' url='https://en.wikipedia.org/wiki/Daintree_Networks'/>
        <ProjectItem img={gearboxControllerImg} title='Transmission control unit in Bosch ' url='https://www.bosch-mobility.com/en/solutions/transmission-technology/transmission-control-unit/'/>
        <ProjectItem img={sinamicsImg} title='Sinamics frequency converters in Evosoft  ' url='https://www.siemens.com/global/en/products/drives/sinamics/low-voltage-converters/standard-performance-frequency-converter/sinamics-g120.html'/>
        <ProjectItem img={steeringImg} title=' Front and Real wheel steering control system in Thyssen and Bosch ' url='https://www.bosch-mobility.com/en/solutions/steering/steer-by-wire/'/>
       </div>
       <p id='resume' className='text-center py-8'>As you see webdeveloping is one of my skill that I really love to use and improve it day by day. I collected knowledge related to html, css, javascript and React. My motto is something like this: 'a good priest learns until death'  that means don't affraid of to learn it if you don't know it yet. I created this short portfolio becasue I wanted to present myself more effeciently as a regular cv could. I hope I achieved my goals with this so if this portfolio caught your attention contact me via send a message. </p>

        </div>
    )
}

export default Projects
