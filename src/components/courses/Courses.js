import React from "react";
import Pagination from "../common/Pagination";

function Courses() {
  return (
    <section className="row content-section justify-content-center ms-0 me-0">
      <div className="col-12">
        <h2 className="text-center text-white mt-5 mb-0 courses">Courses</h2>
      </div>

      <div className="card text-white col-3">
        <div className="card-body instructors-card-body">
          <h5 className="card-title">CLS Instructor</h5>
          <p className="card-text">Some quick example</p>
        </div>
      </div>

      <div className="card text-white col-3">
        <div className="card-body instructors-card-body">
          <h5 className="card-title">CLS Instructor</h5>
          <p className="card-text">Some quick example</p>
        </div>
      </div>

      <div className="card text-white col-3">
        <div className="card-body instructors-card-body">
          <h5 className="card-title">CLS Instructor</h5>
          <p className="card-text">Some quick example</p>
        </div>
      </div>

      <div className="card text-white col-3">
        <div className="card-body instructors-card-body">
          <h5 className="card-title">CLS Instructor</h5>
          <p className="card-text">Some quick example</p>
        </div>
      </div>

      <div className="card text-white col-3">
        <div className="card-body instructors-card-body">
          <h5 className="card-title">CLS Instructor</h5>
          <p className="card-text">Some quick example</p>
        </div>
      </div>
      <div className="col-12" dir="rtl">
        <Pagination
          totalPages={state.totalPages}
          currentPage={state.currentPage}
          pageNeighbours={1}
          pageChange={searchFetch}
        />
      </div>
    </section>
  );
}

export default Courses;
