function findCombinationsFromText(text) {
    const tags = text.split(", ");
    const result = [];
    
    for (let i = tags.length; i >= 1; i--) {
      const combinations = getCombinations(tags, i);
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
  
  const combinations = findCombinationsFromText('Group_Electric-Pallet-Jack-Parts, Category_Switches, Subcategory_Ignition-Switch');
  console.log(combinations);