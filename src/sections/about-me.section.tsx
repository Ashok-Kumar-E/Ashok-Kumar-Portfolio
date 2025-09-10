import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full Stack Developer',
				place: '@Traqmetrix Solutions',
				timePeriod: 'FEB-2025 - Present',
				description: (
					<ul>
						<li>
							Worked on various client-specific Zoho solutions, building custom web tabs and tools using <strong>JavaScript</strong> and <strong>React</strong> based on real business needs.
						</li>
						<li>
							Designed and developed multiple interactive data visualization dashboards.
						</li>
						<li>
							Integrated Zoho apps with custom backends using <strong>Node.js</strong> to enable real-time data syncing and automation.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Full Stack Developer',
				place: 'KodNest',
				timePeriod: '2024 - 2025',
				description: (
					<ul>
						<li>
							Completed a six-month intensive Full Stack Development program focused on <strong>Java</strong>, <strong>Web Development</strong>, <strong>SQL</strong>, and <strong>Testing</strong>.
						</li>
						<li>
							Trained in real-world software practices, including <strong>competitive programming</strong> and hands-on project development.
						</li>
						<li>
							Demonstrated top-tier performance and dedication throughout the course.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'B.E - Electronics and Communication Engineering',
				place: 'KSR Institute for Engineering and Technology',
				timePeriod: '2020 - 2024',
				description: (
					<ul>
						<li>
							Gained a solid foundation in logic building, signal systems, and embedded concepts through Electronics and Communication Engineering.
						</li>
						<li>
							Developed interest in software by integrating coding and automation into academic projects.
						</li>
						<li>
							Transitioned into full stack development by self-learning and applying core problem-solving skills from engineering.
						</li>
					</ul>
				),
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Ashok Kumar, a Full Stack Developer.
					</p>
					<p>
						I'm a Full Stack Developer with hands-on experience in <strong>React</strong> and <strong>Node.js</strong>, building clean and efficient web apps tailored to real-world needs.
					</p>
					<p>
						I take pride in quickly understanding client requirements and turning them into practical, user-friendly solutions — saving both time and confusion during development.
					</p>
					<p>
						Whether it’s streamlining a workflow or integrating with external platforms, I enjoy solving problems, learning fast, and delivering results that matter.
					</p>

				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
