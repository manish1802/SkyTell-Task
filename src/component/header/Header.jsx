import React, { useState } from "react";
import "../header/Header.css";
export default function Header() {
  const [open, setOpen] = useState(false);
  const checkbox = [1, 2, 3, 4, 5];
  const handleclick = () => {
    setOpen(!open);
  };
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([1, 2]);

  const handleCheckboxChange = (value) => {
    if (selectedCheckboxes.includes(value)) {
      // Unselect checkbox if already selected
      setSelectedCheckboxes(
        selectedCheckboxes.filter((checkbox) => checkbox !== value)
      );
    } else {
      // Select checkbox if not already selected
      if (selectedCheckboxes.length < 2) {
        setSelectedCheckboxes([...selectedCheckboxes, value]);
      }
    }
  };

  return (
    <nav className="nav">
      <label className="dropdown" onClick={handleclick}>
        Select Option
        <img src="https://t3.ftcdn.net/jpg/04/83/39/12/360_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg" alt="" style={{width:13,marginLeft:20,}}/>

      </label>
      {open ? (
        <div className="checkboxcontainer">
          {checkbox.map((checkboxValue) => (
            <label key={checkboxValue} className="inputfield">
              <input
                type="checkbox"
                checked={selectedCheckboxes.includes(checkboxValue)}
                onChange={() => handleCheckboxChange(checkboxValue)}
                disabled={
                  !selectedCheckboxes.includes(checkboxValue) &&
                  selectedCheckboxes.length >= 2
                }
              />
              Option  {checkboxValue}
            </label>
          ))}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
