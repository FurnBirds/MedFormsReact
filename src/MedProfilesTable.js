import { useEffect, useState} from "react";
import React from "react";
import MedProfileRow from "./MedProfileRow"
import SearchBar from "./SearchBar";

function MedProfilesTable() {
  
  const [search, setSearch] = useState("")
  const [MedicalProfiles, setMedicalProfiles] = useState([])
    
  const filteredProfiles = MedicalProfiles.filter(ptProfile => ptProfile.surname.toLowerCase().includes(search.toLowerCase()) || ptProfile.firstname.toLowerCase().includes(search.toLowerCase()))
  const rows = [];
  
  function DelProfileRow(delID){
    console.log("called")
    fetch("http://localhost:8000/ptprofiledb/" + delID, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(r => r.json())
      .then(data => setMedicalProfiles(prevTable => prevTable.filter(row => row.id !== data.id)))
        //=> {
      // setData(prevData => prevData.filter(row => row.id !== idToRemove));
    }




  useEffect(() => {
    
    fetch('http://localhost:8000/ptprofiledb')
    .then(r => r.json())
    .then(ptListing => setMedicalProfiles(ptListing))
    
  }, [])

  for (const ptProfile of filteredProfiles) {
    rows.push(
      <MedProfileRow
        delProfile = {DelProfileRow}
        key={ptProfile.id}
        id={ptProfile.id} 
        surname={ptProfile.surname}
        firstname={ptProfile.firstname}
        dob={ptProfile.dob}
        gender={ptProfile.gender}
        occupation={ptProfile.occupation}
        systolicBP={ptProfile.systolicbp}
        diastolicBP={ptProfile.diastolicbp}
        medicalIssue={ptProfile.medicalissue}
      />
    )
  }

function searchProfile(searchTxt){
  setSearch(searchTxt)
}





  return (
      <div>
        <SearchBar searchProfile = {searchProfile} />
        <table>
          <thead>
            <tr>
              <th>Delete</th>
              <th>ID</th>
              <th className="names">Last Name</th>
              <th className="names">First Name</th>
              <th className="ptGender">Gender</th>
              <th className="ptDOB">Date of Birth</th>
              <th className="ptOccupation">Occupation</th>
              <th className="ptBP">Blood Pressure</th>
              <th className="ptCondition">Condition</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  };

export default MedProfilesTable;
