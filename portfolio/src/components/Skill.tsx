import "./Skill.scss";
import { SkillObj } from "../data/models";

function Skill(props: { skill: SkillObj }) {
	return <div className="skill-card">{props.skill.name}</div>;
}

export default Skill;
