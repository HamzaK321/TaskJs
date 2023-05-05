function findCombinationsFromText(text) {
  const tagList = text.split("-");
  const tags = {
    Group: "",
    Category: "",
    Subcategory: "",
    Make: "",
    Model: "",
    Diagram: "",
  };
  let error = false;

  for (let i = 0; i < tagList.length; i++) {
    const tag = tagList[i].split("_");
    const tagName = tag[0];
    const tagValue = tag[1];

    if (!tags.hasOwnProperty(tagName)) {
      console.log(
        `Invalid tag: ${tagName}. Skipping the rest of the text...`
      );
      error = true;
      break;
    }

    if (tags[tagName] !== "" && tagName !== "Diagram") {
      console.log(
        `Multiple occurrences of ${tagName} tag. Skipping the rest of the text...`
      );
      error = true;
      break;
    }

    if (
      (tagName === "Group" && tags.Category !== "") ||
      (tagName === "Category" && tags.Group === "") ||
      (tagName === "Subcategory" && (tags.Group === "" || tags.Category === "")) ||
      (tagName === "Make" && (tags.Group === "" || tags.Category === "" || tags.Subcategory === "")) ||
      (tagName === "Model" && (tags.Group === "" || tags.Category === "" || tags.Subcategory === "" || tags.Make === ""))
    ) {
      console.log(
        `Invalid tag order. Skipping the rest of the text...`
      );
      error = true;
      break;
    }

    tags[tagName] = tagValue;
  }

  if (error) {
    return [];
  }

  const combinations = [];

  if (tags.Group !== "" && tags.Category !== "") {
    combinations.push(`${tags.Group}_${tags.Category}`);
  }

  if (
    tags.Group !== "" &&
    tags.Category !== "" &&
    tags.Subcategory !== ""
  ) {
    combinations.push(
      `${tags.Group}_${tags.Category}_${tags.Subcategory}`
    );
  }

  if (
    tags.Group !== "" &&
    tags.Category !== "" &&
    tags.Subcategory !== "" &&
    tags.Make !== ""
  ) {
    combinations.push(
      `${tags.Group}_${tags.Category}_${tags.Subcategory}_${tags.Make}`
    );
  }

  if (
    tags.Group !== "" &&
    tags.Category !== "" &&
    tags.Subcategory !== "" &&
    tags.Make !== "" &&
    tags.Model !== ""
  ) {
    combinations.push(
      `${tags.Group}_${tags.Category}_${tags.Subcategory}_${tags.Make}_${tags.Model}`
    );
  }

  if (tags.Diagram !== "") {
    combinations.push(tags.Diagram);
  }

  return combinations;
}
console.log(
  findCombinationsFromText(
    "Category_Switches-Group_Electric-Pallet-Jack-Parts-Subcategory_Ignition-Switch"
  )
);