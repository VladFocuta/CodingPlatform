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
        { title: "Introducere", link: "/Introduction", icon: "fa-solid fa-circle-check" },
        { title: "Variabile", link: "/Variables", icon: "fa-solid fa-circle-check" },
        { title: "Operatori", link: "/Operators", icon: "fa-solid fa-circle-check" },
        { title: "Functii", link: "/Functions", icon: "fa-solid fa-circle-check" },
        { title: "Afisare", link: "/ConsoleLog", icon: "fa-solid fa-circle-check" },
        { title: "Suma a doua numere", link: "/SumOfTwoNumbers", icon: "fa-solid fa-circle-check" },
        { title: "Afisare text", link: "/WordsDisplay", icon: "fa-solid fa-circle-check" },
        { title: "Note", link: "/Average", icon: "fa-solid fa-circle-check" }
      ]
    },
    {
      title: "If-structură de decizie",
      lessons: [
        { title: "Instructiunea If", link: "/IfExplanation", icon: "fa-solid fa-circle-check" },
        { title: "Fratii", link: "/Brothers", icon: "fa-solid fa-circle-check" },
        { title: "Vacanta", link: "/Vacancy", icon: "fa-solid fa-circle-check" },
        { title: "Numarul maxim", link: "/Maxim", icon: "fa-solid fa-circle-check" },
        { title: "Ordonam crescator", link: "/Ascending", icon: "fa-solid fa-circle-check" },
        { title: "Ordonam crescator2.0", link: "/Ascending3", icon: "fa-solid fa-circle-check" }
      ]
    },
    {
      title: "While-structură de control",
      lessons: [
        { title: "Instructiunea while", link: "/While", icon: "fa-solid fa-circle-check" },
        { title: "Numaratoare inversa", link: "/ReverseCounter", icon: "fa-solid fa-circle-check" },
        { title: "Contor", link: "/Counter", icon: "fa-solid fa-circle-check" },
        { title: "Numerele pare", link: "/EvenNumbers", icon: "fa-solid fa-circle-check" },
        { title: "Concatenarea numerelor", link: "/Concatenation", icon: "fa-solid fa-circle-check" },
        { title: "Concatenare 2", link: "/Concatenation2", icon: "fa-solid fa-circle-check" },
        { title: "Numere repetate", link: "/RepeatNumber", icon: "fa-solid fa-circle-check" }
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
                            <i className={`${lesson.icon}`} style={{ color: `${isSolved ? 'green' : 'grey'}` }}></i>

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
