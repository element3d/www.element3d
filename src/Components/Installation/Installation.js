
import './Installation.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons'

export function Installation() {
  return (
    <div className="d-flex fd-col ai-start">
      <h1 className="color-main">Installation</h1>

      <h2>Online installer</h2>
      <p>Download the Element 3D online installer for your development environment and simply install the sdk by double clicking or via command prompt.</p>

      <div className="e3-os-container">
        <div className="e3-os">
          <FontAwesomeIcon className="fa-icon" size="10x" icon={faWindows} />
          Windows <div><a>x86</a> / <a>x64</a></div>
        </div>
        <div className="e3-os">
          <FontAwesomeIcon className="fa-icon" size="10x" icon={faLinux} />
          Linux
        </div>
        <div className="e3-os">
          <FontAwesomeIcon className="fa-icon" size="10x" icon={faApple} />
          MacOS
        </div>
      </div>

      <h2>git clone</h2>
      If you don't want to install the Element3D sdk from online installer, follow the steps below.

      <div className="e3-terminal">
        > git clone https://github.com/element3d/element3d.git
      </div>
      <p>After clonning the Element3D sdk repository add the bin folder to the path variable and set ELEMENT3D_DIR environment variable to sdk root directory. This steps are required. This exactly can be done via simple online installer, so you can safely use it without any waranty.</p>
      <h2>SDK</h2>
      <p>Element3D sdk contains all neccessery binaries, tools and libraries for compiled for each platform.</p>
      <p>The bin directory contains e3 and eg command line tools for development, and also precompiled runtime libraries required for Element3D applications./</p>

      <h2>e3</h2>
      <p>Element3D provides two ways of making UI elements. The easy and required way is to create reusable elements via xml API. XML files should be converted to a c++ classes before compilation of the project which should be done via e3 tool.</p>
      <p>To run the Element3D cli just type the following command in the root of project directory.</p>
      <div className="e3-terminal">
        > e3 start
      </div>
      <p>After starting the e3 will automatically detect changes in xml files and translate them to corresponding c++ classes so the UI will not be translated at runtime. e3 will also transalte the files modified before its startup, so if you forget to run it before UI modifications it will not be an issue. But make sure that all changes are translated before actual c++ compilation.</p>
    </div>
  );
}

