import { Outlet } from "react-router-dom";

import UserPage from "../../pages/userProfile/UserPage"

const UserProfileLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <UserPage />
        <Outlet />
    </div>;
};

export default UserProfileLayout;
