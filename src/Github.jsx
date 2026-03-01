import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserFetch from "./UserFetch";
function Github(){
    //to store the object
    // const [Profile,setProfile]=useState(null)
    // const {name}=useParams();
    // // console.log(data);
    // async function fetchUser(){
    //     const response=await fetch(`https://api.github.com/users/${name}`);
    //     const data=await response.json();
    //     setProfile(data);
    // }
    // useEffect(()=>{
    //     fetchUser();
    // },[])
    const data = UserFetch();   // first store it

    if (!data) {
        return <h2>Loading...</h2>;
    }
    const {avatar_url,login}=data;
    return(
        <>
            <h1>Github Page</h1>
            {/* Displaying the github name details */}
            <div>
                <img src={avatar_url}/>
                <h2>{login}</h2>
            </div>
        </>
    )
}
export default Github;