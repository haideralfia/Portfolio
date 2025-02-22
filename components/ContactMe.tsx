import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:haideralfia@gmail.com?subject=${formData.subject}&body=Hi, name is${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>

			<div className="absolute top-40  flex flex-col space-y-5">
				<h4 className="text-2xl font-semibold text-center">
					I have got what you need.{''}
					<span className="decoration-[#F7AB]/50 underline">
						Lets Talk.
					</span>
				</h4>
				<div className="space-y-5">
					<div className="flex items-center space-x-3 justify-center">
						<PhoneIcon className="text-[#71447a] h-7 w-7 animate-pulse" />
						<p className="text-2xl">+91 7838716963</p>
					</div>
					<div className="flex items-center space-x-3 justify-center">
						<EnvelopeIcon className="text-[#71447a] h-7 w-7 animate-pulse" />
						<p className="text-2xl">haideralfia@gmail.com</p>
					</div>
					<div className="flex items-center space-x-3 justify-center">
						<MapPinIcon className="text-[#71447a] h-7 w-7 animate-pulse" />
						<p className="text-2xl">bala lala bala</p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-fit mx-auto"
				>
					<div className="flex space-x-2">
						<input
							{...register('name')}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register('email')}
							placeholder="Email"
							className="contactInput"
							type="email"
						/>
					</div>
					<input
						{...register('subject')}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>
					<textarea
						{...register('message')}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black front-bold text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
