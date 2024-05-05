import React from "react";

function NewProfile() {
    return(
      <div id="profileCard">
          <div><button id="newButton">New Patient Data</button></div>
          <br/><br/>
          <div><button id="delButton">Delete Profile</button></div>
          <br/><br/>
          <h4 id="idDisplay">ID: (New Patient Profile)</h4>
          <label for="fname" className="flabel">First name:</label><br/>
          <input type="text" className="valueInput" id="fname" name="fname"/>
          <br/><br/>
          <label for="lname" className="flabel">Last name:</label><br/>
          <input type="text" className="valueInput" id="lname" name="lname"/>
          <br/><br/>
          <h4>Demographics:</h4>
          <input type="radio" className="checkInput" id="Male" name="Gender" value="1" />
          <label for="Male" className="flabel">Male</label>
          <input type="radio" className="checkInput" id="Female" name="Gender" value="0" />
          <label for="Female" className="flabel">Female</label>
          <input type="radio" className="checkInput" id="Other" name="Gender" value="9" />
          <label for="Other" className="flabel">Other</label>
          <br/><br/>
          <label for="birthdate" className="flabel">Birth Date:</label><br/>
          <input type="date" className="valueInput" id="birthdate" name="birthdate" />
          <br/><br/>
          <label for="occupation" className="occupation">Occupation:</label><br/>
          <input type="text" className="valueInput" id="occupation" name="occupation" />
          <br/><br/>
          <h4>Medical Information:</h4>
          <label for="Systolic" className="flabel">Blood Pressure:</label><br/>
          <input type="number" className="valueInput" id="systol" name="systol" /> / <input type="number" className="valueInput" id="diastol" name="diastol" />
          <br/><br/>
          <label for="condition" className="flabel">Condition:</label><br/>
          <textarea type="text" className="valueInput" id="condition" name="condition" rows="8" col="100"></textarea>
          
          <br/><br/>
          <button id="saveButton">Save</button>
        </div>
        )
  }

  export default NewProfile