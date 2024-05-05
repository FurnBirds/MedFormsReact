import React from "react";
import MedProfileRow from "./MedProfileRow"
import SearchBar from "./SearchBar";



function MedProfilesTable({ MedicalProfiles }) {

  const rows = [];
  for (const ptProfile of MedicalProfiles) {
    rows.push(
      <MedProfileRow
        key={ptProfile.id}
        id={ptProfile.id}
        surname={ptProfile.surname}
        firstname={ptProfile.firstname}
        dob={ptProfile.dob}
        gender={ptProfile.gender}
        occupation={ptProfile.occupation}
        systolicBP={ptProfile.systolicBP}
        diastolicBP={ptProfile.diastolicBP}
        medicalIssue={ptProfile.medicalIssue}
      />
    )
  }

  return (
      <div>
        <SearchBar />
        <table>
          <thead>
            <tr>
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
