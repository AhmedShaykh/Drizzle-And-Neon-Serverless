"use client";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const GithubProfile = () => {

    const myGithubRepoProfile = "https://api.github.com/users/AhmedShaykh/repos";

    const { data, error, isLoading } = useSWR(myGithubRepoProfile, fetcher);

    if (error) return "Error";

    if (isLoading) return "Loading...";

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