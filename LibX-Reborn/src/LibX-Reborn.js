const config = {
  defaultGap: 8,
  globalNavSelector: ".Root__globalNav",
  libXGlobalNavSelectorClass: "global-libraryX",
  stylesheetSelectorClass: "libraryX-styles",
};

const checkForGlobalNav = () =>
  document.querySelector(".globalNav") ||
  document.querySelector(".Root__globalNav") ||
  false;

let isWindows = detectOS("win");
let isMac = detectOS("mac");

let isGlobalNavAvailable = checkForGlobalNav();
let globalNavElement = getGlobalNavElement();

const customStyles = `.Root__top-container,
:root .global-nav .Root__top-container,
.spotify__container--is-desktop .global-nav .Root__top-container {
  padding-top: 64px !important;
  grid-template-areas:
    "global-nav main-view right-sidebar"
    "left-sidebar main-view right-sidebar"
    "now-playing-bar now-playing-bar now-playing-bar" !important;
  grid-template-rows: auto 1fr auto !important;
}
.Root__globalNav,
.Root__globalNav.VWGwIHKvvfu0ry5ZqbxU{
  grid-area: global-nav !important;
}

.ppjvheuqvs8mmcHwKkK5 {
  margin-left: 8px;
  padding-left: unset;
}

.ZIgg4O2heaZyD8Z7o7MQ {
  display: none;
}

.IEulmRakQT_FgH43ov2a {
  display: none;
}

#Desktop_LeftSidebar_Id,
.Root__globalNav {
  transition: width 0.3s ease;
}

.Root__globalNav .main-globalNav-historyButtonsContainer,
.Root__globalNav .main-globalNav-searchSection,
.Root__globalNav .main-topBar-topbarContentRight {
  padding: 0 .25rem !important;
  -webkit-transform: none !important;
  transform: none !important;
}

.spotify__container--is-desktop.spotify__os--is-macos .Root__globalNav,
.spotify__container--is-desktop.spotify__os--is-windows .Root__globalNav,
.Root__globalNav {
  padding-block: 0 !important;
  padding-inline: 0 !important;
  padding-block-end: 0 !important;
  padding-block-start: 0 !important;
  padding: 0.25rem !important;
}
.main-globalNav-link-icon .Wrapper-medium-only {
  margin-left: 0.25rem;
}
.Root__globalNav {
  --library-bg-color: var(--background-base, var(--spice-main));
  height: unset;
  width: 100%;
  background-color: var(--library-bg-color);
  border-radius: 8px;
  padding-inline: unset !important;
  align-items: unset;
  padding: 8px;
  z-index: var(--above-everything-except-now-playing-bar-z-index, 5);
  margin: 0 !important;
}

.Root__globalNav .main-globalNav-navLink,
.Root__globalNav .main-globalNav-link-icon {
  background-color: unset;
  transform: unset;
  justify-content: unset;
  height: 3.25rem;
  max-height: 3.25rem;
  padding: 1rem 1rem 1rem 1.125rem;
  border: none !important;
}

.Root__nav-bar .LayoutResizer__resize-bar {
  height: 82vh;
  bottom: 0;
}

.main-actionButtons {
  display: inline-flex !important;
  animation: unset !important;
}

.main-globalNav-historyButtons > * {
  display: unset;
}

.main-globalNav-historyButtons {
  order: 1;
  display: unset;
  position: absolute;
  bottom: 8px;
  right: 8px;
}

.main-globalNav-historyButtonsContainer {
  display: grid;
  order: 0;
  z-index: -1;
}

.main-globalNav-searchSection {
  order: -1;
}

.Root__globalNav .Dp3xccI7c2f_JSJ8OHYu {
  margin-inline-start: unset;
}

.Root__globalNav,
.main-globalNav-searchContainer,
.aKOZdeebnsaeeMTiugmO {
  flex-direction: column !important;
}

.SFAoASy0S_LZJmYZ3Fh9 {
  background: unset;
  background-color: unset !important;
  border-bottom: unset;
}

.main-topBar-topbarContentRight {
  justify-content: unset;
}

.main-globalNav-iconText:not(.main-globalNav-link-icon) {
  font-size: 1rem;
  font-weight: 700;
  margin-inline-start: 0.5rem;
}

.main-globalNav-historyButtons,
.Root__globalNav .main-topBar-topbarContentRight {
  position: fixed !important;
  display: flex !important;
  top: 0;
  padding: 0.5rem;
  height: max-content;
  width: max-content;
}

._b3hhmbWtOY8_1M1mM1H {
  margin-inline: 0;
}

.zugTpa7GhjPIQmTCgBzw,
.main-globalNav-searchInputSection {
  position: fixed;
  top: 0.5rem;
  max-width: 25vw;
  margin-inline: unset;
}

.Root__globalNav .main-globalNav-historyButtons {
  top: 0 !important;
  left: var(--history-button-left, var(--panel-gap, 0.5rem)) !important;
}

.Root__globalNav .fmZ0hU6ImbDQi5qGWLvF,
.Root__globalNav .main-globalNav-searchContainer > span:nth-child(2),
.Root__globalNav .main-globalNav-searchContainer > span[role="presentation"],
.Root__globalNav .main-globalNav-searchContainer > .zugTpa7GhjPIQmTCgBzw,
.Root__globalNav .main-globalNav-searchContainer .main-globalNav-searchInputSection,
.Root__globalNav .main-globalNav-searchContainer > form,
.Root__globalNav ._b3hhmbWtOY8_1M1mM1H > form {
  position: fixed;
  top: var(--search-container-top, var(--panel-gap, 0.5rem)) !important;
  left: var(--search-container-left, var(--panel-gap, 0.5rem)) !important;
  width: 22rem;
  max-width: 25vw;
  height: fit-content;
}

.Root__globalNav .main-topBar-topbarContentRight {
  right: 0.5rem;
}

.spotify__container--is-desktop.spotify__os--is-windows .Root__globalNav .main-topBar-topbarContentRight {
  right: 10vw;
}

.main-globalNav-navLinkActive {
  background-color: rgba(var(--spice-rgb-selected-row), 0.1) !important;
  border-radius: 0.5rem !important;
}

#main:has(.oZT8iKL42zhLAm_zE5F5) .main-globalNav-textWrapper {
  display: none;
}

.Root__globalNav {
  display: flex;
  overflow: hidden;
  --card-gap: 0.25rem;
}

.custom-navlinks-scrollable_container {
  -webkit-app-region: no-drag;
  max-width: 100% !important;
  width: 100% !important;
}

.Root__globalNav .main-globalNav-searchContainer,
.Root__globalNav .search-searchCategory-categoryGrid > div[role="presentation"] {
  display: flex;
  flex-direction: column !important;
  min-width: 100% !important;
  width: 100% !important;
  row-gap: var(--card-gap);
}
.Root__globalNav .main-globalNav-navLink,
.Root__globalNav .search-searchCategory-categoryGrid > div[role="presentation"] > button {
  /* background-color: var(--spice-card); */
  border-radius: 0.5rem;
}

.custom-navlinks-scrollable_container {
  margin-top: var(--card-gap);
}

.custom-navlinks-scrollable_container div[role="presentation"] > * {
  margin: 0 !important;
}

.zugTpa7GhjPIQmTCgBzw:has(input:focus) {
  z-index: 5;
}

.Root__globalNav .main-globalNav-searchInputSection {
  display: flex;
  align-items: center;
  z-index: var(--above-main-and-now-playing-view-grid-area, 6);
}

.forceExpandSearchInput .main-globalNav-searchInputSection .main-globalNav-textWrapper {
  display: none;
}

.main-globalNav-textWrapper {
  margin-left: 1rem;
}

.main-globalNav-searchInputSection .main-globalNav-textWrapper {
  position: absolute;
  margin-left: 3.25rem;
  top: 50%;
  transform: translateY(-50%);
}

.main-globalNav-searchText {
  font-size: 1rem;
  font-weight: 700;
  flex-direction: row;
  display: flex;
  align-items: center;
  text-wrap: nowrap;
}

.forceExpandSearchInput .main-globalNav-searchInputContainer input {
  border: 1px solid var(--background-elevated-base);
}

.Root__globalNav .main-globalNav-navLink:hover,
.main-globalNav-searchInputContainer .SFAoASy0S_LZJmYZ3Fh9:hover,
.main-globalNav-searchInputContainer input:hover {
  background-color: rgba(var(--spice-rgb-selected-row), 0.1) !important;
}

.searchInputCollapsed .main-globalNav-searchInputContainer .jl5Sca1FSi1bSBIyQ72h {
  visibility: hidden;
}

.global-libraryX .main-globalNav-searchInputSection {
  min-width: 25vw;
  /* max-width: 25vw; */
}

.forceExpandSearchInput .main-globalNav-searchInputContainer .jl5Sca1FSi1bSBIyQ72h,
.searchInputCollapsed.forceExpandSearchInput .main-globalNav-searchInputContainer .jl5Sca1FSi1bSBIyQ72h {
  visibility: visible !important;
}

.custom-navlinks-scrollable_container {
  margin-top: 0;
}
.CCIGxtpAreSdwWRo14FE {
  width: 0 !important;
  height: 0 !important;
}
.TTB3lAVAhCK9Apl8quWw {
  -webkit-margin-start: 0px;
  -webkit-padding-start: 0px;
  padding-inline-start: 0px;
  margin-block-start: 0px;
}
.Kgjmt7IX5samBYUpbkBu,
.B9lb86gGqGGFcSZZ95bA {
  display: none;
}
.Root__globalNav.global-libraryX {
  width: 100%;
}
`;

