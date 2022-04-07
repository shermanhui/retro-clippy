import { formatJSONtoHTMLList } from "../utils/index";

const showForPages = ["https://metroretro.io/board/*"];

chrome.contextMenus.create({
  id: "clippy-retro",
  title: "Extract JSON to List",
  documentUrlPatterns: showForPages,
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(({ selectionText = "" }, tab) => {
  const retroJSON = JSON.parse(selectionText);

  chrome.scripting.executeScript(
    {
      target: { tabId: tab?.id || 1 }, // TODO: fix this TS error workaround, tab.id is not guaranteed but a tabId is required here
      func: formatJSONtoHTMLList,
      args: [retroJSON],
    },
    (results) => console.log("hello", ...results)
  );
});
