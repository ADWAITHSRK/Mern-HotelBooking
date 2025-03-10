import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

interface Props {
    children : React.ReactNode;
}
const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="container mx-auto py-4">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout