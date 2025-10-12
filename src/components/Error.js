
import { useRouteError } from "react-router-dom";

const Error = () => {
     const err =  useRouteError();
     console.log(err);
return (
    <div>
        <h2>An error occured!</h2>
        <h3>please try again after sometime.</h3>
    </div>
)}

export default Error;