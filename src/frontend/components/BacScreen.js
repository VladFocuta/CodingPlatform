import React from 'react'
import { UserProgressData } from './contexts/userProgress'
import { UserAuth } from '../../backend/firebaseConfig/authProvider';

function BacScreen() {

    const { problemsSolved } = UserProgressData() || {};
    const { loggedIn } = UserAuth();

    const sections = [
        {
            title: "While",
            lessons: [
                { title: "Puteri ale lui k", link: "/problems/bac/Puteri ale lui k", icon: "fa-solid fa-circle-check" },
            ]
        },
        {
            title: "Tablouri unidimensionale",
            lessons: [
                { title: "Cea mai mare suma de k termeni", link: "/problems/bac/Cea mai mare suma de k termeni", icon: "fa-solid fa-circle-check" },
                { title: "Verificarea numerelor crescatoare", link: "/problems/bac/Verificarea numerelor crescatoare", icon: "fa-solid fa-circle-check" },
                { title: "Cifra maxima si nr de aparitii", link: "/problems/bac/Cifra maxima si nr de aparitii", icon: "fa-solid fa-circle-check" },
                { title: "Determinarea numerelor cu aparitii multiple", link: "/problems/bac/Determinarea numerelor cu aparitii multiple", icon: "fa-solid fa-circle-check" },
                { title: "Rearanjarea elementelor", link: "/problems/bac/Rearanjarea elementelor", icon: "fa-solid fa-circle-check" },
            ]
        }, {
            title: "Matrici",
            lessons: [
                { title: "Matrice cu valori diferite", link: "/problems/bac/Matrice cu valori diferite", icon: "fa-solid fa-circle-check" },
                { title: "Matrice cu sume diferite pe linii si coloane", link: "/problems/bac/Matrice cu sume diferite pe linii si coloane", icon: "fa-solid fa-circle-check" },
                { title: "Generarea unei matrice cu numere pare", link: "/problems/bac/Generarea unei matrice cu numere pare", icon: "fa-solid fa-circle-check" },
                { title: "Produs sub diagonala secundara", link: "/problems/bac/Produs sub diagonala secundara", icon: "fa-solid fa-circle-check" },
            ]
        }, {
            title: "Subprograme",
            lessons: [
                { title: "Suma numerelor pare", link: "/problems/bac/Suma numerelor pare", icon: "fa-solid fa-circle-check" },
                { title: "Patratul numerelor prime", link: "/problems/bac/Patratul numerelor prime", icon: "fa-solid fa-circle-check" },
                { title: "Suma si numarul de cifre", link: "/problems/bac/Suma si numarul de cifre", icon: "fa-solid fa-circle-check" },
                { title: "Cifra cu proprietate de medie aritmetica", link: "/problems/bac/Cifra cu proprietate de medie aritmetica", icon: "fa-solid fa-circle-check" },
                { title: "Fractii ireductibile", link: "/problems/bac/Fractii ireductibile", icon: "fa-solid fa-circle-check" },
                { title: "Numar minim cu cifra maxima", link: "/problems/bac/Numar minim cu cifra maxima", icon: "fa-solid fa-circle-check" },
            ]
        }, {
            title: "Siruri de caractere",
            lessons: [
                { title: "Eliminarea consoanelor", link: "/problems/bac/Eliminarea consoanelor", icon: "fa-solid fa-circle-check" },
            ]
        },]

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