const setElementPositions = () => {
  const historyButtonsElement = document.querySelector(
    `.Root__globalNav .main-globalNav-historyButtonsContainer > .main-globalNav-historyButtons,
	  .Root__globalNav .main-globalNav-historyButtons`
  );
  if (historyButtonsElement) {
    const historyButtonsWidth =
      historyButtonsElement.getBoundingClientRect().width || 80;

    const historyButtonLeftOffset =
      (isWindows ? 64 : isMac ? 80 : 0) + config.defaultGap;
    if (historyButtonsElement) {
      setElementPositionProperties("history-button", {
        left: historyButtonLeftOffset,
      });
    }

    if (historyButtonsWidth) {
      const searchLeftOffset =
        historyButtonsWidth +
        (historyButtonLeftOffset ?? 8) +
        config.defaultGap;

      setElementPositionProperties("search-container", {
        left: searchLeftOffset,
        top: config.defaultGap,
      });
    }
  }
};

const addButtonText = () => {
  const buttonElements = document.querySelectorAll(
    `.Root__globalNav .search-searchCategory-categoryGrid > div > button, 
	  .Root__globalNav .main-globalNav-link-icon, .Root__globalNav .main-globalNav-navLink`
  );

  for (const element of buttonElements) {
    if (
      element.querySelector(
        `.main-globalNav-textWrapper,
		  .main-globalNav-searchText.encore-text.encore-text-body-medium-bold`
      )
    ) {
      return;
    }

    const newTextElement = document.createElement("div");
    newTextElement.className =
      "main-globalNav-searchText encore-text encore-text-body-medium-bold";
    newTextElement.textContent =
      element.getAttribute("aria-label") || element.getAttribute("alt") || "";
    const newTextWrapperElement = document.createElement("span");
    newTextWrapperElement.className = "main-globalNav-textWrapper";
    newTextWrapperElement.appendChild(newTextElement);

    element.appendChild(newTextWrapperElement);
  }
};

