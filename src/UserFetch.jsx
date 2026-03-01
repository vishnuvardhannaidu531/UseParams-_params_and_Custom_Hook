import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserFetch(){
    const [Profile,setProfile]=useState(null)
    const {name}=useParams();
    // console.log(data);
    async function fetchUser(){
        const response=await fetch(`https://api.github.com/users/${name}`);
        const data=await response.json();
        setProfile(data);
    }
    useEffect(()=>{
        fetchUser();
    },[name])
    return Profile
        ? { avatar_url: Profile.avatar_url, login: Profile.login }
        : null;
}
export default UserFetch;