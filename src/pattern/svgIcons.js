import React from "react";
import { ColorLuminance } from "../methods/tools";

export const Chevron = (props) => (
  <svg
    width={props.size ? props.size : 30}
    height={props.size ? props.size : 30}
    viewBox="0 0 10 17"
    version="1.1"
    fill="#C6C6C6"
    fill-rule="evenodd"
    transform={`scale(${props.scale})`}
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: props.size, display: "flex", alignItems: "center" }}
  >
    <title>Plus</title>

    <g
      id="Class-Detail"
      transform="translate(-30.000000, -98.000000)"
      fill="#333333"
    >
      <path
        d="M30.2434599,107.077008 C29.9188467,106.758059 29.9188467,106.242769 30.2434599,105.922992 L37.9476124,98.3460807 C38.4162207,97.8846398 39.1786454,97.8846398 39.648086,98.3460807 C40.1166943,98.8075217 40.1166943,99.5564314 39.648086,100.017872 L33.0576064,106.500414 L39.648086,112.981299 C40.1166943,113.443569 40.1166943,114.192478 39.648086,114.653919 C39.1786454,115.11536 38.4162207,115.11536 37.9476124,114.653919 L30.2434599,107.077008 Z"
        id="Chevron"
      ></path>
    </g>
  </svg>
);

export const PlusCircle = (props) => (
  <svg
    width={props.size ? props.size : 30}
    height={props.size ? props.size : 30}
    viewBox="0 0 18 18"
    version="1.1"
    fill="#C6C6C6"
    fill-rule="evenodd"
    transform={`scale(${props.scale})`}
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: props.size, display: "flex", alignItems: "center" }}
  >
    <title>Plus</title>

    <g
      id="01-Topmarq_Home-Copy"
      transform="translate(-331.000000, -393.000000)"
    >
      <g id="Group-4" transform="translate(209.000000, 389.000000)">
        <path
          d="M132,9 L130,9 L130,12 L127,12 L127,14 L130,14 L130,17 L132,17 L132,14 L135,14 L135,12 L132,12 M131,20 C127.134007,20 124,16.8659932 124,13 C124,9.13400675 127.134007,6 131,6 C134.865993,6 138,9.13400675 138,13 C138,16.8659932 134.865993,20 131,20 M131,4 C126.029437,4 122,8.02943725 122,13 C122,17.9705627 126.029437,22 131,22 C135.970563,22 140,17.9705627 140,13 C140,8.02943725 135.970563,4 131,4"
          id="Shape"
          transform="translate(131.000000, 13.000000) rotate(-360.000000) translate(-131.000000, -13.000000) "
        ></path>
      </g>
    </g>
  </svg>
);

