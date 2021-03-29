

export function TextArea() {
  return (
    <div className="d-flex fd-col ai-start">
      <h1 className="color-main">TextArea</h1>
      <p>TextArea element represents a multi-line plain-text editing control.</p>

      <div className="d-flex">
        <div className="e3-code">
          <div className="half-width">
            <span className="e3-xml-color">{"<TextArea"}</span>
            <div><span className="tab1 e3-xml-color">text=</span><span className="e3-xml-value-color">"Element 3D"</span></div>
            <div><span className="tab1 e3-xml-color">fontSize=</span><span className="e3-xml-value-color">"20"</span></div>
            <div><span className="tab1 e3-xml-color">textColor=</span><span className="e3-xml-value-color">""></span></div>

            <span className="e3-xml-color">{"</TextArea>"}</span>
          </div>
          <div className="half-width">
          </div>
        </div>
      </div>

      <h2>Properties</h2>
      <div><span className="e3-property-title">text : </span><span className="e3-property-title color-main">std</span><span className="e3-property-title">::string</span></div>
      <p>The text property sets an element's text to be displayed.</p>

      <div><span className="e3-property-title">fontSize : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The fontSize property sets the size of the font. Changing the font size also updates the sizes of the text element if it is not set.</p>

      <div><span className="e3-property-title">fontFamily : </span><span className="e3-property-title color-main">std</span><span className="e3-property-title">::string</span></div>
      <p>The fontFamily property specifies font family name for the text element.</p>

      <div><span className="e3-property-title">fontStyle : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EFontStyle</span></div>
      <p>The fontStyle property sets whether a font should be styled with a normal, italic, or bold face from its font family.</p>

      <div><span className="e3-property-title">textColor : </span><span className="e3-property-title color-main">glm</span><span className="e3-property-title">::vec4</span></div>
      <p>The textColor property sets the foreground color value of Text element's text.</p>

      <div><span className="e3-property-title">textAlignHor : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EAlignment</span></div>
      <p>The textAlignHor property sets the horizontal alignment of a text displayed in Text element if the actual text size is smaller than an element width.</p>

      <div><span className="e3-property-title">textAlignVer : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EAlignment</span></div>
      <p>The textAlignVer property sets the vertical alignment of a text displayed in Text element if the actual text size is smaller than an element height.</p>

      <div><span className="e3-property-title">textOverflow : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::ETextOverflow</span></div>
      <p>The textOverflow property sets how hidden overflow content is signaled to users. It can be visible, clipped or display an ellipsis ('…').</p>


    </div>
  );
}

