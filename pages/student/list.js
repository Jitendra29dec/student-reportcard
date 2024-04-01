import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { BiShow } from 'react-icons/bi';
import axios from 'axios';
const ImportRetail = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDataValue, setTotalDataValue] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem('token');
        if (!token) {
          router.push('/');
          return;
        }
        const response = await axios.get(`/api/student`, {
          params: { currentPage, itemsPerPage, searchTerm },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status !== 200) {
          router.push('/');
          return;
        }
        const result11 = response.data;
        setData(result11.result);
        const parsedTotalDataValue = parseInt(result11.total_row || 0);
        setTotalDataValue(parsedTotalDataValue);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm, currentPage, itemsPerPage, router]);
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(totalDataValue / itemsPerPage)));
  };
  const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
  };
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  
  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <main className="main" id="top">
        <div className="container-fluid" data-layout="container-fluid">
          <div className="content">
            <div className="row gx-0 kanban-header rounded-2 px-x1 py-2 mt-2 mb-3">
              <div className="col">
                <div className="card mb-3">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between">
                      <button className="btn btn-falcon-default btn-sm" type="button" onClick={handleBack}>
                        <span className="fas fa-arrow-left" />Back
                      </button>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                          <li className="breadcrumb-item">
                            <a href="#">Home</a>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">
                            Student List
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-header">
                <div className="row flex-between-end"></div>
                <div className="card-body pt-0">
                  <div className="tab-content">
                    <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-bb1c70a1-6c4c-451a-80b8-972dfdd01aa8" id="dom-bb1c70a1-6c4c-451a-80b8-972dfdd01aa8" >
                      <div id="tableExample3" data-list='{"valueNames":["name","email","age"],"page":5,"pagination":true}'>
                        <div className="row justify-content-end g-0">
                          <div className="row mb-2">
                            <div className="col-md-6">
                              {/* <button className="btn btn-success " type="submit" style={{ marginLeft: '-51px', }}>Fetch Shopify Orders</button> */}
                            </div>
                            <div className="col-md-6">
                              <form className="d-flex">
                                <input className="form-control form-control-sm shadow-none search" type="search" value={searchTerm} onChange={handleSearchInputChange}  placeholder="Search..." id="search_data" aria-label="search" />
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive scrollbar">
                          <table className="table table-bordered table-striped fs--1 mb-0">
                            <thead className="bg-200 text-900">
                              <tr>
                                <th className="sort" data-sort="sno">Sr No</th>
                                <th className="sort" data-sort="order">Year</th>
                                <th className="sort" data-sort="email">Admission No</th>
                                <th className="sort" data-sort="method">Roll No</th>
                                <th className="sort" data-sort="discount">Student Name</th>
                                <th className="sort" data-sort="Orderdate">Father Name</th>
                                <th className="sort" data-sort="date">Class</th>
                                <th className="sort" data-sort="status">Section</th>
                                <th className="sort" data-sort="action">Action</th>
                              </tr>
                            </thead>
                            <tbody className="list">
                              {data && data.length > 0 ? (
                                data.map((item, index) => (
                                  <tr key={index}>
                                    <td className="sno">{((currentPage - 1) * itemsPerPage) + index + 1}</td>
                                      <td className="order">{item?.Year}</td>
                                      <td className="email">{item?.admission_no}</td>
                                      <td className="method">{item?.roll_no}</td> 
                                      <td className="discount">{item?.student_name}</td>
                                      <td className="date">{item?.father_name}</td>
                                      <td className="status">{item?.class}</td>
                                      <td className="status">{item?.section}</td>
                                    <td className="action">
                                      {/* <a href=""><BiShow style={{ fontSize: '30px', color: 'rgb(53, 78, 111)' }} /></a> */}
                                      <a href={`/student/${item?.rc_id}`} style={{ textDecoration: 'none' }}> <BiShow style={{ fontSize: '30px', color: 'rgb(53, 78, 111)' }} /> </a>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan="9">
                                    {!loading ? (
                                      <div className="no-data-available-container">
                                        <div className="no-data-available">
                                          No data available
                                        </div>
                                      </div>
                                    ) : null}
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                        <div className="row mt-2">
                        <div className="col-6">
                      <div className="page-showing">
                      {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalDataValue)} of {totalDataValue} entries
                      </div>
                      </div>
                      <div className="col-6">
                      <div className="prev-next">
                      <div className="pagination pagination-style-three">
                      <button style={{ marginRight: '10px' }} className="btn btn-primary" onClick={handlePrevPage} disabled={currentPage === 1}> Previous</button>
                      {[...Array(Math.ceil(totalDataValue / itemsPerPage)).keys()].map((pageNumber) => {
                      const page = pageNumber + 1;
                      const totalPages = Math.ceil(totalDataValue / itemsPerPage);
                      if (totalPages <= 4 || (page <= 2 || page >= totalPages - 1) || (page >= currentPage - 1 && page <= currentPage + 1)) {
                      return (
                      <button key={page} style={{ marginRight: '10px' }} className={`btn ${page === currentPage ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handlePageChange(page)}>
                      {page}
                      </button>
                      );
                      } else if ((page === 3 && currentPage > 4) || (page === totalPages - 2 && currentPage < totalPages - 3)) {
                      return <span key="ellipsis">...</span>;
                      }
                      return null;
                      })}
                      <button style={{ marginRight: '10px' }} className="btn btn-primary" onClick={handleNextPage} disabled={currentPage === Math.ceil(totalDataValue / itemsPerPage)}>Next</button>
                      </div>
                      </div>
                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ImportRetail;
