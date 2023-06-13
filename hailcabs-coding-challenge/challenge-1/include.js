[...document.getElementsByTagName("include")].forEach(async (element) => {
  try {
    element.innerHTML = await await fetch(element.getAttribute("src"));
  } catch {
    element.innerHTML = "No such File or Directory is Found";
  }
});
