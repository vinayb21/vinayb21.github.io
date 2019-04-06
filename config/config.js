import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Vinay",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Vinay Badhan",
	description: "Backend + Data Engineer, who loves playing with data and making system scalable and reliable. Currently working on building a scalable and reliable workspace provisioning service which provides in-browser full fledged IDEs for advanced assessments for 100x scale. Integrated cloud engineer assessment and collaborative cloud IDE using open source projects. Built ETL pipelines and spark jobs to leverage data for supporting the business use-cases. Well versed in Golang, Python, Pyspark, Hadoop, AWS, ELK stack, Ruby on Rails, Dev-ops and building scalable systems.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1neeEpDxFKARq0vzqT671iz2tB4Lp8pfH/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Backend + Data Engineer, who loves playing with data and making system scalable and reliable.",
    "Currently working on building a scalable and reliable workspace provisioning service which provides in-browser full fledged IDEs for advanced assessments for 100x scale.",
    "Integrated cloud engineer assessment and collaborative cloud IDE using open source projects. Built ETL pipelines and spark jobs to leverage data for supporting the business use-cases. Well versed in Golang, Python, Pyspark, Hadoop, AWS, ELK stack, Ruby on Rails, Dev-ops and building scalable systems.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Backend Engineer",
			description: "Working on building backend systems from scratch and scaling new or existing systems and making them reliable",
			icons: null,
		},
		{
			title: "Data Engineer",
			description: "Designing and implementation of ETL pipelines which work in near-realtime",
			icons: null,
		}
	],
}

export const projects = {
	title: "Work Projects",
	cards: [
		{
			title: "VM Provider",
			description: "Migration of existing infrastructure from Eclipse Che to VM Provider. Launching workspaces in VMs instead of k8s + Eclipse Che, to handle serve 100x scale",
			icons: []
		},
		{
			title: "Skills platform",
			description: "Designed and build the entire data ingestion platform from scratch to collect skill activity and generate the skill profiles from scratch",
			icons: []
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at vinay.badhan21@gmail.com",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:vinay.badhan21@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Vinay Badhan | Software Engineer | Backend Engineer | Data Engineer",
	description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@vinayb21",
	description: "Software Engineer | Backend Engineer | Data Engineer",
	cards: [
		{
			title: "My website",
			link: "https://vinayb21.com/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/vinayb21/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/vinay-badhan-861a40104/",
		},
	]
}