const addGlobalNavStyles = () => {
  setElementPositions();
  addButtonText();
  addLibXClasses();
};

const attachGlobalNavObserver = () => {
  const globalNavObserver = new MutationObserver(addGlobalNavStyles);

  const globalNavButtonWrapperElement = document.querySelector(
    ".Root__globalNav .main-globalNav-historyButtonsContainer"
  );

  if (globalNavButtonWrapperElement) {
    globalNavObserver.observe(globalNavButtonWrapperElement, {
      childList: true,
      subtree: true,
    });
  } else {
    globalNavObserver.disconnect();
  }
};

const setElementPositionProperties = (
  propertyName,
  position = { left: 0, top: config.defaultGap, right: 0, bottom: 0 }
) => {
  if (!globalNavElement) return;

  for (const [key, value] of Object.entries(position)) {
    globalNavElement.style.setProperty(
      `--${propertyName}-${key}`,
      `${value}px`
    );
  }
};

/**
 * Adds libX class name to GlobalNav
 */
const addLibXClasses = () => {
  try {
    globalNavElement = getGlobalNavElement();
    if (globalNavElement) {
      globalNavElement.classList.add(config.libXGlobalNavSelectorClass);
    }
  } catch (error) {
    console.error(
      `[LibX-Reborn] Error adding class to global nav element: ${error.message}`
    );
  }
};

/**
 * Adds custom style sheet for libX
 */
const addLibXStyleSheet = () => {
  let styleElement = document.getElementById(
    `#${config.stylesheetSelectorClass}`
  );
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = config.stylesheetSelectorClass;
    styleElement.innerHTML = customStyles;
    document.head.appendChild(styleElement);
  } else {
    styleElement.innerHTML = customStyles;
  }
};

/**
 * Main const
 */
(async () => {
  while (!Spicetify?.showNotification) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  try {
    console.log("[LibX-Reborn] Running GlobalNav to LibraryX script...");

    let attempts = 0;
    const maxAttempts = 3;

    const checkGlobalNav = async () => {
      isWindows = detectOS("win");
      isMac = detectOS("mac");

      isGlobalNavAvailable = checkForGlobalNav();
      attempts++;

      if (isGlobalNavAvailable) {
        addLibXStyleSheet(); // add stylesheet

        addGlobalNavStyles();
        setTimeout(addGlobalNavStyles, 1000); // just to make sure every thing works

        attachGlobalNavObserver();
      } else if (attempts < maxAttempts) {
        // GlobalNav not found, wait and try again
        console.log("GlobalNav not found, retrying...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        checkGlobalNav();
      } else {
        const msg =
          "[LibX-Reborn] GlobalNav to Library Script is not available on this nav mode.";
        console.error(msg);
        Spicetify.showNotification(msg, true);
      }
    };

    await checkGlobalNav();
  } catch (error) {
    const msg = `[LibX-Reborn] Error running GlobalNav to LibraryX script:${error}`;
    console.error(msg);
    Spicetify.showNotification(msg, true);
  }
})();

function detectOS(os_name) {
  if (Spicetify.Platform?.operatingSystem) {
    return Spicetify.Platform?.operatingSystem
      .toLowerCase()
      .includes(os_name.toLowerCase());
  }

  if (Spicetify.Platform?.PlatformData?.os_name) {
    return Spicetify.Platform.PlatformData.os_name
      .toLowerCase()
      .includes(os_name.toLowerCase());
  }

  return false;
}

function getGlobalNavElement() {
  return document.querySelector(config.globalNavSelector);
}