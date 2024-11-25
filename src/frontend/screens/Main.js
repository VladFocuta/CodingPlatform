import { UserAuth } from "../../backend/firebaseConfig/authProvider";
import { UserProgressData } from "../components/contexts/userProgress";

function Main() {
  const { user, loggedIn } = UserAuth();
  const { userProgressPoints, problemsSolved, admin } = UserProgressData();

  const sections = [
    {
      title: "Introducere",
      lessons: [
        { title: "Introducere", link: "/problems/Introducere", icon: "fa-solid fa-circle-check", index: 1 },
        { title: "Variabile", link: "/problems/Variabile", icon: "fa-solid fa-circle-check", index: 2 },
        { title: "Operatori", link: "/problems/Operatori", icon: "fa-solid fa-circle-check", index: 3 },
        { title: "Functii", link: "/problems/Functii", icon: "fa-solid fa-circle-check", index: 4 },
        { title: "Afisare", link: "/problems/Afisare", icon: "fa-solid fa-circle-check", index: 5 },
        { title: "Suma", link: "/problems/Suma", icon: "fa-solid fa-circle-check", index: 6 },
        { title: "Afisare text", link: "/problems/Afisare text", icon: "fa-solid fa-circle-check", index: 7 },
        { title: "Note", link: "/problems/Note", icon: "fa-solid fa-circle-check", index: 8 }
      ]
    },
    {
      title: "If-structură de decizie",
      lessons: [
        { title: "Instructiunea If", link: "/problems/Instructiunea If", icon: "fa-solid fa-circle-check", index: 9 },
        { title: "Fratii", link: "/problems/Fratii", icon: "fa-solid fa-circle-check", index: 10 },
        { title: "Vacanta", link: "/problems/Vacanta", icon: "fa-solid fa-circle-check", index: 11 },
        { title: "Maxim", link: "/problems/Maxim", icon: "fa-solid fa-circle-check", index: 12 },
        { title: "Crescator", link: "/problems/Crescator", icon: "fa-solid fa-circle-check", index: 13 },
        { title: "Crescator2.0", link: "/problems/Crescator2.0", icon: "fa-solid fa-circle-check", index: 14 }
      ]
    },
    {
      title: "While-structură de control",
      lessons: [
        { title: "While", link: "/problems/While", icon: "fa-solid fa-circle-check", index: 15 },
        { title: "Contor", link: "/problems/Contor", icon: "fa-solid fa-circle-check", index: 16 },
        { title: "Numaratoare inversa", link: "/problems/Numaratoare inversa", icon: "fa-solid fa-circle-check", index: 17 },
        { title: "Numerele pare", link: "/problems/Numerele pare", icon: "fa-solid fa-circle-check", index: 18 },
        { title: "Concatenare", link: "/problems/Concatenare", icon: "fa-solid fa-circle-check", index: 19 },
        { title: "Concatenare 2", link: "/problems/Concatenare 2", icon: "fa-solid fa-circle-check", index: 20 },
        { title: "Numere repetate", link: "/problems/Numere repetate", icon: "fa-solid fa-circle-check", index: 21 },
        { title: "Instructiunea return", link: "/problems/Return", icon: "fa-solid fa-circle-check", index: 22 }
      ]
    }
  ];

  return (
    <>
      {loggedIn ? (
        <div className='main-container'>
          {user && <h1 style={{ color: 'white', marginTop: '30px', marginBottom: '20px'  }}>Bun venit {user.displayName}!</h1>}


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
                            {!admin ? (
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
                            ) : (
                              <i
                                className={lesson.icon}


                                style={{ color: isSolved || problemsSolved.length === lesson.index ? 'green' : 'grey' }}
                              ></i>
                            )
                            }

                            {lessonIndex !== section.lessons.length - 1 && <div className="vertical-line" style={{ backgroundColor: `${isSolved ? 'green' : 'grey'}` }}></div>}

                          </div>
                          {!admin ? (
                            <a style={{ textDecoration: 'none', marginLeft: '10px' }} href={isSolved || problemsSolved.length === lesson.index - 1 ? lesson.link : null}>
                              {lesson.title}
                            </a>
                          ) : (
                            <a style={{ textDecoration: 'none', marginLeft: '10px' }} href={lesson.link}>
                              {lesson.title}
                            </a>
                          )}


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
