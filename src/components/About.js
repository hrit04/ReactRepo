import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
return (
    <div>
        <h2>
        About Page
        <User name="Hritam Chowdhury functional" age={24}></User>
        <UserClass name="Hritam Chowdhury classbased" age={24}></UserClass>
        </h2>
       
    </div>
)

}


export default About;