import React from 'react';
import { FaStar } from 'react-icons/fa';

function Progress({ exp }) {
  const levels = [
    { title: 'Novice Explorer', minXP: 0 },
    { title: 'Beginner Learner', minXP: 80 },
    { title: 'Curious Mind', minXP: 170 },
    { title: 'Skill Seeker', minXP: 260 },
    { title: 'Intermediate Challenger', minXP: 330 },
    { title: 'Proficient Master', minXP: 400 },
    { title: 'Expert Strategist', minXP: 530 },
    { title: 'Grandmaster', minXP: 660 },
  ];

  const experience = exp * 10; 
  let currentLevel = levels[0];
  let nextLevel = levels[1] || levels[0];

  // Determinăm nivelul curent și următorul nivel
  for (let i = 0; i < levels.length; i++) {
    if (experience >= levels[i].minXP) {
 
      currentLevel = levels[i];
      nextLevel = levels[i + 1] || levels[i];
    } else {
      break;
    }
  }

  const chapterXP = experience - currentLevel.minXP;
  const halfXP = (nextLevel.minXP - currentLevel.minXP) / 2;
  const firstBar = halfXP;

  return (
    <div className="progress-container">
      <div className="progress-item">
        <h5>{currentLevel.title}</h5>
      </div>

      {/* Bara de progres 1 (primele 5 stele) */}
      <div className="progress-item progress-bar-container">
        <div className="progress-line-container">
          <div className="progress-line" style={{ width: chapterXP <= firstBar ? chapterXP * 2 + '%' : 100 + '%' }}></div>
        </div>

        {/* Generăm cele 5 stele care se colorează progresiv */}
        <FaStar color={chapterXP < halfXP ? 'white' : 'yellow'} size={30} />
        <FaStar color={chapterXP < halfXP + 10 ? 'white' : 'yellow'} size={30} />
        <FaStar color={chapterXP < halfXP + 20 ? 'white' : 'yellow'} size={30} />
        <FaStar color={chapterXP < halfXP + 30 ? 'white' : 'yellow'} size={30} />
        <FaStar color={chapterXP < halfXP + 40 ? 'white' : 'yellow'} size={30} />

      {/* Bara de progres 2 (restul de puncte) */}
      
        <div className="progress-line-container second">
          <div
            className="progress-line second"
            style={{ width: chapterXP > halfXP ? chapterXP + '%' : 0 + '%' }}
          ></div>
        </div>
      </div>

      <div className="progress-item">
        <h5>{nextLevel.title}</h5>
      </div>
    </div>
  );
}

export default Progress;
