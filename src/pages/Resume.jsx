// create and export Resume page

export default function Resume() {
    return (
        <div className="d-flex flex-column">
            <div>
                <h1>My Skills</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                </ul>
            </div>
            <div className="d-flex">
                {/*insert link to resume once posted to public folder*/}
            </div>
        </div>
    );
}