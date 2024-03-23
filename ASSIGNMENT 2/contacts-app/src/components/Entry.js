import React from "react";

function Entry(props) {
  return (
    <div className="card">
      <div>
        <h3
          style={{
            marginRight: "30px",
            color: "#1877F2",
          }}
        >
          {props.id}
        </h3>
      </div>
      <div className="head" style={{ display: "flex" }}>
        <span className="avatar">
          <img src={props.profile} alt="img"></img>
        </span>
        <span style={{ marginLeft: "10px" }}>
          {props.first_name} {props.last_name}
        </span>
      </div>
      <div className="next">
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Entry;
