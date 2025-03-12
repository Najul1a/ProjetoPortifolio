import imagemPerfil from "./img/oculosantigo.jpg";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/Rodape/Rodape";
import Perfil from "./components/perfil/perfil";

import "./App.css";

const App = () => {
  return (
    <div id="App">
      <Perfil fotoPerfil={imagemPerfil}>@Ana Geremias </Perfil>

      <div id="container">
        <ul>
          <Links
            link={
              "https://www.canva.com/design/DAGhihHjcB4/BhTFpIIIrpMc3LynPef6Fw/edit?utm_content=DAGhihHjcB4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            }
          >
            Sobre Mim
          </Links>
          <Links
            link={
              "https://fgmed.org/blog/5-coisas-que-voce-precisa-saber-antes-de-cursar-pediatria/"
            }
          >
            Profissão do sonhos
          </Links>
          <Links link={"https://wa.link/3pmxhm"}>Contato</Links>
        </ul>
      </div>
      <div className="SocialLinks">
        <SocialLinks link={"https://wa.link/3pmxhm"} />
        <ion-icon name="logo-whatsapp"></ion-icon>
      </div>
      <div>
        <Rodape>Ana Geremias</Rodape>
      </div>
    </div>
  );
};

export default App;
