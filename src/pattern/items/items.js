import React, { useState, useEffect } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stars } from "../svgIcons.js";
import { nFormatter } from "../../methods/tools";
import {
  NavButton,
  ViewCount,
  CommentButton,
  ShareButton,
  HeartButton,
} from "../forms/Button";
import { Select } from "../forms/Fields";
import { StarRating } from "../elements/elements";

import gsap from "gsap";
export const RootItem = (props) => {
  return (
    <div
      style={{
        width: props.fullwidth ? "100%" : props.width,
      }}
    >
      <div
        className="root-item-container"
        style={{ color: props.mode === "dark" ? "#f8f8ff" : "#241C15" }}
      >
        {props.data.image ? (
          <div
            className="root-item-image"
            style={{ width: props.fullwidth ? "100%" : props.width }}
          >
            <img src={props.data.image} />
          </div>
        ) : null}
        <div className="root-item-content">
          {props.data.title ? (
            <div className="root-item-title">{props.data.title}</div>
          ) : null}
          {props.data.subtitle ? (
            <div className="root-item-subtitle">{props.data.subtitle}</div>
          ) : null}
          {props.data.description ? (
            <div
              style={{ color: props.mode === "dark" ? "#a9a9a9" : "#808080" }}
              className="root-item-description"
            >
              {props.data.description}
            </div>
          ) : null}
          {props.data.reviews ? (
            <div
              style={{
                marginTop: "10px",
                color: props.mode === "dark" ? "#a9a9a9" : "#808080",
              }}
              className="root-item-description"
            >
              <StarRating
                size={15}
                onColor="#FFBE36"
                offColor="#5B5B5B"
                percent={props.data.reviewPercent}
              />
              {props.data.reviews} reviews
            </div>
          ) : null}
          {props.data.price ? (
            <div className="root-item-price">
              ${props.data.price.toFixed().toLocaleString()}
            </div>
          ) : null}
          <div>
            <div className="item-controls">
              {props.data.comments ? (
                <div>
                  <CommentButton
                    onClick={() => console.log("clicked")}
                    size={14}
                    commentCount={props.data.comments}
                    color={props.mode === "dark" ? "#D8D8D8" : "#A9A9A9"}
                    textColor={props.mode === "dark" ? "#FFD462" : "#808080"}
                  />
                </div>
              ) : null}
              {props.data.likes ? (
                <div>
                  <HeartButton
                    onClick={() => console.log("clicked")}
                    on={false}
                    size={14}
                    color={props.mode === "dark" ? "#D8D8D8" : "#A9A9A9"}
                    textColor={props.mode === "dark" ? "#FFD462" : "#808080"}
                    likeCount={props.data.likes}
                  />
                </div>
              ) : null}
              {props.data.views ? (
                <div>
                  <ViewCount
                    size={14}
                    color={props.mode === "dark" ? "#D8D8D8" : "#A9A9A9"}
                    textColor={props.mode === "dark" ? "#FFD462" : "#808080"}
                    viewCount={props.data.views}
                  />
                </div>
              ) : null}
              {props.share ? (
                <div>
                  <ShareButton
                    onClick={() => console.log("clicked")}
                    size={14}
                    color={props.mode === "dark" ? "#D8D8D8" : "#A9A9A9"}
                    textColor={props.mode === "dark" ? "#FFD462" : "#808080"}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
