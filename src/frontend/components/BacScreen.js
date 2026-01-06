import React from 'react'
import { UserProgressData } from './contexts/userProgress'
import { UserAuth } from '../../backend/firebaseConfig/authProvider';

function BacScreen() {

    const { problemsSolved } = UserProgressData() || {};
    const { loggedIn } = UserAuth();

    const sections = [
        {
            title: "Tablouri unidimensionale",
            lessons: [
                { title: "Cea mai mare suma de k termeni", link: "/problems/bac/Cea mai mare suma de k termeni", icon: "fa-solid fa-circle-check" },
                { title: "Verificarea numerelor crescatoare", link: "/problems/bac/Verificarea numerelor crescatoare", icon: "fa-solid fa-circle-check" },

            ]
        }]

    return (
        <>
            {
                loggedIn ? (
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {sections.map((section, sectionIndex) => {

                            return (
                                <div key={sectionIndex} className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${sectionIndex}`} aria-expanded="false" aria-controls={`flush-collapse${sectionIndex}`}>
                                            {section.title}
                                        </button>
                                    </h2>

                                    <div id={`flush-collapse${sectionIndex}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        {section.lessons.map((lesson, lessonIndex) => {
                                            const isSolved = problemsSolved.includes(lesson.title);

                                            return (
                                                <div key={lessonIndex} className="accordion-body" style={{ display: 'flex' }}>
                                                    <div className="icon-container">
                                                        <i className={lesson.icon}
                                                            style={{ color: isSolved ? 'green' : 'grey' }}
                                                        ></i>


                                                        {lessonIndex !== section.lessons.length - 1 && <div className="vertical-line" style={{ backgroundColor: `${isSolved ? 'green' : 'grey'}` }}></div>}

                                                    </div>

                                                    <a style={{ textDecoration: 'none', marginLeft: '10px' }} href={lesson.link}>
                                                        {lesson.title}
                                                    </a>

                                                </div>
                                            );
                                        })}
                                    </div>

                                </div>
                            )



                        })}
                    </div>


                ) : (
                    <div style={{ marginTop: '100px' }}>
                        <h1 className='home-container' style={{ color: 'white' }}>Trebuie sa te loghezi!</h1 >
                    </div >
                )
            }

        </>

    )
}

export default BacScreen