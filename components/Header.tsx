import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky top-0 p-5 flex item-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flexrow items-center"
			>
				{/* social icons */}
				<SocialIcon
					url="https://www.linkedin.com/in/alfia-haider-325275203/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/haideralfia"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.instagram.com/alfiahaider/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://twitter.com/AlfiaHaider_"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>
			<Link href="#contact">
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className="flex flex-row items-center text-gray-300 cursor-pointer"
				>
					<SocialIcon
						className="cursor-pointer"
						network="email"
						fgColor="gray"
						bgColor="transparent"
					/>
					<p className="uppercase hiddenmd:inline-flex text-sm text-gray-400">
						Get In Touch
					</p>
				</motion.div>
			</Link>
		</header>
	);
}
