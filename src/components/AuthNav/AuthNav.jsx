import { NavLink } from "react-router-dom";
import { AuthNavBlock } from "./AuthNav.styled";
export const AuthNav = () => {
    return (
        <AuthNavBlock>
            <NavLink to='/register'>
                Registration
            </NavLink>
            <NavLink to='/login'>
                Sign in
            </NavLink>
        </AuthNavBlock>
    )
}
