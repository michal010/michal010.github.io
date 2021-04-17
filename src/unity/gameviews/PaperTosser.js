import React from 'react'
import Unity, {UnityContext} from "react-unity-webgl";
import "../../components/pages/Shared/UnityStyles.css"
const unityContext = new UnityContext({
    loaderUrl: "PaperTosser/Build/PaperTosser.loader.js",
    dataUrl: "PaperTosser/Build/PaperTosser.data",
    frameworkUrl: "PaperTosser/Build/PaperTosser.framework.js",
    codeUrl: "PaperTosser/Build/PaperTosser.wasm",
  });


class PaperTosser extends React.Component {
  
  render(){
    return(
        <Unity className="unity-content" unityContext={unityContext}
        style={{
          height: "1080",
          width: "1920"
        }}
        />
    )
  }
}

export default PaperTosser
