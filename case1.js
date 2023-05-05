const products = [
    {
      name: "Product 1",
      tags: [
        "Group_Electric-Pallet-Jack-Parts",
        "Make_BT-Prime-Mover",
  
      ]
    },
    {
      name: "Product 2",
      tags: [
        "Group_Hand-Pallet-Jack-Parts",
        "Make_Toyota",
  
      ]
    },
    {
      name: "Product 3",
      tags: [
        "Group_Electric-Pallet-Jack-Parts",
        "Make_BT-Prime-Mover",
        
      ]
    }
  ];
  
  const collectionMetafield = "Group_Electric-Pallet-Jack-Parts/Make_BT-Prime-Mover";
  
  const collectionTags = collectionMetafield.split("/");
  
  const filteredProducts = products.filter(product => {
    return collectionTags.every(tag => product.tags.includes(tag));
  });
  
  console.log(filteredProducts);
  