import Footer from "./footer";
import Header from "./header";
import AllPost from "./allPost";

const Content = () => (
    <div className="flex flex-col gap-6 center justify-center items-center">

        <Header />


        <div className="content-1 flex flex-col items-center">



            <AllPost />
            <Footer />

        </div>
    </div>
);

export default Content;
