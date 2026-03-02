const buildBtn = document.getElementById("buildBtn");
const builder = document.getElementById("builder");
const flavor1 = document.getElementById("flavor1");
const flavor2 = document.getElementById("flavor2");
const drizzle = document.getElementById("drizzle");
const topScoop = document.getElementById("topScoop");
const bottomScoop = document.getElementById("bottomScoop");
const coneSummary = document.getElementById("coneSummary");
const toppingInputs = document.querySelectorAll(".check-item input");

const scoopColors = {
  vanilla: "#f8e7a2",
  chocolate: "#7b4b2a",
  strawberry: "#ff8fb1",
  banana: "#ffe36e",
  peach: "#ffbd8a",
  orange: "#ff9f45",
  lemon: "#fff066",
  watermelon: "#ff6f7d",
};

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function updateCone() {
  const topFlavor = flavor1.value;
  const bottomFlavor = flavor2.value;
  const selectedToppings = Array.from(toppingInputs)
    .filter((input) => input.checked)
    .map((input) => input.value);
  const selectedDrizzle = drizzle.value;

  topScoop.style.background = scoopColors[topFlavor];
  bottomScoop.style.background = scoopColors[bottomFlavor];

  const toppingText = selectedToppings.length
    ? selectedToppings.join(", ")
    : "no toppings";

  const drizzleText =
    selectedDrizzle === "None" ? "no drizzle" : selectedDrizzle;

  coneSummary.textContent = `Your cone: ${capitalize(topFlavor)} + ${capitalize(bottomFlavor)} with ${toppingText} and ${drizzleText}.`;
}

buildBtn.addEventListener("click", () => {
  builder.classList.add("active");
  builder.scrollIntoView({ behavior: "smooth" });
  updateCone();
});

flavor1.addEventListener("change", updateCone);
flavor2.addEventListener("change", updateCone);
drizzle.addEventListener("change", updateCone);
toppingInputs.forEach((input) => input.addEventListener("change", updateCone));

updateCone();