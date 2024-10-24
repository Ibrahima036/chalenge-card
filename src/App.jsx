import MonImage from "./assets/illustration-article.svg"
import profil from "./assets/image-avatar.webp"
import Card from "./Components/cards"
function App() {

  return(
    <div className="h-screen bg-[#D3C32A] flex items-center justify-center">
      <Card imgIlustration={MonImage} impProfile={profil} publisheAt="Publishet 21 Dec 2023" info="These languages are the backbone of every website, defining structure, content, and presentation" name="Ibrahima bah"/> 
    </div>
  )

}

export default App
