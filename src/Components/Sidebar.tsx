import { getAuthSession } from "@/lib/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Sidebar = async () => {

    const session = await getAuthSession();

    return (
        <div className="flex flex-col">
            <div className="p-4 w-full justify-center">
                {!session ? (
                    <SignIn className="" />
                ) : (
                    <SignOut />
                )}
            </div>
        </div>
    )
};

export default Sidebar;