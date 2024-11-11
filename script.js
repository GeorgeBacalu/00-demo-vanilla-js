const content = [
  [
    "React is extremely popular",
    "It makes building complex interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g. useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

const whyReactButton = document.getElementById("why-react-button");
const coreFeaturesButton = document.getElementById("core-features-button");
const resourcesButton = document.getElementById("resources-button");
const tabContent = document.getElementById("tab-content");

whyReactButton.addEventListener("click", handleClick);
coreFeaturesButton.addEventListener("click", handleClick);
resourcesButton.addEventListener("click", handleClick);

function handleClick(event) {
  const buttonId = event.target.id;
  highlightButton(event.target);
  if (buttonId === "why-react-button") {
    displayContent(content[0]);
  } else if (buttonId === "core-features-button") {
    displayContent(content[1]);
  } else {
    displayContent(content[2]);
  }
}

function highlightButton(button) { // clear existing styles and set new one
  whyReactButton.className = "";
  coreFeaturesButton.className = "";
  resourcesButton.className = "";
  button.className = "active";
}

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = ""; // clear existing content
  list.innerHTML = listContent; // insert new content
  tabContent.append(list);
}

displayContent(content[0]); // initially show this content