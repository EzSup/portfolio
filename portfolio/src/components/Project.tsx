import { ProjectObj } from "../data/models";
import Tech from "./Tech";
import LinkOfProject from "./LinkOfProject";
import "./Project.scss";

function Project(props: { project: ProjectObj }) {
	return (
		<div className="card">
			<h2>{props.project.title}</h2>
			<p>{props.project.description}</p>
			<div className="card-stack">
				{props.project.techStack.map((techItem) =>
					techItem ? (
						<Tech key={techItem} techName={techItem.toUpperCase()} />
					) : (
						<></>
					)
				)}
			</div>
			<div className="card-stack">
				{props.project.demoLink ? (
					<LinkOfProject placeholder="Demo" link={props.project.demoLink} />
				) : (
					<></>
				)}
				{props.project.gitHubLink ? (
					<LinkOfProject placeholder="GitHub" link={props.project.gitHubLink} />
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default Project;
