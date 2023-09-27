// import screenshots for later use
import JavaScriptQuiz from "../assets/images/JavaScriptQuiz.png";
import PasswordGenerator from "../assets/images/PasswordGenerator.png";
import TextEditor from "../assets/images/TextEditor.png";
import FlavorByte from "../assets/images/FlavorByte.png";
import HaikuHelper from "../assets/images/HaikuHelper.png";
import ReelReviews from "../assets/images/ReelReviews.png";

// create and export portfolio page
export default function Portfolio() {
    return (
        <div>
            <ul className="">
                <div className="row1">

                    <li className="col p-4 m-4">
                        <div className="d-flex justify-content-center">
                            <button className="m-2">
                                <a href="https://haiku-helper-428f5c7f1218.herokuapp.com/">Haiku Helper</a>
                            </button>
                            <button className="m-2">
                                <a href="https://github.com/ssherp/haiku-creator">GitHub Repo</a>
                            </button>
                        </div>
                        <img src={HaikuHelper} alt="Haiku Helper" className="img-fluid" width={250}/>
                    </li>

                        <li className="col p-4 m-4">
                        <div className="d-flex justify-content-center">
                            <button className="m-2">
                                <a href="https://cinemaserver-7dafae9cd971.herokuapp.com/">ReelReviews</a>
                            </button>
                            <button className="m-2">
                                <a href="https://github.com/mattschneble/ReelReviews">GitHub Repo</a>
                            </button>
                        </div>
                        <img src={ReelReviews} alt="ReelReviews" className="img-fluid" width={250}/>
                    </li>

                        <li className="col p-4 m-4">
                        <div className="d-flex justify-content-center">
                            <button className="m-2">
                                <a href="https://rossfahan.github.io/flavorByte/">FlavorByte</a>
                            </button>
                            <button className="m-2">
                                <a href="https://github.com/RossFahan/flavorByte">GitHub Repo</a>
                            </button>
                        </div>
                        <img src={FlavorByte} alt="FlavorByte" className="img-fluid" width={250}/>
                    </li>

                        <li className="col p-4 m-4">
                        <div className="d-flex justify-content-center">
                            <button className="m-2">
                                <a href="https://mattschneble.github.io/custom-password-generator/">Password Generator</a>
                            </button>
                            <button className="m-2">
                                <a href="https://github.com/mattschneble/custom-password-generator">GitHub Repo</a>
                            </button>
                        </div>
                        <img src={PasswordGenerator} alt="Password Generator" className="img-fluid" width={250}/>
                    </li>

                        <li className="col p-4 m-4">
                        <div className="d-flex justify-content-center">
                            <button className="m-2">
                                <a href="https://fathomless-brushlands-17288-cc4c35c614a6.herokuapp.com/">Text Editor</a>
                            </button>
                            <button className="m-2">
                                <a href="https://github.com/mattschneble/progressive-text-editor">GitHub Repo</a>
                            </button>
                        </div>
                        <img src={TextEditor} alt="Text Editor" className="img-fluid" width={250}/>
                    </li>

                        <li className="col p-4 m-4">
                        <div className="d-flex justify-content-center">
                            <button className="m-2">
                                <a href="https://mattschneble.github.io/knowledge-quiz/">JavaScript Quiz</a>
                            </button>
                            <button className="m-2">
                                <a href="https://github.com/mattschneble/knowledge-quiz">GitHub Repo</a>
                            </button>
                        </div>
                        <img src={JavaScriptQuiz} alt="JavaScript Quiz" className="img-fluid" width={250}/>

                    </li>
                </div>
            </ul>
        </div>
    );
}