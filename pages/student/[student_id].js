
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { base_url, api_url } from '../../config/config.js';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Orderdetails = (params) => {
    const router = useRouter();
    const { student_id } = router.query;
    console.log('student_id ==>',student_id)
    const [studentDetails, setOrderDetails] = useState(null);
    console.log('all_data==>',studentDetails)
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
        if (!student_id) {
            return;
          }
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
            router.push('/');
            return;
        }
        // const orderId = params.searchParams.order_id;
        // const response = await fetch(`/api/studenttProfile`);
        const response = await axios.get(`/api/studenttProfile`, {
          params: {
            student_id: student_id,
          },
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
        // const result = await response.json();
        // setempllData(response.data.result);
        // setOrderDetails(result.data.result);
        setOrderDetails(response.data.result);
        setLoading(false);   
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }; 

    fetchData();
  }, [student_id, router]);
  useEffect(() => {
    console.log('Fetched data:', student_id);
  }, [student_id]);

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <main className="main" id="top">
        <div className="content">
          <div className="row gx-0 kanban-header rounded-2 px-x1 py-2 mt-2 mb-3">
          <div className="card mb-3">
        <div className="card-header d-flex justify-content-between">
            <button className="btn btn-falcon-default btn-sm" type="button" onClick={handleBack}>
            <span className="fas fa-arrow-left" />Back </button>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                <a href="#">Student List</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Student Details
                </li>
            </ol>
            </nav>
        </div>
        </div>
          <div className="card mb-3">
          <div className="card-body">
            <div className="row">
            <div className="col-md">
            <h5>Student Details: </h5>
            <div>
            <p className="mb-2 fs--1">  {" "}<strong>Student Name: {studentDetails?.student_name} </strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-2 fs--1">
              {" "}
              <strong>Father Name: {studentDetails?.father_name}</strong>
            </p>
            </div>
            </div>
            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div>
            <p className="mb-2 fs--1">  {" "}<strong>Year: {studentDetails?.Year}</strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-0 fs--1">  {" "}<strong>Admission Number: {studentDetails?.admission_no}</strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-0 fs--1">  {" "}<strong>Roll Number: {studentDetails?.roll_no}</strong>  <a ></a> </p>     
            </div>
            </div>  
            </div>
          </div>
    </div>
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
        <div className="col-md-6 col-lg-6 mb-4 mb-lg-0">
        <p className="mb-0 fs--1">
          <strong>Class :</strong> {studentDetails?.class}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Section :</strong> {studentDetails?.section}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>English 1 : </strong>{studentDetails?.eng_1}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>English 2 :</strong> {studentDetails?.eng_2}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Hindi :</strong> {studentDetails?.hindi}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Chemistry : </strong>{studentDetails?.chemistry}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Hindi : </strong>{studentDetails?.hindi}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Biology : </strong>{studentDetails?.biology}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Commerce :</strong> {studentDetails?.commerce}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Physical Education :</strong> {studentDetails?.physical_education}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Business : </strong>{studentDetails?.business}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Accounts :</strong>{studentDetails?.accounts}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Economics : </strong>{studentDetails?.economics}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Attendence :</strong> {studentDetails?.attendance}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>PTM : </strong>{studentDetails?.ptm}
          <a href="mailto:"></a>
        </p>
      </div>
      <div className="col-md-6 col-lg-6 mb-4 mb-lg-0">
        <p className="mb-0 fs--1">
          <strong>Math: </strong>{studentDetails?.maths}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Science: </strong>{studentDetails?.science}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>EVS SST: </strong>{studentDetails?.evs_sst}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Computer: </strong>{studentDetails?.computer}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Sanskrit: </strong>{studentDetails?.sanskrit}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>GK: </strong>{studentDetails?.gk}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Drawing: </strong>{studentDetails?.drawing}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>History: </strong>{studentDetails?.history_civics}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Geography: </strong>{studentDetails?.geography}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Physics: </strong>{studentDetails?.physics}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Cleanness: </strong>{studentDetails?.cleanness}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Dicipline: </strong>{studentDetails?.dicipline}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Project Work: </strong>{studentDetails?.project_work}
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Punctuality: </strong>{studentDetails?.punctuality}
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Handwriting: </strong>{studentDetails?.handwriting}
          <a href="mailto:"></a>
        </p>
      </div>
        </div>
      </div>
    </div>
        </div>
        </div>
      </main>
    </>
  );
};

export default Orderdetails;
