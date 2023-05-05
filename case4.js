const products = [  {    name: "Product 1",    tags: [      "Group_Electric-Pallet-Jack-Parts",      "Category_Switches",      "Subcategory_Ignition-Switch",      "Make_BT-Prime-Mover",      "Model_ABC",      "Diagram_XYZ"    ]
    },
    {
      name: "Product 2",
      tags: [
        "Group_Hand-Pallet-Jack-Parts",
        "Category_Switches",
        "Subcategory_Ignition-Switch",
        "Make_Toyota",
        "Model_DEF",
        "Diagram_WXY"
      ]
    },
    {
      name: "Product 3",
      tags: [
        "Group_Electric-Pallet-Jack-Parts",
        "Category_Group_B",
        "Subcategory_E",
        "Make_BT-Prime-Mover",
        "Model_GHI",
        "Diagram_XYZ"
      ]
    },
    {
      name: "Product 4",
      tags: [
        "Group_Electric-Pallet-Jack-Parts",
        "Category_Switches",
        "Subcategory_Ignition-Switch",
        "Make_BT-Prime-Mover",
        "Model_XYZ",
        "Diagram_WXY"
      ]
    }
  ];
  
  function findCombinationsFromText(text) {
    const sanitizedText = text.replace(/[^a-zA-Z0-9,_-]/g, "");
    const tags = sanitizedText.split(",");
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
  console.log(findCombinationsFromText('--Group_Electric-Pallet-Jack-Parts, Category_Switche@%s-!!'));
  