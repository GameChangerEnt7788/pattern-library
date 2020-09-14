export const NavButtonImmerse = (props) => (
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
        id="linearGradient-22"
      >
        <stop stop-color="#C0C0C099" offset="0%"></stop>
        <stop stop-color="#000000CC" offset="100%"></stop>
      </linearGradient>
      <path
        d="M263.416,31.475712 C274.472,28.7935184 285.918,28.8897799 296.586,31.475712 L296.586,31.475712 L318.606,36.8138461 C324.14,38.1702572 328,43.4449462 328,49.6406821 L328,49.6406821 L328,80.9037704 C328,87.0995063 324.14,92.3720076 318.614,93.7262309 L318.614,93.7262309 L295.114,99.4078433 C293.884,99.6900643 292.594,99.3159574 291.646,98.3970982 L291.646,98.3970982 L283.006,90.017978 C282.948,89.9610962 282.888,89.899839 282.832,89.8407694 C281.268,88.1299412 278.726,88.1343167 277.168,89.8385817 C277.112,89.899839 277.054,89.9610962 276.994,90.017978 L276.994,90.017978 L268.354,98.3970982 C267.616,99.1146835 266.668,99.5 265.7,99.5 C265.43,99.5 265.158,99.4691006 264.888,99.4056555 L264.888,99.4056555 L263.45,99.0753038 L241.394,93.7306065 C235.86,92.3720076 232,87.0995063 232,80.9037704 L232,80.9037704 L232,49.6406821 C232,43.4449462 235.86,38.1702572 241.386,36.8160338 L241.386,36.8160338 Z M297.879656,51.3930041 C291.280619,51.3930041 285.91404,57.2714918 285.91404,64.5 C285.91404,71.7285082 291.280619,77.6069959 297.879656,77.6069959 C304.478693,77.6069959 309.845272,71.7285082 309.845272,64.5 C309.845272,57.2714918 304.478693,51.3930041 297.879656,51.3930041 Z M262.120344,51.3930041 C255.521307,51.3930041 250.154728,57.2714918 250.154728,64.5 C250.154728,71.7285082 255.521307,77.6069959 262.120344,77.6069959 C268.719381,77.6069959 274.08596,71.7285082 274.08596,64.5 C274.08596,57.2714918 268.719381,51.3930041 262.120344,51.3930041 Z"
        id="path-11"
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
        width="800"
        height="800"
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
        transform="translate(-43.000000, -22.000000)"
        fill-rule="nonzero"
      >
        <g id="Combined-Shape2">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-11)"
            href="#path-11"
          ></use>
          <use fill="url(#linearGradient-22)" href="#path-11"></use>
          <use fill-opacity=".5" fill="url(#pattern-11)" href="#path-11"></use>
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-22)"
            href="#path-11"
          ></use>
        </g>
      </g>
    </g>
  </svg>
);
