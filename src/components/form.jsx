export default function Form({formData, setFormData, handleFormData, handleSubmit}) {
    return (
        <>
            <div className="container my-4">
                <h1>Nuovo Autore</h1>
                <div className="card p-3">

                    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Author</label>
                            <input type="text" className="form-control" id="author" name="author"  value={formData.author} onChange={handleFormData}/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title"  name="title" value={formData.title} onChange={handleFormData}/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">post's body</label>
                            <textarea className="form-control" name="body" id="body" rows="3" value={formData.body} onChange={handleFormData}></textarea>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="checkbox" id="public" name="public"  onChange={handleFormData}/>
                            <label className="form-check-label" htmlFor="public"> Default checkbox </label>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary mt-2"
                        >
                            publish
                        </button>
                    </form>

                </div>
            </div>
        </>
    )

}