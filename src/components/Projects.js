import React from 'react'
import '../styling/Projects.css'

function Projects() {
    return (
        <>
            <div className="container justifyCenter">
                <div className="">
                    <h1>My Projects</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
                    <div className="projectList flexRow">
                        <div className="project newsAI">
                            {/* <h4>News AI</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate at exercitationem repudiandae dicta recusandae!</p> */}
                        </div>
                        <div className="project trademates">
                            {/* <h4>TradeMates</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quod maiores inventore, porro rem sequi.</p> */}
                        </div>
                        <div className="project textutils">
                            {/* <h4>TextUtils</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid distinctio accusamus consectetur esse explicabo nemo.</p> */}
                        </div>
                        <div className="project digiCalc">
                            {/* <h4>Digi Calc</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, necessitatibus explicabo quaerat fugiat illo aperiam!</p> */}
                        </div>
                        <div className="project dieroFoods">
                            {/* <h4>Diero Foods</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero error laudantium alias esse ut iure.</p> */}
                        </div>
                        <div className="project fastaid">
                            {/* <h4>FastAid</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quam quisquam maiores soluta fugit velit?</p> */}
                        </div>
                        <div className="project magicNotes">
                            {/* <h4>Magic Notes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit animi odit reprehenderit tempora accusamus.</p> */}
                        </div>
                        <div className="project muscleUp">
                            {/* <h4>Muscle Up</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, architecto neque cumque similique impedit tempore?</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects