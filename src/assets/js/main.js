// Functions

export function toggleHide(id) {
  document.getElementById(id).style.display = "none";
}

export async function loadContent(url, tagName) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementsByTagName(tagName).innerHTML = html;
}
