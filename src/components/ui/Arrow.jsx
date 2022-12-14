/* eslint-disable react/jsx-props-no-spreading */
import React from "react"

function Arrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        enableBackground: "new 0 0 49.656 49.656",
      }}
      xmlSpace="preserve"
      viewBox="10.29 0 29.07 49.66"
      {...props}
    >
      <path
        style={{
          fill: "#fff",
        }}
        d="m14.535 48.242-2.828-2.828 20.585-20.586L11.707 4.242l2.828-2.828 23.414 23.414z"
      />
      <path
        style={{
          fill: "#fff",
        }}
        d="m14.535 49.656-4.242-4.242 20.585-20.586L10.293 4.242 14.535 0l24.829 24.828-24.829 24.828zm-1.414-4.242 1.414 1.414 22-22-22-22-1.414 1.414 20.585 20.586-20.585 20.586z"
      />
    </svg>
  )
}

export default Arrow
