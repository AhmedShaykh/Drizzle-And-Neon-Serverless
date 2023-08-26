"use client";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const GithubProfile = () => {

    const myGithubRepoProfile = "https://api.github.com/users/AhmedShaykh/repos";

    const { data, error, isLoading } = useSWR(myGithubRepoProfile, fetcher,
        { refreshInterval: 1000 }
    );

    if (error) return <div className="flex justify-center my-3">Error</div>;

    if (isLoading) return <div className="flex justify-center my-3">Loading..</div>;

    return (
        <div className="flex flex-col items-center gap-y-4 my-3">
            {data.map((repo, i) => (
                <div key={i}>
                    <h1 className="text-center my-1">{repo.name}</h1>

                    <h2 className="text-center my-1">{repo.full_name}</h2>
                </div>
            ))}
        </div>
    )
}

export default GithubProfile;