import React, { Component } from "react";
import { TallChevron } from "../svgIcons.js";
import {
  TextButton,
  CommentButton,
  HeartButton,
  ShareButton,
} from "../forms/Button";
import { BottomShadow } from "./elements";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";

class SlideShow extends Component {
  state = {
    count: 0,
    currentImg: this.props.data && this.props.data[0].image,
  };

  buttonEnabler = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  resetOrder = () => {
    this.setState(
      { currentImg: this.props.data[this.state.count].image },
      () => {
        //document.getElementById("topimg").style.transform = `translateX(0%)`;
        gsap.to(
          document.getElementById("topimg"),

          {
            duration: 0,

            css: { transform: `translateX(0%)`, transform: `translateY(0%)` },
            delay: 0.1,
            onComplete: this.buttonEnabler,
            // ease: Power4.easeOut,
          }
        );
      }
    );
  };
  imgForward = () => {
    this.buttonEnabler();

    this.setState({ count: this.state.count + 1 }, () => {
      this.props.getCount && this.props.getCount(this.state.count);

      gsap.to(
        document.getElementById("topimg"),

        {
          duration: 0.3,

          css: { transform: `translateX(-100%)` },
          delay: 0,
          onComplete: this.resetOrder,
          ease: "power1.inOut",
        }
      );
    });
  };

  imgBack = () => {
    this.buttonEnabler();
    this.setState({ count: this.state.count - 1 }, () => {
      this.props.getCount && this.props.getCount(this.state.count);

      gsap.to(
        document.getElementById("topimg"),

        {
          duration: 0.3,

          css: { transform: `translateX(100%)` },
          delay: 0,
          onComplete: this.resetOrder,
          ease: "power1.inOut",
        }
      );
    });
  };
  imgUp = (i) => {
    this.buttonEnabler();
    this.setState({ count: i }, () => {
      this.props.getCount && this.props.getCount(this.state.count);

      gsap.to(
        document.getElementById("topimg"),

        {
          duration: 0.3,

          css: { transform: `translateY(100%)` },
          delay: 0,
          onComplete: this.resetOrder,
          ease: "power1.inOut",
        }
      );
    });
  };
  onSubmit = () => {
    console.log("submit");
  };

  render() {
    const { data } = this.props;
    return (
      <div className="slideshow-container">
        <div className="slideshow-image-container">
          <div className="slideNav-container">
            <div>
              {data && this.state.count > 0 ? (
                <div
                  className="slideChevron"
                  id="left"
                  onClick={!this.state.disabled && this.imgBack}
                >
                  <TallChevron size={70} />
                </div>
              ) : null}
            </div>
            <div>
              {data && this.state.count < data.length - 1 ? (
                <div
                  className="slideChevron"
                  id="right"
                  onClick={!this.state.disabled && this.imgForward}
                >
                  <TallChevron size={70} />
                </div>
              ) : null}
            </div>
          </div>
          <div className="slideCircles">
            {data &&
              data.map((val, i) => {
                return (
                  <div
                    className="slideCircle cursor"
                    id={"circ-" + i}
                    onClick={() => !this.state.disabled && this.imgUp(i)}
                  >
                    {i === this.state.count ? <div /> : null}
                  </div>
                );
              })}
          </div>
          <div className="gradientOverlay"></div>
          <div className="slide-image-container" id="top">
            <img id="topimg" src={this.state.currentImg} />
          </div>
          <div className="slide-image-container" id="bottom">
            <img id="bottomimg" src={data && data[this.state.count].image} />
          </div>
        </div>
      </div>
    );
  }
}

export default SlideShow;
