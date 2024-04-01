import Swal from 'sweetalert2';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', selectedFile);
    setFile(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error('No file selected');
      return;
    }

    try {
      const response = await fetch('http://localhost/student-report-api/index.php/Student/add', {
        method: 'POST',
        body: file
      });

      if (response.ok) {
        // console.log('Data inserted successfully');
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data inserted successfully'
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            router.push('/student/list');
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to insert data'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred'
      });
    }
  };

  return (
    <>
    <main className="main" id="top">
  <div className="container-fluid" data-layout="container-fluid">
    <div className="content">
      <div className="row gx-0 kanban-header rounded-2 px-x1 py-2 mt-2 mb-3">
        <div className="col">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between">
              <button className="btn btn-falcon-default btn-sm" type="button" onClick={() => window.history.back()}>
                <span className="fas fa-arrow-left" />Back
              </button>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"> <a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add Student
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <div className="tab-content">
                <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-ed518e57-880f-49bf-acd5-22785b44ed0e" id="dom-ed518e57-880f-49bf-acd5-22785b44ed0e" >
                  <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                    <div className="col-md-4 position-relative">
                      <label className="form-label" htmlFor="validationTooltip03"> File </label>
                      <input className="form-control" name="image" id="image" type="file" onChange={handleFileChange} />
                    </div>
                    <div className="col-4">
                      <button className="btn btn-primary float-end" type="submit">Submit</button>
                    </div>
                    <div className="col-4">
                      <button className="btn btn-success float-end" type="button">Download Sample File</button>
                    </div>
                  </form>
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
  );
};

export default Login;
