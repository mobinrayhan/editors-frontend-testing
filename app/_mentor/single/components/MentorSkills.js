// import node module libraries
import Link from "next/link"
import { Card } from "react-bootstrap"

const MentorSkills = () => {
    const skills = ['Frontend', 'UX Design', 'HTML', 'UI Design', 'CSS', 'Landing page design',
        'Figma', 'eCommerce Design', 'React', 'Javascript', 'Vuejs', 'Next.js']
    return (
        <Card>
            <Card.Body className="p-md-5">
                <div className="d-flex flex-column gap-3">
                    <h3 className="mb-0">Skills</h3>
                    <div className="gap-2 d-flex flex-wrap">
                        {skills.map((skill, index) => {
                            return <Link href="#!" key={index} className="btn btn-tag btn-sm">{skill}</Link>
                        })}
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default MentorSkills