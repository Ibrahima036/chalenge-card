
import { FaBeer } from "react-icons/fa"
import MonImage from "./assets/illustration-article.svg"
import profil from "./assets/image-avatar.webp"
import Card from "./Components/cards"
import { FaCcMastercard } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import MasterCard from "./Components/master-card";
function App() {

  return(
    <div className="min-h-screen bg-[#D3C32A] flex items-center justify-center">
      <MasterCard nameCard="Mastercard" fullname="bah ibrahima" code="8/24" number="1234 1234 1234 1234"/>
      {/* <Card imgIlustration={MonImage} impProfile={profil} publisheAt="Publishet 21 Dec 2023" info="These languages are the backbone of every website, defining structure, content, and presentation" name="Ibrahima bah"/>  */}
    </div>
  )

}

export default App
