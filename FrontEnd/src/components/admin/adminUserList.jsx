import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import AdminSidenavbar from "./adminSidenavbar";
import AdminTopnavbar from "./adminTopnavbar";
import AdminAddUserModal from './adminAddUserModal';
import { AllUserAction } from '../../Redux/Action/UserAction';

export default function AdminUserList() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const AllUser = useSelector((state) => state.AllUser)
    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo } = userLogin
    const { UserList } = AllUser

    useEffect(() => {
        if (!userInfo) {
            navigate('/')
        }
        dispatch(AllUserAction())
    }, [dispatch, navigate, userInfo])

    return (
        <>
            <AdminSidenavbar />
            <main className="content" style={{"minHeight": "300px"}}>
                <AdminTopnavbar />
                <section className="user_profl_sec">
                    <div className="row">
                        <div className="col-sm-12 col-sm-12 d-flex flex-row-reverse">
                            <button type="button" className="btn forms_btn" data-bs-toggle="modal" data-bs-target="#formModal" data-bs-whatever="@mdo">Add User</button>
                        </div>
                    </div>

                    <div className="row">
                        {UserList.map(((UserList, index) => {
                            return (
                                <div className="col-sm-6 col-lg-4" key={index}>
                                    <div className="api_item" style={{ "minHeight": "231px" }} key={UserList._id}>
                                        <b className="api_title" id="" style={{ "fontSize": "18px" }}>User Name: <span>{UserList.firstName} {UserList.lastName}</span></b>
                                        <span className="api_secret" id="">User Email: <span>{UserList.email}</span></span>
                                        <span className="client_id" id="">User Phone: <span>{UserList.phone}</span></span>
                                        <div className="btn_grps">
                                            <Link to={`/admin/view-api/${UserList.id}`} className="btn create_strategy">View API</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                </section>
            </main>
            <AdminAddUserModal />
        </>
    );

}

