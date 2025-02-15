import data from '../assets/data.json';

export function Content() {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.adresse}</p>
            <p>{data.telefon}</p>
            <p>{data.email}</p>

            <h2>Berufserfahrung</h2>
            <ul>
                {data.berufserfahrung.map((job, index) => (
                    <li key={index}>
                        <strong> {job.position} </strong>
                        bei {job.unternehmen} <strong></strong> {job.standort}
                        <ul>
                            {job.aufgaben.map((aufgab, a) => (
                                <li key={a}>{aufgab}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <h2>Projekte</h2>
            <p>
                {data.projekte.map((projekt, p) => (
                    <ul key={p}>
                        <h2>{projekt.name}</h2>
                        <li>
                            {projekt.jahr} {projekt.note || ""}{" "}
                        </li>
                        <li>
                            {projekt.technologien.map((tech, t) => (
                                <li key={p}>{tech}</li>
                            ))}
                        </li>
                    </ul>
                ))}

                <h2>Bildungsweg</h2>
                <li>{data.bildungsweg.hochschule}</li>
                <li>{data.bildungsweg.zeitraum}</li>
                <li>{data.bildungsweg.abschluss}</li>
                <li>{data.bildungsweg.gesamtnote}</li>
            </p>
            <h2>Skills</h2>
            <ul>
                {data.skills.edv_kenntnisse.map((skill, s) => (
                    <li key={s}>{skill}</li>
                ))}
            </ul>
            <h2>Sprachen</h2>
            <li>{data.skills.sprachen.deutsch}</li>
            <li>{data.skills.sprachen.englisch}</li>

            <h2>Hobbies</h2>
            <ul>
                {data.hobbies.map((hobie, h) => (
                    <li key={h}>{hobie}</li>
                ))}
            </ul>
        </div>
    );
}
