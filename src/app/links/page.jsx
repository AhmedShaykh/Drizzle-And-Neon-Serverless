import React from "react";
import LinksCreateForm from "./createForm";
import CreateHtmlForm from "./createHtmlForm";

const Links = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <LinksCreateForm /> */}
            <CreateHtmlForm />
        </div>
    )
};

export default Links;