export const NavButtonPlay = (props) => (
  <svg
    width={props.size ? props.size : 60}
    height={props.size ? props.size : 60}
    viewBox="0 0 85 86"
    version="1.1"
    fill-rule="evenodd"
    transform={`scale(${props.scale})`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>PostUpvote</title>
    <defs>
      <linearGradient
        x1="50%"
        y1="0.914779974%"
        x2="50%"
        y2="100%"
        id="linearGradient-2"
      >
        <stop
          className="navButtonColor"
          stop-color={props.highlight ? "#FF0062" : "#C0C0C099"}
          offset="0%"
        ></stop>
        <stop stop-color="#00000099" offset="100%"></stop>
      </linearGradient>
      <path
        d="M85,22.5 C108.184723,22.5275574 126.972443,41.3152771 127,64.5 C127,87.6962586 108.196259,106.5 85,106.5 C61.8043824,106.5 43,87.6962586 43,64.5 C43,41.3043824 61.8043824,22.5 85,22.5 Z M73.9646371,48.3360152 C73.742271,48.7300913 73.625,49.1755127 73.625,49.6279941 L73.625,79.3711096 C73.625,80.8229011 74.8002727,82 76.2498186,82 C76.7028818,82.0006366 77.1476142,81.8825421 77.5410807,81.6585478 L103.789267,66.7895574 C105.051692,66.0758561 105.498346,64.4725956 104.785749,63.2082147 C104.551207,62.7903913 104.206444,62.4450935 103.789267,62.2095463 L77.5410807,47.3405559 C76.2792966,46.6262128 74.6778753,47.0722762 73.9646371,48.3360152 Z"
        id="path-1"
      ></path>
      <pattern
        id="pattern-1"
        width="512"
        height="512"
        x="-469"
        y="-489.5"
        patternUnits="userSpaceOnUse"
      >
        <use href="#image-1"></use>
      </pattern>
      <image
        id="image-1"
        width="800"
        height="800"
        href="images/bgTile.png"
      ></image>
      <filter
        x="-0.6%"
        y="-0.6%"
        width="102.4%"
        height="102.4%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feOffset
          dx="1"
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feColorMatrix
          values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.672230114 0"
          type="matrix"
          in="shadowOffsetOuter1"
        ></feColorMatrix>
      </filter>

      <filter
        x="-1.8%"
        y="-1.8%"
        width="104.8%"
        height="104.8%"
        filterUnits="objectBoundingBox"
        id="filter-2"
      >
        <feGaussianBlur
          stdDeviation="1"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="2"
          dy="2"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Layouts"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="BottomNav-Play"
        transform="translate(-43.000000, -22.000000)"
        fill-rule="nonzero"
      >
        <g id="Combined-Shape1">
          <use
            fill="black"
            fill-opacity=".3"
            filter="url(#filter-1)"
            href="#path-1"
          ></use>

          <use fill="url(#linearGradient-2)" href="#path-1"></use>

          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-2)"
            href="#path-1"
          ></use>
          <use fill-opacity=".7" fill="url(#pattern-1)" href="#path-1"></use>
        </g>
      </g>
    </g>
  </svg>
);

export const NavButtonImmerse = (props) => (
  <svg
    width={props.size ? props.size : 60}
    height={props.size ? props.size : 60}
    viewBox="0 0 97 72"
    version="1.1"
    fill-rule="evenodd"
    transform={`scale(${props.scale})`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        x1="50%"
        y1="0.914779974%"
        x2="50%"
        y2="100%"
        id="linearGradient-22"
      >
        <stop
          className="navButtonColor"
          stop-color={props.highlight ? "#00BE40" : "#C0C0C099"}
          offset="0%"
        ></stop>
        <stop stop-color="#00000099" offset="100%"></stop>
      </linearGradient>
      <path
        d="M263.416,31.475712 C274.472,28.7935184 285.918,28.8897799 296.586,31.475712 L296.586,31.475712 L318.606,36.8138461 C324.14,38.1702572 328,43.4449462 328,49.6406821 L328,49.6406821 L328,80.9037704 C328,87.0995063 324.14,92.3720076 318.614,93.7262309 L318.614,93.7262309 L295.114,99.4078433 C293.884,99.6900643 292.594,99.3159574 291.646,98.3970982 L291.646,98.3970982 L283.006,90.017978 C282.948,89.9610962 282.888,89.899839 282.832,89.8407694 C281.268,88.1299412 278.726,88.1343167 277.168,89.8385817 C277.112,89.899839 277.054,89.9610962 276.994,90.017978 L276.994,90.017978 L268.354,98.3970982 C267.616,99.1146835 266.668,99.5 265.7,99.5 C265.43,99.5 265.158,99.4691006 264.888,99.4056555 L264.888,99.4056555 L263.45,99.0753038 L241.394,93.7306065 C235.86,92.3720076 232,87.0995063 232,80.9037704 L232,80.9037704 L232,49.6406821 C232,43.4449462 235.86,38.1702572 241.386,36.8160338 L241.386,36.8160338 Z M297.879656,51.3930041 C291.280619,51.3930041 285.91404,57.2714918 285.91404,64.5 C285.91404,71.7285082 291.280619,77.6069959 297.879656,77.6069959 C304.478693,77.6069959 309.845272,71.7285082 309.845272,64.5 C309.845272,57.2714918 304.478693,51.3930041 297.879656,51.3930041 Z M262.120344,51.3930041 C255.521307,51.3930041 250.154728,57.2714918 250.154728,64.5 C250.154728,71.7285082 255.521307,77.6069959 262.120344,77.6069959 C268.719381,77.6069959 274.08596,71.7285082 274.08596,64.5 C274.08596,57.2714918 268.719381,51.3930041 262.120344,51.3930041 Z"
        id="path-111"
      ></path>

      <filter
        x="-0.6%"
        y="-0.6%"
        width="102.4%"
        height="102.4%"
        filterUnits="objectBoundingBox"
        id="filter-11"
      >
        <feOffset
          dx="1"
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feColorMatrix
          values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.672230114 0"
          type="matrix"
          in="shadowOffsetOuter1"
        ></feColorMatrix>
      </filter>
      <pattern
        id="pattern-11"
        width="512"
        height="512"
        x="-469"
        y="-489.5"
        patternUnits="userSpaceOnUse"
      >
        <use href="#image-11"></use>
      </pattern>
      <image
        id="image-11"
        width="512"
        height="512"
        href="images/bgTile.png"
      ></image>
      <filter
        x="-1.8%"
        y="-1.8%"
        width="104.8%"
        height="104.8%"
        filterUnits="objectBoundingBox"
        id="filter-22"
      >
        <feGaussianBlur
          stdDeviation="1"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="2"
          dy="2"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Layouts"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="BottomNav-Immerse"
        transform="translate(-232.000000, -29.000000)"
        fill-rule="nonzero"
      >
        <g id="Combined-Shape2">
          <use
            fill="black"
            fill-opacity=".3"
            filter="url(#filter-11)"
            href="#path-111"
          ></use>
          <use fill="url(#linearGradient-22)" href="#path-111"></use>
          <use fill-opacity=".9" fill="url(#pattern-11)" href="#path-111"></use>
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-22)"
            href="#path-111"
          ></use>
        </g>
      </g>
    </g>
  </svg>
);

