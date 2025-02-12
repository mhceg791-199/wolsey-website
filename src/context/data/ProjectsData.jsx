const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");
// test for deploy on github
const projectsData = [
  // ==========================================================================
  // ==========================================================================
  {
    name: "Harbour Landing Business Park",
    slug: slugify("Harbour Landing Business Park"),
    imgs: [
      "/projectss/Harbour Landing Business Park/1.webp",
      "/projectss/Harbour Landing Business Park/2.webp",
    ],
    industry: "Administrative",
    status: "Completed",
  },

  {
    name: "Latitude 51 Airdrie",
    slug: slugify("Latitude 51 Airdrie"),
    imgs: [
      "/projectss/Latitude 51 Airdrie/1.webp",
      "/projectss/Latitude 51 Airdrie/2.webp",
    ],
    industry: "Residential",
    status: "Completed",
  },
  {
    name: "The Mark 101",
    slug: slugify("The Mark 101"),
    imgs: ["/projectss/The Mark 101/1.webp", "/projectss/The Mark 101/2.webp"],
    industry: "Residential",
    status: "Completed",
  },

  {
    name: "William Off Whyte",
    slug: slugify("William Off Whyte"),
    imgs: [
      "/projectss/William Off Whyte/1.webp",
      "/projectss/William Off Whyte/2.webp",
      "/projectss/William Off Whyte/3.webp",
      "/projectss/William Off Whyte/4.webp",
    ],
    industry: "Residential",
    status: "Completed",
  },
  {
    name: "Country Hills Toyota Addition",
    slug: slugify("Country Hills Toyota Addition"),
    imgs: [
      "/projectss/Country Hills Toyota Addition/1.webp",
      "/projectss/Country Hills Toyota Addition/2.webp",
      "/projectss/Country Hills Toyota Addition/3.webp",
    ],
    industry: "Dealership",
    status: "Completed",
  },
  {
    name: "Bankview 20 (Grow)",
    slug: slugify("Bankview 20 (Grow)"),
    imgs: [
      "/projectss/Bankview 20 (Grow)/1.webp",
      "/projectss/Bankview 20 (Grow)/2.webp",
      "/projectss/Bankview 20 (Grow)/3.webp",
      "/projectss/Bankview 20 (Grow)/4.webp",
    ],
    industry: "Residential - Multi Family",
    status: "Completed",
  },
  {
    name: "Mount Pleasant 8",
    slug: slugify("Mount Pleasant 8"),
    imgs: [
      "/projectss/Mount Pleasant 8/1.webp",
      "/projectss/Mount Pleasant 8/2.webp",
      "/projectss/Mount Pleasant 8/3.webp",
      "/projectss/Mount Pleasant 8/4.webp",
      "/projectss/Mount Pleasant 8/5.webp",
    ],
    industry: "multi-residential project",
    status: "Completed",
  },
  {
    name: "Cornerstone Townhomes",
    slug: slugify("Cornerstone Townhomes"),
    imgs: [
      "/projectss/Cornerstone Townhomes/1.webp",
      "/projectss/Cornerstone Townhomes/2.webp",
      "/projectss/Cornerstone Townhomes/3.webp",
      "/projectss/Cornerstone Townhomes/4.webp",
      "/projectss/Cornerstone Townhomes/5.webp",
      "/projectss/Cornerstone Townhomes/6.webp",
      "/projectss/Cornerstone Townhomes/7.webp",
    ],
    industry: "Single Residential",
    status: "Completed",
  },
  {
    name: "Haysboro Community Centre",
    slug: slugify("Haysboro Community Centre"),
    imgs: [
      "/projectss/Haysboro Community Centre/1.webp",
      "/projectss/Haysboro Community Centre/2.webp",
    ],
    industry: "Community Centre",
    status: "Completed",
  },
  {
    name: "Switch Bloc",
    slug: slugify("Switch Bloc"),
    imgs: [
      "/projectss/Switch Bloc/1.webp",
      "/projectss/Switch Bloc/2.webp",
      "/projectss/Switch Bloc/3.webp",
      "/projectss/Switch Bloc/4.webp",
    ],
    industry: "Residential - Multifamily",
    status: "Completed",
  },

  {
    name: "Sagecourt Strathmore",
    slug: slugify("Sagecourt Strathmore"),
    imgs: [
      "/projectss/Sagecourt Strathmore/1.webp",
      "/projectss/Sagecourt Strathmore/2.webp",
    ],
    industry: "Residential - Single Family",
    status: "Completed",
  },
  {
    name: "Centaur Subaru",
    slug: slugify("Centaur Subaru"),
    imgs: [
      "/projectss/Centaur Subaru/1.webp",
      "/projectss/Centaur Subaru/2.webp",
      "/projectss/Centaur Subaru/3.webp",
      "/projectss/Centaur Subaru/4.webp",
      "/projectss/Centaur Subaru/5.webp",
      "/projectss/Centaur Subaru/6.webp",
    ],
    industry: "Dealership",
    status: "Completed",
  },
  {
    name: "Shawnee Park Phase 4 Entry",
    slug: slugify("Shawnee Park Phase 4 Entry"),
    imgs: [
      "/projectss/Shawnee Park Phase 4 Entry/1.webp",
      "/projectss/Shawnee Park Phase 4 Entry/2.webp",
      "/projectss/Shawnee Park Phase 4 Entry/3.webp",
      "/projectss/Shawnee Park Phase 4 Entry/4.webp",
    ],
    industry: "Residential - Single Family",
    status: "Completed",
  },


  {
    name: "Chinook Gate",
    slug: slugify("Chinook Gate"),
    imgs: ["/projectss/Chinook Gate/1.webp", "/projectss/Chinook Gate/2.webp"],
    industry: "Specialty Fabrications",
    status: "Completed",
  },

  {
    name: "Aqsarniit Hotel and Conference Centre",
    slug: slugify("Aqsarniit Hotel and Conference Centre"),
    imgs: [
      "/projectss/Aqsarniit Hotel and Conference Centre/1.webp",
      "/projectss/Aqsarniit Hotel and Conference Centre/2.webp",
      "/projectss/Aqsarniit Hotel and Conference Centre/3.webp",
      "/projectss/Aqsarniit Hotel and Conference Centre/4.webp",
      "/projectss/Aqsarniit Hotel and Conference Centre/5.webp",
    ],
    industry: "Residential - Modular Str.",
    status: "Completed",
  },

  {
    name: "Centex Gas Station",
    slug: slugify("Centex Gas Station"),
    imgs: [
      "/projectss/Centex Gas Station/1.webp",
      "/projectss/Centex Gas Station/2.webp",
      "/projectss/Centex Gas Station/3.webp",
      "/projectss/Centex Gas Station/4.webp",
      "/projectss/Centex Gas Station/5.webp",
    ],
    industry: "Commercial",
    status: "Completed",
  },
  {
    name: "CKE Community Center",
    slug: slugify("CKE Community Center"),
    imgs: [
      "/projectss/CKE Community Center/1.webp",
      "/projectss/CKE Community Center/2.webp",
      "/projectss/CKE Community Center/3.webp",
      "/projectss/CKE Community Center/4.webp",
      "/projectss/CKE Community Center/5.webp",
      "/projectss/CKE Community Center/6.webp",
      "/projectss/CKE Community Center/7.webp",
      "/projectss/CKE Community Center/8.webp",
    ],
    industry: "Commercial",
    status: "Completed",
  },

  {
    name: "Mission 19",
    slug: slugify("Mission 19"),
    imgs: [
      "/projectss/Mission 19/1.webp",
      "/projectss/Mission 19/2.webp",
      "/projectss/Mission 19/3.webp",
      "/projectss/Mission 19/4.webp",
    ],
    industry: "Residential",
    status: "Completed",
  },
];

export default projectsData;
