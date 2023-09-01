import AddForm from "@/Components/AddForm";
import ThreadList from "@/Components/ThreadList";
import { getFeedAction } from "./_actions/thread";
import { getAuthSession } from "@/lib/auth";

const Home = async () => {

    const session = await getAuthSession();

    const thread_data = await getFeedAction();

    return (
        <div className="flex min-h-screen p-20 flex-col items-center justify-start">
            <AddForm session={session} />
            <ThreadList thread_data={thread_data} />
        </div >
    )
};

export default Home;