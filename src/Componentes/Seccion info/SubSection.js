import React from "react";

const SubSection = (props) => {
    return (
      <div style={{
         width: "570px",
         height: "500px",
         fontFamily: "Poppins, sans-serif",
         lineHeight: "1.6",
        }}>
            {props.children}
        </div>
    )
}


export default SubSection;