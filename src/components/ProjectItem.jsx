import React from 'react'

const ProjectItem = ({ img, title, url }) => {
    return (
        <div class="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-100 ">
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                <div class="h-960 w-720">
                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 " src={img} alt="" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white ">...</h1>
                    <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{title}</p>
                    <a href={url} target="_blank">
                        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default ProjectItem
