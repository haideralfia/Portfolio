import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
	const projects = [1, 2, 3, 4, 5];
	return (
		<motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-[#242424] scrollbar-thumb-gray-400/20">
				{projects.map((project, i) => (
					<div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
						<motion.img
							initial={{
								y: -300,
								opacity: 0,
							}}
							transition={{ duration: 1.2 }}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{ once: true }}
							src="https://www.freeiconspng.com/uploads/semi-levi-face-png-6.png"
							alt=""
							className="h-10"
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<snap className="underline decoration-[#9B1FE8]/50">
									Project {i + 1} of {project.length}
								</snap>
							</h4>
							<p className="text-lg text-center md:text-left">
								stb gauh rue uhr uah4 98eut 8e8rgu 8 t9u 0whg ow
								hf9w fowi 8er 98ejrg oiwu 98guoiw 9e9e hguj dog
								0wijofw h9fhh4 09 8rhgi uhidugh u gujoed ibj
								foed hro88 o4eiej fow
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#9B1FE8]/10 left-0 h-[500px] -skew-y-12" />
		</motion.div>
	);
}
export default Projects;
