import { useEffect, useState } from "react";
import { UserAuth } from "../../backend/firebaseConfig/authProvider";
import { UserProgressData } from "../components/contexts/userProgress";
import { updateLimitAccess } from "../../backend/functions/handleAccess";

function Main() {
  const { user, loggedIn, logout } = UserAuth();
  const { userProgressPoints, problemsSolved, admin, capitols, limitAccess } = UserProgressData();
  const [timeRemaining, setTimeRemaining] = useState(limitAccess || null);

  const userId = user?.uid

  useEffect(() => {
    if (user && limitAccess) {
      const expirationDate = new Date(limitAccess);

      const intervalId = setInterval(() => {
        const now = new Date();
        const timeLeft = expirationDate - now;

        if (timeLeft <= 0) {
          clearInterval(intervalId);
          alert("Timpul de acces a expirat. Veți fi delogat.");
          logout();
          window.location.href = "/login";
        } else {
          const hours = Math.floor(timeLeft / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000); // Actualizează la fiecare secundă

      return () => clearInterval(intervalId);
    }
  }, [user, limitAccess, logout]);


  useEffect(() => {
    const saveTimeOnUnload = () => {
      if (timeRemaining !== null) {
        const remainingHours = new Date(timeRemaining);
        updateLimitAccess(userId, remainingHours); // Salvează timpul rămas în ore
      }
    };
  
    window.addEventListener("beforeunload", saveTimeOnUnload);
    return () => {
      window.removeEventListener("beforeunload", saveTimeOnUnload);
    };
  }, [timeRemaining, userId]);
  
  const freeLessons = [
    "Recapitulare algoritmi",
    "Algoritmi"
  ]
  const combinedLessons = [...freeLessons, ...(capitols || [])];

  const sections = [
    {
      title: "Algoritmi",
      lessons: [
        { title: "Notiunea de algoritm", link: "/problems/Notiunea de algoritm", icon: "fa-solid fa-circle-check", index: 1 },
        { title: "Bazele programarii", link: "/problems/Bazele programarii", icon: "fa-solid fa-circle-check", index: 2 },
        { title: "Rulare program", link: "/problems/Rulare program", icon: "fa-solid fa-circle-check", index: 3 },
        { title: "Suma", link: "/problems/Suma", icon: "fa-solid fa-circle-check", index: 4 },
        { title: "Aria unui dreptunghi", link: "/problems/Aria unui dreptunghi", icon: "fa-solid fa-circle-check", index: 5 },
        { title: "Structuri de baze", link: "/problems/Structuri de baze", icon: "fa-solid fa-circle-check", index: 6 },
        { title: "Interschimbare", link: "/problems/Interschimbare", icon: "fa-solid fa-circle-check", index: 7 },
        { title: "Numarul maxim", link: "/problems/Numarul maxim", icon: "fa-solid fa-circle-check", index: 8 }
      ]
    },
    {
      title: "Recapitulare algoritmi",
      lessons: [
        { title: "Temperatura corpului", link: "/problems/Temperatura corpului", icon: "fa-solid fa-circle-check", index: 9 },
        { title: "Numar absolut", link: "/problems/Numar absolut", icon: "fa-solid fa-circle-check", index: 10 },
        { title: "Conversia temperaturii", link: "/problems/Conversia temperaturii", icon: "fa-solid fa-circle-check", index: 11 },
        { title: "Divizibilitate", link: "/problems/Divizibilitate", icon: "fa-solid fa-circle-check", index: 12 },
        { title: "Media notelor", link: "/problems/Media notelor", icon: "fa-solid fa-circle-check", index: 13 },
        { title: "Convertirea orelor", link: "/problems/Convertirea orelor", icon: "fa-solid fa-circle-check", index: 14 },
        { title: "Palindrom numeric", link: "/problems/Palindrom numeric", icon: "fa-solid fa-circle-check", index: 15 },
        { title: "Triunghi valid", link: "/problems/Triunghi valid", icon: "fa-solid fa-circle-check", index: 16 },
        { title: "Calculator", link: "/problems/Calculator", icon: "fa-solid fa-circle-check", index: 17 }
      ]
    },
    {
      title: "While-structură de control",
      lessons: [
        { title: "While", link: "/problems/While", icon: "fa-solid fa-circle-check", index: 18 },
        { title: "Contor", link: "/problems/Contor", icon: "fa-solid fa-circle-check", index: 19 },
        { title: "Numaratoare inversa", link: "/problems/Numaratoare inversa", icon: "fa-solid fa-circle-check", index: 20 },
        { title: "Suma cifrelor", link: "/problems/Suma cifrelor", icon: "fa-solid fa-circle-check", index: 21 },
        { title: "Debugging", link: "/problems/Debugging", icon: "fa-solid fa-circle-check", index: 22 },
        { title: "Ghicirea unui numar", link: "/problems/Ghicirea unui numar", icon: "fa-solid fa-circle-check", index: 23 },
        { title: "Numar prim", link: "/problems/Numar prim", icon: "fa-solid fa-circle-check", index: 24 },
        { title: "Concatenarea", link: "/problems/Concatenarea", icon: "fa-solid fa-circle-check", index: 25 },
        { title: "Trenul", link: "/problems/Stop", icon: "fa-solid fa-circle-check", index: 26 }
      ]
    },
    {
      title: "Recapitulare While",
      lessons: [
        { title: "Numar maxim", link: "/problems/Numar maxim", icon: "fa-solid fa-circle-check", index: 27 },
        { title: "CMMD", link: "/problems/CMMD", icon: "fa-solid fa-circle-check", index: 28 },
        { title: "Suma maxima", link: "/problems/Suma maxima", icon: "fa-solid fa-circle-check", index: 29 },
        { title: "Numar impar", link: "/problems/Numar impar", icon: "fa-solid fa-circle-check", index: 30 },
        { title: "Factorialul unui numar", link: "/problems/Factorialul unui numar", icon: "fa-solid fa-circle-check", index: 31 },
        { title: "Numarul magic", link: "/problems/Numarul magic", icon: "fa-solid fa-circle-check", index: 32 },

      ]
    }
  ];

  return (
    <>
      {loggedIn ? (
        <div className='main-container'>
          {user && <h1 style={{ color: 'white', marginTop: '30px', marginBottom: '20px' }}>Bun venit {user.displayName}!</h1>}


          <div className='userInfo'>
            <div className='profile-picture'></div>
            <h3>Invata bazele programarii:</h3>

            <div style={{ width: '70%', alignSelf: 'center' }} className="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-danger" style={{ width: userProgressPoints ? `${userProgressPoints}%` : '0%' }}>
                {userProgressPoints}%
              </div>
            </div>
          </div>

          <div>
            <strong style={{ color: 'white' }}>Timp ramas: {timeRemaining} </strong>
          </div>

          <div className='problems' style={{ background: 'white', opacity: 0.8 }}>
            <div style={{ color: 'black', width: '100%', padding: '10px', marginBottom: '5px' }}>
              <h4 style={{ color: 'black' }}>Problemele curente:</h4>
            </div>

            <div className="accordion accordion-flush" id="accordionFlushExample">
              {sections.map((section, sectionIndex) => {
                const shouldRender = !admin && combinedLessons.includes(section.title);


                return (
                  <div key={sectionIndex} className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${sectionIndex}`} aria-expanded="false" aria-controls={`flush-collapse${sectionIndex}`}>
                        {section.title}
                      </button>
                    </h2>

                    {shouldRender && (

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
                    )}

                    {admin && (
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
                    )}


                  </div>
                )



              })}
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
