const logError = (error) => {
  console.error(
    `Error importing component from ${error.url}:\n`,
    `Status: ${error.response.status}\n`,
    `Status Text: ${error.response.statusText}\n`,
    `Message: ${error.message}\n`,
    `Path: ${error.response.url}`
  );
};

const fetchComponent = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const responseBody = await response.text();
    const preElement = new DOMParser()
      .parseFromString(responseBody, "text/html")
      .querySelector("pre");
    const error = new Error();
    error.url = url;
    error.response = response;
    error.message = preElement ? preElement.textContent : `Cannot GET ${url}`;
    throw error;
  }

  return response.text();
};

const importComponents = async () => {
  let elements = document.querySelectorAll("[import]");

  while (elements.length > 0) {
    await Promise.all(
      Array.from(elements).map(async (element) => {
        const url = element.getAttribute("import");
        try {
          const component = await fetchComponent(url);
          element.outerHTML = component;
        } catch (error) {
          logError(error);
        }
      })
    );

    elements = document.querySelectorAll("[import]");
  }
};

const components = () => {
  if (document.readyState === "complete") {
    importComponents();
  }
};

document.onreadystatechange = components;
