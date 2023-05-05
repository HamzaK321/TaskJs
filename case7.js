function findCombinationsFromText(text) {
    const sanitizedText = text.replace(/[^a-zA-Z0-9,_-]/g, "");
    const tags = sanitizedText.split("-");
    const result = [];
  
    const hierarchyOrder = ["Group", "Category", "Subcategory", "Make", "Model", "Diagram"];
    const tagsWithOrder = {};
  
    // Assign order to each tag
    for (let tag of tags) {
      for (let i = 0; i < hierarchyOrder.length; i++) {
        const hierarchyTag = hierarchyOrder[i];
        if (tag.startsWith(`${hierarchyTag}_`)) {
          // Check if tag has already been assigned an order
          if (tagsWithOrder[hierarchyTag] !== undefined) {
            console.log(`Invalid input. Multiple occurrences of ${hierarchyTag} tag.`);
            return result;
          }
          tagsWithOrder[hierarchyTag] = i;
          break;
        }
      }
    }
  
    // Check if all hierarchy tags are present
    if (Object.keys(tagsWithOrder).length !== hierarchyOrder.length) {
      console.log("Invalid input. Missing hierarchy tags.");
      return result;
    }
  
    // Sort tags by their order
    const sortedTags = Object.keys(tagsWithOrder).sort((a, b) => {
      return tagsWithOrder[a] - tagsWithOrder[b];
    });
  
    // Get combinations for each length
    for (let i = sortedTags.length; i >= 1; i--) {
      const combinations = getCombinations(sortedTags, i);
      result.push(...combinations);
    }
  
    return result;
  }
  
  function getCombinations(tags, length) {
    const result = [];
  
    if (length === 1) {
      for (let tag of tags) {
        result.push([tag]);
      }
    } else {
      const smallerCombinations = getCombinations(tags, length - 1);
  
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
  
        for (let j = 0; j < smallerCombinations.length; j++) {
          const smallerCombination = smallerCombinations[j];
  
          if (!smallerCombination.includes(tag)) {
            result.push([tag, ...smallerCombination]);
          }
        }
      }
    }
  
    return result;
  }
  console.log(findCombinationsFromText('Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-Group_Test'));