import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    console.log('storedUserData', storedUserData);
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);
  

  return (
    <div className="profile-container"> {/* Apply profile-container class */}
    <h2>Profile</h2>
    <p>Name: {userData ? userData.name : <span className="no-data">No data</span>}</p>
    <p>Email: {userData ? userData.email : <span className="no-data">No data</span>}</p>
  </div>
  );
};


export default ProfilePage;
