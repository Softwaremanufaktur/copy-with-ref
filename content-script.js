/*
copy the selected text to clipboard
*/
function copySelection() {
    let selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        navigator.clipboard.writeText(selectedText + "\n\n" + window.location.href + " - accessed at " + new Date().toUTCString());
    }
}

/*
Add copySelection() as a listener to keydown events.
*/
document.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  if (event.ctrlKey && event.altKey && event.keyCode == 67) {
    copySelection();
  }

});