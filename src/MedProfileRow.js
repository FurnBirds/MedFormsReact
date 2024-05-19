import React from "react";
import { Link } from "react-router-dom";

function MedProfileRow ({ id, surname, firstname, dob, gender, occupation, systolicBP, diastolicBP, medicalIssue}) {
  let genderShow

  if(gender === 1){
    genderShow = "Male"
  } else {
    if( gender === 0) {
      genderShow = "Female"
    } else {
      genderShow = "Other"
    }
  }
  
  return (
      <tr>
        <td className = "ptID" id = "ptID"><Link to={`/MedicalProfiles/${id}`}>{id}</Link></td>
        <td className = "names" id = "ptSurname">{surname}</td>
        <td className = "names" id = "ptFirstname">{firstname}</td>
        <td className = "ptGender">{genderShow}</td>
        <td className = "ptDOB">{dob}</td>
        <td className = "ptOccupation">{occupation}</td>
        <td className = "ptBP">{systolicBP} / {diastolicBP}</td>
        <td className = "ptCondition">{medicalIssue}</td>
      </tr>
    )
  }


  export default MedProfileRow;