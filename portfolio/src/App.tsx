import "./App.scss";
import Skill from "./components/Skill";
import { ProjectObj, SkillObj } from "./data/models";
import Project from "./components/Project";
import { BiLogoGithub, BiLogoTelegram } from "react-icons/bi";
import { IoIosArrowRoundForward, IoIosArrowRoundUp } from "react-icons/io";
import { PiDownloadSimple } from "react-icons/pi";

function App() {
	const backSkills: SkillObj[] = [
		{ name: "C#/.Net", imageLink: "" },
		{ name: ".ASP.NET Core", imageLink: "" },
		{ name: "Entity Framework", imageLink: "" },
		{ name: "MS SQL, PostgreSQL", imageLink: "" },
		{ name: "Azure", imageLink: "" },
		{ name: "SignalR", imageLink: "" },
		{ name: "WPF/WinForms", imageLink: "" },
	];

	const frontSkills: SkillObj[] = [
		{ name: "HTML", imageLink: "" },
		{ name: "CSS/SCSS", imageLink: "" },
		{ name: "Blazor Server", imageLink: "" },
		{ name: "JavaScript/TypeScript", imageLink: "" },
		{ name: "React", imageLink: "" },
	];

	const otherSkills: SkillObj[] = [
		{ name: "MVC/MVVM", imageLink: "" },
		{ name: "OOP, SOLID, DI", imageLink: "" },
		{ name: "Git/GitHub/GitLab", imageLink: "" },
	];

	const projects: ProjectObj[] = [
		{
			title: "Restaurant business service",
			description:
				"A restaurant web service is a website where a user can register, view the site menu, blogs, and place orders with table reservations and orders with delivery. There is also an admin panel for managing the database and content. It consists of two web projects. The first one is a RESTful web API on Asp.Net, which describes the business logic. The second is a client web project on Asp.Net Core and Blazor Server. The PostgreSQL database and ORM Entity Framework are used.",
			techStack: ["Asp.Net", "Blazor Server", "EF Core", "MS SQL", "JWT Auth"],
			gitHubLink: "https://github.com/EzSup/Diplomchik",
			demoLink: "https://a4itxd.realhost-free.net/",
		},
		{
			title: "Chat app",
			description:
				"This full-stack web application enables real-time chat with sentiment analysis. The backend, built with ASP.NET Core, SignalR, and Azure Cognitive Services, supports real-time messaging and emotional tone detection. The frontend, developed using Blazor Server, allows users to join the chat with a username and exchange messages. The backend includes libraries for chat functionality, business logic, and database access via Entity Framework Core, with data stored in an Azure SQL database.",
			techStack: ["Asp.Net", "SignalR", "Azure", "EF Core", "MS SQL"],
			gitHubLink: "https://github.com/EzSup/chat-signalR",
			demoLink:
				"https://chatreenbitclient-cvffbvh5fwbndvhy.eastus-01.azurewebsites.net/",
		},
		{
			title: "Cryptocurrency data view desktop app",
			description:
				'This project is a desktop application for viewing cryptocurrency data. It was developed as a test assignment and utilizes technologies such as C#/.NET, WPF, MVVM patterns, and DI. It retrieves cryptocurrency data using the "CoinCap" and "KuCoin" APIs.',
			techStack: ["C#/.Net", "WPF", "MVVM", "APIs"],
			gitHubLink: "https://github.com/EzSup/CryptoDataWpf",
			demoLink: undefined,
		},
		{
			title: "Telegram bot",
			description:
				"Developed a Grafana plugin for Root Cause Analysis, designed to identify anomalies and service disruptions. This tool aids engineers in swiftly tracing and resolving issues, leveraging insightful data for expedited problem-solving.",
			techStack: ["Asp.Net", "EF Core", "MS SQL", ""],
			gitHubLink: "https://github.com/EzSup/TgBot",
			demoLink: undefined,
		},
	];

	return (
		<>
			<section id="home">
				<div className="image-container">
					<div className="self-image">
						<img></img>
					</div>
				</div>

				<h1>
					Hi, I`m Ihor, a <b>software engineer</b> specializing in{" "}
					<b>Web and desktop development</b>, and I'm passionate about
					transforming ideas into impactful products
				</h1>
				<div className="buttons-row">
					<a href="mailto:ihor.opanasiuk@gmail.com" target="_blank">
						<button>
							Contact me{" "}
							<IoIosArrowRoundForward
								size={20}
								style={{ marginBottom: "-5px" }}
							/>
						</button>
					</a>
					<a target="_blank">
						<button>
							Download CV
							<PiDownloadSimple size={18} style={{ marginBottom: "-4px" }} />
						</button>
					</a>
					{/* <a>
						<button>
							<BiLogoLinkedin style={{ margin: "-7px" }} size={25} />
						</button>
					</a> */}
					<a href="https://github.com/EzSup" target="_blank">
						<button>
							<BiLogoGithub style={{ margin: "-10px" }} size={30} />
						</button>
					</a>
					<a href="https://t.me/Ezsup" target="_blank">
						<button>
							<BiLogoTelegram
								style={{ margin: "-8px 0px -8px -4px" }}
								size={26}
							/>
						</button>
					</a>
				</div>
			</section>
			<section id="about">
				<h2>About me</h2>
				<p>
					I'm a .Net developer with relevant experience in C# programming
					language and other .Net-related technologies.
					<br /> My key competencies include knowledge of OOP, SOLID and
					Dependency Injection, development of web projects on Asp.Net Core
					platform, including Restful API and client-side projects using Blazor
					Server framework. I also developed desktop applications using
					WinForms/WPF. <br />I am currently expanding my stack by learning
					TypeScript and React. Also, I am expanding my knowledge of .Net,
					reading "CLR via C#".
					<br />
					About myself, I can say that I am responsible, punctual, honest,
					friendly and able to adapt to new conditions. My goal is to apply my
					knowledge and skills to develop innovative and high-quality software
					solutions, as well as to constantly improve and develop in the field
					of programming.
				</p>
			</section>
			<section id="projects">
				<h2>My Projects</h2>
				<div>
					{projects.map((project) => (
						<Project key={project.title} project={project} />
					))}
				</div>
			</section>
			<section id="skills">
				<h2>My Skills</h2>
				<h3>Backend</h3>
				<div>
					{backSkills.map((skill) => (
						<Skill key={skill.name} skill={skill} />
					))}
				</div>
				<h3>Frontend</h3>
				<div>
					{frontSkills.map((skill) => (
						<Skill key={skill.name} skill={skill} />
					))}
				</div>
				<h3>Other</h3>
				<div>
					{otherSkills.map((skill) => (
						<Skill key={skill.name} skill={skill} />
					))}
				</div>
			</section>
			<section id="contact">
				<h2>Contact Me</h2>
				<p>
					Thank You for checking out my page! So You are interested? I look
					forward to our communication!
				</p>
				<a href="#home">
					<button className="btn-custom">
						To contacts{" "}
						<IoIosArrowRoundUp size={20} style={{ marginBottom: "-5px" }} />
					</button>
				</a>
			</section>
		</>
	);
}

export default App;
