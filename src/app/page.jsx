import React from "react";
import Link from "next/link";

const Home = async () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl my-2 font-semibold">Drizzle And Neon!</h1>

            <Link href="/blog" className="my-4 text-blue-700 text-2xl">
                Go To Blog Page
            </Link>
        </div>
    )
};

export default Home;