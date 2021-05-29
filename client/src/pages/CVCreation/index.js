import React from "react";

const CVCreation = () => {
    return (
        <div className="CvFormCont">

            <form className="CvForm">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Повне ім'я</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Бажана позиція</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Навички</label>
                    <p></p>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Languages</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Working experience</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Preferred salary</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-dark">Create</button>
            </form>
        </div>
    );
};

export default CVCreation;

//    title: { type: String, required: true },
// profession: { type: String, required: true },
// keyInfo: { type: String },
// language: { type: String },
// experience: { type: String },
// salary: { type: Number },