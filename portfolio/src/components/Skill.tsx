import "./Skill.scss";
import { SkillObj } from "../data/models";

function Skill(props: { skill: SkillObj }) {
	return <div className="card skill-card">{props.skill.name}</div>;
}

export default Skill;
