import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

function OurTeam() {
  return (
    <>
      <Navbar />
      <section className="row content-section justify-content-center ms-0 me-0">
        <div className="col-12">
          <h2 className="text-center text-white mt-4 mb-0 courses">Our Team</h2>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-3 mb-4">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Member</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Member</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Member</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Member</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </div>

            <div className="col-3 mb-4">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Member</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OurTeam;
