import { useState } from "react";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/Rodape/Rodape";
import Perfil from "./components/perfil/perfil";

import "./App.css";

const App = () => {
  const [isLight] = useState(true);

  return (
    <div id="App" className={isLight}>
      <Perfil>@Ana Geremias </Perfil>

      <div id="container">
        <ul>
          <Links link={"https://github.com/Najul1a"}>GitHub</Links>
          <Links link={"https://instragram.com/anna_ofz_"}>Instragram</Links>
          <Links link={"https://br.linkedin.com/"}>Linkdln</Links>
          <Links link={"https://www.youtubekids.com/"}>Youtube</Links>
        </ul>
      </div>
      <div id="socialLinks">
        <SocialLinks link={"https://github.com/Najul1a"} icon={"logo-github"} />
        <SocialLinks
          link={"https://instragram.com/anna_ofz_"}
          icon={"logo-instagram"}
        />
        <SocialLinks link={"https://br.linkedin.com/"} icon={"logo-linkedin"} />
        <SocialLinks
          link={"https://www.youtubekids.com/"}
          icon={"logo-youtube"}
        />
      </div>
      <div>
        <Rodape>Ana Geremias</Rodape>
      </div>
    </div>
  );
};

export default App;
