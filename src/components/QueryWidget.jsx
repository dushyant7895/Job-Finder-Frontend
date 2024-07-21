import React from 'react'
import skills from "../data/skills";
import { IoSearch } from "react-icons/io5";
import Search from '../assets/searchIcon.png';



const QueryWidget = ({ query, setQuery, handleFetchJobs }) => {
	const handleSkillChange = (skill) => {
		if (skill === "placeholder") {
			return;
		}
		if (!query.skills.includes(skill)) {
			setQuery({ ...query, skills: [...query.skills, skill] });
		}
	};

	const handleClearFilters = () => {
		setQuery({ title: "", skills: [] });
	};

	const handleQuerySkill = (index) => {
		setQuery(prevQuery => {
			const newSkills = [...prevQuery.skills];
			newSkills.splice(index, 1);
			return {
				...prevQuery,
				skills: newSkills
			};
		});
	};

	return (
		<div className='flex justify-center items-center md:relative'>
			<div className='md:w-[80%] w-[90%] h-fit md:py-12 py-6 md:px-5 shadow-xl shadow-[#f6c6c6] bg-white my-4 rounded-md'>
				<div className="relative mx-auto block md:w-[80%] w-[95%] md:px-12 px-8 py-2 border-2 border-[#E3E3E3] rounded-sm outline-none focus-within:ring-1 focus-within:ring-[#ED5353]">
					<IoSearch size={"24px"} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
					<input
						type="text"
						placeholder="Type any job title"
						className="w-full pl-4 py-2 outline-none border-none"
						value={query.title}
						onChange={(e) => setQuery({ ...query, title: e.target.value })}
					/>
				</div>
				<div className='md:block flex flex-col ml-2'>
					<div className='md:absolute lg:ml-[7.5rem] md:ml-16 ml-2 md:w-fit w-[35%] my-4 lg:px-5 px-0.5 py-1 rounded-md border-2 border-[#CECECE] text-[#9C9C9C]'>
						<select
							onChange={(e) => handleSkillChange(e.target.value)}
							className='outline-none cursor-pointer md:text-lg text-sm'>
							<option value="placeholder">Skill</option>
							{skills.map((skill, index) => (
								<option
									key={index}
									value={skill}>
									{skill}
								</option>
							))}
						</select>
					</div>
					<div className='md:inline-block lg:ml-[19rem] md:ml-56 ml-2 md:mt-1 h-fit md:w-[65%] w-[90%] md:py-4'>
						{query.skills && query.skills.map((skill, index) => {
							return <div
								key={index}
								className='relative inline-block md:mx-2 mx-1 mb-2 pr-7 pl-3 py-1 rounded-md border-2 border-[#ED5353] md:text-sm text-xs font-semibold bg-[#FFEEEE]'>
								{skill}
								<span className='md:px-1'></span>
								<span
									onClick={() => { handleQuerySkill(index) }}
									className='bg-[#ED5353] absolute top-0 right-0 md:px-2 px-1 h-full md:text-lg text-sm text-white font-normal flex items-center cursor-pointer'>X</span>
							</div>
						})}
					</div>
				</div>
				<div className='flex justify-end'>
					<button
						onClick={() => {
							handleFetchJobs();
						}}
						className='md:px-4 px-2 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white md:text-lg text-sm'>Apply Filter</button>
					<button
						onClick={() => handleClearFilters()}
						className='mx-4 md:px-10 px-6 py-1 shadow-md rounded-md text-[#FF6B6B] md:text-lg text-sm'>Clear</button>
				</div>
			</div>
		</div>
	);
}

export default QueryWidget
