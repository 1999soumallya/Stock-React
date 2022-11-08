import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CirclesWithBar } from 'react-loader-spinner'

const Loader = async () => {

    const userInfo = await useSelector((state) => state.loginandregistraction.userInfo)
    const navigate = useNavigate()


    useEffect(() => {
        if (userInfo) {
            if (userInfo.userType === 'admin') {
                navigate('/admin')
            } else {
                navigate('/user')
            }
        }
    }, [navigate, userInfo])

    return (
        <>
            <div className="login_area">
                <div className="login_wrapper">
                    <div style={{ "position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%,-50%)" }}>
                        <CirclesWithBar height="100" width="100" color="#4fa94d" wrapperStyle={{}} wrapperClass="" visible={true} outerCircleColor="" innerCircleColor="" barColor="" ariaLabel='circles-with-bar-loading' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader
