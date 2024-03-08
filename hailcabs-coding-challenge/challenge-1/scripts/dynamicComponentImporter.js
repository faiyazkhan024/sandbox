const scriptTag = document.currentScript;

const textToHtml = (text, selector) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(text, "text/html");
  return html.querySelector(selector) ?? html;
};

const logError = (error) => {
  console.error(
    `Error importing component from ${error.url}:\n`,
    `Status: ${error.response.status}\n`,
    `Status Text: ${error.response.statusText}\n`,
    `Message: ${error.message}\n`,
    `Path: ${error.response.url}`
  );
};

const getFallbackOrErrorUrl = (element) => {
  if (element.hasAttribute("fallback")) {
    return element.getAttribute("fallback");
  }
  if (element.hasAttribute("error")) {
    return element.getAttribute("error");
  }
  if (scriptTag.hasAttribute("fallback")) {
    return scriptTag.getAttribute("fallback");
  }
  if (scriptTag.hasAttribute("error")) {
    return scriptTag.getAttribute("error");
  }
  return null;
};

const fetchComponent = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const responseText = await response.text();
    const preElement = textToHtml(responseText, "pre");
    const error = new Error();
    error.url = url;
    error.response = response;
    error.message = preElement ? preElement.textContent : `Cannot GET ${url}`;
    throw error;
  }

  return response.text();
};

const handleError = async (error, element) => {
  const foeUrl = getFallbackOrErrorUrl(element);
  if (!foeUrl) return element.remove();

  const foeComponent = await fetchComponent(foeUrl);
  const foeHtml = textToHtml(foeComponent, "body");
  const errorMessageTag = foeHtml.querySelector("[data-error-message]");
  if (errorMessageTag) errorMessageTag.innerHTML = error.message;
  element.outerHTML = foeHtml.innerHTML;
};

const importComponents = async () => {
  let elements = document.querySelectorAll("[import]");

  while (elements.length > 0) {
    await Promise.all(
      Array.from(elements).map(async (element) => {
        try {
          element.outerHTML = await fetchComponent(
            element.getAttribute("import")
          );
        } catch (error) {
          logError(error);
          await handleError(error, element);
        }
      })
    );

    elements = document.querySelectorAll("[import]");
  }
};

const main = () => {
  if (document.readyState === "complete") {
    importComponents();
  }
};

document.onreadystatechange = main;
