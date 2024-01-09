[...document.querySelectorAll("[import]")].forEach(
  async (element) =>
    (element.outerHTML = await (
      await fetch(element.getAttribute("import"))
    ).text())
);
