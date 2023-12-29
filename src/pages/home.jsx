import Header from "../components/header"
import AllPost from "../components/allPost"
import Footer from "../components/footer"

export default function Home() {
    return (
        <div className="flex flex-col gap-6 center justify-center items-center">

            <Header />
            <div className="content-1 flex flex-col items-center">
            <AllPost />
            <Footer />
            </div>
        </div>
    );
}

