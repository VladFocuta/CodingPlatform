import { UserAuth } from "../../backend/firebaseConfig/authProvider";
import { UserProgressData } from "../components/contexts/userProgress";


function Main() {
  const { user, loggedIn } = UserAuth();
  const { userProgressPoints } = UserProgressData();

  return (
    <>
      {loggedIn ? (
        <div className='main-container'>
          <h1 style={{ color: 'white', marginRight: 15 }}>Bun venit</h1>{user && (<h1 style={{ color: 'white' }}>{user.displayName}!</h1>)}

          <div className='userInfo'>

            <div className='profile-picture'>
              picture
            </div>

            <h3>Invata bazele programarii:</h3>

            <div style={{ width: '70%', alignSelf: 'center' }} className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-danger" style={{ width: userProgressPoints ? `${userProgressPoints}%` : '0%' }}>{userProgressPoints}%</div>
            </div>

          </div>

          <div className='problems' style={{ background: 'white', opacity: 0.8 }}>
            <div style={{ color: 'black', width: '100%', padding: '10px', marginBottom: '5px' }}>
              <h4 style={{ color: 'black' }}>Problemele curente:</h4>
            </div>


            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Introducere
                  </button>
                </h2>

                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Introduction">Introducerea in programare</a></div>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Variables">Variabile</a></div>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Operators">Operatori</a></div>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Functions">Functii</a></div>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/ConsoleLog">Afisare</a></div>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/SumOfTwoNumbers">Suma a doua numere</a></div>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/WordsDisplay">Afisare text</a></div>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Average">Note</a></div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    If-structura de decizie
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/IfExplanation">Instructiunea If</a></div>
                </div>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Brothers">Fratii</a></div>
                </div>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Vacancy">Vacanta</a></div>
                </div>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Maxim">Numarul maxim</a></div>
                </div>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Ascending">Ordonam crescator</a></div>
                </div>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"><a style={{ textDecoration: 'none' }} href="/Ascending3">Ordonam crescator2.0</a></div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Operatori
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
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

export default Main