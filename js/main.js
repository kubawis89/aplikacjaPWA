window.onload = () => {
  "use strict";
  if ("serwiceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};
