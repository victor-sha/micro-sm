import React from "react";

export class MSserviceList extends React.Component {
  render() {
    return (
      <ul className="list-group my-3">
        <div className="card list-group-item">
          <div className="card-body">
            <div className="card-title d-flex justify-content-between">
              <span>ID</span>
              <span>Name</span>
              <span>status</span>
            </div>
            <blockquote>
              Yesterday
              </blockquote>
          </div>
        </div>
      </ul>
    )
  }
}