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
        { title: "Introducere", link: "/Introduction", icon: "fas fa-check" },
        { title: "Variabile", link: "/Variables", icon: "fas fa-check" },
        { title: "Operatori", link: "/Operators", icon: "fas fa-check" },
        { title: "Functii", link: "/Functions", icon: "fas fa-check" },
        { title: "Afisare", link: "/ConsoleLog", icon: "fas fa-check" },
        { title: "Suma a doua numere", link: "/SumOfTwoNumbers", icon: "fas fa-check" },
        { title: "Afisare text", link: "/WordsDisplay", icon: "fas fa-check" },
        { title: "Note", link: "/Average", icon: "fas fa-check" }
      ]
    },
    {
      title: "If-structură de decizie",
      lessons: [
        { title: "Instructiunea If", link: "/IfExplanation", icon: "fas fa-check" },
        { title: "Fratii", link: "/Brothers", icon: "fas fa-check" },
        { title: "Vacanta", link: "/Vacancy", icon: "fas fa-check" },
        { title: "Numarul maxim", link: "/Maxim", icon: "fas fa-check" },
        { title: "Ordonam crescator", link: "/Ascending", icon: "fas fa-check" },
        { title: "Ordonam crescator2.0", link: "/Ascending3", icon: "fas fa-check" }
      ]
    },
    {
      title: "While-structură de control",
      lessons: [
        { title: "Instructiunea while", link: "/While", icon: "fas fa-check" },
        { title: "Numaratoare inversa", link: "/ReverseCounter", icon: "fas fa-check" },
        { title: "Contor", link: "/Counter", icon: "fas fa-check" },
        { title: "Numerele pare", link: "/EvenNumbers", icon: "fas fa-check" }
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
                      const isSolved = problemsSolved.includes(lesson.title); // Verifică dacă lecția e rezolvată
                      return (
                        <div key={lessonIndex} className="accordion-body">
                          <a style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href={lesson.link}>
                            <i className={`${lesson.icon} `} style={{ marginRight: '10px', color: `${isSolved ? 'green' : 'grey'}` }}></i> {/* Iconiță cu culoare în funcție de status */}
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
