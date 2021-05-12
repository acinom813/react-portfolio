import React from 'react';
import './App.css';

function Project(props) {
    return (

        <div id="portfolio" className="container mt-3 mb-5" >
            <div className="post-heading text-center">
                <h4 className="display-4 font-weight-bold">Design.</h4>
                <hr className="w-50 mx-auto pb-5">
            </div>

                <div className="row">

                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card" style="width: 18rem;">
                            <img className="card-img-top" src="images/work.png" alt="">
                                <div className="card-body">
                                    <h5 className="card-title">Work Day Scheduler</h5>
                                    <p className="card-text"></p>

                                    <a href="https://github.com/acinom813/homework-5" className="btn btn-dark">Click to View Repository</a>
                                </div>
                        </div>
                    </div>

                        <div className="col-lg-4 col-md-6 col-12 pb-5">
                            <div className="card" style="width: 18rem;">
                                <img className="card-img-top" src="images/rpg mgr.png" alt="">
                                    <div className="card-body">
                                        <h5 className="card-title">RPG Manager</h5>
                                        <p className="card-text"></p>
                                        <a href="http://p2-rpg-manager.herokuapp.com" className="btn btn-dark">Click to View Repository</a>
                                    </div>
                             </div>
                        </div>

                            <div className="col-lg-4 col-md-6 col-12 pb-5">
                                <div className="card" style="width: 18rem;">
                                    <img className="card-img-top" src="images/dashboard.png" alt="">
                                        <div className="card-body">
                                            <h5 className="card-title">Weather Dashboard App</h5>
                                            <p className="card-text"></p>
                                            <a href="https://github.com/acinom813/Weather-Dashboard" className="btn btn-dark">Click to View Repository</a>
                                        </div>
                                </div>
                            </div>

                                <div className="col-lg-4 col-md-6 col-12 pb-5">
                                    <div className="card" style="width: 18rem;">
                                        <img className="card-img-top" src="images/quiz.png" alt="">
                                            <div className="card-body">
                                                <h5 className="card-title">Coding Quiz</h5>
                                                <p className="card-text"></p>
                                                <a href="https://github.com/acinom813/homework-4" className="btn btn-dark">Click to View Repository</a>
                                            </div>
                                    </div>
                                 </div>

                                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                                        <div className="card" style="width: 18rem;">
                                            <img className="card-img-top" src="images/online-offline-budget-tracker.png" alt="">
                                                <div className="card-body">
                                                    <h5 className="card-title">Online/Offline Budget Tracker</h5>
                                                    <p className="card-text"></p>
                                                    <a href="https://github.com/acinom813/online-offline-budget-tracker" className="btn btn-dark">Click to View Repository</a>
                                                </div>
                                        </div>
                                    </div>

                                        <div className="col-lg-4 col-md-6 col-12 pb-5">
                                            <div className="card" style="width: 18rem;">
                                                <img className="card-img-top" src="images/employeedirectory.png" alt="">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Employee Directory: Built Using React</h5>
                                                        <p className="card-text"></p>
                                                        <a href="https://github.com/acinom813/react-employee-directory" className="btn btn-dark">Click to View Repository</a>
                                                    </div>
                                            </div>
                                        </div>


                                        </div>
                                    </div>

                                </div>
                            </div>

    )
}

    export default Project; 