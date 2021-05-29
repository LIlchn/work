import React from 'react';


const Resume = () => {
    return (
        <div className="main-main-cont">

            <div className="main-cont" style={{ Width: '100%', padding: '30px', MinHeight: '100vh' }}>
                <div className="card border-dark mb-3" style={{ maxHeight: '19rem', marginTop: '5vh' }}>
                    <div className="card-header bg-transparent border-dark">JS</div>
                    <div className="card-body text-dark">
                        <p className="card-title"><b>Junior Front-end Developer</b></p>
                        <p className="card-text">HTML</p>
                        <p>CSS</p>
                    </div>
                    <div className="card-footer bg-transparent border-dark">+380068927146</div>
                </div>
                <div className="card border-dark mb-3" style={{ maxWidth: '19rem', maxHeight: '19rem', marginTop: '5vh', marginLeft: '5vh' }}>
                    <div className="card-header bg-transparent border-dark">Category</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title"><b>Resume Name</b></h5>
                        <p className="card-text">Some quick example text.</p>
                    </div>
                    <div className="card-footer bg-transparent border-dark">Contact</div>
                </div>

                <div className="card border-dark mb-3" style={{ maxWidth: '19rem', maxHeight: '19rem', marginTop: '5vh', marginLeft: '5vh' }}>
                    <div className="card-header bg-transparent border-dark">Category</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title"><b>Resume Name</b></h5>
                        <p className="card-text">Some quick example text.</p>
                    </div>
                    <div className="card-footer bg-transparent border-dark">Contact</div>
                </div>

                <div className="card border-dark mb-3" style={{ maxWidth: '19rem', maxHeight: '19rem', marginTop: '5vh', marginLeft: '5vh' }}>
                    <div className="card-header bg-transparent border-dark">Category</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title"><b>Resume Name</b></h5>
                        <p className="card-text">Some quick example text.</p>
                    </div>
                    <div className="card-footer bg-transparent border-dark">Contact</div>
                </div>

            </div>
        </div>

    );
}

export default Resume;