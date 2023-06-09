import React, { useState } from "react";
import "../header/Header.css";
export default function Header() {
  const [open, setOpen] = useState(false);
  const checkbox = [
    "India",
    "Nepal",
    "Bhutan",
    "Bangladesh",
    "Sri Lanka",
    "Pakistan",
    "China",
    "U.S.A",
    "Russia",
  ];
  const [valu, setValue] = useState()
  const handleclick = () => {
    setOpen(!open);
  };
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([
    "India",
    "Nepal",
  ]);

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
        <span>{selectedCheckboxes.join(', ')} </span>
        <img
          src="https://t3.ftcdn.net/jpg/04/83/39/12/360_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg"
          alt=""
          style={{ width: 13, right: 0 }}
        />
      </label>
      {open ? (
        <div className="maincontainer">
          <div className="checkboxcontainer">
            {checkbox.map((checkboxValue) => (
              <div className="inputbox">
                <label key={checkboxValue}>
                  <input
                    className="inputcheckbox"
                    type="checkbox"
                    checked={selectedCheckboxes.includes(checkboxValue)}
                    onChange={() => handleCheckboxChange(checkboxValue)}
                    disabled={
                      !selectedCheckboxes.includes(checkboxValue) &&
                      selectedCheckboxes.length >= 2
                    }
                  />
                  <span
                    style={{
                      marginLeft: 10,
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {checkboxValue}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
