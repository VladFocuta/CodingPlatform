import { UserAuth } from "../../backend/firebaseConfig/authProvider";
import { UserProgressData } from "../components/contexts/userProgress";
import Progress from "../components/Progress";

function Main() {
  const { user, loggedIn } = UserAuth();
  const { userProgressPoints, problemsSolved, admin, capitols, credits } = UserProgressData() || {};
  //trecerea de la o problema la alta
  // titlurile sa fie cuprinse in chenar

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
        { title: "Maxim si minim", link: "/problems/Maxim si minim", icon: "fa-solid fa-circle-check", index: 31 },
        { title: "Produsul", link: "/problems/Produsul", icon: "fa-solid fa-circle-check", index: 32 },
        { title: "Numere perfecte", link: "/problems/Numere perfecte", icon: "fa-solid fa-circle-check", index: 33 },
        { title: "Eliminarea", link: "/problems/Eliminarea", icon: "fa-solid fa-circle-check", index: 34 },
        { title: "Generare numere", link: "/problems/Generare numere", icon: "fa-solid fa-circle-check", index: 35 },
        { title: "Factorialul unui numar", link: "/problems/Factorialul unui numar", icon: "fa-solid fa-circle-check", index: 36 },
        { title: "Numarul magic", link: "/problems/Numarul magic", icon: "fa-solid fa-circle-check", index: 37 },
        { title: "Oglindire", link: "/problems/Oglindire", icon: "fa-solid fa-circle-check", index: 38 },
        { title: "Interschimbare doua jumatati", link: "/problems/Interschimbare doua jumatati", icon: "fa-solid fa-circle-check", index: 39 },

      ]
    },
    {
      title: "Structura repetitiva for",
      lessons: [
        { title: "Structura Repetitiva for", link: "/problems/Structura Repetitiva for", icon: "fa-solid fa-circle-check", index: 40 },
        { title: "Siruri de numere", link: "/problems/Siruri de numere", icon: "fa-solid fa-circle-check", index: 41 },
        { title: "Produsul numerelor", link: "/problems/Produsul numerelor", icon: "fa-solid fa-circle-check", index: 42 },
        { title: "Pozitii pare", link: "/problems/Pozitii pare", icon: "fa-solid fa-circle-check", index: 43 },
        { title: "Afisam descrescator", link: "/problems/Afisam descrescator", icon: "fa-solid fa-circle-check", index: 44 },
        { title: "Stergerea unui element", link: "/problems/Stergerea unui element", icon: "fa-solid fa-circle-check", index: 45 },
        { title: "Stergerea unui element 2.0", link: "/problems/Stergerea unui element 2.0", icon: "fa-solid fa-circle-check", index: 46 },
        { title: "Inserarea unui element", link: "/problems/Inserarea unui element", icon: "fa-solid fa-circle-check", index: 47 },
        { title: "Inserarea unui element 2.0", link: "/problems/Inserarea unui element 2.0", icon: "fa-solid fa-circle-check", index: 48 },
        { title: "Bubble Sort", link: "/problems/Bubble Sort", icon: "fa-solid fa-circle-check", index: 49 },
        { title: "Insertion Sort", link: "/problems/Insertion Sort", icon: "fa-solid fa-circle-check", index: 50 },
        { title: "Selection Sort", link: "/problems/Selection Sort", icon: "fa-solid fa-circle-check", index: 51 },
        { title: "Linear Search", link: "/problems/Linear Search", icon: "fa-solid fa-circle-check", index: 52 },
        { title: "Binary Search", link: "/problems/Binary Search", icon: "fa-solid fa-circle-check", index: 53 }
      ]
    }, {
      title: "Recapitulare For",
      lessons: [
        { title: "Sortare descrescatoare", link: "/problems/Sortare descrescatoare", icon: "fa-solid fa-circle-check", index: 54 },
        { title: "Sortare si eliminare duplicate", link: "/problems/Sortare si eliminare duplicate", icon: "fa-solid fa-circle-check", index: 55 },
        { title: "Nota maxima si minima", link: "/problems/Nota maxima si minima", icon: "fa-solid fa-circle-check", index: 56 },
        { title: "Sortare si interschimbare", link: "/problems/Sortare si interschimbare", icon: "fa-solid fa-circle-check", index: 57 },
        { title: "Cautarea unui element", link: "/problems/Cautarea unui element", icon: "fa-solid fa-circle-check", index: 58 },
        { title: "Numar lipsa", link: "/problems/Numar lipsa", icon: "fa-solid fa-circle-check", index: 59 },
        { title: "Element majoritar", link: "/problems/Element majoritar", icon: "fa-solid fa-circle-check", index: 60 },
        { title: "Vecini pari", link: "/problems/Vecini pari", icon: "fa-solid fa-circle-check", index: 61 },
        { title: "Sub-secventa array", link: "/problems/Sub-secventa array", icon: "fa-solid fa-circle-check", index: 62 },
        { title: "Suma a doua siruri", link: "/problems/Suma a doua siruri", icon: "fa-solid fa-circle-check", index: 63 },
        { title: "Suma a doua siruri2.0", link: "/problems/Suma a doua siruri2.0", icon: "fa-solid fa-circle-check", index: 64 },
        { title: "Sirul lui Fibonacci", link: "/problems/Sirul lui Fibonacci", icon: "fa-solid fa-circle-check", index: 65 },

      ]
    }, {
      title: "Matrici",
      lessons: [
        { title: "Matrici", link: "/problems/Matrici", icon: "fa-solid fa-circle-check", index: 66 },
        { title: "Declarare/Citire/Afisare", link: "/problems/Declarare/Citire/Afisare", icon: "fa-solid fa-circle-check", index: 67 },
        { title: "Suma elementelor", link: "/problems/Suma elementelor", icon: "fa-solid fa-circle-check", index: 68 },
        { title: "Diagonale si submatrici", link: "/problems/Diagonale si submatrici", icon: "fa-solid fa-circle-check", index: 69 },
        { title: "Diferenta diagonalei principale", link: "/problems/Diferenta diagonalei principale", icon: "fa-solid fa-circle-check", index: 70 },
        { title: "Minim pe diagonala secundara", link: "/problems/Minim pe diagonala secundara", icon: "fa-solid fa-circle-check", index: 71 },
        { title: "Extragerea unei submatrici", link: "/problems/Extragerea unei submatrici", icon: "fa-solid fa-circle-check", index: 72 },
        { title: "Matrice de identitate", link: "/problems/Matrice de identitate", icon: "fa-solid fa-circle-check", index: 73 },
        { title: "Inlocuirea unei coloane", link: "/problems/Inlocuirea unei coloane", icon: "fa-solid fa-circle-check", index: 74 },
        { title: "Cel mai mare de pe rand", link: "/problems/Cel mai mare de pe rand", icon: "fa-solid fa-circle-check", index: 75 },


      ]
    }, {
      title: "Subprograme",
      lessons: [

      ]
    }, {
      title: "Siruri de caractere",
      lessons: [

      ]
    }, {
      title: "Fisiere text",
      lessons: [

      ]
    }, {
      title: "Recursivitate & Metoda backtracking",
      lessons: [

      ]
    }, {
      title: "Grafuri",
      lessons: [

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

          <div style={{ display: 'flex', flexDirection: 'column' }}>

            <strong style={{ color: 'white' }}>Credite ramase: {credits} </strong>
          </div>


          <div className='problems'>
            <div>
              <Progress exp={userProgressPoints} />
            </div>

            <div style={{ background: 'white', opacity: 0.8, marginTop: '10px' }}>
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
                                        isSolved ? lesson.icon : problemsSolved.length === lesson.index - 1
                                            ? lesson.icon 
                                            : lesson.icon 
                                      }
                                      style={{ color: isSolved ? 'green' : 'grey' }}
                                    ></i>
                                  ) : (
                                    <i
                                      className={lesson.icon}


                                      style={{ color: isSolved ? 'green' : 'grey' }}
                                    ></i>
                                  )
                                  }

                                  {lessonIndex !== section.lessons.length - 1 && <div className="vertical-line" style={{ backgroundColor: `${isSolved ? 'green' : 'grey'}` }}></div>}

                                </div>
                                {!admin ? (
                                  <a style={{ textDecoration: 'none', marginLeft: '10px' }} href={lesson.link}>
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
        </div>
      ) : (
        <h1 className='home-container' style={{ color: 'white' }}>Trebuie sa te loghezi!</h1>
      )}
    </>
  )
}

export default Main;
