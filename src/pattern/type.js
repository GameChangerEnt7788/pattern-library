import React from "react";
import { Button } from "./forms/Button";
import { Divider } from "./elements/elements";
export const Fonts = (props) => {
  return (
    <>
      <h1>Fonts</h1>
      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <div style={{ fontWeight: 700, fontSize: "5vw" }}>
          This is Poppins, the primary font for GET IN THE GAME.
        </div>
        <p>
          Poppins is that perfect blend of functional, legible and separate from
          the rest. When large and bold, it makes eye-catching headlines. When
          tight and compact, it makes great editorial, allow the content to
          stand out from the rest, add a playful tone while avoiding the
          necessity to use many fonts to separate titles and headings.
        </p>
        <hr style={{ margin: "40px 0 20px 0" }} />
        <h2 style={{ fontWeight: 700, fontSize: "25px", marginTop: "40px" }}>
          Secondary title bars:
        </h2>
        <div style={{ marginBottom: "35px" }} className="titleBar">
          Bebas Neue is for secondary black titlebars.
        </div>
        <div
          style={{ marginBottom: "35px", width: "60%" }}
          className="primaryBackground"
        >
          <Divider
            color="#F8F8FF"
            width={"90%"}
            label="Lexend Peta for dividers"
          />
        </div>

        <div>
          <Button
            label="Lexend Peta for Buttons"
            submitting={false}
            fullwidth={false}
            size={"lg"}
            color="#DDDDDD"
            disabled={false}
            borderRadius={40}
            /*    icon={<FontAwesomeIcon size="s" color="#FFFFFF" icon={faLock} />} */
            /*  onClick={submitButton} */
            gradient={["#BE034B", "#000000"]}
            gap={35}
          />
        </div>
        <hr style={{ margin: "40px 0 20px 0" }} />
        <h2 style={{ fontWeight: 700, fontSize: "25px", marginTop: "40px" }}>
          Weights:
        </h2>
        <div style={{ fontSize: "20px" }}>
          <p style={{ fontWeight: 100 }}>
            Thin 100: This is the lightest weight, but it is not used on the
            site.
          </p>
          <p style={{ fontWeight: 400 }}>
            Regular 400: This is the dominant weight for the site and mobile,
            being used for editorial and paragraph elements.
          </p>
          <p style={{ fontWeight: 700 }}>
            Bold 700: Used for bold copy and headlines.
          </p>
        </div>
        <hr style={{ margin: "40px 0 20px 0" }} />
        <h2
          style={{
            fontWeight: 700,
            fontSize: "25px",
            marginTop: "40px",
            marginBottom: "30px",
          }}
        >
          Scale:
        </h2>
        <div className="fontScale-grid">
          <h1 style={{ margin: 0 }}>Heading One</h1>
          <div style={{ display: "flex", alignItems: "center" }}>44px</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Poppins Bold 700
          </div>

          <h2 style={{ margin: 0 }}>Heading Two</h2>
          <div style={{ display: "flex", alignItems: "center" }}>36px</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Poppins Bold 700
          </div>
          <h3 style={{ margin: 0 }}>Heading Three</h3>
          <div style={{ display: "flex", alignItems: "center" }}>28px</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Poppins Bold 700
          </div>
          <h4 style={{ margin: 0 }}>Heading Four</h4>
          <div style={{ display: "flex", alignItems: "center" }}>20px</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Poppins Bold 700
          </div>
          <p style={{ margin: 0, fontWeight: 700 }}>Body Bold</p>
          <div style={{ display: "flex", alignItems: "center" }}>16px</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Poppins Bold 700
          </div>
          <p style={{ margin: 0 }}>Body Regular</p>
          <div style={{ display: "flex", alignItems: "center" }}>16px</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Poppins Regular 400
          </div>
          <p style={{ margin: 0, fontStyle: "italic" }}>Body Regular Italic</p>
          <div style={{ display: "flex", alignItems: "center" }}>16px</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Poppins Regular 400
          </div>
        </div>
        <hr style={{ margin: "40px 0 20px 0" }} />
        <h2
          style={{
            fontWeight: 700,
            fontSize: "25px",
            marginTop: "40px",
            marginBottom: "30px",
          }}
        >
          Paragraphs:
        </h2>

        <h2>Main section title</h2>
        <h3>Sub-section title</h3>
        <p>{"</p> tags"}: 16px | Line height: 1.5</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

export const Scale = (props) => {
  return <div>Scale</div>;
};
