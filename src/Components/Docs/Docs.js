import './Docs.css';
import { Installation } from '../Installation/Installation'
import { FirstProject } from '../FirstProject/FirstProject'
import { BuildAndRun } from '../BuildAndRun/BuildAndRun'
import { AddNewPages } from '../AddNewPages/AddNewPages'
import { AppRegister } from '../AddNewPages/AppRegister'
import { AppInput } from '../AddNewPages/AppInput'
import { AppProfile } from '../AddNewPages/AppProfile'

import { Element } from '../Element/Element'
import { Text } from '../Text/Text'
import { Input } from '../Input/Input'
import { TextArea } from '../TextArea/TextArea'

import { ClassElement } from '../ClassElement/ClassElement'
import { ClassText } from '../ClassText/ClassText'
import { ClassInput } from '../ClassInput/ClassInput'
import { ClassFontIcon } from '../ClassFontIcon/ClassFontIcon'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
// import { Route } from 'react-router'
export function Docs(props) {

  const { url, path } = useRouteMatch();


  return (
    <div className="e3-mian-container">
      <div className="e3-navbar">
        <div className="e3-navbar-div">
          <nav className="e3-nav">Element 3D</nav>
        </div>
        <div className="e3-navbar-div">
          <nav className="e3-nav">Docs</nav>
          <nav className="e3-nav">Elementary</nav>
        </div>
      </div>
      <div class="e3-container">
        <div className="e3-aside">
          <div className="e3-list-title">Getting started</div>
          <div className="e3-list-item">
            <Link to={`${url}/first-project`}>Installation</Link></div>

          <div className="e3-list-item">First project</div>
          <div className="e3-list-item">Build and run</div>
          <div className="e3-list-item">Add new pages: Login</div>
          <div className="e3-list-item">Add new pages: Register</div>
          <div className="e3-list-item">Add new pages: AppInput</div>
          <div className="e3-list-item">Add new pages: Profile</div>

          <div className="e3-list-title">Elements</div>
          <div className="e3-list-item">Element</div>
          <div className="e3-list-item">Text</div>
          <div className="e3-list-item">Input</div>
          <div className="e3-list-item">TextArea</div>
          <div className="e3-list-item">FontIcon</div>
          <div className="e3-list-item">Dropdown</div>
          <div className="e3-list-item">DropdownBody</div>
          <div className="e3-list-item">Element3D</div>

          <div className="e3-list-title">API</div>
          <div className="e3-list-item">Application</div>
          <div className="e3-list-item">Animation</div>
          <div className="e3-list-item">AssetManager</div>
          <div className="e3-list-item">Context</div>
          <div className="e3-list-item">Dropdown</div>
          <div className="e3-list-item">DropdownBody</div>
          <div className="e3-list-item">Enums</div>
          <div className="e3-list-item">Element</div>
          <div className="e3-list-item">Element3D</div>
          <div className="e3-list-item">Event</div>
          <div className="e3-list-item">Font</div>
          <div className="e3-list-item">FontIcon</div>
          <div className="e3-list-item">Image</div>
          <div className="e3-list-item">Input</div>
          <div className="e3-list-item">MouseEvent</div>
          <div className="e3-list-item">Text</div>
          <div className="e3-list-item">TextArea</div>
          <div className="e3-list-item">Timeout</div>
          <div className="e3-list-item">Types</div>
          <div className="e3-list-item">Window</div>
        </div>

        <div className="e3-doc-router">
          <Installation />
          {/* <FirstProject /> */}
          {/* <BuildAndRun /> */}
          {/* <AddNewPages /> */}
          {/* <AppRegister /> */}
          {/* <AppInput /> */}
          {/* <AppProfile /> */}

          {/* <Element /> */}
          {/* <Text /> */}
          {/* <Input /> */}
          {/* <TextArea /> */}

          {/* <ClassElement /> */}
          {/* <ClassText /> */}
          {/* <ClassInput /> */}
          {/* <ClassFontIcon /> */}
        </div>


      </div>


    </div>



  );
}

export default Docs;