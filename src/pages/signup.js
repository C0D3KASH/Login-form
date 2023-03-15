import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Or "
              linkName="log into your existing account"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}