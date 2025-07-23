import './App.css'

function App() {
  return (
    <>

      <div className="container my-4">
        <h1>Nuovo Autore</h1>
        <div className="card p-3">

          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Author</label>
              <input type="text" className="form-control" id="author" />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">post's body</label>
              <textarea className="form-control" name="body" id="body" rows="3"></textarea>
            </div>


          </form>
        </div>
      </div>
    </>
  )
}


export default App
