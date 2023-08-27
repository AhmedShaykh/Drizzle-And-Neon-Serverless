import React from "react";
import { getSessionUser } from "@/lib/session";

const Home = async () => {

    const user = await getSessionUser();



    return (
        <></>
    )
};

export default Home;