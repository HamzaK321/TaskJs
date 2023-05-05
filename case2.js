const products = [
    {
      name: "Product 1",
      tags: [
        "Group_Electric-Pallet-Jack-Parts",
        "Category_Group_A",
        "Subcategory_C",
        "Make_BT-Prime-Mover",
        "Model_ABC",
        "Diagram_XYZ"
      ]
    },
    {
      name: "Product 2",
      tags: [
        "Group_Hand-Pallet-Jack-Parts",
        "Category_Group_A",
        "Subcategory_D",
        "Make_Toyota",
        "Model_DEF",
        "Diagram_WXY"
      ]
    },
    {
      name: "Product 3",
      tags: [
        "Group_Electric-Pallet-Jack-Parts",
        "Category_Switches",
        "Subcategory_Ignition-Switch",
        "Make_BT-Prime-Mover",
        "Model_GHI",
        "Diagram_XYZ"
      ]
    }
  ];
  
  const collectionMetafield = "Group_Electric-Pallet-Jack-Parts/Category_Switches/Subcategory_Ignition-Switch";
  
  const collectionTags = collectionMetafield.split("/");
  
  const filteredProducts = products.filter(product => {
    return collectionTags.every(tag => product.tags.includes(tag));
  });
  
  console.log(filteredProducts);
  
