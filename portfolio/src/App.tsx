import "./App.scss";
import Skill from "./components/Skill";
import { ProjectObj, SkillObj } from "./data/models";
import Project from "./components/Project";
import { BiLogoLinkedin, BiLogoGithub, BiLogoTelegram } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiDownloadSimple } from "react-icons/pi";

function App() {
	const skills: SkillObj[] = [
		{ name: ".Net/C#", imageLink: "" },
		{ name: ".ASP.NET Core", imageLink: "" },
		{ name: "Entity Framework", imageLink: "" },
		{ name: "MVC/MVVM", imageLink: "" },
	];

	const projects: ProjectObj[] = [
		{
			title: "Restaurant business service",
			description:
				"Developed a Grafana plugin for Root Cause Analysis, designed to identify anomalies and service disruptions. This tool aids engineers in swiftly tracing and resolving issues, leveraging insightful data for expedited problem-solving.",
			techStack: ["Asp.Net", "EF Core", "MS SQL"],
			gitHubLink: "asds",
			demoLink: "dfds",
		},
		{
			title: "Chat app",
			description:
				"Developed a Grafana plugin for Root Cause Analysis, designed to identify anomalies and service disruptions. This tool aids engineers in swiftly tracing and resolving issues, leveraging insightful data for expedited problem-solving.",
			techStack: ["Asp.Net", "EF Core", "MS SQL", ""],
			gitHubLink: "asds",
			demoLink: "dfds",
		},
		{
			title: "Cryptocurrency data view desktop app",
			description:
				"Developed a Grafana plugin for Root Cause Analysis, designed to identify anomalies and service disruptions. This tool aids engineers in swiftly tracing and resolving issues, leveraging insightful data for expedited problem-solving.",
			techStack: ["Asp.Net", "EF Core", "MS SQL", ""],
			gitHubLink: "asds",
			demoLink: "dfds",
		},
		{
			title: "Telegram bot",
			description:
				"Developed a Grafana plugin for Root Cause Analysis, designed to identify anomalies and service disruptions. This tool aids engineers in swiftly tracing and resolving issues, leveraging insightful data for expedited problem-solving.",
			techStack: ["Asp.Net", "EF Core", "MS SQL", ""],
			gitHubLink: "asds",
			demoLink: "dfds",
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
					<a href="mailto:ihor.opanasiuk@gmail.com">
						<button>
							Contact me{" "}
							<IoIosArrowRoundForward
								size={20}
								style={{ marginBottom: "-5px" }}
							/>
						</button>
					</a>
					<a>
						<button>
							Download CV{" "}
							<PiDownloadSimple size={18} style={{ marginBottom: "-4px" }} />
						</button>
					</a>
					<a>
						<button>
							<BiLogoLinkedin style={{ margin: "-7px" }} size={25} />
						</button>
					</a>
					<a>
						<button>
							<BiLogoGithub style={{ margin: "-10px" }} size={30} />
						</button>
					</a>
					<a>
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
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
				<div>
					{skills.map((skill) => (
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
			</section>
		</>
	);
}

export default App;
