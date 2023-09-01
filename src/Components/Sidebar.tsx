import React from "react";
import { getAuthSession } from "@/lib/auth";

const Sidebar = async () => {

    const session = await getAuthSession();

    return (
        <div className="flex flex-col">
            <div className="p-4 w-full justify-center">
                {!session ? (
                    <h1>Sign In</h1>
                ) : (
                    <h1>Sign Out</h1>
                )}
            </div>
        </div>
    )
};

export default Sidebar;