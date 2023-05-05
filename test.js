function findCombinationsFromText(text) {
    // Step 1: Parse the input string to extract the tags
    let tags = text.split(/[^\w\d]+/).filter((t) => t.trim()).map((t) => t.trim().replace(/-/g, '_'));
  
    // Step 2: Validate the tags
    let valid_prefixes = ['Group', 'Category', 'Subcategory', 'Make', 'Model', 'Diagram'];
    let combinations = [];
    let current_combination = [];
  
    for (let tag of tags) {
      let [prefix, value] = tag.split('_', 2);
      if (!valid_prefixes.includes(prefix)) {
        return [];
      } else if (prefix === 'Group' && current_combination.length > 0) {
        // Multiple Group tags are not allowed
        return [];
      } else if (prefix === 'Make' && (current_combination.length === 0 || !current_combination.includes('Subcategory'))) {
        // Make should come after Subcategory or Category or Group
        if (current_combination.includes('Category')) {
          current_combination.splice(current_combination.indexOf('Category') + 1, 0, tag);
        } else if (current_combination.includes('Subcategory')) {
          current_combination.splice(current_combination.indexOf('Subcategory') + 1, 0, tag);
        } else if (current_combination.includes('Group')) {
          current_combination.splice(current_combination.indexOf('Group') + 1, 0, tag);
        } else {
          current_combination.push(tag);
        }
      } else if (prefix === 'Model' && (current_combination.length === 0 || !current_combination.includes('Make'))) {
        // Model should come after Make or Subcategory or Category or Group
        if (current_combination.includes('Make')) {
          current_combination.splice(current_combination.indexOf('Make') + 1, 0, tag);
        } else if (current_combination.includes('Category')) {
          current_combination.splice(current_combination.indexOf('Category') + 1, 0, tag);
        } else if (current_combination.includes('Subcategory')) {
          current_combination.splice(current_combination.indexOf('Subcategory') + 1, 0, tag);
        } else if (current_combination.includes('Group')) {
          current_combination.splice(current_combination.indexOf('Group') + 1, 0, tag);
        } else {
          current_combination.push(tag);
        }
      } else if (prefix === 'Diagram' && (current_combination.length === 0 || !current_combination.includes('Model'))) {
        // Diagram should come after Model or Make or Subcategory or Category or Group
        if (current_combination.includes('Model')) {
          current_combination.splice(current_combination.indexOf('Model') + 1, 0, tag);
        } else if (current_combination.includes('Make')) {
          current_combination.splice(current_combination.indexOf('Make') + 1, 0, tag);
        } else if (current_combination.includes('Category')) {
          current_combination.splice(current_combination.indexOf('Category') + 1, 0, tag);
        } else if (current_combination.includes('Subcategory')) {
          current_combination.splice(current_combination.indexOf('Subcategory') + 1, 0, tag);
        } else if (current_combination.includes('Group')) {
        current_combination.splice(current_combination.indexOf('Group') + 1, 0, tag);
        } else {
        current_combination.push(tag);
        }
        combinations.push(current_combination);
        current_combination = [];
        } else {
        current_combination.push(tag);
        }
        }
        
        // Step 3: Add the last combination to the list of combinations
        if (current_combination.length > 0) {
        combinations.push(current_combination);
        }
        
        // Step 4: Generate all possible combinations
        let result = [];
        for (let i = 0; i < combinations.length; i++) {
        let combination = combinations[i];
        let sub_combinations = [[]];
        for (let j = 0; j < combination.length; j++) {
        let tag = combination[j];
        let new_sub_combinations = [];
        for (let k = 0; k < sub_combinations.length; k++) {
        let sub_combination = sub_combinations[k];
        let values = tag.split('_').slice(1);
        for (let value of values) {
        new_sub_combinations.push([...sub_combination,`${tag}:${value}`]);
        }
        }
        sub_combinations = new_sub_combinations;
        }
        result = [...result, ...sub_combinations];
        }
        
        return result;
        }
        
        // Example usage:
        let text = "Group_g1 Category_c1 Subcategory_sc1 Make_m1 Model_m2 Diagram_d1";
        let combinations = findCombinationsFromText(text);
        console.log(combinations);
  