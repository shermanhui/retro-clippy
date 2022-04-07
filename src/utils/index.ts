import { retroJSON } from "../types/index";

export const formatJSONtoHTMLList = (retroJSON: retroJSON): HTMLElement => {
  const container = document.createElement("div");
  container.setAttribute("id", "extracted-metro-retro-list-element");
  const unorderedList = document.createElement("ul");
  container.append(unorderedList);
  document.body.append(container);

  const createListNode = (
    textContent: string,
    listNodeId: string = "",
    withHeader: boolean = false
  ) => {
    let listNode = document.createElement("li");

    if (listNodeId) {
      listNode.setAttribute("id", listNodeId);
    }

    if (!withHeader) {
      listNode.textContent = textContent;
    } else {
      let header = document.createElement("strong");
      header.textContent = textContent;
      listNode.append(header);
    }

    return listNode;
  };

  for (const panel in retroJSON) {
    let panelListNode = createListNode(panel, `panelList-${panel}`, true);
    unorderedList.append(panelListNode);

    let groupedNoteList = document.createElement("ul");
    groupedNoteList.setAttribute("id", `groupedNoteListFor-${panel}`);
    panelListNode.append(groupedNoteList);

    for (let note of retroJSON[panel]) {
      if (
        note.group &&
        !document.getElementById(`groupedNoteListNodeFor-${note.group}`)
      ) {
        const groupedNoteListNode = createListNode(
          note.group,
          `groupedNoteListNodeFor-${note.group}`,
          true
        );
        groupedNoteList.append(groupedNoteListNode);

        let noteGroupingList = document.createElement("ul");
        noteGroupingList.setAttribute("id", `${note.group}-groupedNotes`);
        groupedNoteListNode.append(noteGroupingList);
      }

      if (document.getElementById(`groupedNoteListNodeFor-${note.group}`)) {
        document
          .getElementById(`${note.group}-groupedNotes`)!
          .append(createListNode(`${note.content} - ${note.author.name}`));
      }

      if (!note.group) {
        document
          .getElementById(`groupedNoteListFor-${panel}`)!
          .append(createListNode(note.content));
      }
    }
  }

  window.getSelection()!.removeAllRanges();

  let range = document.createRange();

  range.selectNode(container);
  window.getSelection()!.addRange(range);
  document.execCommand("copy");
  window.getSelection()!.removeAllRanges();

  document.body.removeChild(container);

  return container;
};

// TODO: fix TS errors for:
// 1. document.getByElementId -> can be null
// 2. fix retroJSON[key] TS error -> keys aren't guaranteed to be strings in a JSON type, perhaps create a custom interface // RESOLUTION -> define custom interface
// 3. fix window.getSelection() returning null // RESULTION -> resolve by using ! operator as we are confident the window object will exist

// TODO: Continue refactor of list item creation to be cleaner
// TODO: Add note author
