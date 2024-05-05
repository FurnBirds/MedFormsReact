import React from "react";

function MedProfileRow ({ id, surname, firstname, dob, gender, occupation, systolicBP, diastolicBP, medicalIssue}) {
    return (
      <tr>
        <td className = "ptID" id = "ptID">{id}</td>
        <td className = "names" id = "ptSurname">{surname}</td>
        <td className = "names" id = "ptFirstname">{firstname}</td>
        <td className = "ptGender">{gender}</td>
        <td className = "ptDOB">{dob}</td>
        <td className = "ptOccupation">{occupation}</td>
        <td className = "ptBP">{systolicBP} / {diastolicBP}</td>
        <td className = "ptCondition">{medicalIssue}</td>
      </tr>
    )
  }


  export default MedProfileRow;