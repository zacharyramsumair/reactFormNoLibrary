import React , {useEffect}from "react";
import { useFormContext, useLoginContext } from "../Components/Context";
import { useNavigate } from 'react-router-dom';

type Props = {};

const Home = (props: Props) => {
    let { loggedIn } = useLoginContext();

    const navigate = useNavigate()
    useEffect(()=>{
        if(!loggedIn){
            console.log(loggedIn)
            navigate("/login") 
        }
    },[loggedIn])


	return (
		<section>
			<div>Home</div>
			<p>{loggedIn ? "true" : "false"}</p>
		</section>
	);
};

export default Home;