export const NavButtonNextGen = (props) => (
  <svg
    width={props.size ? props.size : 60}
    height={props.size ? props.size : 60}
    viewBox="0 0 103 72"
    version="1.1"
    fill-rule="evenodd"
    transform={`scale(${props.scale})`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Shape</title>
    <defs>
      <linearGradient
        x1="50%"
        y1="0.914779974%"
        x2="50%"
        y2="100%"
        id="linearGradient-1"
      >
        <stop
          className="navButtonColor"
          stop-color={props.highlight ? "#008EF9" : "#C0C0C099"}
          offset="0%"
        ></stop>
        <stop stop-color="#00000099" offset="100%"></stop>
      </linearGradient>
      <path
        d="M511.88035,41.8793871 C498.408055,18.9466161 478.113068,34.901219 478.113068,34.901219 C476.796842,35.9318832 474.369813,36.7792744 472.720726,36.7832158 L467.284637,36.7871571 C465.63555,36.7891278 463.208521,35.9417366 461.894197,34.9110724 C461.894197,34.9110724 441.597308,18.9525282 428.12311,41.8852991 C414.652717,64.8101874 420.081198,89.7766972 420.081198,89.7766972 C421.032228,95.889738 424.166824,99.9690399 430.082233,99.4566638 C435.980523,98.9462584 448.783293,82.9936262 448.783293,82.9936262 C449.840839,81.6791845 452.056739,80.6051654 453.702022,80.6051654 L486.291929,80.5992533 C487.939113,80.5992533 490.153112,81.6732724 491.208755,82.9877141 C491.208755,82.9877141 504.013428,98.9403463 509.921228,99.4507517 C515.829028,99.9631278 518.971232,95.8798846 519.916557,89.7707852 C519.914655,89.7707852 525.352646,64.8082167 511.88035,41.8793871 Z M457.899139,59.5337386 L450.863414,59.5337386 L450.863414,66.3800053 C450.863414,66.3800053 449.373541,67.5284612 447.067876,67.4994598 C444.766041,67.4646581 443.724279,66.2465988 443.724279,66.2465988 L443.724279,59.535672 L437.079214,59.535672 C437.079214,59.535672 436.250017,58.6772302 436.027877,56.4170534 C435.809566,54.1568767 436.945164,52.3297877 436.945164,52.3297877 L443.982804,52.3297877 L443.982804,45.2263751 C443.982804,45.2263751 445.430547,44.443337 447.512157,44.5032732 C449.595681,44.5690098 451.12194,45.3597816 451.12194,45.3597816 L451.093215,52.3278543 L457.738279,52.3278543 C457.738279,52.3278543 458.898772,53.8320609 458.994522,55.6494827 C459.090272,57.468838 457.899139,59.5337386 457.899139,59.5337386 Z M488.99742,67.5 C486.230439,67.5 484,65.2630674 484,62.5 C484,59.7317744 486.230439,57.5 488.99742,57.5 C491.752365,57.5 494,59.7317744 494,62.5 C494,65.2647868 491.752365,67.5 488.99742,67.5 Z M488.99742,52.5 C486.230439,52.5 484,50.2644024 484,47.5008598 C484,44.7321582 486.230439,42.5 488.99742,42.5 C491.752365,42.5 494,44.7321582 494,47.5008598 C494,50.2661221 491.752365,52.5 488.99742,52.5 Z M502.99742,60.5 C500.230439,60.5 498,58.2647868 498,55.5 C498,52.7334938 500.230439,50.5 502.99742,50.5 C505.752365,50.5 508,52.7334938 508,55.5 C508,58.2647868 505.752365,60.5 502.99742,60.5 Z"
        id="path-2"
      ></path>
      <filter
        x="-0.5%"
        y="-0.7%"
        width="102.0%"
        height="102.9%"
        filterUnits="objectBoundingBox"
        id="filter-3"
      >
        <feOffset
          dx="1"
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feColorMatrix
          values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.672230114 0"
          type="matrix"
          in="shadowOffsetOuter1"
        ></feColorMatrix>
      </filter>
      <pattern
        id="pattern-4"
        width="512"
        height="512"
        x="-93"
        y="-482.5"
        patternUnits="userSpaceOnUse"
      >
        <use href="#image-5"></use>
      </pattern>
      <image
        id="image-5"
        width="512"
        height="512"
        href="images/bgTile.png"
      ></image>
      <filter
        x="-1.5%"
        y="-2.1%"
        width="103.9%"
        height="105.7%"
        filterUnits="objectBoundingBox"
        id="filter-6"
      >
        <feGaussianBlur
          stdDeviation="0.5"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="2"
          dy="2"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Layouts"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="BottomNav-Copy-2"
        transform="translate(-419.000000, -29.000000)"
        fill-rule="nonzero"
      >
        <g id="Shape">
          <use
            fill="black"
            fill-opacity=".3"
            filter="url(#filter-3)"
            href="#path-2"
          ></use>
          <use fill="url(#linearGradient-1)" href="#path-2"></use>
          <use fill-opacity="0.9" fill="url(#pattern-4)" href="#path-2"></use>

          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-6)"
            href="#path-2"
          ></use>
        </g>
      </g>
    </g>
  </svg>
);

