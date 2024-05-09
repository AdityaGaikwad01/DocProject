import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faVenusMars, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import './Profiles.css'; // Import the CSS file for styling

const ProfileCard = ({ profile }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div className={`profile-card ${isEnlarged ? 'enlarged' : ''}`} onClick={toggleEnlarged}>
      <div className="details">
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        <p><FontAwesomeIcon icon={faBriefcase} /> Experience: {profile.experience}</p>
        <p><FontAwesomeIcon icon={faVenusMars} /> Gender: {profile.gender}</p>
        <p><FontAwesomeIcon icon={faUserGraduate} /> Specialty: {profile.specialty}</p>
      </div>
    </div>
  );
};

const Profiles = () => {
  const profilesData = [
    { id: 1, name: 'John Doe', description: 'heart doc', experience: '5 years', gender: 'Male', specialty: 'Heart transplant' },
    { id: 2, name: 'Jane Doe', description: 'Skin doc', experience: '3 years', gender: 'Female', specialty: 'Skin transplant' },
    { id: 3, name: 'Alice Smith', description: 'Brain Scientist', experience: '7 years', gender: 'Female', specialty: 'Brain surgary' },
  ];

  return (
    <div className="profiles">
      {profilesData.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default Profiles;
