import './Education.css'

function Education() {
    const educationData = [
        {
            id: 1,
            degree: "B.Tech in Computer Science and Engineering",
            university: "CodingGita X Rai University",
            percentage: "9.81 CGPA",
            duration: "2024 - 2028",
        },
        {
            id: 2,
            degree: "Higher Secondary Education",
            university: "Parth School of Science and Competition",
            percentage: "Percentage 68%",
            duration: "2022 - 2024",
        },
    ];

    return (
        <>
            <div className="education">
                <h2>Education</h2>
                <div className="education-container">
                    {educationData.map((edu) => (
                        <div key={edu.id} className="education-content">                   
                                <h3>{edu.degree}</h3>
                                <p><b>{edu.university}</b></p>
                                <p>{edu.percentage}</p>
                                <p>{edu.duration}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Education