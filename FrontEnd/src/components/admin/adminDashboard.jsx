import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminSidenavbar from "./adminSidenavbar";
import AdminTopnavbar from "./adminTopnavbar";
import { useSelector } from 'react-redux';

export default function AdminDashboard() {

    const navigate = useNavigate()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])


    return (
        <>
            <AdminSidenavbar />
            <main className="content">
                <AdminTopnavbar />
                <div className="py-4">
                    <div className="dropdown">
                        <button className="btn btn-gray-800 d-inline-flex align-items-center me-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg className="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            New Task
                        </button>
                        <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1">
                            <Link className="dropdown-item d-flex align-items-center" to={"#"}>
                                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                </svg>
                                Add User
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to={"#"}>
                                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                </svg>
                                Add Widget
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to={"#"}>
                                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                                </svg>
                                Upload Files
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to={"#"}>
                                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                Preview Security
                            </Link>
                            <div role="separator" className="dropdown-divider my-1"></div>
                            <Link className="dropdown-item d-flex align-items-center" to={"#"}>
                                <svg className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                                </svg>
                                Upgrade to Pro
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-lg-center">
                    <div className="col-12 mb-4">
                        <div className="card border-0 bg-yellow-100 shadow">
                            <div className="card-header d-sm-flex flex-row align-items-center border-yellow-200 flex-0">
                                <div className="d-block mb-3 mb-sm-0">
                                    <div className="fs-5 fw-normal mb-2">Sales Value</div>
                                    <h2 className="fs-3 fw-extrabold">$10,567</h2>
                                    <div className="small mt-2">
                                        <span className="fw-normal me-2">Yesterday</span>
                                        <span className="fas fa-angle-up text-success"></span>
                                        <span className="text-success fw-bold">10.57%</span>
                                    </div>
                                </div>
                                <div className="btn-group ms-auto" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary active">
                                        Day
                                    </button>
                                    <button type="button" className="btn btn-secondary">Month</button>
                                    <button type="button" className="btn btn-secondary">Year</button>
                                </div>
                            </div>
                            <div className="card-body p-2"><div id="chart"></div></div>
                        </div>
                    </div>
                </div>

                <div className="row" id="banner_card">
                    <div className="col-12 col-sm-6 col-xl-4 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row d-block d-xxl-flex align-items-center">
                                    <div className="col-12 col-xxl-6 px-xxl-0 mb-3 mb-xxl-0">
                                        <div id="chart-customers"></div>
                                        <div className="chart_views">
                                            <figure>
                                                <img src="../../assets/img/reference/chart1.png" alt="" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xxl-6 pe-xxl-0">
                                        <h2 className="fs-6 fw-normal mb-1 text-gray-400">Customers</h2>
                                        <h3 className="fw-extrabold mb-1">345k</h3>
                                        <small className="d-flex align-items-center"
                                        ><svg
                                            className="icon icon-xxs text-gray-400 me-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            Apr 1 - May 1</small
                                        >
                                        <div className="small d-flex mt-1">
                                            <div>
                                                <svg
                                                    className="icon icon-xs text-success"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                        clipRule="evenodd"
                                                    ></path></svg><span className="text-success fw-bolder">18,2%</span> Since
                                                last month
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row d-block d-xxl-flex align-items-center">
                                    <div className="col-12 col-xxl-6 px-xxl-0 mb-3 mb-xxl-0">
                                        <div id="chart-revenue"></div>
                                        <div className="chart_views">
                                            <figure>
                                                <img src="../../assets/img/reference/chart2.png" alt="" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xxl-6 ps-xxl-4 pe-xl-0">
                                        <h2 className="fs-6 fw-normal mb-1 text-gray-400">Revenue</h2>
                                        <h3 className="fw-extrabold mb-1">$253,594</h3>
                                        <small className="d-flex align-items-center"
                                        ><svg
                                            className="icon icon-xxs text-gray-400 me-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            Apr 1 - May 1</small
                                        >
                                        <div className="small d-flex mt-1">
                                            <div>
                                                <svg
                                                    className="icon icon-xs text-danger"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path></svg><span className="text-danger fw-bolder">4,6%</span> Since
                                                last month
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-xl-4 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div
                                    className="row d-block d-sm-flex d-xl-block d-xxl-flex align-items-center"
                                >
                                    <div
                                        className="col-12 col-sm-6 col-xl-12 col-xxl-6 px-xxl-0 mb-3 mb-sm-0 mb-xl-3 mb-xxl-0"
                                    >
                                        <div id="chart-users"></div>
                                        <div className="chart_views">
                                            <figure>
                                                <img src="../../assets/img/reference/chart3.png" alt="" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div
                                        className="col-12 col-sm-6 col-xl-12 col-xxl-6 ps-xxl-4 pe-xxl-0"
                                    >
                                        <h2 className="fs-6 fw-normal mb-1 text-gray-400">Users</h2>
                                        <h3 className="fw-extrabold mb-1">15.3k</h3>
                                        <small className="d-flex align-items-center"
                                        ><svg
                                            className="icon icon-xxs text-gray-400 me-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            Apr 1 - May 1</small
                                        >
                                        <div className="small d-flex mt-1">
                                            <div>
                                                <svg
                                                    className="icon icon-xs text-success"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                        clipRule="evenodd"
                                                    ></path></svg><span className="text-success fw-bolder">20%</span> Since
                                                last month
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

}

