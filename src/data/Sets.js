import image1 from "./images/Dans_Bday_Image.jpg";
import image2 from "./images/baby.png";
import image3 from "./images/wreath.png";
import image4 from "./images/summer.png";

const sets = [
    {
      id: 1,
      title: "Summer Vibes",
      image: image4,
      date: "August 2022",
      tags: ["house", "techno", "disco"],
      mixIds: [1, 2, 3],
    },
    {
      id: 2,
      title: "Winter Chill",
      image: image3,
      date: "December 2022",
      tags: ["downtempo", "ambient"],
      mixIds: [1, 3],
    },
    {
      id: 3,
      title: "Dan's Bday",
      image: image1,
      date: "December 2022",
      tags: ["downtempo", "ambient"],
      mixIds: [4, 2],
    },
    {
      id: 4,
      title: "Claudia's Baby Shower",
      image: image2,
      date: "December 2022",
      tags: ["downtempo", "ambient"],
      mixIds: [1, 3, 4],
    }
    // additional sets...
  ];
  
  export default sets;
  