import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";

function ProfileDetails() {
  const [profile, setProfile] = useState([]);
  const {id} = useParams()
  

  useEffect(() => {
    fetch("http://localhost:8000/ptprofiledb/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json" 
      }
    })
    .then(r => r.json())
    .then(data => {
      setProfile(data)
    })
  }, [])
  

  if(!profile){
    return <h2>Loading...</h2>
  }

  function handleSubmit(event) {
    event.preventDefault()

    fetch("http://localhost:8000/ptprofiledb/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profile)
    })
    .then(r => r.json())
    .then(data => {
      setProfile(data)
    })
  }

  return(
      <div id="profileCard">
        <form onSubmit={handleSubmit}>
        
          <h4 id="idDisplay">ID: {id}</h4>
          <label for="fname" className="flabel">First name:</label><br/>
          <input type="text"
            className="valueInput"
            id="fname"
            name="fname"
            value={profile.firstname}
            onChange= {
              e=> setProfile({...profile, firstname: e.target.value})
            }
          />
          <br/><br/>
          <label for="lname" className="flabel">Last name:</label><br/>
          <input type="text" className="valueInput" id="lname" name="lname" value={profile.surname}
            onChange= {
              e=> setProfile({...profile, surname: e.target.value})
            }
          />
          <br/>
          <h4>Demographics:</h4>
          <label for="Gender" className="flabel">Gender:</label><br/>   
          <input type="radio" className="checkInput" id="Male" name="Gender" value= {1} checked={profile.gender == "1"}onChange= {
              e=> setProfile({...profile, gender: e.target.value})
            }/>
          <label for="Gender" className="flabel">Male</label>
          <input type="radio" className="checkInput" id="Female" name="Gender" value= {0} checked={profile.gender == "0"} onChange= {
              e=> setProfile({...profile, gender: e.target.value})
            }/>
          <label for="Gender" className="flabel">Female</label>
          <input type="radio" className="checkInput" id="Other" name="Gender" value= {9} checked={profile.gender == "9"} onChange= {
              e=> setProfile({...profile, gender: e.target.value})
            }/>
          <label for="Gender" className="flabel">Other</label>
          <br/><br/>
          <label for="birthdate" className="flabel">Birth Date:</label><br/>          
          <input type="date" className="valueInput" id="birthdate" name="birthdate" value={profile.dob} onChange= {
              e=> setProfile({...profile, dob: e.target.value})
            }/>
          <br/><br/>
          <label for="occupation" className="occupation">Occupation:</label><br/>
          <input type="text" className="valueInput" id="occupation" name="occupation" value={profile.occupation} onChange= {
              e=> setProfile({...profile, occupation: e.target.value})
            }/>
          <br/>
          <h4>Medical Information:</h4>
          <label for="Systolic" className="flabel">Blood Pressure:</label><br/>
          <input type="number" className="valueInput" id="systol" name="systol" value={profile.systolicbp} onChange= {
              e=> setProfile({...profile, systolicbp: e.target.value})
            }/> / <input type="number" className="valueInput" id="diastol" name="diastol" defaultValue={profile.diastolicbp} onChange= {
              e=> setProfile({...profile, diastolicbp: e.target.value})
            }/>
          <br/><br/>
          <label for="condition" className="flabel">Condition:</label><br/>
          <textarea type="text" className="valueInput" id="condition" name="condition" value={profile.medicalissue}  rows="8" col="100" onChange= {
              e=> setProfile({...profile, medicalissue: e.target.value})
            }></textarea>
          <br/><br/>
          <button id="saveButton" type="submit"> Update Patient Profile</button>
          </form>
        </div>
        )
  }

  export default ProfileDetails

