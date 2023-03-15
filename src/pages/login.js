import Header from "../components/Header";
import Login from "../components/Login";

export default function LoginPage(){
    return(
        <>
             <Header
                heading="Login to your account"
                paragraph="Or "
                linkName="Register"
                linkUrl="/signup"
                />
            <Login className="login"/>
        </>
    )
}