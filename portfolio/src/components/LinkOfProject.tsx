import { FaGithub } from "react-icons/fa";
import "./Project.scss";
import { BsGlobe } from "react-icons/bs";

function LinkOfProject(props: { placeholder: string; link: string }) {
	return (
		<a className="card-link" href={props.link}>
			{props.placeholder == "GitHub" ? <FaGithub /> : <></>}
			{props.placeholder == "Demo" ? <BsGlobe /> : <></>}
			{props.placeholder}
		</a>
	);
}

export default LinkOfProject;
