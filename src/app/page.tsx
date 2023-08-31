import { Button } from "@/Components/ui/button";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

const Home = () => {

    const session = getAuthSession();

    return (
        <div className="flex min-h-screen p-20 flex-col items-center justify-start">
            {/* <Link href="/signin">
                <Button
                    className="py-3 px-4 font-medium bg-[#020817] dark:bg-white dark:text-black text-white rounded-md"
                >
                    Sign In
                </Button>
            </Link>

            <pre className="mt-20">
                {JSON.stringify(session, null, 2)}
            </pre> */}
        </div>
    )
};

export default Home;