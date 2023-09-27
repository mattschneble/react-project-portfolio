// import picture of me later on

// create and export component for the About Me page
export default function AboutMe() {
    // return the About Me page
    return (
        <div className="d-flex flex-column">
            <h2 className="d-flex justify-content-center">About Me</h2>
            <div id="about-me" className="d-flex">
                <img
                id="my-picture"
                width={250}
                src={myself}
                alt="picture of myself stopping during a hike in Portugal."
                ></img>
                <p id="text-bio" className="p-3 m-3">
                    My name Matthew Schneble and I am a proficient technical project manager who has experience leading large scale, multi-million dollar projects. Please have a look around to see
                    some of the web projects that I have created!
                </p>
            </div>
        </div>
    );
}