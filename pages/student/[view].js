
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { base_url, api_url } from '../../config/config.js';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Orderdetails = (params) => {
    const router = useRouter();
    const { student_id } = router.query;
    console.log('student_id ==>',student_id)
    const [studentDetails, setOrderDetails] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
        // if (!student_id) {
        //     return;
        //   }
      try {
        
        // const orderId = params.searchParams.order_id;
        const response = await fetch(`/api/studenttProfile`);
        const result = await response.json();
        setOrderDetails(result.result);
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
//   if (isLoading) {
//     return <div>Loading.12..</div>;
//   }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

//   if (orderDetails === null) {
//     return <div>No data available</div>;
//   }
  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <main className="main" id="top">
        
        <div className="content">
          <div className="row gx-0 kanban-header rounded-2 px-x1 py-2 mt-2 mb-3">
          <div className="card mb-3">
        {/* <div className="card-body"> */}
        <div className="card-header d-flex justify-content-between">
            <button className="btn btn-falcon-default btn-sm" type="button" onClick={handleBack}>
            <span className="fas fa-arrow-left" />Back
            </button>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                <a href="#">Student List</a>
                </li>
                {/* <li className="breadcrumb-item active" aria-current="page">View orders
                </li> */}
                <li className="breadcrumb-item active" aria-current="page">Student Details
                </li>
            </ol>
            </nav>
        {/* </div> */}
        </div>
        </div>
          <div className="card mb-3">
          <div className="card-body">
            <div className="row">
            <div class="col-md">
            <h5>Student Details: </h5>
            <div>
            <p className="mb-2 fs--1">  {" "}<strong>Student Name: </strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-2 fs--1">
              {" "}
              <strong>Father Name: </strong>
             
            </p>

            </div>
            </div>
            <div class="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div>
            <p className="mb-2 fs--1">  {" "}<strong>Year: </strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-0 fs--1">  {" "}<strong>Admission Number: </strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-0 fs--1">  {" "}<strong>Roll Number: </strong>  <a ></a> </p>     
            </div>
            </div>  

            </div>
          </div>
    </div>
           
   
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
        <div className="col-md-6 col-lg-6 mb-4 mb-lg-0">
        {/* <h5 className="mb-3 fs-0">Customer Details  </h5> */}
        
     
        <p className="mb-0 fs--1">
          <strong>Class: </strong>
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Section : </strong>
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Customer Email: </strong>
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Created Date: </strong>
          <a href="mailto:"></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Total Spent: </strong>
          <a href="mailto:"></a>
        </p>
      </div>
      <div className="col-md-6 col-lg-6 mb-4 mb-lg-0">
        {/* <h5 className="mb-3 fs-0">Billing Address </h5> */}
        
      
        <p className="mb-0 fs--1">
          <strong>Name: </strong>
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>City: </strong>
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Zip: </strong>
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Phone: </strong>
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Address1: </strong>
          <a></a>
        </p>
        <p className="mb-0 fs--1">
          <strong>Address2: </strong>
          <a></a>
        </p>
      </div>
        </div>
      </div>
    </div>
    {/* <div className="card mb-3">
          <div className="card-body">
            <div className="row">
            <div class="col-md">
            <h5>Shipping Address: </h5>
            <div>
            <p className="mb-2 fs--1">  {" "}<strong>Name: </strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-2 fs--1">
              {" "}
              <strong>City: </strong>
            </p>
            <p className="mb-2 fs--1">
              {" "}
              <strong>Zip: </strong>
            </p>

            </div>
            </div>
            <div class="col-md-6 col-lg-6 mb-4 mb-lg-0">
            <div>
            <p className="mb-2 fs--1">  {" "}<strong>Phone: </strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-0 fs--1">  {" "}<strong>Address1: </strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-0 fs--1">  {" "}<strong>Address2: </strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-0 fs--1">  {" "}<strong>Latitude: </strong>  <a ></a> </p>     
            </div>
            <div>
            <p className="mb-0 fs--1">  {" "}<strong>Longitude: </strong>  <a ></a> </p>     
            </div>

            </div>  

            </div>
          </div>
    </div> */}

          {/* <div className="card mb-3">
            <div className="card-body">
              <div className="table-responsive fs--1">
                <h5 className="mb-3 fs-0">Items Details</h5>
                <table className="table table-striped border-bottom">
                  <thead className="bg-200 text-900">
                    <tr>
                      <th className="border-0">SKU</th>
                      <th className="border-0 text-center">Item Name</th>
                      <th className="border-0 text-end">Fulfill Quantity</th>
                      <th className="border-0 text-end">Item Rate</th>
                    </tr>
                  </thead>
               
                </table>
              </div>
            </div>
          </div> */}
        </div>
        </div>
      </main>
    </>
  );
};

export default Orderdetails;
