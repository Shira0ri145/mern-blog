import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from './service/authorize';
import Swal from 'sweetalert2';

const AdminRoute = ({ element: Component, ...rest }) => {
    const navigate = useNavigate();
    const user = getUser();

    useEffect(() => {
        // Redirect if not authenticated
        if (!user) {
            // Show the alert first
            Swal.fire({
                icon: "error",
                title: "Please login",
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // Redirect after alert is closed
                navigate("/");
            });
        }
    }, [navigate, user]);

    // Render nothing or a fallback UI while checking authentication
    return user ? <Component {...rest} /> : null;
};

export default AdminRoute;
