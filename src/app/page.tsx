import { getAuthSession } from "@/lib/auth";

const Home = () => {

    const session = getAuthSession();

    return (
        <div className="flex min-h-screen p-20 flex-col items-center justify-start">
        </div >
    )
};

export default Home;