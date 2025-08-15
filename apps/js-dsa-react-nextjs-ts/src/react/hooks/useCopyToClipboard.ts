import React from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard() {
  const [isCopied, setCopied] = React.useState(false);


  function handleCopy(text: string) {
    if (typeof text === "string" || typeof text === "number") {
      //copy
      copy(text.toString())
      setCopied(true)
    } else {
      // dont copy
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
      setCopied(false)
    }
  }

  return [isCopied, handleCopy];
}