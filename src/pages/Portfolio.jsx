import paradise from "../assets/GamersParadise.jpg";
import mildClub from "../assets/MildHighclub.jpg";
import jate from "../assets/deployedJATE.png";
import tracker from "../assets/employeescreen.jpg";
import notes from "../assets/NoteTaker.jpg";
import firstcode from "../assets/First-Project.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div style={projectBoxes}>
        <h4>Gamer's Paradise - Group Project 2</h4>
        <img src={paradise} alt="Group Project 2" style={imageStyles} />
      </div>
      <div style={projectBoxes}>
        <h4>Mild High Club - Group Project 1</h4>
        <img src={mildClub} alt="Group Project 1" style={imageStyles} />
      </div>
      <div style={projectBoxes}>
        <h4>Just Another Text Editor</h4>
        <img src={jate} alt="Group Project 1" style={imageStyles} />
      </div>
      <div style={projectBoxes}>
        <h4>Employee Tracker</h4>
        <img src={tracker} alt="Group Project 1" style={imageStyles} />
      </div>
      <div style={projectBoxes}>
        <h4>Note Taker Project</h4>
        <img src={notes} alt="Group Project 1" style={imageStyles} />
      </div>
      <div style={projectBoxes}>
        <h4>First Code I Ever Did</h4>
        <img src={firstcode} alt="Group Project 1" style={imageStyles} />
      </div>
    </div>
  );
}

const projectBoxes = {
  border: "1px solid #ccc",
  padding: "20px",
  marginBottom: "10px",
};

const imageStyles = {
  width: "50%",
};
