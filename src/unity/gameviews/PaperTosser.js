import React from 'react'
import Unity, {UnityContext} from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "../games/PaperTosserBuild/Build/PaperTosserBuild.loader.js",
    dataUrl: "../games/PaperTosserBuild/Build/PaperTosserBuild.data",
    frameworkUrl: "../games/PaperTosserBuild/Build/PaperTosserBuild.framework.js",
    codeUrl: "../games/PaperTosserBuild/Build/PaperTosserBuild.wasm",
  });


class PaperTosser extends React.Component {
  render(){
    return(

      <Unity unityContext={unityContext} />
    )
  }
}

export default PaperTosser