export const NavButtonScores = (props) => (
  <svg
    width={props.size ? props.size : 60}
    height={props.size ? props.size : 60}
    viewBox="0 0 98 69"
    version="1.1"
    fill-rule="evenodd"
    transform={`scale(${props.scale})`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Shape</title>
    <defs>
      <linearGradient
        x1="50%"
        y1="0.914779974%"
        x2="50%"
        y2="100%"
        id="linearGradient-1111"
      >
        <stop
          className="navButtonColor"
          stop-color={props.highlight ? "#FF9500" : "#C0C0C099"}
          offset="0%"
        ></stop>
        <stop stop-color="#00000099" offset="100%"></stop>
      </linearGradient>
      <path
        d="M614,9.5 L614,77.5 L575.545455,77.5 C570.828127,77.4947301 567.005298,73.6922358 567,69 L567,69 L567,18 C567.005298,13.3077642 570.828127,9.50526988 575.545455,9.5 L575.545455,9.5 L614,9.5 Z M655.454545,9.5 C660.171873,9.50526988 663.994702,13.3077642 664,18 L664,18 L664,69 C663.994702,73.6922358 660.171873,77.4947301 655.454545,77.5 L655.454545,77.5 L617,77.5 L617,9.5 Z M642.636364,22.25 C635.557077,22.25 629.818182,27.9583694 629.818182,35 L629.818182,35 L629.818182,52 C629.818182,59.0416306 635.557077,64.75 642.636364,64.75 C649.71565,64.75 655.454545,59.0416306 655.454545,52 L655.454545,52 L655.454545,35 C655.454545,27.9583694 649.71565,22.25 642.636364,22.25 Z M588.363636,22.25 C581.287523,22.2576127 575.553108,27.9615251 575.545455,35 L575.545455,35 L575.545455,52 C575.545455,59.0416305 581.28435,64.75 588.363636,64.75 C595.442923,64.75 601.181818,59.0416305 601.181818,52 L601.181818,52 L601.181818,35 C601.174165,27.9615251 595.43975,22.2576127 588.363636,22.25 Z M587.5,31.5 C589.985281,31.5 592,33.3654802 592,35.6666667 L592,35.6666667 L592,52.3333333 C592,54.6345198 589.985281,56.5 587.5,56.5 C585.014719,56.5 583,54.6345198 583,52.3333333 L583,52.3333333 L583,35.6666667 C583,33.3654802 585.014719,31.5 587.5,31.5 Z M643.5,31.5 C645.985281,31.5 648,33.3654802 648,35.6666667 L648,35.6666667 L648,52.3333333 C648,54.6345198 645.985281,56.5 643.5,56.5 C641.014719,56.5 639,54.6345198 639,52.3333333 L639,52.3333333 L639,35.6666667 C639,33.3654802 641.014719,31.5 643.5,31.5 Z"
        id="path-2222"
      ></path>

      <filter
        x="-0.5%"
        y="-0.7%"
        width="102.1%"
        height="102.9%"
        filterUnits="objectBoundingBox"
        id="filter-3333"
      >
        <feOffset
          dx="1"
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feColorMatrix
          values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.672230114 0"
          type="matrix"
          in="shadowOffsetOuter1"
        ></feColorMatrix>
      </filter>
      <pattern
        id="pattern-4444"
        width="512"
        height="512"
        x="55"
        y="-502.5"
        patternUnits="userSpaceOnUse"
      >
        <use href="#image-5"></use>
      </pattern>
      <image
        id="image-5"
        width="512"
        height="512"
        href="images/bgTile.png"
      ></image>
      <filter
        x="-1.5%"
        y="-2.2%"
        width="104.1%"
        height="105.9%"
        filterUnits="objectBoundingBox"
        id="filter-6666"
      >
        <feGaussianBlur
          stdDeviation="0.5"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="2"
          dy="2"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Layouts"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="BottomNav-Copy-2"
        transform="translate(-610.000000, -32.000000)"
        fill-rule="nonzero"
      >
        <g id="Group-14" transform="translate(43.000000, 22.500000)">
          <g id="Combined-Shape">
            <use
              fill="black"
              fill-opacity=".3"
              filter="url(#filter-3333)"
              href="#path-2222"
            ></use>
            <use fill="url(#linearGradient-1111)" href="#path-2222"></use>
            <use
              fill-opacity="0.9"
              fill="url(#pattern-4444)"
              href="#path-2222"
            ></use>
            <use
              fill="black"
              fill-opacity="1"
              filter="url(#filter-6666)"
              href="#path-2222"
            ></use>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const NavButtonRewards = (props) => {
  return (
    <svg
      width={props.size ? props.size : 60}
      height={props.size ? props.size : 60}
      viewBox="0 0 51 51"
      version="1.1"
      fill-rule="evenodd"
      transform={`scale(${props.scale})`}
      xmlns="http://www.w3.org/2000/svg"
      className="navButtonSVG"
    >
      <title>Shape</title>
      <defs>
        <linearGradient
          x1="50%"
          y1="0.914779974%"
          x2="50%"
          y2="100%"
          id="linearGradient-11111"
        >
          <stop
            className="navButtonColor"
            stop-color={props.highlight ? "#FF9500" : "#C0C0C099"}
            offset="30%"
          ></stop>

          <stop stop-color="#00000099" offset="100%"></stop>
        </linearGradient>
        <path
          d="M806,42 L806,62 L790.594595,62 C788.622703,62 787,60.3368421 787,58.3157895 L787,42 L806,42 Z M827,42 L827,58.3157895 C827,60.3368421 825.377297,62 823.405405,62 L808,62 L808,42 L827,42 Z M820.145571,12 C825.943856,12.0021016 828,15.0788725 828,17.7143034 C828,20.7860886 825.145268,24.6820164 819.018945,27.0004308 L828.266667,27 C830.314667,27 832,28.58 832,30.5 L832,30.5 L832,35.5 C832,37.42 830.314667,39 828.266667,39 L828.266667,39 L808,39 L808.001089,28.9798485 C807.856209,28.9840747 807.710493,28.9876457 807.56394,28.9905524 C807.508088,28.9970951 807.452141,29 807.395883,29 L807.000488,28.9984028 C806.869021,28.9994655 806.736897,29 806.604117,29 C806.547859,29 806.491912,28.9970955 806.43649,28.9913787 C806.289842,28.9876509 806.144458,28.9840891 805.999906,28.979875 L806,39 L785.733333,39 C783.685333,39 782,37.42 782,35.5 L782,35.5 L782,30.5 C782,28.58 783.685333,27 785.733333,27 L785.733333,27 L794.981055,27.0001836 C788.854732,24.6814826 786,20.7850731 786,17.712908 C786,15.0771513 788.058284,12 793.856568,12 C800.661608,12 804.78304,16.4621022 807.000188,20.9874901 C809.216585,16.4622085 813.338596,12 820.145571,12 Z M793.856568,15.152819 C791.610001,15.152819 789.209382,15.8254204 789.209382,17.712908 C789.209382,20.3885569 793.957045,25.2573035 805.283568,25.7980475 C805.299972,25.7317373 805.315977,25.6640469 805.332448,25.5959312 C804.313947,22.0355727 801.370257,15.152819 793.856568,15.152819 Z M820.145571,15.1545308 C812.631182,15.1545308 809.687149,22.0338732 808.665529,25.5927837 C808.682831,25.6607277 808.698853,25.7284255 808.714412,25.7956774 L808.606771,25.8013351 C814.653248,25.5239214 818.465994,24.0212634 820.661212,22.7413772 C823.705846,20.9655087 824.790618,18.9794783 824.790618,17.7122018 C824.790618,15.8249475 822.392139,15.1545308 820.145571,15.1545308 Z"
          id="path-22222"
        ></path>
        <filter
          x="-1.0%"
          y="-1.0%"
          width="104.0%"
          height="104.0%"
          filterUnits="objectBoundingBox"
          id="filter-33333"
        >
          <feOffset
            dx=".5"
            dy=".5"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feColorMatrix
            values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.672230114 0"
            type="matrix"
            in="shadowOffsetOuter1"
          ></feColorMatrix>
        </filter>
        <pattern
          id="pattern-44444"
          width="300"
          height="300"
          x="270"
          y="-500"
          patternUnits="userSpaceOnUse"
        >
          <use href="#image-55555"></use>
        </pattern>
        <image
          id="image-55555"
          width="300"
          height="300"
          href="images/bgTile.png"
        ></image>
        <filter
          x="-1.5%"
          y="-2.2%"
          width="104.1%"
          height="105.9%"
          filterUnits="objectBoundingBox"
          id="filter-66666"
        >
          <feGaussianBlur
            stdDeviation="0.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset
            dx="1"
            dy="1"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        id="Layouts"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="1"
          transform="translate(-1198.000000, -14.000000)"
          fill-rule="nonzero"
        >
          <g id="Topnavb" transform="translate(416.000000, 2.000000)">
            <g id="Combined-Shape">
              <use
                fill="black"
                fill-opacity=".3"
                filter="url(#filter-33333)"
                href="#path-22222"
              ></use>
              <use fill="url(#linearGradient-11111)" href="#path-22222"></use>
              <use
                fill-opacity="0.9"
                fill="url(#pattern-44444)"
                href="#path-22222"
              ></use>
              <use
                fill="black"
                fill-opacity="1"
                filter="url(#filter-66666)"
                href="#path-22222"
              ></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const NavButtonHome = (props) => (
  <svg
    height={props.size ? props.size : 60}
    viewBox="0 0 56 56"
    version="1.1"
    fill-rule="evenodd"
    transform={`scale(${props.scale})`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Shape</title>
    <defs>
      <linearGradient
        x1="50%"
        y1="0.914779974%"
        x2="50%"
        y2="100%"
        id="linearGradient-111111"
      >
        <stop
          className="navButtonColor"
          stop-color={props.highlight ? "#00000099" : "#C0C0C099"}
          offset="30%"
        ></stop>
        <stop stop-color="#00000099" offset="100%"></stop>
      </linearGradient>
      <path
        d="M31.9576051,10.5964258 C32.830748,9.80119139 34.1691446,9.80119139 35.0422874,10.5964258 L35.0422874,10.5964258 L55.6677097,29.3465778 L60.2511727,33.5127769 C61.1861919,34.3630107 61.2549433,35.813618 60.4046817,36.7508624 C59.9531783,37.2458564 59.3321598,37.5002283 58.7087779,37.5002283 C58.1587666,37.5002283 57.6064994,37.3031115 57.1664904,36.9021106 L57.1664904,36.9021106 L56.4171001,36.2214939 L56.4171001,62.7083971 C56.4171001,63.9733817 55.3927041,65 54.1254223,65 L54.1254223,65 L42.6668185,65 L42.6668185,46.6668547 C42.6668185,41.6115355 38.5554844,37.5003357 33.5,37.5003357 C28.4445156,37.5003357 24.3331815,41.6115355 24.3331815,46.6668547 L24.3331815,46.6668547 L24.3331815,65 L12.8745777,65 C11.6072959,65 10.5828999,63.9732743 10.5828999,62.7082897 L10.5828999,62.7082897 L10.5828999,36.2214939 L9.83350958,36.9021106 C8.90074635,37.756856 7.44783574,37.6881068 6.59531828,36.7508624 C5.74505674,35.813618 5.81380814,34.3630107 6.74882729,33.5127769 L6.74882729,33.5127769 L11.3321828,29.3465778 Z M33.5000527,42 C35.9817421,42 38,44.0630936 38,46.5999138 L38,46.5999138 L38,65 L29,65 L29,46.6000216 C29,44.0630936 31.0182579,42 33.5000527,42 Z"
        id="path-2x"
      ></path>
      <filter
        x="-0.9%"
        y="-0.9%"
        width="103.6%"
        height="103.6%"
        filterUnits="objectBoundingBox"
        id="filter-3"
      >
        <feOffset
          dx=".5"
          dy=".5"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feColorMatrix
          values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.672230114 0"
          type="matrix"
          in="shadowOffsetOuter1"
        ></feColorMatrix>
      </filter>
      <pattern
        id="pattern-4"
        width="400"
        height="400"
        x="-506"
        y="-502"
        patternUnits="userSpaceOnUse"
      >
        <use href="#image-5"></use>
      </pattern>
      <image
        id="image-5"
        width="400"
        height="400"
        href="images/bgTile.png"
      ></image>
      <filter
        x="-2.7%"
        y="-2.7%"
        width="107.3%"
        height="107.3%"
        filterUnits="objectBoundingBox"
        id="filter-6"
      >
        <feGaussianBlur
          stdDeviation="0.5"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="1"
          dy="1"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Layouts"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="8"
        transform="translate(-422.000000, -12.000000)"
        fill-rule="nonzero"
      >
        <g id="Topnavb" transform="translate(416.000000, 2.000000)">
          <g id="Combined-Shape">
            <use
              fill="black"
              fill-opacity=".3"
              filter="url(#filter-3)"
              href="#path-2x"
            ></use>
            <use fill="url(#linearGradient-111111)" href="#path-2x"></use>
            <use
              fill-opacity="0.9"
              fill="url(#pattern-4)"
              href="#path-2x"
            ></use>
            <use
              fill="black"
              fill-opacity="1"
              filter="url(#filter-6)"
              href="#path-2x"
            ></use>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
