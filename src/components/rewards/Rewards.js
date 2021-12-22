import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Pagination from "../common/Pagination";
import dd from "../../assets/dd.jpg";

function Rewards() {
  return (
    <>
      <Navbar />
      <section className="row content-section justify-content-center ms-0 me-0">
        <div className="col-12">
          <h2 className="text-center text-white mt-4 mb-0 courses">Rewards</h2>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-3 mb-4">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Reward</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </div>

            <div className="col-3">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Reward</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </div>

            <div className="col-3">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Reward</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </div>

            <div className="col-3">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Reward</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </div>

            <div className="col-3 mb-4">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Reward</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12" dir="rtl">
          {/* <Pagination
          totalPages={state.totalPages}
          currentPage={state.currentPage}
          pageNeighbours={1}
          pageChange={searchFetch}
        /> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Rewards;
