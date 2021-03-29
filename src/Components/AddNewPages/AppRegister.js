import './AddNewPages.css';

export function AppRegister() {
  return (
    <div className="d-flex fd-col ai-start">
      <h1 className="color-main">Add new pages</h1>
      <h2 className="mt-30">Register</h2>
      <p>Before starting the development make sure the Element 3D xml compiler is running. Now lets create a Register element for our first project. Create a new Register.xml file inside the App directory of MyProject application and add the following content.</p>

      <div className="e3-code">
        <div className="full-width">
          <span className="e3-xml-color">{"<Element"}</span>
          <div><span className="tab1 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">"r: 255, g: 255, b: 255"</span></div>
          <div><span className="tab1 e3-xml-color">orientation=</span><span className="e3-xml-value-color">"Vertical"</span><span className="e3-xml-color">{">"}</span></div>

          <div><span className="tab1 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab2 e3-xml-color">orientation=</span><span className="e3-xml-value-color">"Vertical"</span></div>
          <div><span className="tab2 e3-xml-color">width=</span><span className="e3-xml-value-color">"300"</span><span className="e3-xml-color">{">"}</span></div>

          <div><span className="tab2 e3-xml-color">{"<Text"}</span></div>
          <div><span className="tab3 e3-xml-color">text=</span><span className="e3-xml-value-color">"Register"</span></div>
          <div><span className="tab3 e3-xml-color">fontSize=</span><span className="e3-xml-value-color">"30"</span></div>
          <div><span className="tab3 e3-xml-color">textColor=</span><span className="e3-xml-value-color">"#0aaff1"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab2 e3-xml-color">{"</Text>"}</span></div>

          <div><span className="tab2 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab3 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab3 e3-xml-color">alignItemsHor=</span><span className="e3-xml-value-color">"SpaceBetween"</span><span className="e3-xml-color">{">"}</span></div>

          <div><span className="tab3 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab4 e3-xml-color">width=</span><span className="e3-xml-value-color">"48%"</span></div>
          <div><span className="tab4 e3-xml-color">orientation=</span><span className="e3-xml-value-color">"Vertical"</span><span className="e3-xml-color">{">"}</span></div>

          <div><span className="tab4 e3-comment-color">{"<!-- Username -->"}</span></div>
          <div><span className="tab4 e3-xml-color">{"<Input"}</span></div>
          <div><span className="tab5 e3-xml-color">hint=</span><span className="e3-xml-value-color">"Username"</span></div>
          <div><span className="tab5 e3-xml-color">hintColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab5 e3-xml-color">textColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab5 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab5 e3-xml-color">height=</span><span className="e3-xml-value-color">"50"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab4 e3-xml-color">{"</Input>"}</span></div>
          <div><span className="tab4 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab5 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab5 e3-xml-color">height=</span><span className="e3-xml-value-color">"1"</span></div>
          <div><span className="tab5 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">"#0aaff1"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab4 e3-xml-color">{"</Element>"}</span></div>
          <div><span className="tab3 e3-xml-color">{"</Element>"}</span></div>


          <div><span className="tab3 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab4 e3-xml-color">width=</span><span className="e3-xml-value-color">"48%"</span></div>
          <div><span className="tab4 e3-xml-color">orientation=</span><span className="e3-xml-value-color">"Vertical"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab4 e3-comment-color">{"<!-- Password -->"}</span></div>
          <div><span className="tab4 e3-xml-color">{"<Input"}</span></div>
          <div><span className="tab5 e3-xml-color">hint=</span><span className="e3-xml-value-color">"Password"</span></div>
          <div><span className="tab5 e3-xml-color">hintColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab5 e3-xml-color">textColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab5 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab5 e3-xml-color">height=</span><span className="e3-xml-value-color">"50"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab4 e3-xml-color">{"</Input>"}</span></div>
          <div><span className="tab4 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab5 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab5 e3-xml-color">height=</span><span className="e3-xml-value-color">"1"</span></div>
          <div><span className="tab5 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">"#0aaff1"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab4 e3-xml-color">{"</Element>"}</span></div>
          <div><span className="tab3 e3-xml-color">{"</Element>"}</span></div>

          <div><span className="tab2 e3-xml-color">{"</Element>"}</span></div>

          <div><span className="tab2 e3-comment-color">{"<!-- Username -->"}</span></div>
          <div><span className="tab2 e3-xml-color">{"<Input"}</span></div>
          <div><span className="tab3 e3-xml-color">hint=</span><span className="e3-xml-value-color">"Username"</span></div>
          <div><span className="tab3 e3-xml-color">hintColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab3 e3-xml-color">textColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab3 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab3 e3-xml-color">height=</span><span className="e3-xml-value-color">"50"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab2 e3-xml-color">{"</Input>"}</span></div>
          <div><span className="tab2 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab3 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab3 e3-xml-color">height=</span><span className="e3-xml-value-color">"1"</span></div>
          <div><span className="tab3 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">"#0aaff1"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab2 e3-xml-color">{"</Element>"}</span></div>

          <div><span className="tab2 e3-comment-color">{"<!-- Password -->"}</span></div>
          <div><span className="tab2 e3-xml-color">{"<Input"}</span></div>
          <div><span className="tab3 e3-xml-color">hint=</span><span className="e3-xml-value-color">"Password"</span></div>
          <div><span className="tab3 e3-xml-color">hintColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab3 e3-xml-color">textColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab3 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab3 e3-xml-color">height=</span><span className="e3-xml-value-color">"50"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab2 e3-xml-color">{"</Input>"}</span></div>
          <div><span className="tab2 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab3 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab3 e3-xml-color">height=</span><span className="e3-xml-value-color">"1"</span></div>
          <div><span className="tab3 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">"#0aaff1"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab2 e3-xml-color">{"</Element>"}</span></div>

          <div><span className="tab2 e3-comment-color">{"<!-- Register button -->"}</span></div>
          <div><span className="tab2 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab3 e3-xml-color">marginTop=</span><span className="e3-xml-value-color">"20"</span></div>
          <div><span className="tab3 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab3 e3-xml-color">height=</span><span className="e3-xml-value-color">"50"</span></div>
          <div><span className="tab3 e3-xml-color">borderRadius=</span><span className="e3-xml-value-color">"glm::vec4(10, 10, 10, 10)"</span></div>
          <div><span className="tab3 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">"#0aaff1"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab3 e3-xml-color">{"<Text"}</span></div>
          <div><span className="tab4 e3-xml-color">text=</span><span className="e3-xml-value-color">"Register"</span></div>
          <div><span className="tab4 e3-xml-color">textColor=</span><span className="e3-xml-value-color">"all: 255"</span></div>
          <div><span className="tab4 e3-xml-color">fontSize=</span><span className="e3-xml-value-color">"20"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab3 e3-xml-color">{"</Text>"}</span></div>
          <div><span className="tab2 e3-xml-color">{"</Element>"}</span></div>
          <div><span className="tab1 e3-xml-color">{"</Element>"}</span></div>
          <span className="e3-xml-color">{"</Element>"}</span>
        </div>
      </div>

      <p>The new element also will be automatically compiled by Element 3D compiler and added to the project via cmake file.</p>
      <p>To make our first navigation lets go to the Login.cpp file and add an OnClickCallback to the login element(button). The application context istance is available inside of any class derived from Element class so we can push our new Register element to the application element stack. After reabuilding and rerunning the project we can see the result on our device.</p>

      <div className="e3-code">
        <div className="full-width">
          <div><span className="e3-c-prep-color">#include</span><span className="e3-c-file-color"> "Login.h"</span></div>
          <div><span className="e3-c-prep-color">#include</span><span className="e3-c-file-color"> "Register.h"</span></div>
          <div><span className="e3-c-prep-color">#include</span><span className="e3-c-file-color"> {"<e3/Context.h>"}</span></div>
          <br />
          <div><span className="e3-c-class-color">Login</span>::Login()</div>
          <div className="tab1">: <span className="e3-c-class-color">LoginBase</span>()</div>
          <div>{"{"}</div>
          <div className="tab1">mLoginButton->SetOnClickCallback([<span className="e3-c-type-color">this</span>](e3::<span className="e3-c-class-color">MouseEvent</span>* <span className="e3-c-prep-color">pEvent</span>) {"{"}</div>
          <div className="tab2">GetContext()->PushElement(<span className="e3-c-type-color">new </span><span className="e3-c-class-color">Register</span>());</div>
          <div className="tab1">{"});"}</div>
          <div>{"}"}</div>

        </div>
      </div >

      <h3 className="mt-30">More of introduction</h3>
      <h3 className="mt-30">More Elements</h3>
      <h4 className="mt-30">AppButton</h4>
      <p>As we can see out mLoginButton and mRegisterButton are pretty the same elements. So lets create a reusable button element which will be used in both pages.</p>
      <p>The concept is the same as we did for Login and Register elements. Create a new xml file named AppButton and just copy and paste the our buttons code which will look like the following.</p>
      <div className="e3-code">
        <div className="full-width">
          <div><span className="e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab1 e3-xml-color">marginTop=</span><span className="e3-xml-value-color">"20"</span></div>
          <div><span className="tab1 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab1 e3-xml-color">height=</span><span className="e3-xml-value-color">"50"</span></div>
          <div><span className="tab1 e3-xml-color">borderRadius=</span><span className="e3-xml-value-color">"glm::vec4(10, 10, 10, 10)"</span></div>
          <div><span className="tab1 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">"#0aaff1"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab1 e3-xml-color">{"<Text"}</span></div>
          <div><span className="tab2 e3-xml-color">element=</span><span className="e3-xml-value-color">"mTitle"</span></div>
          <div><span className="tab2 e3-xml-color">textColor=</span><span className="e3-xml-value-color">"all: 255"</span></div>
          <div><span className="tab2 e3-xml-color">fontSize=</span><span className="e3-xml-value-color">"20"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab1 e3-xml-color">{"</Text>"}</span></div>
          <div><span className="e3-xml-color">{"</Element>"}</span></div>
        </div>
      </div>
      <p>Now we have a new xml selector called AppButton and all we need is just replace the old button code with a new {"<AppButton>"} selector.</p>

      <p>In Element 3D the xml attributes are just setters of element so to dynamically set the buttons title lets create a new setter for it. Replace the AppButton.cpp code with the following.</p>
      <div className="e3-code">
        <div className="full-width">
          <div><span className="e3-c-prep-color">#include</span><span className="e3-c-file-color"> "AppButton.h"</span></div>
          <br />
          <div><span className="e3-c-class-color">AppButton</span>::AppButton()</div>
          <div className="tab1">: <span className="e3-c-class-color">AppButtonBase</span>()</div>
          <div>{"{"}</div>

          <div>{"}"}</div>
          <br />
          <div><span className="e3-c-type-color">void </span><span className="e3-c-class-color">AppButton</span>::SetTitle(<span className="e3-c-type-color">const </span>std::<span className="e3-c-class-color">string</span>& <span className="e3-c-prep-color">title</span>)</div>
          <div>{"{"}</div>
          <div className="tab1">mTitle->SetText(<span className="e3-c-prep-color">title</span>);</div>
          <div>{"}"}</div>

        </div>
      </div >

      <p>As any c++ class method the SetTitle function should have a declaration in AppButton.h header file. Now we can easily set the title of our button specific for each page.</p>
      <p>Note: The default text setter will not work in case of additional attributes so the title of our button can be set via str::string class.</p>
      <div className="e3-code">
        <div className="full-width">
          ...
          <div><span className="e3-xml-color">{"<AppButton"}</span></div>
          <div><span className="tab1 e3-xml-color">title=</span><span className="e3-xml-value-color">'std::string("Login")'</span></div>
          <div><span className="e3-xml-color">{"</AppButton>"}</span></div>
          ...
        </div>
      </div>

      <h3 className="mt-30">More animations</h3>



    </div>
  );
}

