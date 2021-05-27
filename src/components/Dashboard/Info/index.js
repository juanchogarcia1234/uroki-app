import React from "react";
import "./Info.scss";

const Info = () => {
  return (
    <div className="ui segment" id="info-classes">
      <div className="info-classes-divider">
        <div>
          <i className="check icon green"></i>проведён
        </div>
        <div>
          <i className="check icon grey"></i>не проведён
        </div>
      </div>
      <div className="info-classes-divider">
        <div>
          <i className="share icon blue"></i>перенесён
        </div>
        <div>
          <i className="share icon grey"></i>не перенесён
        </div>
      </div>
      <div className="info-classes-divider">
        <div>
          <i className="times close icon red"></i>отменён
        </div>
        <div>
          <i className="times close icon grey"></i>не отменён
        </div>
      </div>
      <div className="info-classes-divider">
        <div>
          <i className="ruble sign icon green"></i>оплачен
        </div>
        <div>
          <i className="ruble sign icon grey"></i>не оплачен
        </div>
      </div>
    </div>
  );
};

export default Info;
