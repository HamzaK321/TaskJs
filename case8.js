
  
  
  
//   Case 2 :==========================================
     // We have to use "/" to seperate the tags from names
  
  
//   case 3 : ======================
 
  
  
//   Case 4 :=========================================//
   
//   Case 5 : 
  
//   case 6 : ===========================================//
  
 
//   case 8 : 
  
  function findCombinationsFromText(text) {
    const sanitizedText = text.replace(/[^a-zA-Z0-9,_-]/g, "");
    const tags = sanitizedText.split("-");
    const result = [];
  
    const hierarchyOrder = ["Group", "Category", "Subcategory", "Make", "Model", "Diagram"];
    const tagsWithOrder = {};
  
    // Assign order to each tag
    for (let tag of tags) {
      let isValid = false;
      for (let i = 0; i < hierarchyOrder.length; i++) {
        const hierarchyTag = hierarchyOrder[i];
        if (tag.startsWith(`${hierarchyTag}_`)) {
          tagsWithOrder[tag] = i;
          isValid = true;
          break;
        }
      }
      if (!isValid) {
        return result; // return empty array for invalid tag
      }
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
  
  console.log(findCombinationsFromText('Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-WrongPrefix_Test')); // output: []