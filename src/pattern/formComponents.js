import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";
import { Input, Select } from "./forms/Fields";
import {
  Button,
  Switch,
  RadioButton,
  SecondaryButton,
  TextButton,
  DeleteCrumb,
  HeartButton,
  CommentButton,
  ShareButton,
  ViewCount,
} from "./forms/Button";
import { faLock, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import { PlusCircle } from "./svgIcons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FormInput = (props) => {
  const patternListTable = [
    { param: "Placeholder", type: "String" },
    { param: "name", type: "String (used to identify field)" },
    { param: "type", type: "String (text, number etc)" },
    { param: "color", type: "String (font color)" },
    { param: "width", type: "Integer" },
    { param: "fullwidh", type: "Boolean (100% width)" },
    { param: "error", type: "Boolean" },
    { param: "validated", type: "Boolean" },
    { param: "theme", type: "String ('dark' or 'light')" },
    { param: "onChange", type: "Function (put field value on state" },
    { param: "autoComplete", type: "String ('off' or 'on')" },
    { param: "gap", type: "Integer" },
  ];
  const code = `<Input
  placeholder="User Name"
  name="username"
  type="text"
  color="#F8F8FF"
  width={500}
  height={50}
  /* fullwidth */
  error={true}
  validated={false}
  theme="dark"
  onChange={handlechange}
  autoComplete="off"
  gap={15}
/>`;
  return (
    <>
      <div className="raisedCard">
        <div>
          <Input
            placeholder="User Name"
            name="username"
            type="text"
            color="#241C15"
            width={500}
            error={false}
            validated={true}
            height={40}
            /*   onChange={handlechange} */
            autoComplete="off"
            gap={15}
          />
        </div>
        <div>
          <Input
            placeholder="User Name"
            name="username"
            type="text"
            color="#241C15"
            width={500}
            error={true}
            validated={false}
            height={40}
            /*   onChange={handlechange} */
            autoComplete="off"
            gap={15}
          />
        </div>
      </div>
      <div className="heroBackground" style={{ padding: "50px" }}>
        <div>
          <Input
            placeholder="User Name"
            name="username"
            type="text"
            color="#F8F8FF"
            width={500}
            error={true}
            validated={false}
            height={50}
            theme="dark"
            /*    onChange={handlechange}
            onSubmit={handlesubmit} */
            autoComplete="off"
            gap={15}
          />
        </div>
        <div>
          <Input
            placeholder="User Name"
            name="username"
            type="text"
            color="#F8F8FF"
            width={500}
            error={false}
            validated={true}
            height={50}
            theme="dark"
            /*   onChange={handlechange} */
            autoComplete="off"
            gap={15}
          />
        </div>
      </div>
      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Input{`/>`}
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

export const PatternSelect = (props) => {
  const patternListTable = [
    { param: "Placeholder", type: "String" },
    { param: "width", type: "Integer" },
    { param: "height", type: "Integer (of select input)" },
    { param: "listOptions", type: "Object Array" },
    { param: "onChange", type: "Function" },
  ];

  const listOptions = [{ item: "Top comments" }, { item: "Most recent" }];

  const code = `
  const listOptions = [
    { item: "Top comments" },
    { item: "Most recent" }
  ];

  <Select
  placeholder="Top comments"
  width={200}
  height={30}
  listOptions={listOptions}
  onChange={() => console.log("Item selected")}
/>`;

  return (
    <>
      <div className="raisedCard">
        <div>
          <Select
            placeholder="Top comments"
            width={200}
            height={30}
            listOptions={listOptions}
            onChange={() => console.log("Item selected")}
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Select{`/>`}
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

export const PrimaryButton = (props) => {
  const patternListTable = [
    { param: "label", type: "String" },
    {
      param: "submitting",
      type: "String - text when submitting ({false} for no submitting state",
    },
    { param: "disabled", type: "Boolean" },
    { param: "fullwidth", type: "Boolean" },
    { param: "size", type: `String ("sm", "med" and "lg")` },
    { param: "color", type: "String (#hexCode)" },
    {
      param: "theme",
      type: `String ("glass" renders a glass blur effect for login screen)`,
    },
    { param: "borderRadius", type: "Integer" },
    {
      param: "icon",
      type: `Component e.g. "<FontAwesomeIcon size="s" color="#FFFFFF" icon={faLock} />"`,
    },
    { param: "onClick", type: "Function (Submit action)" },
    {
      param: "gradient",
      type: `Array (Two colors e.g. ["#BE034B", "#000000"]`,
    },
    { param: "gap", type: "Integer" },
  ];
  const code = `<Button
  label="Medium Button with icon"
  submitting={false}
  fullwidth={false}
  size={"med"}
  color="#DDDDDD"
  theme="glass"
  disabled={false}
  borderRadius={40}
  icon={<FontAwesomeIcon size="s" color="#FFFFFF" icon={faLock} />}
  /*  onClick={submitButton} */
  gradient={["#BE034B", "#000000"]}
  gap={35}
/>`;
  return (
    <>
      <div className="heroBackground" style={{ width: "50%" }}>
        <div>
          <Button
            label="Small button"
            submitting={false}
            fullwidth={false}
            size={"sm"}
            color="#DDDDDD"
            disabled={false}
            borderRadius={40}
            /*  onClick={submitButton} */
            gradient={["#BE034B", "#000000"]}
            gap={35}
          />
        </div>
        <div>
          <Button
            label="Medium Button with icon"
            submitting={false}
            fullwidth={false}
            size={"med"}
            color="#DDDDDD"
            disabled={false}
            borderRadius={40}
            icon={<FontAwesomeIcon size="s" color="#FFFFFF" icon={faLock} />}
            /*  onClick={submitButton} */
            gradient={["#BE034B", "#000000"]}
            gap={35}
          />
        </div>
        <div>
          <Button
            label="Large Button"
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
        <div>
          <Button
            label="Glass effect Button"
            submitting={false}
            fullwidth={false}
            size={"lg"}
            theme="glass"
            color="#DDDDDD"
            disabled={false}
            borderRadius={40}
            icon={
              <FontAwesomeIcon size="s" color="#FFFFFF" icon={faEnvelope} />
            }
            /*  onClick={submitButton} */
            gradient={["#BE034B", "#000000"]}
            gap={35}
          />
        </div>
        <div>
          <Button
            label="Large Button"
            submitting={"Submitting..."}
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
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}PrimaryButton{`/>`}
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

export const PatternSecondaryButton = (props) => {
  const patternListTable = [
    { param: "label", type: "String" },
    {
      param: "submitting",
      type: "String - text when submitting ({false} for no submitting state",
    },
    { param: "disabled", type: "Boolean" },
    { param: "fullwidth", type: "Boolean" },
    { param: "size", type: `String ("sm", "med" and "lg")` },
    {
      param: "icon",
      type: `Component e.g. "<FontAwesomeIcon size="s" color="#FFFFFF" icon={faLock} />"`,
    },
    { param: "onClick", type: "Function (Submit action)" },
    { param: "gap", type: "Integer" },
  ];
  const code = `<SecondaryButton
  label="Medium Secondary button"
  submitting={false}
  fullwidth={false}
  size={"med"}
  disabled={false}
  /*  onClick={submitButton} */
  gap={35}
/>`;
  return (
    <>
      <div className="heroBackground" style={{ width: "50%" }}>
        <div>
          <SecondaryButton
            label="Large Secondary button"
            submitting={false}
            fullwidth={false}
            size={"lg"}
            disabled={false}
            /*  onClick={submitButton} */
            gap={35}
          />
        </div>
        <div>
          <SecondaryButton
            label="Medium Secondary button"
            submitting={false}
            fullwidth={false}
            size={"med"}
            disabled={false}
            /*  onClick={submitButton} */
            gap={35}
          />
        </div>
        <div>
          <SecondaryButton
            label="Medium Button with icon"
            submitting={false}
            fullwidth={false}
            size={"med"}
            disabled={false}
            icon={<FontAwesomeIcon size="s" color="#241C15" icon={faCheck} />}
            /*  onClick={submitButton} */
            gap={35}
          />
        </div>
        <div>
          <SecondaryButton
            label="Small Secondary button"
            submitting={false}
            fullwidth={false}
            size={"sm"}
            disabled={false}
            /*  onClick={submitButton} */
            gap={35}
          />
        </div>
        <div>
          <SecondaryButton
            label="Large Secondary button"
            submitting={"Submitting..."}
            fullwidth={false}
            size={"lg"}
            disabled={false}
            /*  onClick={submitButton} */
            gap={35}
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Secondary Button{`/>`}
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

export const PatternTextButton = (props) => {
  const patternListTable = [
    { param: "label", type: "String" },
    {
      param: "icon",
      type: `Component e.g. "<FontAwesomeIcon size="s" color="#FFFFFF" icon={faLock} />"`,
    },
    { param: "onClick", type: "Function (Submit action)" },
    { param: "gap", type: "Integer" },
  ];
  const code = `<TextButton
  label="Text Button"
  icon={<PlusCircle size={20} />}
  /*  onClick={() => this.submitButton()} */
  gap={35}
/>`;
  return (
    <>
      <div className="solidWhitePanel" style={{ width: "50%" }}>
        <div>
          <TextButton
            label="Text Button"
            icon={<PlusCircle size={20} />}
            /*  onClick={submitButton} */
            gap={35}
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}TextButton{`/>`}
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

export const PatternSwitch = (props) => {
  const patternListTable = [
    { param: "onClick", type: "Function (Action)" },

    { param: "on", type: "Boolean" },
    { param: "gap", type: "Integer" },
  ];
  const code = `<Switch
  onClick={this.onClick}
  on={false}
  gap={0}
  />`;
  return (
    <>
      <div className="solidWhitePanel" style={{ width: "50%", height: "60px" }}>
        <div>
          <Switch onClick={""} on={false} gap={0} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Switch{`/>`}
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

export const PatternDeleteCrumb = (props) => {
  const patternListTable = [
    { param: "label", type: "String" },
    {
      param: "id",
      type: "String (! mandatory unique)",
    },
    { param: "onClick", type: "Function (Submit action)" },
    { param: "gap", type: "Integer" },
  ];
  const code = `<DeleteCrumb
  label="Basketball"
  id="basketball"
  onClick={() => console.log("submitButton")}
  gap={6}
/>`;
  return (
    <>
      <div
        className="solidWhitePanel"
        style={{ width: "50%", display: "flex", flexWrap: "wrap" }}
      >
        <DeleteCrumb
          label="Football"
          id="football"
          onClick={() => console.log("submitButton")}
          gap={6}
        />

        <DeleteCrumb
          label="Baseball"
          id="baseball"
          onClick={() => console.log("submitButton")}
          gap={6}
        />

        <DeleteCrumb
          label="Soccer"
          id="Soccer"
          onClick={() => console.log("submitButton")}
          gap={6}
        />
        <DeleteCrumb
          label="Track & Field"
          id="Track"
          onClick={() => console.log("submitButton")}
          gap={6}
        />
        <DeleteCrumb
          label="Basketball"
          id="basketball"
          onClick={() => console.log("submitButton")}
          gap={6}
        />
        <DeleteCrumb
          label="Jousting"
          id="jousting"
          onClick={() => console.log("submitButton")}
          gap={6}
        />
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Crumb Delete Button{`/>`}
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

export const PatternRadioButton = (props) => {
  const patternListTable = [
    { param: "onClick", type: "Function (Action)" },

    { param: "on", type: "Boolean" },
    { param: "gap", type: "Integer" },
  ];
  const code = `<RadioButton
  onClick={""}
  on={true}
  gap={0}
  />`;
  return (
    <>
      <div className="solidWhitePanel" style={{ width: "50%", height: "60px" }}>
        <div>
          <RadioButton onClick={""} on={true} gap={0} />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}RadioButton{`/>`}
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

export const PatternHeartButton = (props) => {
  const patternListTable = [
    { param: "onClick", type: "Function (Action)" },
    { param: "likeCount", type: "Integer" },
    { param: "color", type: "String (hex code for icon color)" },
    { param: "textColor", type: "String (hex code for count text)" },
    { param: "on", type: "Boolean" },
    { param: "size", type: "Integer (Height)" },
  ];
  const code = `<HeartButton
  onClick={() => console.log("clicked")}
  on={false}
  size={17}
  color="#C6C6C6"
  textColor="#FFD462"
  likeCount={13634}
/>`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{ width: "50%", height: "80px" }}
      >
        <div>
          <HeartButton
            onClick={() => console.log("clicked")}
            on={false}
            size={17}
            color="#C6C6C6"
            textColor="#FFD462"
            likeCount={13634}
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}HeartButton{`/>`}
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

export const PatternCommentButton = (props) => {
  const patternListTable = [
    { param: "onClick", type: "Function (Action)" },
    { param: "commentCount", type: "Integer" },
    { param: "color", type: "String (hex code for icon color)" },
    { param: "textColor", type: "String (hex code for count text)" },
    { param: "size", type: "Integer (Height)" },
  ];
  const code = `<HeartButton
  onClick={() => console.log("clicked")}
  on={false}
  size={17}
  color="#C6C6C6"
  textColor="#FFD462"
  likeCount={13634}
/>`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{ width: "50%", height: "80px" }}
      >
        <div>
          <CommentButton
            onClick={() => console.log("clicked")}
            size={17}
            commentCount={52343}
            color="#797979"
            textColor="#808080"
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}CommentButton{`/>`}
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

export const PatternViewCount = (props) => {
  const patternListTable = [
    { param: "onClick", type: "Function (Action)" },
    { param: "viewCount", type: "Integer" },
    { param: "color", type: "String (hex code for icon color)" },
    { param: "textColor", type: "String (hex code for count text)" },
    { param: "size", type: "Integer (Height)" },
  ];
  const code = `<HeartButton
  onClick={() => console.log("clicked")}
  on={false}
  size={17}
  color="#C6C6C6"
  textColor="#FFD462"
  likeCount={13634}
/>`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{ width: "50%", height: "80px" }}
      >
        <div>
          <ViewCount
            onClick={() => console.log("clicked")}
            size={17}
            viewCount={52343}
            color="#797979"
            textColor="#808080"
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}ViewCount{`/>`}
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

export const PatternShareButton = (props) => {
  const patternListTable = [
    { param: "onClick", type: "Function (Action)" },
    { param: "color", type: "String (hex code for icon color)" },
    { param: "textColor", type: "String (hex code for count text)" },
    { param: "size", type: "Integer (Height)" },
  ];
  const code = `<ShareButton
  onClick={() => console.log("clicked")}
  size={17}
  color="#797979"
  textColor="#808080"
/>`;
  return (
    <>
      <div
        className="primaryBackground"
        style={{ width: "50%", height: "80px" }}
      >
        <div>
          <ShareButton
            onClick={() => console.log("clicked")}
            size={17}
            color="#797979"
            textColor="#808080"
          />
        </div>
      </div>

      <div className="card" style={{ margin: "30px 0 30px 0" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}CommentButton{`/>`}
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
