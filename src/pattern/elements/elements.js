import React, { useState, useEffect } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stars } from "../svgIcons.js";
import { nFormatter } from "../../methods/tools";
import {
  NavButton,
  TextButton,
  CommentButton,
  ShareButton,
  HeartButton,
} from "../forms/Button";
import { Select } from "../forms/Fields";
import SlideShow from "./SlideShow";
import gsap from "gsap";
export const Divider = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="dividerGrid"
        style={{ width: props.fullwidth ? "100%" : props.width }}
      >
        <div>
          <hr
            style={{
              border: `.1px solid ${props.color}`,
              borderTop: "0px",
              opacity: "0.4",
            }}
          />
        </div>
        <div style={{ color: props.color }}>{props.label}</div>
        <div>
          <hr
            style={{
              border: `.1px solid ${props.color}`,
              borderTop: "0px",
              opacity: "0.4",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const SlidePanel = (props) => {
  const [count, setCount] = useState(0);

  const flipSlide = (val) => {
    setCount(val);

    gsap.fromTo(
      ".slideshow-content-container",
      {
        duration: 0.6,
        css: { opacity: 0 },
        delay: 0,
        ease: "power1.in",
      },
      {
        css: { opacity: 1 },
        delay: 0,
        ease: "power1.in",
      }
    );
  };
  const { data, gap } = props;
  return (
    <>
      <SlideShow
        fullwidth
        height={props.slideshowHeight}
        gap={30}
        data={data}
        getCount={flipSlide}
      />
      <div
        id="textBox"
        className="solidWhitePanel"
        style={{
          height: "auto",

          overflowY: "hidden",
          display: "block",
          padding: "12px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "3px",
            width: "100%",
          }}
        >
          <div className="slideshow-content-container">
            <div>
              <h4 style={{ marginBottom: "5px" }}>{data[count].title}</h4>
              <div className="slideshow-body" style={{ fontStyle: "italic" }}>
                {data[count].description}
              </div>
              <div className="slidePanelPrice">
                $
                {parseFloat(
                  Number(data[count].price).toFixed(2)
                ).toLocaleString()}
              </div>
              <div style={{ fontSize: "13px" }}>
                {nFormatter(data[count].sold)} sold
              </div>
              <div className="post-controls">
                <div>
                  <CommentButton
                    onClick={() => console.log("clicked")}
                    size={17}
                    commentCount={data[count].comments}
                    color="#797979"
                    textColor="#808080"
                  />
                </div>
                <div>
                  <HeartButton
                    onClick={() => console.log("clicked")}
                    on={false}
                    size={17}
                    color="#797979"
                    textColor="#808080"
                    likeCount={data[count].likes}
                  />
                </div>
                <div>
                  <ShareButton
                    onClick={() => console.log("clicked")}
                    size={17}
                    color="#797979"
                    textColor="#808080"
                  />
                  <div></div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <div>
                <TextButton
                  label="Go to page"
                  icon={
                    <FontAwesomeIcon
                      size="lg"
                      color="#241C15"
                      icon={faChevronRight}
                    />
                  }
                  gap={35}
                />
              </div>
              <div style={{ textAlign: "right", fontSize: "12px" }}>
                <div>{nFormatter(data[count].reviews)} reviews</div>
                <StarRating
                  size={15}
                  onColor="#FFBE36"
                  offColor="#D8D8D8"
                  percent={data[count].reviewPercent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomShadow fullwidth height={gap} />
    </>
  );
};

export const StarRating = (props) => {
  const [open, setOpen] = useState(props.open);
  const [disabled, buttonDisable] = useState(false);

  const numString = props.score ? props.score.toLocaleString() : "000";
  const numArray = numString.split("");

  const disableButton = () => {
    buttonDisable(false);
  };

  return (
    <div style={{}}>
      <div className="starRatingContainer">
        <Stars
          size={props.size}
          onColor={props.onColor}
          offColor={props.offColor}
          percent={props.percent}
        />
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const ScorePanel = (props) => {
  const [open, setOpen] = useState(props.open);
  const [disabled, buttonDisable] = useState(false);

  const numString = props.score ? props.score.toLocaleString() : "000";
  const numArray = numString.split("");

  const disableButton = () => {
    buttonDisable(false);
  };

  return (
    <div style={{}}>
      <div className="scorePanelContainer">
        <div className="scorePanel">
          <div className="scoreHolder">
            {numArray.map((val, i) => {
              return (
                <>
                  <span style={{ margin: "5px" }}>
                    <img src={`/images/score/${val}.svg`} />
                  </span>
                </>
              );
            })}
          </div>
          <img src="/images/score/panel.svg" />
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const CollapsibleText = (props) => {
  const [open, setOpen] = useState(props.open);
  const [disabled, buttonDisable] = useState(false);
  /*   TweenLite.to(document.getElementById("textBox"), 0.5, {
    scaleY: 0,
    ease: Power4.easeOut,
  });
 */

  const disableButton = () => {
    buttonDisable(false);
  };

  const onSubmit = () => {
    console.log(open);
    buttonDisable(true);

    setOpen(!open);

    gsap.fromTo(
      document.getElementById("textBox"),

      {
        duration: props.speedInSeconds,
        css: { height: open ? "auto" : 0 },
        delay: 0,
        // ease: Power4.easeOut,
      },
      {
        css: { height: open ? 0 : "auto" },
        delay: 0,
        onComplete: disableButton,
        // ease: Power4.easeOut,
      }
    );

    gsap.to(document.getElementById("chevron"), {
      duration: props.speedInSeconds,
      rotation: open ? 0 : -180,
      transformOrigin: "center 55%",
      delay: 0,
      //ease: Power4.easeOut,
    });
  };

  return (
    <div style={{}}>
      <div
        className="collapsibleHeader"
        style={{
          marginBottom: "0px",
          padding: "10px",

          display: "flex",
          width: props.fullwidth ? "100%" : props.width,

          justifyContent: "space-between",
          alignItems: "center",
        }}
        disabled={disabled}
        onClick={() => onSubmit()}
      >
        {props.label}
        <div
          id="chevron"
          style={{
            marginRight: "10px",
            transform: props.open && `rotate(-180deg)`,
            transformOrigin: "center 55%",
          }}
        >
          <img src="images/chevronUp.svg" style={{ width: "20px" }} />
        </div>
      </div>

      <div
        id="textBox"
        style={{
          height: props.open ? "auto" : 0,
          overflowY: "hidden",
          display: "block",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "3px",
          }}
        >
          {props.content}
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const NavBar = (props) => {
  const [open, setOpen] = useState(props.open);

  const disableButton = () => {
    //buttonDisable(false);
  };

  return (
    <div style={{}}>
      <div
        className="navBar"
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <div className="navContainerL">
          <NavButton
            button="NavButtonHome"
            on={false}
            onClick={() => console.log("clicked")}
            size={35}
            label="Home"
          />
        </div>
        <div className="navContainer">
          <NavButton
            button="NavButtonPlay"
            on={true}
            onClick={() => console.log("clicked")}
            size={35}
            label="Play"
          />
        </div>
        <div className="navContainer">
          <NavButton
            button="NavButtonImmerse"
            on={false}
            onClick={() => console.log("clicked")}
            size={40}
            label="Immerse"
          />
        </div>
        <div className="navContainer">
          <NavButton
            button="NavButtonNextGen"
            on={false}
            onClick={() => console.log("clicked")}
            size={40}
            label="Tech"
          />
        </div>
        <div className="navContainer">
          <NavButton
            button="NavButtonScores"
            on={false}
            onClick={() => console.log("clicked")}
            size={40}
            label="Scores"
          />
        </div>
        <div className="navContainerR">
          <NavButton
            button="NavButtonRewards"
            on={false}
            onClick={() => console.log("clicked")}
            size={35}
            label="Rewards"
          />
        </div>
      </div>

      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const TightPanel = (props) => {
  const [disabled, buttonDisable] = useState(false);

  const disableButton = () => {
    buttonDisable(false);
  };

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: props.fullwidth ? "100%" : props.width,
      }}
    >
      <div
        className="collapsibleHeader"
        style={{
          marginBottom: "0px",
          padding: "6px 15px 6px 15px",
          display: "flex",
          width: "100%",
          justifyContent: "left",
          alignItems: "center",
        }}
        disabled={disabled}
        onClick={() => onSubmit()}
      >
        {props.label}
      </div>

      <div
        id="textBox"
        className="solidWhitePanel"
        style={{
          height: "auto",

          overflowY: "hidden",
          display: "block",
          padding: "12px",
          borderRadius: "0 0 15px 15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "3px",
            width: "100%",
          }}
        >
          {props.content}
        </div>
      </div>
      <BottomShadow fullwidth height={35} />
    </div>
  );
};

export const IconList = (props) => {
  const [element, buttonGlow] = useState(false);
  /*   filter: brightness(130%) */
  const onGlow = (element) => {
    console.log(document.getElementById(element).style);
    document
      .getElementById(element)
      .style.setProperty("filter", "brightness(130%)");
  };
  const offGlow = (element) => {
    console.log(document.getElementById(element).style);
    document
      .getElementById(element)
      .style.setProperty("filter", "brightness(100%)");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",

        /*  gridTemplateColumns: `repeat(${props.list.length}, auto)`,
        gridGap: 5, */
      }}
    >
      {props.list.map((val, i) => {
        return (
          <>
            <div>
              <a href={val.url} target="_blank">
                <img
                  id={"img" + i}
                  className="iconListImg"
                  onMouseEnter={() => onGlow("img" + i)}
                  onMouseLeave={() => offGlow("img" + i)}
                  src={val.icon}
                  style={{
                    height: val.height,
                  }}
                />
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
};

export const BottomShadow = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src="images/bottomShadow.png"
        style={{
          width: props.fullwidth ? "100%" : props.width,
          height: props.height,
        }}
      />
    </div>
  );
};

export const StatsTicker = (props) => {
  // const [element, buttonGlow] = useState(false);
  const [element, dateSelect] = useState(3);
  const [item, selectItem] = useState("Basketball");

  console.log(item);
  const onSelect = (e) => {
    for (let i = 0; i < 4; i++) {
      document.getElementById(i).style.setProperty("color", "#FFFFFF");
    }
    dateSelect(e.target.id);
    document.getElementById(e.target.id).style.setProperty("color", "#FFD462");
  };
  const onHighlight = (e) => {
    element !== e.target.id &&
      document
        .getElementById(e.target.id)
        .style.setProperty("color", "#F8F8FF");
  };
  const offHighlight = (e) => {
    element !== e.target.id &&
      document
        .getElementById(e.target.id)
        .style.setProperty("color", "#D8D8D8");
  };

  return (
    <div
      className="statsTicker-container"
      style={{ width: props.fullwidth ? "100%" : props.width }}
    >
      <h2 className="shadowHeader">Stats Ticker</h2>
      <div className="tickerHeader blackOverlay">
        {props.data.map((val, i) => {
          return (
            <div
              id={`${i}`}
              style={{ color: i === 3 && "#FFD462" }}
              onClick={(e) => onSelect(e)}
              onMouseEnter={(e) => onHighlight(e)}
              onMouseLeave={(e) => offHighlight(e)}
            >
              {val.date}
            </div>
          );
        })}
      </div>
      <div className="sportsIcon">
        <Select
          placeholder={props.listOptions[0].item}
          width={200}
          height={30}
          listOptions={props.listOptions}
          onChange={selectItem}
        />
        <img id="icon" src={`images/sportsIcon_${item}.png`} />
      </div>
      <div
        className="blackOverlay"
        style={{
          borderRadius: 10,
        }}
      >
        {props.data[element].games.map((val, i) => {
          return (
            <>
              <div className="statsTicker-item">
                <div>
                  <div id="teamA">{val.teamA.name}</div>
                  <div id="teamB">{val.teamB.name}</div>
                </div>
                <div
                  className="statsTicker-scores"
                  style={{ textAlign: "right" }}
                >
                  {val.ppd ? (
                    <div className="statsTicker-ppd">PPD</div>
                  ) : (
                    <>
                      <div
                        id="teamA"
                        style={{
                          color:
                            val.teamA.score > val.teamB.score
                              ? "#26901D"
                              : val.teamA.score === val.teamB.score
                              ? "#906E1D"
                              : "#B70000",
                        }}
                      >
                        {val.teamA.score}
                      </div>

                      <div
                        id="teamB"
                        style={{
                          color:
                            val.teamB.score > val.teamA.score
                              ? "#26901D"
                              : val.teamA.score === val.teamB.score
                              ? "#906E1D"
                              : "#B70000",
                        }}
                      >
                        {val.teamB.score}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div
                style={{
                  padding: "0 20px 0 20px",
                }}
              >
                <div className="gradient-bottom-border" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export const RatingsChart = (props) => {
  // const [element, buttonGlow] = useState(false);
  const [element, dateSelect] = useState(3);

  const onHighlight = (e) => {
    element !== e.target.id &&
      document
        .getElementById(e.target.id)
        .style.setProperty("color", "#F8F8FF");
  };

  return (
    <div
      className="statsTicker-container"
      style={{ width: props.fullwidth ? "100%" : props.width }}
    >
      {props.data.map((val, i) => {
        console.log(val);
        return (
          <div className="ratingBar-row">
            <div>
              <StarRating
                size={22}
                onColor="#FFBE36"
                offColor="#D8D8D8"
                percent={100 - i * 20}
              />
            </div>
            <div className="ratingBar-container">
              <div className="ratingBar-on" style={{ width: `${val}%` }} />
              <div className="ratingBar-off" />
            </div>
            <div id="percent">{val}%</div>
          </div>
        );
      })}
      {/*       <div className="tickerHeader blackOverlay">
        {props.data.map((val, i) => {
          return (
            <div
              id={`${i}`}
              style={{ color: i === 3 && "#FFD462" }}
              onClick={(e) => onSelect(e)}
              onMouseEnter={(e) => onHighlight(e)}
              onMouseLeave={(e) => offHighlight(e)}
            >
              {val.date}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
