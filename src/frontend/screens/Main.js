import React from 'react';
import { UserAuth } from "../../backend/firebaseConfig/authProvider";
import { UserProgressData } from "../components/contexts/userProgress";

function Main() {
  const { user, loggedIn } = UserAuth();
  const { userProgressPoints, problemsSolved } = UserProgressData();



  const sections = [
    {
      title: "Introducere",
      lessons: [
        { title: "Introducere", link: "/Introduction", icon: "fa-solid fa-circle-check", index: 1 },
        { title: "Variabile", link: "/Variables", icon: "fa-solid fa-circle-check", index: 2 },
        { title: "Operatori", link: "/Operators", icon: "fa-solid fa-circle-check", index: 3 },
        { title: "Functii", link: "/Functions", icon: "fa-solid fa-circle-check", index: 4 },
        { title: "Afisare", link: "/ConsoleLog", icon: "fa-solid fa-circle-check", index: 5 },
        { title: "Suma a doua numere", link: "/SumOfTwoNumbers", icon: "fa-solid fa-circle-check", index: 6 },
        { title: "Afisare text", link: "/WordsDisplay", icon: "fa-solid fa-circle-check", index: 7 },
        { title: "Note", link: "/Average", icon: "fa-solid fa-circle-check", index: 8 }
      ]
    },
    {
      title: "If-structură de decizie",
      lessons: [
        { title: "Instructiunea If", link: "/IfExplanation", icon: "fa-solid fa-circle-check", index: 9 },
        { title: "Fratii", link: "/Brothers", icon: "fa-solid fa-circle-check", index: 10 },
        { title: "Vacanta", link: "/Vacancy", icon: "fa-solid fa-circle-check", index: 11 },
        { title: "Numarul maxim", link: "/Maxim", icon: "fa-solid fa-circle-check", index: 12 },
        { title: "Ordonam crescator", link: "/Ascending", icon: "fa-solid fa-circle-check", index: 13 },
        { title: "Ordonam crescator2.0", link: "/Ascending3", icon: "fa-solid fa-circle-check", index: 14 }
      ]
    },
    {
      title: "While-structură de control",
      lessons: [
        { title: "Instructiunea while", link: "/While", icon: "fa-solid fa-circle-check", index: 15 },
        { title: "Contor", link: "/Counter", icon: "fa-solid fa-circle-check", index: 16 },
        { title: "Numaratoare inversa", link: "/ReverseCounter", icon: "fa-solid fa-circle-check", index: 17 },
        { title: "Numerele pare", link: "/EvenNumbers", icon: "fa-solid fa-circle-check", index: 18 },
        { title: "Concatenarea numerelor", link: "/Concatenation", icon: "fa-solid fa-circle-check", index: 19 },
        { title: "Concatenare 2", link: "/Concatenation2", icon: "fa-solid fa-circle-check", index: 20 },
        { title: "Numere repetate", link: "/RepeatNumber", icon: "fa-solid fa-circle-check", index: 21 },
        { title: "Instructiunea return", link: "/Return", icon: "fa-solid fa-circle-check", index: 22 }
      ]
    }
  ];

  return (
    <>
      {loggedIn ? (
        <div className='main-container'>
          <h1 style={{ color: 'white', marginRight: 15 }}>Bun venit</h1>
          {user && <h1 style={{ color: 'white' }}>{user.displayName}!</h1>}

          <div className='userInfo'>
            <div className='profile-picture'>picture</div>
            <h3>Invata bazele programarii:</h3>

            <div style={{ width: '70%', alignSelf: 'center' }} className="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-danger" style={{ width: userProgressPoints ? `${userProgressPoints}%` : '0%' }}>
                {userProgressPoints}%
              </div>
            </div>
          </div>

          <div className='problems' style={{ background: 'white', opacity: 0.8 }}>
            <div style={{ color: 'black', width: '100%', padding: '10px', marginBottom: '5px' }}>
              <h4 style={{ color: 'black' }}>Problemele curente:</h4>
            </div>

            <div className="accordion accordion-flush" id="accordionFlushExample">
              {sections.map((section, sectionIndex) => (
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
                            <i
                              className={
                                isSolved
                                  ? lesson.icon // Icon-ul verde pentru lecțiile rezolvate
                                  : problemsSolved.length === lesson.index - 1 // Lecția curentă fără lacăt
                                    ? lesson.icon // Icon-ul specific lecției
                                    : "fa-solid fa-lock" // Icon-ul cu lacăt pentru restul lecțiilor
                              }
                              style={{ color: isSolved || problemsSolved.length === lesson.index ? 'green' : 'grey' }}
                            ></i>
                            {lessonIndex !== section.lessons.length - 1 && <div className="vertical-line" style={{ backgroundColor: `${isSolved ? 'green' : 'grey'}` }}></div>}

                          </div>
                          <a style={{ textDecoration: 'none', marginLeft: '10px' }} href={isSolved || problemsSolved.length === lesson.index - 1 ? lesson.link : null }>
                            {lesson.title}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1 className='home-container' style={{ color: 'white' }}>Trebuie sa te loghezi!</h1>
      )}
    </>
  )
}

export default Main;
