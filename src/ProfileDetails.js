import React, { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";



function ProfileDetails() {
  const [profile, setProfile] = useState(null);
  const {id} = useParams()
  const history = useNavigate();
  const [firstname, setfname] = useState("");
  const [surname, setlname] = useState("");
  const [dob, setDOB] = useState(null);
  const [gender, setGender] = useState(null)
  const [occupation, setOccupation] = useState("")
  const [systolicbp, setSystolic] = useState("")
  const [diastolicbp, setDiastolic] = useState("")
  const [medicalissue, setMedIssue] = useState("")
  
  function setPtProfile() {
    setfname(profile.firstname)
    setlname(profile.surname)
    setDOB(profile.dob)
    setGender(profile.gender)
    setOccupation(profile.occupation)
    setSystolic(profile.systolicbp)
    setDiastolic(profile.diastolicbp)
    setMedIssue(profile.medicalissue)
  }
  
  useEffect(() => {
    fetch('/ptprofiledb/' + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(responseJSON => setProfile(responseJSON.ptprofiledb))
    .then(() => setfname(profile.firstname))
    
  
  }, [])
  
  

  if(!profile){
    return <h2>Loading...</h2>
  } else{
    console.log(profile)
    
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = {
      ptprofiledb: {
        firstname,
        surname,
        dob,
        gender,
        occupation,
        systolicbp,
        diastolicbp,
        medicalissue
      }
    }

    fetch("/ptprofiledb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
        // redirect /projects/:id
        history(`/MedicalProfiles/${data.ptprofiledb.id}`)
    })

  }
  
  let maleChoice = (profile.gender === 1)
  let femaleChoice = (profile.gender === 0)
  let otherChoice = (profile.gender === 9)
  


  return(
      <div id="profileCard">
        <form onSubmit={handleSubmit}>
        
          {/*
          <div><button id="delButton">Delete Profile</button></div>
          <br/><br/> */}
          <h4 id="idDisplay">ID: {id}</h4>
          <label for="fname" className="flabel">First name:</label><br/>
          <input type="text" className="valueInput" id="fname" name="fname" value={profile.firstname} onChange={e => setfname(e.target.value)}/>
          <br/><br/>
          <label for="lname" className="flabel">Last name:</label><br/>
          <input type="text" className="valueInput" id="lname" name="lname" value={profile.surname} onChange={e => setlname(e.target.value)}/>
          <br/>
          <h4>Demographics:</h4>
          <label for="birthdate" className="flabel">Birth Date:</label><br/>   
          <input type="radio" className="checkInput" id="Male" name="Gender" value="1" checked={maleChoice} onChange={e=> setGender(parseInt(e.target.value))}/>
          <label for="Male" className="flabel">Male</label>
          <input type="radio" className="checkInput" id="Female" name="Gender" value="0" checked={femaleChoice} onChange={e=> setGender(parseInt(e.target.value))}/>
          <label for="Female" className="flabel">Female</label>
          <input type="radio" className="checkInput" id="Other" name="Gender" value="9" checked={otherChoice} onChange={e=> setGender(parseInt(e.target.value))}/>
          <label for="Other" className="flabel">Other</label>
          <br/><br/>
          <label for="birthdate" className="flabel">Birth Date:</label><br/>          
          <input type="date" className="valueInput" id="birthdate" name="birthdate" value={profile.dob} onChange={e => setDOB(e.target.value)}/>
          <br/><br/>
          <label for="occupation" className="occupation">Occupation:</label><br/>
          <input type="text" className="valueInput" id="occupation" name="occupation" value={profile.occupation} onChange={e => setOccupation(e.target.value)}/>
          <br/>
          <h4>Medical Information:</h4>
          <label for="Systolic" className="flabel">Blood Pressure:</label><br/>
          <input type="number" className="valueInput" id="systol" name="systol" value={profile.systolicbp} onChange={e => setSystolic(e.target.value)}/> / <input type="number" className="valueInput" id="diastol" name="diastol" value={profile.diastolicbp} onChange={e => setDiastolic(e.target.value)}/>
          <br/><br/>
          <label for="condition" className="flabel">Condition:</label><br/>
          <textarea type="text" className="valueInput" id="condition" name="condition" value={profile.medicalissue} onChange={e => setMedIssue(e.target.value)} rows="8" col="100"></textarea>
          <br/><br/>
          <button id="saveButton" type="submit"> Submit New Patient Profile</button>
          </form>
        </div>
        )
  }

  export default ProfileDetails