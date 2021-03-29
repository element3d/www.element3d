import './AddNewPages.css';



import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function AddNewPages() {

  return (

    <div className="d-flex fd-col ai-start">
      <h1 className="color-main">Add new pages</h1>
      <h2 className="mt-30">Login</h2>
      <p>Before starting the development make sure the Element 3D xml compiler is running. To run the compiler open the command prompt(terminal), navigate to project directory and run the following command.</p>
      <div className="e3-terminal">
        <div><span className="color-main"> > </span> <span> e3 start </span></div>
      </div>
      <p>Now lets create a new element which sould became a login page for our first project. Create a new Login.xml file inside the App directory of MyProject application and add the following content.</p>

      <SyntaxHighlighter language="xml" style={vs2015}>
        {`<Element
    backgroundColor="r: 255, g: 255, b: 255"
    orientation="Vertical">
    <Element
        orientation="Vertical"
        width="300">
        <Text
            text="Login"
            fontSize="30"
            textColor="#0aaff1">
        </Text>
        <!-- Username -->
        <Input
          hint="Username"
          hintColor="#0aaff1"
          textColor="#0aaff1"
          width="100%"
          height="50">
        </Input>
        <Element
          width="100%"
          height="1"
          backgroundColor="#0aaff1">
        </Element>
        <!-- Password -->
        <Input
          hint="Password"
          hintColor="#0aaff1"
          textColor="#0aaff1"
          width="100%"
          height="50">
        </Input>
        <Element
          width="100%"
          height="1"
          backgroundColor="#0aaff1">
        </Element>
        <!-- Login button -->
        <Element
          marginTop="Password"
          width="100%"
          height="50"
          borderRadius="glm::vec4(10, 10, 10, 10)"
          backgroundColor="#0aaff1">
        </Element>
        <Text
          text="Login"
          textColor="#0aaff1"
          fontSize="20">
        </Text>
    </Element>
</Element>`}
      </SyntaxHighlighter>

      <p>The running Element 3D compiler will automatically detect the newly created element and will compile it to a native c++ code each time the file will be modified and saved. The compiler will generate a header and a source file according to xml file content and will save it to "private" directory of App direcoty. This will be done for any xml element and all the generated c++ files will be included in the project via cmake file.</p>
      <p>To make the newly created login page a started page, just open the Application.cpp file of the App directory and push Login element enstead of the default MyProject. Do not forget to include the gnenerated Login.h header file. The content of the Application.cpp should became the following.</p>

      <SyntaxHighlighter language="csharp" style={vs2015}>
        {`#include "Application.h"
#include "Login.h"

Application::Application(e3::EE3OS os, e3::EE3Platform platform, float width, float height)
  : ApplicationBase(os, platform, width, height)
{
    PushElement(new Login());
}

void Application::Resize(float width, float height)
{
} `}
      </SyntaxHighlighter>

      {/* <div className="e3-code">
        <div className="full-width">
          <div><span className="e3-c-prep-color">#include</span><span className="e3-c-file-color"> "Application.h"</span></div>
          <div><span className="e3-c-prep-color">#include</span><span className="e3-c-file-color"> "Login.h"</span></div>
          <br />
          <div><span className="e3-c-class-color">Application</span>::Application(e3::<span className="e3-c-class-color">EE3OS </span><span className="e3-c-prep-color">os</span>, e3::<span className="e3-c-class-color">EE3Platform </span><span className="e3-c-prep-color">platform</span>, <span className="e3-c-type-color">float </span><span className="e3-c-prep-color">width</span>, <span className="e3-c-type-color">float </span><span className="e3-c-prep-color">height</span>)</div>
          <div className="tab1">: <span className="e3-c-class-color">ApplicationBase</span>(<span className="e3-c-prep-color">os</span>, <span className="e3-c-prep-color">platform</span>, <span className="e3-c-prep-color">width</span>, <span className="e3-c-prep-color">height</span>)</div>
          <div>{"{"}</div>
          <div className="tab1">PushElement(<span className="e3-c-type-color">new </span><span className="e3-c-class-color">Login</span>());</div>
          <div>{"}"}</div>
          <br />
          <div><span className="e3-c-type-color">void </span><span className="e3-c-class-color">Application</span>::Resize(<span className="e3-c-type-color">float </span><span className="e3-c-prep-color">width</span>, <span className="e3-c-type-color">float </span><span className="e3-c-prep-color">height</span>)</div>
          <div>{"{"}</div>
          <div>{"}"}</div>
        </div>
      </div > */}


      <p>Unfortulately the Element 3D does not have any "Hot reload" functionality, so after each change You should recompile and rerun the project. After recompiling the project the login page will be displayed into your devices screen.</p>
      <div className="e3-devices-container">
        <div className="e3-desktop-device">
          <div className="e3-desktop-display">
            <div className="e3-desktop-app-display">
              <div className="e3-app-login-page">
                <div className="color-main">Login</div>
                <div>
                  <input className="e3-app-input" type="text" placeholder="Username" />
                </div>
                <div>
                  <input className="e3-app-input" type="password" placeholder="Password" />
                </div>
                <div className="e3-app-button">Login</div>
              </div>
            </div>
          </div>
          <div className="e3-desktop-under">
          </div>
        </div>

        <div className="e3-desktop-device">
          <div className="e3-android-display">
            <div className="e3-android-app-display">
              <div className="e3-app-login-page">
                <div className="color-main">Login</div>
                <div>
                  <input className="e3-app-input" type="text" placeholder="Username" />
                </div>
                <div>
                  <input className="e3-app-input" type="password" placeholder="Password" />
                </div>
                <div className="e3-app-button">Login</div>
                <div>Do not have and account?</div>
              </div>
            </div>
            <div className="e3-android-button">

            </div>
          </div>
        </div>
      </div>

    </div >
  );
}

