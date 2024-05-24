import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewProfile() {
  const [profile, setProfile] = useState([]);
  const [firstname, setfname] = useState("");
  const [surname, setlname] = useState("");
  const [dob, setDOB] = useState(null);
  const [gender, setGender] = useState(null)
  const [occupation, setOccupation] = useState("")
  const [systolicbp, setSystolic] = useState("")
  const [diastolicbp, setDiastolic] = useState("")
  const [medicalissue, setMedIssue] = useState("")

  const history = useNavigate();

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

    fetch("http://localhost:8000/ptprofiledb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profile)
    })
    .then(r => r.json())
    .then(data => {
        // redirect /projects/:id
        history(`/MedicalProfiles/${data.id}`)
    })

  }
  
  // let maleChoice = (gender === 1)
  // let femaleChoice = (gender === 0)
  // let otherChoice = (gender === 9)
  


  return(
    <div id="profileCard">
        <form onSubmit={handleSubmit}>
        
          <h4 id="idDisplay">NEW PATIENT PROFILE</h4>
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

      // <div id="profileCard">
      //   <form onSubmit={handleSubmit}>
      //     {/* <div><button id="newButton">New Patient Data</button></div>
      //     <br/><br/>
      //     <div><button id="delButton">Delete Profile</button></div>
      //     <br/><br/> */}
      //     <h4 id="idDisplay">ID: (New Patient Profile)</h4>
      //     <label for="fname" className="flabel">First name:</label><br/>
      //     <input type="text" className="valueInput" id="fname" name="fname" value={firstname} onChange={e => setfname(e.target.value)}/>
      //     <br/><br/>
      //     <label for="lname" className="flabel">Last name:</label><br/>
      //     <input type="text" className="valueInput" id="lname" name="lname" value={surname} onChange={e => setlname(e.target.value)}/>
      //     <br/>
      //     <h4>Demographics:</h4>
      //     <label for="birthdate" className="flabel">Birth Date:</label><br/>   
      //     <input type="radio" className="checkInput" id="Male" name="Gender" value="1" checked={maleChoice} onChange={e=> setGender(parseInt(e.target.value))}/>
      //     <label for="Male" className="flabel">Male</label>
      //     <input type="radio" className="checkInput" id="Female" name="Gender" value="0" checked={femaleChoice} onChange={e=> setGender(parseInt(e.target.value))}/>
      //     <label for="Female" className="flabel">Female</label>
      //     <input type="radio" className="checkInput" id="Other" name="Gender" value="9" checked={otherChoice} onChange={e=> setGender(parseInt(e.target.value))}/>
      //     <label for="Other" className="flabel">Other</label>
      //     <br/><br/>
      //     <label for="birthdate" className="flabel">Birth Date:</label><br/>          
      //     <input type="date" className="valueInput" id="birthdate" name="birthdate" value={dob} onChange={e => setDOB(e.target.value)}/>
      //     <br/><br/>
      //     <label for="occupation" className="occupation">Occupation:</label><br/>
      //     <input type="text" className="valueInput" id="occupation" name="occupation" value={occupation} onChange={e => setOccupation(e.target.value)}/>
      //     <br/>
      //     <h4>Medical Information:</h4>
      //     <label for="Systolic" className="flabel">Blood Pressure:</label><br/>
      //     <input type="number" className="valueInput" id="systol" name="systol" value={systolicbp} onChange={e => setSystolic(e.target.value)}/> / <input type="number" className="valueInput" id="diastol" name="diastol" value={diastolicbp} onChange={e => setDiastolic(e.target.value)}/>
      //     <br/><br/>
      //     <label for="condition" className="flabel">Condition:</label><br/>
      //     <textarea type="text" className="valueInput" id="condition" name="condition" value={medicalissue} onChange={e => setMedIssue(e.target.value)} rows="8" col="100"></textarea>
      //     <br/><br/>
      //     <button id="saveButton" type="submit"> Submit New Patient Profile</button>
      //     </form>
      //   </div>
        )
  }

  export default NewProfile