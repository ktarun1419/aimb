
import React from "react";
import "./sidebar.css";
// import Roadmap from "../../assets/roadmap.png";
// import Token from "../../assets/tokonomics.png";
// import Feature from "../../assets/features.png";
// import ROcket from '../../assets/rocket.png'
import Cicaa from '../../assets/cicca.png'
const Sidebar = () => {
  const sidebar = [
    {
    //   icon: Roadmap,
      title: "Stake",
    },
    {
    //   icon: Token,
      title: "Withdraw",
    },
    {
    //   icon: Feature,
      title: "Early Unstake",
    },
  ];
  const redirect = () => {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = "https://cicca.io";
    a.click();
    a.remove();
  };
  return (
    <div className="sidebar">
     <div className='logo_container' onClick={redirect} >
        <img className='logo' src={Cicaa}  alt='logo'  />
        {/* <h1>CICCA</h1> */}
      </div>
      {Array.isArray(sidebar) &&
        sidebar.map((item) => (
          <div className="sidebar_each" onClick={redirect}>
            {/* <img src={item?.icon} alt={item?.title} /> */}
            <h2>{item?.title}</h2>
          </div>
        ))}
        {/* <div className="rocket">

          <img src={ROcket} />
          <p>
            Update New Feature
          </p>
          <button onClick={redirect}>
            Coming Soon ..
          </button>
        </div> */}
    </div>
  );
};

export default Sidebar;
