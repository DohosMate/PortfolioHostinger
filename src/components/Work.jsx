import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: 'Bosch - Software Architect',
        remark: ' via Seahorse as a contractor ',
        details:
            `• I was working in a scrum architect team in reverse engineering field. 
• 3 weeks sprint period with scope, planning, review, retro and daily status meetings
• Jira Task management
• remote work 1 day/sprint in office
• My responsibilities was to take the architectural inline with the implementation that was an AUTOSAR standarded architecture in embedded C. Our Project provieded the Services layer.
• Enterprise Architect: Create/ Maintenance of BlackBox, Whitebox, function package(Details, Outline, Dynamic design), Toplevel diagrams
Version control handled under GIT by exported xmi
• IBM's Rational DOORS: Create/ Maintenance of Design requirements and linking them with System level
Version control handled by baselines.`
    },
    {
        year: 2019,
        title: 'Bosch - SW Test Tool Developer/ Team Leader ',
        remark: 'via Seahorse as a contractor ',
        details:
            `• All of SW test related test tool developing
• IBM's Rational DOORS automation in DOORS Extension Language (DXL), CANoe related: frequency generator simulator, map file manipulator , time accelerator in CAPL programming language
• Different information collector and .c, .map, .icf file parsers in Python
• 10+ people related Team Leader Seahorse site.`
    },
    {
        year: 2018,
        title: 'Thyssenkrupp  - Python Test Developer ',
        remark: 'via Seahorse as a contractor ',
        details:
            `• Development of automated hardware-in-the-loop tests for functional and security control of embedded microcontroller systems
• Designing software tests, implementation in Python, running, analysing the test diaries, maintaining tests
• Continuous cooperation with system developers, supporting the efficient problem-solving process`
    },
    {
        year: 2017,
        title: 'GE Current, a Daintree company  - QA Engineer/ Team Leader ',
        remark: 'via Seahorse as a contractor ',
        details:
            `• Perform functional and system testing of Lighting Controls and Sensors to ensure that they conform to the requirements and specifications
• Environment remote control and set up under Daintree system
• Knowledge in Dali standard according to the wire site and ZigBee standard which is the responsible for wireless communication
• Test tool developing in python language
• 10 people related Team Leader Seahorse site`
    },
    {
        year: 2014,
        title: 'Bosch  - Test Coordinator, Senior HW/SW Tester ',
        remark: 'via Beko',
        details:
            `• HIL test
• Measurement of automatic gearboxes’ controller: regression tests of embedded softwares
• Installing measurement on the basis of test specifications
• Getting acquainted with measuring softwares
• Preparing complete test reports with regard to deadlines
• Working complying with laboratory protocols – maintaining laboratory order
• System Test
• System tests of embedded softwares of air-conditioner, entrainment and ventilator controller in automobiles
• Integrating printed circuit into test environment, experience in handling laboratory tools and appliances, building complementary electric circuits for tests, maintenance of test documentations, writing test reports, cooperation with the engineering team of the client
• Continuous consultation with project lead
• System Test Automatization and Framework design
• Test of car display. Script language - Python programmer knowledge in test automation
• Collaboration in designing automotive framework
• Documentation of development process and version control of documents with configuration management tools`
    },
    {
        year: 2012,
        title: 'Evosoft   - Hardware Test Engineer/ Trainer',
        remark: '1 year Trainee and after graduation 1 year full time position',
        details:
            `• Comprehensive hardware tests of different types of frequency converter
• Running tests on the ground of documentation in English
• Measurement Devices: Digital Oscilloscope, Frequency generator, Digital Multimeter, Solder station in EMC, Power Supply`
    },
]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} remark={item.remark} details={item.details} />
            ))}
        </div>
    )
}

export default Work
