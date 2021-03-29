import './AddNewPages.css';

export function AppInput() {
  return (
    <div className="d-flex fd-col ai-start">
      <h1 className="color-main">Add new pages</h1>
      <h2 className="mt-30">AppInput</h2>
      <p>We already learned how to create a simple reusable button, lets create an element for our input fields. The AppInput xml file should have the following content.</p>

      <div className="e3-code">
        <div className="full-width">
          <div><span className="e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab1 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab1 e3-xml-color">orientation=</span><span className="e3-xml-value-color">"Vertical"</span></div>
          <div><span className="tab1 e3-xml-color">{"<Input"}</span></div>
          <div><span className="tab2 e3-xml-color">element=</span><span className="e3-xml-value-color">"mInput"</span></div>
          <div><span className="tab2 e3-xml-color">hintColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab2 e3-xml-color">textColor=</span><span className="e3-xml-value-color">"#0aaff1"</span></div>
          <div><span className="tab2 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab2 e3-xml-color">height=</span><span className="e3-xml-value-color">"50"</span>{">"}</div>
          <div><span className="tab1 e3-xml-color">{"</Input>"}</span></div>
          <div><span className="tab1 e3-xml-color">{"<Element"}</span></div>
          <div><span className="tab2 e3-xml-color">width=</span><span className="e3-xml-value-color">"100%"</span></div>
          <div><span className="tab2 e3-xml-color">height=</span><span className="e3-xml-value-color">"1"</span></div>
          <div><span className="tab2 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">"#0aaff1"</span><span className="e3-xml-color">{">"}</span></div>
          <div><span className="tab1 e3-xml-color">{"</Element>"}</span></div>
          <div><span className="e3-xml-color">{"</Element>"}</span></div>
        </div>
      </div>
      <p>Our AppInput element is ready to be used in Login and Register pages, but there is one more thing remaining. The hint attribute will not work for AppInput element because it was inherited from Element class. So lets create it similar to the text attribute for AppButton. All we need is just add a public method SetHint to AppInput class in AppInput.h and AppInput.cpp files.</p>

      <div className="e3-code">
        <div className="full-width">
          <div><span className="e3-c-prep-color">#include</span><span className="e3-c-file-color"> "AppInput.h"</span></div>
          <br />
          <div><span className="e3-c-class-color">AppInput</span>::AppInput()</div>
          <div className="tab1">: <span className="e3-c-class-color">AppInputBase</span>()</div>
          <div>{"{"}</div>

          <div>{"}"}</div>
          <br />
          <div><span className="e3-c-type-color">void </span><span className="e3-c-class-color">AppInput</span>::SetHint(<span className="e3-c-type-color">const </span>std::<span className="e3-c-class-color">string</span>& <span className="e3-c-prep-color">hint</span>)</div>
          <div>{"{"}</div>
          <div className="tab1">mInput->SetHint(<span className="e3-c-prep-color">hint</span>);</div>
          <div>{"}"}</div>

        </div>
      </div >
    </div>
  );
}

