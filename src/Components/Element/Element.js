
import './Element.css'

export function Element() {
  return (
    <div className="d-flex fd-col ai-start">
      <h1 className="color-main">Element</h1>
      <p>In Element 3D every UI element is an Element. Element respresents a shape which can hold any style including sizing, coloring, alignment and background images. Element also can be a container for other Elements. Here is a simple example of how to create styled and nested elements via xml and c++ api's.</p>

      <div className="d-flex">
        <div className="e3-code">
          <div className="half-width">
            <span className="e3-xml-color">{"<Element"}</span>
            <div><span className="tab1 e3-xml-color">width=</span><span className="e3-xml-value-color">"300"</span></div>
            <div><span className="tab1 e3-xml-color">height=</span><span className="e3-xml-value-color">"500"</span></div>
            <div><span className="tab1 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">""></span></div>

            <div><span className="tab1 e3-xml-color">{"<Element"}</span></div>
            <div><span className="tab2 e3-xml-color">width=</span><span className="e3-xml-value-color">"300"</span></div>
            <div><span className="tab2 e3-xml-color">height=</span><span className="e3-xml-value-color">"500"</span></div>
            <div><span className="tab2 e3-xml-color">backgroundColor=</span><span className="e3-xml-value-color">""></span></div>

            <span className="e3-xml-color">{"</Element>"}</span>
          </div>
          <div className="half-width">
          </div>
        </div>

        <div className="element1">
          <div className="element2"></div>
          <div className="element3"></div>
        </div>
      </div>

      <h2>Properties</h2>
      <div><span className="e3-property-title">width : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The width property sets an element's width in pixels or percent. By default, it sets the width of content.</p>

      <div><span className="e3-property-title">height : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The height property specifies the height of an element. By default, the property defines the height of the content area.</p>

      <div><span className="e3-property-title">minWidth : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The minWidth property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for minWidth.</p>

      <div><span className="e3-property-title">maxWidth : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The maxWidth property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by maxWidth.</p>

      <div><span className="e3-property-title">minHeight : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The minHeight property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for minHeight.</p>

      <div><span className="e3-property-title">maxHeight : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The maxHeight property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for maxHeight.</p>

      <div><span className="e3-property-title">aspectRatio : </span><span className="e3-property-title color-main">float</span></div>
      <p>The aspectRatio property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.</p>

      <div><span className="e3-property-title">padding : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The padding property sets the padding area on all four sides of an element at once.</p>

      <div><span className="e3-property-title">paddingLeft : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The paddingLeft property sets the width of the padding area to the left of an element.</p>

      <div><span className="e3-property-title">paddingRight : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The paddingRight property sets the width of the padding area on the right of an element.</p>

      <div><span className="e3-property-title">paddingTop : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The paddingTop property sets the height of the padding area on the top of an element.</p>

      <div><span className="e3-property-title">paddingBottom : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The paddingBottom property sets the height of the padding area on the bottom of an element.</p>

      <div><span className="e3-property-title">margin : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The margin property sets the margin area on all four sides of an element. It is a shorthand for marginTop, marginRight, margiBottom, and marginLeft.</p>

      <div><span className="e3-property-title">marginLeft : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The marginLeft property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.</p>

      <div><span className="e3-property-title">marginRight : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The marginRight property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.</p>

      <div><span className="e3-property-title">marginTop : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The marginTop property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.</p>

      <div><span className="e3-property-title">marginBottom : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The marginBottom property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.</p>

      <div><span className="e3-property-title">orientation : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EOrientation</span></div>
      <p>The orientation property sets how items are placed in the container defining the main axis.</p>

      <div><span className="e3-property-title">alignItemsHor : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EAlignment</span></div>
      <p>The alignItemsHor property sets the alignment of items on the horizontal axis.</p>

      <div><span className="e3-property-title">alignItemsVer : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EAlignment</span></div>
      <p>The alignItemsVer property sets the alignment of items on the vertical axis.</p>

      <div><span className="e3-property-title">positionType : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EPositionType</span></div>
      <p>The positionType property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.</p>

      <div><span className="e3-property-title">left : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The left property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.</p>

      <div><span className="e3-property-title">right : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The right property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.</p>

      <div><span className="e3-property-title">top : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The top property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.</p>

      <div><span className="e3-property-title">bottom : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The bottom property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.</p>

      <div><span className="e3-property-title">borderSize : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The borderSize property sets the width of an element's border.</p>

      <div><span className="e3-property-title">borderRadius : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::Dim</span></div>
      <p>The borderRadius property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.</p>

      <div><span className="e3-property-title">borderColor : </span><span className="e3-property-title color-main">glm</span><span className="e3-property-title">::vec4</span></div>
      <p>The borderColor CSS property sets the color of an element's border.</p>

      <div><span className="e3-property-title">shapeType : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EShapeType</span></div>
      <p>The shapeType property sets the shape of an element.</p>

      <div><span className="e3-property-title">backgroundColor : </span><span className="e3-property-title color-main">glm</span><span className="e3-property-title">::vec4</span></div>
      <p>The backgroundColor property sets the background color of an element.</p>

      <div><span className="e3-property-title">backgroundSize : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EBackgroundSize</span></div>
      <p>The backgroundSize property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.</p>

      <div><span className="e3-property-title">backgroundPosition : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EBackgroundPosition</span></div>
      <p>The backgroundPosition property sets the initial position for background image.</p>

      <div><span className="e3-property-title">opcaity : </span><span className="e3-property-title color-main">float</span></div>
      <p>The opacity property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.</p>

      <div><span className="e3-property-title">visibility : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EVisibility</span></div>
      <p>The visibility property shows or hides an element with or without changing the layout of a document.</p>

      <div><span className="e3-property-title">wrap : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EWrap</span></div>
      <p>The wrap property sets whether items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.</p>

      <div><span className="e3-property-title">scaling : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EScaling</span></div>
      <p>The scaling property sets whether items grows or shrinks.</p>

      <div><span className="e3-property-title">overflow : </span><span className="e3-property-title color-main">e3</span><span className="e3-property-title">::EOverflow</span></div>
      <p>The overflow property sets the desired behavior for an element's overflow, when an element's content is too big to fit in its block formatting context in both directions.</p>


    </div>
  );
}

