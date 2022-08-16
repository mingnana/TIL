import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
function Page(){
    return(
        <div className="page">
            <Header />
            <Content />
            <Footer/>
        </div>
    )
}
export default Page