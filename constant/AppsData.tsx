function getRandomSize() {
  const sizes = [
    "13 MB",
    "25 MB",
    "50 MB",
    "75 MB",
    "100 MB",
    "200 MB",
    "500 MB",
    "750 MB",
    "1 GB",
    "1.2 GB",
    "2 GB",
  ];
  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
}

const AppsData = [
  {
    id: 1,
    img: "https://qn-resource.playmods.net/prd/image/6bf75698-50d8-49bd-941c-bf056fd37f1d.png-160webp",
    name: "Signal Strength",
    catagory: {
      main: "Premium Unlocked",
      sub: "Tools",
    },
    rates: 6.1,
    size: getRandomSize(),
  },
  {
    id: 2,
    img: "https://qn-resource.playmods.net/prd/image/a7615142-d536-403d-b24e-3dd4411cfb12.png-160webp",
    name: "HD Camera Pro Edition",
    catagory: {
      main: "Full Version",
      sub: "Photography",
    },
    rates: 6.1,
    size: getRandomSize(),
  },
  {
    id: 3,
    img: "https://qn-resource.playmods.net/prd/image/50404c5b-b744-4024-9bc9-f3efb2d47326.png-160webp",
    name: "App Manager",
    catagory: {
      main: "Premium Unlocked",
      sub: "Tools",
    },
    rates: 6.8,
    size: getRandomSize(),
  },
  {
    id: 4,
    img: "https://qn-resource.playmods.net/prd/image/e3ebde37-758f-4940-8e69-8f9c6c394376.png-160webp",
    name: "MuscleWiki: Workout & Fitness",
    catagory: {
      main: "Premium Unlocked",
      sub: "Health & Fitness",
    },
    rates: 7.1,
    size: getRandomSize(),
  },
  {
    id: 5,
    img: "https://qn-resource.playmods.net/prd/image/2834a0a4-9578-4348-84aa-6233e348ba22.png-160webp",
    name: "AI Video Face Swap AI Headshot",
    catagory: {
      main: "Premium Unlocked",
      sub: "Photography",
    },
    rates: 9.2,
    size: getRandomSize(),
  },
  {
    id: 6,
    img: "https://qn-resource.playmods.net/prd/image/a94990cc-f320-4126-91a4-8e524203aaa8.png-160webp",
    name: "Flow Minimalist Launcher",
    catagory: {
      main: "Premium Unlocked",
      sub: "Personalization",
    },
    rates: 5.7,
    size: getRandomSize(),
  },
  {
    id: 7,
    img: "https://qn-resource.playmods.net/prd/image/0c874052-ed46-42dd-9752-539514364a1c.png-160webp",
    name: "Faded - Icon Pack",
    catagory: {
      main: "Full Version",
      sub: "Personalization",
    },
    rates: 6.8,
    size: getRandomSize(),
  },
  {
    id: 8,
    img: "https://qn-resource.playmods.net/prd/image/512c7963-0bee-4fae-8d2c-cb190282c006.png-160webp",
    name: "Ethwork: Netstat GUI",
    catagory: {
      main: "Premium Unlocked",
      sub: "Tools",
    },
    rates: 6.2,
    size: getRandomSize(),
  },
  {
    id: 9,
    img: "https://qn-resource.playmods.net/prd/image/e0db4c1f-9326-4630-9a6b-93fd8f01f8de.png-160webp",
    name: "Logic Circuit Simulator Pro",
    catagory: {
      main: "Premium Unlocked",
      sub: "Education",
    },
    rates: 6.1,
    size: getRandomSize(),
  },
];

export default AppsData;
