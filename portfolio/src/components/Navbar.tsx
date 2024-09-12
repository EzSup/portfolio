import { useEffect, useState } from "react";
import "./Navbar.scss";

function Navbar() {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const options = {
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	return (
		<div className="navbar">
			<a className={activeSection === "home" ? "active" : ""} href="#home">
				Home
			</a>
			<a className={activeSection === "about" ? "active" : ""} href="#about">
				About
			</a>
			<a
				className={activeSection === "projects" ? "active" : ""}
				href="#projects"
			>
				Projects
			</a>
			<a
				className={
					activeSection === "skills" || activeSection === "contact"
						? "active"
						: ""
				}
				href="#skills"
			>
				Skills
			</a>
		</div>
	);
}

export default Navbar;
