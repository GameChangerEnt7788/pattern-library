import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";
import {
  Divider,
  ScorePanel,
  CollapsibleText,
  NavBar,
  TightPanel,
  BottomShadow,
  IconList,
  StarRating,
  SlidePanel,
  StatsTicker,
  RatingsChart,
  Paging,
} from "./elements/elements";
import { Button } from "./forms/Button";
import SlideShow from "./elements/SlideShow";
import { ModalMain } from "./ModalMain";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PatternSlidePanel = (props) => {
  const patternListTable = [
    { param: "fullwidth", type: "Boolean" },
    { param: "data", type: "Object array (see sample fields" },
    { param: "slideshowHeight", type: "Integer (height of images)" },
    { param: "gap", type: "Integer" },
  ];
  const data = [
    {
      image: "images/produc1.jpg",
      title: "Featured product 1",
      description: "As seen The Biggest Fan",
      reviews: 50,
      reviewPercent: 54,
      price: 143.374675,
      sold: 23,
      comments: 36332,
      likes: 72353,
    },
    {
      image: "images/produc2.jpg",
      title: "Featured product 2",
      description: "Biggest fan description",
      reviews: 14,
      reviewPercent: 22,
      price: 1432,
      sold: 263,
      comments: 35,
      likes: 72353,
    },
    {
      image: "images/nfl1.jpg",
      title: "Featured product 3",
      description: "As seen The Biggest Fan",
      reviews: 25,
      reviewPercent: 64,
      price: 23,
      sold: 3635,
      comments: 61,
      likes: 72353,
    },
    {
      image: "images/nfl2.jpg",
      title: "Featured product 4",
      description: "Another fun description",
      reviews: 74,
      reviewPercent: 97,
      price: 19.99,
      sold: 23346,
      comments: 6332,
      likes: 72353,
    },
    {
      image: "images/nfl3.jpg",
      title: "Featured product 5",
      description: "As seen The Biggest Fan",
      reviews: 2353,
      reviewPercent: 14,
      price: 24.53,
      sold: 323,
      comments: 6323,
      likes: 72353,
    },
    {
      image: "images/nfl4.jpg",
      title: "Featured product 6",
      description: "More descriptions",
      reviews: 23633,
      reviewPercent: 36,
      price: 29.99,
      sold: 3453,
      comments: 533,
      likes: 4565,
    },
  ];
  const code = `
  const data = [
    {
      image: "images/produc1.jpg",
      title: "Featured product 1",
      description: "As seen The Biggest Fan",
      reviews: 50,
      reviewPercent: 54,
      price: 143.374675,
      sold: 23,
      comments: 36332,
      likes: 72353,
    },
    {
      image: "images/produc2.jpg",
      title: "Featured product 2",
      description: "Biggest fan description",
      reviews: 14,
      reviewPercent: 22,
      price: 1432,
      sold: 263,
      comments: 35,
      likes: 72353,
    }
  ]

  <SlidePanel
  fullwidth
  data={data}
  gap={30}
  slideshowHeight={300}
  />`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{
          width: "100%",
          height: "auto",

          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <SlidePanel fullwidth data={data} gap={35} slideshowHeight={300} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}SlidePanel{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternSlideshow = (props) => {
  const data = [
    {
      image: "images/produc1.jpg",
    },
    {
      image: "images/produc2.jpg",
    },
    {
      image: "images/nfl1.jpg",
    },
    {
      image: "images/nfl2.jpg",
    },
    {
      image: "images/nfl3.jpg",
    },
    {
      image: "images/nfl4.jpg",
    },
  ];
  const patternListTable = [
    { param: "fullwidth", type: "Boolean" },
    { param: "height", type: "Integer" },
    { param: "data", type: "Object array (see sample)" },
    { param: "getCount", type: "Function (sends image count to parent)" },
  ];

  const code = `
  const data = [
    {
      image: "images/produc1.jpg"
    },
    {
      image: "images/produc2.jpg"
    }
  ]

  <SlideShow
  fullwidth
  height={300}
  data={data}
  getCount={() => console.log("get count")}
/>`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{
          width: "100%",
          height: "auto",

          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <SlideShow
            fullwidth
            height={300}
            gap={30}
            data={data}
            getCount={() => console.log("get count")}
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Slideshow{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternStarRating = (props) => {
  const patternListTable = [
    { param: "size", type: "Integer (height)" },
    { param: "onColor", type: "String (hex code for gold)" },
    { param: "offColor", type: "String (hex code for gray no star" },
    { param: "percent", type: "Integer (percentage rating out of 100)" },
  ];

  const code = `<StarRating
  size={20}
  onColor="#FFBE36"
  offColor="#5B5B5B"
  percent={70}
/>`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{ width: "50%", height: "80px" }}
      >
        <div>
          <StarRating
            size={20}
            onColor="#FFBE36"
            offColor="#5B5B5B"
            percent={70}
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}StarRating{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternDivider = (props) => {
  const patternListTable = [
    { param: "label", type: "String" },
    { param: "width", type: "Integer" },
    { param: "fullwidth", type: "Boolean" },
    { param: "color", type: "String (#hexcode)" },
  ];
  const code = `<Divider
  color="#F8F8FF"
  width={"90%"}
  label="SELECT LANGUAGE"
  />`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{ width: "50%", height: "80px" }}
      >
        <div>
          <Divider color="#F8F8FF" width={"90%"} label="SELECT LANGUAGE" />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Divider{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternScorePanel = (props) => {
  const patternListTable = [{ param: "score", type: "Integer" }];
  const code = `<ScorePanel score={224125} />`;
  return (
    <>
      <div
        className="solidWhitePanel"
        style={{
          width: "50%",
          height: "130px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <ScorePanel score={224125} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}ScorePanel{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternCollapsible = (props) => {
  const patternListTable = [
    { param: "open", type: "Boolean (starting state)" },
    {
      param: "speedInSeconds",
      type: "Integer (longer times for longer content)",
    },
    { param: "label", type: "String" },
    { param: "fullwidth", type: "Boolean" },
    { param: "content", type: "String or JSX" },
  ];
  const code = `<CollapsibleText
  open={false}
  speedInSeconds={0.3}
  label="Sample Collapsible Text"
  fullwidth
  content={
    <div className="raisedCard">
      <div style={{ display: "flex", color: "#241C15" }}>
        <div style={{ padding: "10px" }}>
          <img src="images/soccer_placeholder.jpg" width={120} />
        </div>
        <div style={{ padding: "10px" }}>
          <h4 style={{ margin: "0px" }}>USA Hockey cancels...</h4>
          <div>Jul 10</div>
          <p>
            USA Hockey has called off holding its world junior summer
            showcase, set to be held in Michigan in two weeks. With 44
            players invited, the event was part of USA…
          </p>
        </div>
      </div>
    </div>
  }
/>`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{
          width: "50%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <CollapsibleText
            open={false}
            speedInSeconds={0.3}
            label="Sample Collapsible Text"
            fullwidth
            content={
              <div className="raisedCard">
                <div style={{ display: "flex", color: "#241C15" }}>
                  <div style={{ padding: "10px" }}>
                    <img src="images/soccer_placeholder.jpg" width={120} />
                  </div>
                  <div style={{ padding: "10px" }}>
                    <h4 style={{ margin: "0px" }}>USA Hockey cancels...</h4>
                    <div>Jul 10</div>
                    <p>
                      USA Hockey has called off holding its world junior summer
                      showcase, set to be held in Michigan in two weeks. With 44
                      players invited, the event was part of USA…
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}CollapsibleText{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternNavBar = (props) => {
  const patternListTable = [
    {
      param: "button",
      type:
        "String - (NavButtonHome, NavButtonPlay, NavButtonImmerse, NavButtonNextGen, NavButtonScores, NavButtonRewards or NavButtonHome)",
    },
    {
      param: "on",
      type: "Boolean",
    },
    {
      param: "size",
      type: "Integer",
    },
    { param: "onClick", type: "Function" },
  ];
  const code = ` <NavButton
  button="NavButtonHome"
  on={false}
  onClick={() => console.log("clicked")}
/>`;
  return (
    <>
      <div
        className="raisedCard"
        style={{
          width: "70%",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <NavBar gap={35} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}NavButtons{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};
const iconList = [
  { url: "http://youtube.com", icon: "images/social/yt.svg", height: 35 },
  { url: "http://pinterest.com", icon: "images/social/pin.svg", height: 35 },
  { url: "http://facebook.com", icon: "images/social/fb.svg", height: 35 },
  { url: "http://twitter.com", icon: "images/social/twit.svg", height: 35 },
  { url: "http://instagram.com", icon: "images/social/inst.svg", height: 35 },
  { url: "http://snapchat.com", icon: "images/social/snap.svg", height: 35 },
  { url: "http://tiktok.com", icon: "images/social/tiktok.svg", height: 35 },
];

export const PatternTightPanel = (props) => {
  const patternListTable = [
    { param: "label", type: "String" },
    { param: "width", type: "Integer" },
    { param: "content", type: "JSX" },
    { param: "gap", type: "Integer" },
  ];
  const code = `<TightPanel
  label="Social media profiles"
  width={iconList.length * 45}
  gap={30}
  content={<IconList list={iconList} height={35} fullwidth />}
/>`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{
          width: "50%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <TightPanel
            label="Social media profiles"
            width={iconList.length * 45}
            gap={30}
            content={<IconList list={iconList} height={35} fullwidth />}
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}TightPanel{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternIconList = (props) => {
  const patternListTable = [
    { param: "list", type: "Object Array (see code for structure)" },
  ];
  const code = `const iconList = [
    { url: "http://youtube.com", icon: "images/social/yt.svg", height: 35 },
    { url: "http://pinterest.com", icon: "images/social/pin.svg", height: 35 },
    { url: "http://facebook.com", icon: "images/social/fb.svg", height: 35 },
    { url: "http://twitter.com", icon: "images/social/twit.svg", height: 35 },
    { url: "http://instagram.com", icon: "images/social/inst.svg", height: 35 },
    { url: "http://snapchat.com", icon: "images/social/snap.svg", height: 35 },
    { url: "http://tiktok.com", icon: "images/social/tiktok.svg", height: 35 },
  ];

  <IconList list={iconList} />`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{
          width: "50%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <IconList list={iconList} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}IconList{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternBottomShadow = (props) => {
  const patternListTable = [
    { param: "height", type: "Integer (Typical = 35)" },
    { param: "fullwidth", type: "Boolean" },
    { param: "width", type: "Integer" },
  ];
  const code = `<BottomShadow height={35} fullwidth />`;
  return (
    <>
      <div
        className="raisedCard"
        style={{
          width: "50%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <BottomShadow height={35} fullwidth />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}BottomShadow{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternModalMain = (props) => {
  const patternListTable = [
    { param: "modalIsOpen", type: "Boolean (Start open or closed)" },
    { param: "button", type: "JSX (Launch button - set to false for none)" },
    { param: "content", type: "JSX (whatever goes in the modal)" },
    {
      param: "closeBtn",
      type:
        "JSX (if there is a close button at the bottom also - set to false for none)",
    },
    { param: "width", type: "Integer (or String for percentage e.g. '50%')" },
    { param: "height", type: "Integer (or String for percentage e.g. '50%')" },
    { param: "fullwidth", type: "Boolean" },
  ];
  const code = `
  const content = (
    <div className="center-column">
      <div className="primaryBackground getReady">
        <img src="images/getReady.png" />
      </div>
      <div className="getReady-content">
        <h2>Congrats!</h2>
        <div>You can now watch The Biggest Fan via Youtube Premium.</div>
        <div>
          <img src="images/ytIcon.svg" />
        </div>
      </div>
    </div>
  );
  const launchButton = (
    <Button
      label="Launch modal"
      submitting={false}
      fullwidth={false}
      size={"lg"}
      color="#DDDDDD"
      disabled={false}
      borderRadius={40}
      /*  onClick={submitButton} */
      gradient={["#BE034B", "#000000"]}
      gap={35}
    />
  );
  const closeBtn = (
    <Button
      label="Continue"
      submitting={false}
      fullwidth={false}
      size={"med"}
      color="#DDDDDD"
      disabled={false}
      borderRadius={40}
      /*  onClick={submitButton} */
      gradient={["#BE034B", "#000000"]}
      gap={35}
    />
  );

  <ModalMain
            modalIsOpen={false}
            button={launchButton}
            content={content}
            closeBtn={closeBtn}
            width={"60%"}
            height={"auto"}
          />`;
  const content = (
    <div className="center-column">
      <div className="primaryBackground getReady">
        <img src="images/getReady.png" />
      </div>
      <div className="getReady-content">
        <h2>Congrats!</h2>
        <div>You can now watch The Biggest Fan via Youtube Premium.</div>
        <div>
          <img src="images/ytIcon.svg" />
        </div>
      </div>
    </div>
  );
  const launchButton = (
    <Button
      label="Launch modal"
      submitting={false}
      fullwidth={false}
      size={"lg"}
      color="#DDDDDD"
      disabled={false}
      borderRadius={40}
      /*  onClick={submitButton} */
      gradient={["#BE034B", "#000000"]}
      gap={35}
    />
  );
  const closeBtn = (
    <Button
      label="Continue"
      submitting={false}
      fullwidth={false}
      size={"med"}
      color="#DDDDDD"
      disabled={false}
      borderRadius={40}
      /*  onClick={submitButton} */
      gradient={["#BE034B", "#000000"]}
      gap={35}
    />
  );
  return (
    <>
      <div
        className="raisedCard"
        style={{
          width: "50%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div>
          <ModalMain
            modalIsOpen={false}
            button={launchButton}
            content={<div>{content}</div>}
            closeBtn={<div>{closeBtn}</div>}
            width={"60%"}
            height={"auto"}
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}ModalMain{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternStatsTicker = (props) => {
  const data = [
    {
      date: "MAR 22",
      games: [
        {
          teamA: { name: "Buckaroos", score: 24 },
          teamB: { name: "Snowflakes", score: 13 },
          ppd: false,
        },
        {
          teamA: { name: "Shellfish", score: 5 },
          teamB: { name: "Meerkats", score: 17 },
          ppd: false,
        },
        {
          teamA: { name: "Swashbucklers", score: 2 },
          teamB: { name: "Raging Eagles", score: 1 },
          ppd: false,
        },
        {
          teamA: { name: "Sitting Ducks", score: 7 },
          teamB: { name: "Lame Ducks", score: 22 },
          ppd: false,
        },
      ],
    },
    {
      date: "MAR 23",
      games: [
        {
          teamA: { name: "Meerkats", score: 42 },
          teamB: { name: "Shellfish", score: 2 },
          ppd: false,
        },
        {
          teamA: { name: "Sitting Ducks", score: 2 },
          teamB: { name: "Raging Eagles", score: 41 },
          ppd: false,
        },
        {
          teamA: { name: "Swashbucklers", score: 21 },
          teamB: { name: "Lame ducks", score: 6 },
          ppd: false,
        },
        {
          teamA: { name: "Snowflakes", score: 2 },
          teamB: { name: "Buckaroos", score: 5 },
          ppd: false,
        },
      ],
    },
    {
      date: "MAR 24",
      games: [
        {
          teamA: { name: "Toadstools", score: 14 },
          teamB: { name: "Willows", score: 2 },
          ppd: false,
        },
        {
          teamA: { name: "Pumpkin Heads", score: 21 },
          teamB: { name: "Skirt Lifters", score: 23 },
          ppd: false,
        },
        {
          teamA: { name: "Wig Warmers", score: 3 },
          teamB: { name: "Wet Workers", score: 3 },
          ppd: false,
        },
        {
          teamA: { name: "Tool Boxes", score: 3 },
          teamB: { name: "Duh Masses", score: 6 },
          ppd: false,
        },
      ],
    },
    {
      date: "TODAY",
      games: [
        {
          teamA: { name: "Tadpoles", score: 14 },
          teamB: { name: "Street Fighters", score: 2 },
          ppd: false,
        },
        {
          teamA: { name: "Lump Heads", score: 21 },
          teamB: { name: "Trash Eaters", score: 23 },
          ppd: true,
        },
        {
          teamA: { name: "Road Killers", score: 3 },
          teamB: { name: "Pot Luckers", score: 3 },
          ppd: true,
        },
        {
          teamA: { name: "Phat Joes", score: 3 },
          teamB: { name: "Bee Gasses", score: 6 },
          ppd: true,
        },
      ],
    },
  ];
  const listOptions = [
    { item: "Basketball" },
    { item: "Football" },
    { item: "Hockey" },
    { item: "Baseball" },
    { item: "Soccer" },
  ];
  const patternListTable = [
    { param: "data", type: "Object Array (see sample)" },
    { param: "listOptions", type: "Object Array (see sample)" },
    { param: "width", type: "Integer" },
    { param: "fullwidth", type: "Boolean" },
  ];

  const code = `
  // Icons for sports must be saved in images/ folder in the following format:

  sportsIcon_[/*list item*/].png
  e.g  "images/sportsIcon_Basketball.png"

  const listOptions = [
    { item: "Basketball" },
    { item: "Football" },
    { item: "Hockey" },
    { item: "Baseball" },
    { item: "Soccer" },
  ];

  /* Each item has today's date formatted as "MMM DD",
  and all games and scores in a Games Object Array */

  const data = [
    {
      date: "MAR 22",
      games: [
        {
          teamA: { name: "Buckaroos", score: 24 },
          teamB: { name: "Snowflakes", score: 13 },
          ppd: false,
        },
        {
          teamA: { name: "Shellfish", score: 5 },
          teamB: { name: "Meerkats", score: 17 },
          ppd: false,
        },
        {
          teamA: { name: "Swashbucklers", score: 2 },
          teamB: { name: "Raging Eagles", score: 1 },
          ppd: false,
        },
        {
          teamA: { name: "Sitting Ducks", score: 7 },
          teamB: { name: "Lame Ducks", score: 22 },
          ppd: false,
        },
      ],
    }
  ];



  <StatsTicker
  data={data}
  listOptions={listOptions}
  fullwidth
  />`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{
          width: "80%",
          height: "auto",
          padding: "80px",
          position: "relative",
        }}
      >
        <div>
          <StatsTicker data={data} listOptions={listOptions} fullwidth />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}StatsTicker{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternRatingsChart = (props) => {
  const data = [68, 12, 10, 6, 4];

  const patternListTable = [
    {
      param: "data",
      type: "Array (5 aggregate percentages for each star rating)",
    },
    { param: "width", type: "Integer" },
    { param: "fullwidth", type: "Boolean" },
  ];

  const code = `
  const data = [68, 12, 10, 6, 4];

  <RatingsChart
  data={data}
  fullwidth
  />`;
  return (
    <>
      <div
        className="solidWhitePanel"
        style={{
          width: "70%",
          height: "auto",
          padding: "30px",
          position: "relative",
        }}
      >
        <div>
          <RatingsChart data={data} fullwidth />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}RatingsChart{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternPaging = (props) => {
  const returnPage = (page) => {
    console.log(page);
  };

  const patternListTable = [
    {
      param: "records",
      type: "Integer (total records)",
    },
    { param: "perPage", type: "Integer (records per page)" },
    {
      param: "returnPage",
      type: "Function (returns page number for retrieving page content)",
    },
  ];

  const code = `<Paging
  records={167}
  perPage={10}
  returnPage={returnPage}
  />`;
  return (
    <>
      <div
        className="raisedCard"
        style={{
          width: "auto",
          height: "auto",
          padding: "30px",
          position: "relative",
        }}
      >
        <div>
          <Paging records={167} perPage={10} returnPage={returnPage} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Paging{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          {patternListTable.map((val, i) => {
            return (
              <>
                <div className="patternListStyle">
                  <span id="pattern-name">{val.param}</span>
                  <span id="pattern-parameter">{val.type}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};
