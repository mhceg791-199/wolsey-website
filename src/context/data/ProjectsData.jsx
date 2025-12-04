const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");
// test for deploy on github
const ProjectsData = [
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
    description:"",
    awards:[]
  },

  {
    name: "Latitude 51 Airdrie",
    slug: slugify("Latitude 51 Airdrie"),
    imgs: [
      "/projectss/Latitude 51 Airdrie/1.webp",
      "/projectss/Latitude 51 Airdrie/2.webp",
    ],
    industry: "Residential - Multi Family",
    status: "Completed - 2014",
    description:"The project consists of structural engineering services for Latitude 51, a 12-building, 61-unit wood-framed townhouse development in Airdrie, Alberta. Each two-storey building includes a partial basement and garage at the lowest level. The superstructure is framed with load-bearing wood stud walls and engineered wood floors, while the lowest level consists of a concrete slab-on-grade. The foundation system is assumed to utilize conventional strip and spread footings.",
    awards:[
      "Structural engineering and drafting for all townhouse buildings",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Sealing of structural drawings for building permit submission",
      "Structural engineering services during the tender period",
      "Construction-phase services, including shop drawing review and field reviews"
    ]
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
    industry: "Residential - Single Family",
    status: "Completed - 2016",
    description:"The project consists of structural engineering services for Mount Pleasant 8, a two-storey, 8-unit wood-framed residential building constructed over a concrete basement. The superstructure above the main floor is framed with load-bearing wood stud walls and wood-framed floor systems. The basement includes a concrete slab-on-grade, and the foundation system is assumed to consist of conventional strip and spread footings to support residential loading and site conditions.",
    awards:[
      "Structural engineering and drafting for the full building",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Sealing of structural drawings for building permit submission",
      "Structural engineering support during the tender period",
      "Construction-phase services, including shop drawing review and field reviews"
    ]
  },
  {
    name: "The Mark 101",
    slug: slugify("The Mark 101"),
    imgs: ["/projectss/The Mark 101/1.webp", "/projectss/The Mark 101/2.webp"],
    industry: "Residential - Multi Family",
    status: "Completed",
    description:"",
    awards:[]
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
    industry: "Residential - Multi Family",
    status: "Completed - 2016",
    description:"The project consists of structural engineering services for a development comprising 12 three-storey rowhome-style townhomes and a 148-unit apartment building constructed over a single-storey concrete parkade. The parkade features a main floor two-way concrete slab supported on concrete columns and perimeter concrete walls, with a concrete slab-on-grade at the lowest level. Above the main floor, the apartment superstructure is framed with load-bearing wood stud walls and wood-framed floors. The townhomes also utilize load-bearing wood walls with wood-framed floors, with concrete slab-on-grade foundations supported by conventional strip and spread footings. The project is intended to shadow LEED Gold standards.",
    awards:[
      "Structural engineering and drafting for the apartment building and townhomes",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Sealing of structural drawings for building permit submission",
      "Structural engineering services during the tender period",
      "Construction-phase services, including shop drawing review and field reviews",
      "Provision of C2 schedules upon structure completion",
      "Preparation of BAR reports as required by the municipality",
    ]
  },
  // {
  //   name: "Country Hills Toyota Addition",
  //   slug: slugify("Country Hills Toyota Addition"),
  //   imgs: [
  //     "/projectss/Country Hills Toyota Addition/1.webp",
  //     "/projectss/Country Hills Toyota Addition/2.webp",
  //     "/projectss/Country Hills Toyota Addition/3.webp",
  //   ],
  //   industry: "Commercial",
  //   status: "Completed",
  // },
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
    status: "Completed - 2016",
    description:"The project consists of structural engineering services for Bankview 20, a four-storey wood-framed residential building with 20 units constructed over a single-storey concrete parkade. The main floor is designed as a two-way reinforced concrete slab supported by interior concrete columns and perimeter concrete walls. Above this level, the superstructure consists of load-bearing wood stud walls with wood-framed floor systems. The building incorporates a large sloped exterior roof element with an integrated green roof, requiring structural design to accommodate increased live and dead loads. The parkade level includes a concrete slab-on-grade, and the foundation system is assumed to consist of conventional strip and spread footings.",
    awards:[
      "Structural engineering and drafting for the building and parkade",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Structural engineering and drafting for the building and parkade",
      "Structural engineering support during the tender period",
      "Construction-phase services, including shop drawing review and field reviews"
    ]
  },

  // {
  //   name: "Cornerstone Townhomes",
  //   slug: slugify("Cornerstone Townhomes"),
  //   imgs: [
  //     "/projectss/Cornerstone Townhomes/1.webp",
  //     "/projectss/Cornerstone Townhomes/2.webp",
  //     "/projectss/Cornerstone Townhomes/3.webp",
  //     "/projectss/Cornerstone Townhomes/4.webp",
  //     "/projectss/Cornerstone Townhomes/5.webp",
  //     "/projectss/Cornerstone Townhomes/6.webp",
  //     "/projectss/Cornerstone Townhomes/7.webp",
  //   ],
  //   industry: "Residential - Single Family",
  //   status: "Completed",
  // },
  {
    name: "Haysboro Community Centre",
    slug: slugify("Haysboro Community Centre"),
    imgs: ["/projectss/Haysboro Community Centre/1.webp"],
    industry: "Public and Municipality buildings",
    status: "Completed",
    description:"",
    awards:[]
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
    industry: "Residential - Multi Family",
    status: "Completed",
    description:"",
    awards:[]
  },

  {
    name: "Sagecourt Strathmore",
    slug: slugify("Sagecourt Strathmore"),
    imgs: [
      "/projectss/Sagecourt Strathmore/1.webp",
      "/projectss/Sagecourt Strathmore/2.webp",
      "/projectss/Sagecourt Strathmore/3.webp",
    ],
    industry: "Residential - Single Family",
    status: "Completed",
    description:"",
    awards:[]
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
    industry: "Commercial",
    status: "Completed - 2017",
    description:"The project consists of a new two-storey Subaru dealership with an approximate 9,500 ft² footprint, attached to a three-storey precast parking and service structure with an approximate 18,000 ft² footprint. The dealership showroom uses conventional structural steel framing, with the second floor constructed using steel beams, metal deck, and concrete topping. Exterior walls consist of non-loadbearing metal studs with metal panels, while the showroom incorporates curtain wall glazing. The parking and service structure utilizes precast concrete double tees for the second floor and roof, supporting rooftop vehicle storage. Foundations are anticipated to consist of concrete piles and grade beams, with slab-on-grade at the main floor. The project also includes a freestanding steel “display frame” supported on concrete piles. A large retaining wall along the west side of the building is to be provided by others.",
    awards:[
      "Structural engineering and drafting for all buildings and the display frame",
      "Preparation of concise structural specifications",
      "Sealing of structural drawings for foundation and building permit submission",
      "Structural engineering support during the tender period",
      "Construction-phase services, including shop drawing review and field reviews"
    ]
  },
  {
    name: "Shawnee Park Phase 4 Entry",
    slug: slugify("Shawnee Park Phase 4 Entry"),
    imgs: [
      "/projectss/Shawnee Park Phase 4 Entry/1.webp",
    ],
    industry: "Specialty Fabrications",
    status: "Completed",
    description:"",
    awards:[]
  },

  {
    name: "Chinook Gate",
    slug: slugify("Chinook Gate"),
    imgs: ["/projectss/Chinook Gate/2.webp"],
    industry: "Specialty Fabrications",
    status: "Completed",
    description:"",
    awards:[]
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
    industry: "Commercial",
    status: "Completed",
    description:"This Four-storey Hotel and Conference Centre was completed in 2019 with approximately 50 000 ft of modular floor space. These Modular Units were designed for function and to withstand the anticipated transport to the final location in Canada’s Arctic.",
    awards:[]
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
    industry: "Public and Municipality buildings",
    status: "Completed",
    description:"",
    awards:[]
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
    industry: "Residential - Multi Family",
    status: "Completed - 2017",
    description:"The project consists of a five-storey, 67-unit wood-framed condominium building constructed over a two-storey concrete parkade. The main floor and first level of the parkade are designed as two-way reinforced concrete slabs supported on concrete columns with drop panels and perimeter concrete walls. Above the main floor, the superstructure is framed with load-bearing wood stud walls and wood-framed floors. The lowest parkade level contains a concrete slab-on-grade, and the foundation system is assumed to be conventional strip and spread footings.",
    awards:[
      "Structural engineering and drafting for the full building and parkade",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Sealing of structural drawings for building permit submission",
      "Structural engineering services during the tender period",
      "Construction-phase services, including shop drawing review and field reviews"
    ]
  },
  {
    name: "Tidal Beacon",
    slug: slugify("Tidal Beacon"),
    imgs: [
      "/projectss/Tidal Beacon/1.webp",
      "/projectss/Tidal Beacon/2.webp",
      "/projectss/Tidal Beacon/3.webp",
    ],
    industry: "Specialty Fabrications",
    status: "Completed",
    description:"The project consists of a new 65 ft tall steel-framed structure integrated with an existing oceanside wharf building in Halifax, NS. The open-air installation features perimeter steel columns supporting tensioned cables with small rotating flappers. The columns bear on the existing building structure, requiring coordination with the base building engineer.",
    awards:[
      "Structural engineering design of the 65 ft steel superstructure",
      "Sealed structural drawings for permit submission",
      "Construction-phase services, including shop drawing reviews and field reviews"
    ]
  },
  {
    name: "The BMO Pavilion",
    slug: slugify("The BMO Pavilion"),
    imgs: [
      "/projectss/BMO Centre - Pavilion/1.webp",
      "/projectss/BMO Centre - Pavilion/2.webp",
      "/projectss/BMO Centre - Pavilion/3.webp",
      "/projectss/BMO Centre - Pavilion/4.webp",
      "/projectss/BMO Centre - Pavilion/5.webp",
      "/projectss/BMO Centre - Pavilion/6.webp",
      "/projectss/BMO Centre - Pavilion/7.webp",
      "/projectss/BMO Centre - Pavilion/8.webp",
      "/projectss/BMO Centre - Pavilion/9.webp",
      "/projectss/BMO Centre - Pavilion/10.webp",
      "/projectss/BMO Centre - Pavilion/11.webp",
      "/projectss/BMO Centre - Pavilion/12.webp",
      "/projectss/BMO Centre - Pavilion/13.webp",
      "/projectss/BMO Centre - Pavilion/14.webp",
      "/projectss/BMO Centre - Pavilion/15.webp",
      "/projectss/BMO Centre - Pavilion/16.webp",
      "/projectss/BMO Centre - Pavilion/17.webp",
      "/projectss/BMO Centre - Pavilion/18.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description: "The project consists of the structural design of the Pavilion canopy’s light-gauge and structural steel framing that supports the curved cladding. The cladding system is supported by the base building’s structural steel and by concrete foundations, both provided by the base building engineer. Heavy Industries produce the structural drawings for the project.",
    awards: [
      "Structural engineering for the light-gauge and structural steel framing supporting the cladding",
      "Sealing of structural drawings for permit submission",
      "Construction-period services, including shop drawing reviews and field reviews",
    ],
  },
  {
    name: "9th Ave Parkade Aluminum Façade",
    slug: slugify("9th Ave Parkade Aluminum Façade"),
    imgs: [
      "/projectss/9th Ave Parkade Facade/1.webp",
      "/projectss/9th Ave Parkade Facade/2.webp",
      "/projectss/9th Ave Parkade Facade/3.webp",
      "/projectss/9th Ave Parkade Facade/4.webp",
      "/projectss/9th Ave Parkade Facade/5.webp",
      "/projectss/9th Ave Parkade Facade/6.webp",
      "/projectss/9th Ave Parkade Facade/7.webp",
      "/projectss/9th Ave Parkade Facade/8.webp",
    ],
    industry: "Commercial",
    status: "Completed - 2020",
    description:"The project consists of a 52,000 ft² interior design build-out located beneath an existing concrete parkade structure. Although the final design has not yet been established, the anticipated structural scope is based on previous similar interior build-out projects with comparable construction budgets. Structural work is expected to address modifications, new framing, support elements, and coordination with architectural and mechanical requirements.",
    awards:[
      "Structural engineering and drafting of all structural elements for the build-out",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Sealing of structural drawings for building permit submission",
      "Structural engineering services during the tender period",
      "Construction-phase services, including shop drawing review and field reviews",
      "Provision of C2 schedules upon structure completion",
      "Preparation of as-built drawings",
    ]
  },
  {
    name: "Glenbow Cladding",
    slug: slugify("Glenbow Cladding"),
    imgs: [
      "/projectss/Glenbow Cladding/1.webp",
      "/projectss/Glenbow Cladding/2.webp",
      "/projectss/Glenbow Cladding/3.webp",
      "/projectss/Glenbow Cladding/4.webp",
    ],
    industry: "Public and Municipality buildings",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Esquire",
    slug: slugify("Esquire"),
    imgs: [
      "/projectss/Esquire/1.webp",
      "/projectss/Esquire/2.webp",
      "/projectss/Esquire/3.webp",
      "/projectss/Esquire/4.webp",
      "/projectss/Esquire/5.webp",
      "/projectss/Esquire/6.webp",
      "/projectss/Esquire/7.webp",
      "/projectss/Esquire/8.webp",
      "/projectss/Esquire/9.webp",
      "/projectss/Esquire/10.webp",
      "/projectss/Esquire/11.webp",
      "/projectss/Esquire/12.webp",
      "/projectss/Esquire/13.webp",
      "/projectss/Esquire/14.webp",
    ],
    industry: "Residential - Multi Family",
    status: "Completed - 2019",
    description:"The project consists of two four-storey wood-framed multifamily residential buildings with a total of 185 units, constructed over a two-storey concrete parkade in northwest Calgary. The main floor and P1 levels are designed as two-way reinforced concrete slabs supported by concrete columns with drop panels and perimeter concrete walls. Above the main floor, the superstructure uses load-bearing wood stud walls and wood-framed floors. The lowest parkade level includes a concrete slab-on-grade, and the foundation system is assumed to consist of conventional strip and spread footings.",
    awards:[
      "Structural engineering and drafting of the residential buildings and parkade",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Sealing of structural drawings for foundation and building permit submission",
      "Structural engineering support during the tender period",
      "Construction-phase services, including shop drawing review and field reviews",
    ]
  },
  {
    name: "Ferrari Maserati Dealership",
    slug: slugify("Ferrari Maserati Dealership"),
    imgs: [
      "/projectss/Ferrari Maserati/1.webp",
      "/projectss/Ferrari Maserati/2.webp",
      "/projectss/Ferrari Maserati/3.webp",
      "/projectss/Ferrari Maserati/4.webp",
      "/projectss/Ferrari Maserati/5.webp",
      "/projectss/Ferrari Maserati/6.webp",
      "/projectss/Ferrari Maserati/7.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"The project consists of two two-storey steel-framed car dealership buildings constructed over separate single-storey concrete parkades in southeast Calgary. Phase 1 has an approximate footprint of 15,000 ft², and Phase 2 approximately 6,300 ft². Main floors are two-way concrete slabs supported by concrete columns and perimeter walls. The superstructure above consists of conventional steel framing, with precast concrete double tees at the second floor and open-web steel joists with metal deck at the roof. Above-grade perimeter walls are non-loadbearing precast panels with curtain wall and selected punched openings. Foundations are assumed to be concrete frost walls with strip and spread footings, with slab-on-grade construction in the parkades.",
    awards:[]
  },
  {
    name: "Osten and Victor Tennis Centre",
    slug: slugify("Osten and Victor Tennis Centre"),
    imgs: [
      "/projectss/Osten and Victor Tennis Centre/1.webp",
      "/projectss/Osten and Victor Tennis Centre/2.webp",
      "/projectss/Osten and Victor Tennis Centre/3.webp",
      "/projectss/Osten and Victor Tennis Centre/4.webp",
      "/projectss/Osten and Victor Tennis Centre/5.webp",
      "/projectss/Osten and Victor Tennis Centre/6.webp",
      "/projectss/Osten and Victor Tennis Centre/7.webp",
      "/projectss/Osten and Victor Tennis Centre/8.webp",
      "/projectss/Osten and Victor Tennis Centre/9.webp",
    ],
    industry: "Public and Municipality buildings",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Legacy Landscape Elements",
    slug: slugify("Legacy Landscape Elements"),
    imgs: [
      "/projectss/Legacy/1.webp",
      "/projectss/Legacy/2.webp",
      "/projectss/Legacy/3.webp",
      "/projectss/Legacy/4.webp",
      "/projectss/Legacy/5.webp",
      "/projectss/Legacy/6.webp",
      "/projectss/Legacy/7.webp",
      "/projectss/Legacy/8.webp",
    ],
    industry: "Specialty Fabrications",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Mahogany Entry Features",
    slug: slugify("Mahogany Entry Features"),
    imgs: ["/projectss/Mahogany/1.webp", "/projectss/Mahogany/2.webp"],
    industry: "Specialty Fabrications",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "⁠Pacific Sands Resort",
    slug: slugify("⁠Pacific Sands Resort"),
    imgs: [
      "/projectss/Pacific Sands/1.webp",
      "/projectss/Pacific Sands/2.webp",
      "/projectss/Pacific Sands/3.webp",
      "/projectss/Pacific Sands/4.webp",
      "/projectss/Pacific Sands/5.webp",
      "/projectss/Pacific Sands/6.webp",
      "/projectss/Pacific Sands/7.webp",
      "/projectss/Pacific Sands/8.webp",
      "/projectss/Pacific Sands/9.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  // {
  //   name: "⁠Iqaluit Hotel and Conference Center",
  //   slug: slugify("⁠Iqaluit Hotel and Conference Center"),
  //   imgs: [
  //     "/projectss/Iqaluit Hotel/1.webp",
  //     "/projectss/Iqaluit Hotel/2.webp",
  //     "/projectss/Iqaluit Hotel/3.webp",
  //   ],
  //   industry: "Commercial",
  //   status: "Completed",
  // },
  {
    name: "1741",
    slug: slugify("1741"),
    imgs: [
      "/projectss/1741 Shagganappi/1.webp",
      "/projectss/1741 Shagganappi/2.webp",
      "/projectss/1741 Shagganappi/3.webp",
      "/projectss/1741 Shagganappi/4.webp",
      "/projectss/1741 Shagganappi/5.webp",
      "/projectss/1741 Shagganappi/6.webp",
    ],
    industry: "Residential - Multi Family",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "43 Park",
    slug: slugify("43 Park"),
    imgs: [
      "/projectss/park43/1.webp",
      "/projectss/park43/2.webp",
      "/projectss/park43/3.webp",
      "/projectss/park43/4.webp",
    ],
    industry: "Residential - Multi Family",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Banff Husky",
    slug: slugify("Banff Husky"),
    imgs: [
      "/projectss/Banff Husky/1.webp",
      "/projectss/Banff Husky/2.webp",
      "/projectss/Banff Husky/3.webp",
      "/projectss/Banff Husky/4.webp",
      "/projectss/Banff Husky/5.webp",
      "/projectss/Banff Husky/6.webp",
      "/projectss/Banff Husky/7.webp",
    ],
    industry: "Commercial",
    status: "Completed - 2018",
    description:"The project consists of a new development comprising a single-storey convenience store (approx. 4,000 ft²) and a gas canopy (approx. 2,500 ft²). The convenience store is framed with load-bearing wood stud walls and conventional wood roof trusses, with a mechanical mezzanine framed into the roof using TJI joists.  The gas canopy structure is framed using steel columns and beams. Foundations are assumed to be conventional strip and spread footings, with a slab-on-grade main floor.",
    awards:[
      "Structural engineering for the convenience store and gas canopy",
      "Preparation of concise structural specifications",
      "Sealing of structural drawings for building permit submission",
      "Structural engineering services during the tender period",
      "Construction-phase services, including shop drawing review and field reviews",
    ]
  },
  {
    name: "BMO Centre - Fireplace",
    slug: slugify("BMO Centre - Fireplace"),
    imgs: [
      "/projectss/BMO Centre - Fireplace/1.webp",
      "/projectss/BMO Centre - Fireplace/2.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Chestermere Apostolic Church",
    slug: slugify("Chestermere Apostolic Church"),
    imgs: [
      "/projectss/Chestermere Apostolic Church/1.webp",
      "/projectss/Chestermere Apostolic Church/2.webp",
      "/projectss/Chestermere Apostolic Church/3.webp",
      "/projectss/Chestermere Apostolic Church/4.webp",
      "/projectss/Chestermere Apostolic Church/5.webp",
      "/projectss/Chestermere Apostolic Church/6.webp",
      "/projectss/Chestermere Apostolic Church/7.webp",
      "/projectss/Chestermere Apostolic Church/8.webp",
    ],
    industry: "Public and Municipality buildings",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Country Hills Mercedes",
    slug: slugify("Country Hills Mercedes"),
    imgs: [
      "/projectss/Country Hills Mercedes/1.webp",
      "/projectss/Country Hills Mercedes/2.webp",
      "/projectss/Country Hills Mercedes/3.webp",
      "/projectss/Country Hills Mercedes/4.webp",
      "/projectss/Country Hills Mercedes/5.webp",
      "/projectss/Country Hills Mercedes/6.webp",
      "/projectss/Country Hills Mercedes/7.webp",
      "/projectss/Country Hills Mercedes/8.webp",
      "/projectss/Country Hills Mercedes/9.webp",
      "/projectss/Country Hills Mercedes/10.webp",
      "/projectss/Country Hills Mercedes/11.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Dilawri Warehouse",
    slug: slugify("Dilawri Warehouse"),
    imgs: [
      "/projectss/Dilawri Warehouse/1.webp",
      "/projectss/Dilawri Warehouse/2.webp",
      "/projectss/Dilawri Warehouse/3.webp",
      "/projectss/Dilawri Warehouse/4.webp",
      "/projectss/Dilawri Warehouse/5.webp",
      "/projectss/Dilawri Warehouse/6.webp",
      "/projectss/Dilawri Warehouse/7.webp",
      "/projectss/Dilawri Warehouse/8.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Airdrie Honda",
    slug: slugify("Airdrie Honda"),
    imgs: [
      "/projectss/Airdrie Honda/1.webp",
      "/projectss/Airdrie Honda/2.webp",
      "/projectss/Airdrie Honda/3.webp",
      "/projectss/Airdrie Honda/4.webp",
      "/projectss/Airdrie Honda/5.webp",
      "/projectss/Airdrie Honda/6.webp",

    ],
    industry: "Commercial",
    status: "Completed - 2021",
    description:"The project consists of a 2,200 ft² single-storey addition to an existing Honda dealership. The addition is designed with conventional steel framing, while the exterior perimeter walls incorporate curtainwall systems and insulated metal panels. Foundations are anticipated to consist of concrete grade beams with a slab-on-grade floor system.",
    awards:[
      "Structural engineering and drafting of the addition’s foundation and superstructure",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Sealing of structural drawings for foundation and building permit submission",
      "Structural engineering support during the tender period",
      "Construction-phase services, including shop drawing review and field reviews",
    ]
  },
  {
    name: "Einstein",
    slug: slugify("Einstein"),
    imgs: [
      "/projectss/Einstein/1.webp",
      "/projectss/Einstein/2.webp",
      "/projectss/Einstein/3.webp",


    ],
    industry: "Residential - Multi Family",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Crowfoot Keg",
    slug: slugify("Crowfoot Keg"),
    imgs: [
      "/projectss/Crowfoot Keg/1.webp",
      "/projectss/Crowfoot Keg/2.webp",
      "/projectss/Crowfoot Keg/3.webp",
      "/projectss/Crowfoot Keg/4.webp",
      "/projectss/Crowfoot Keg/5.webp",
      "/projectss/Crowfoot Keg/6.webp",

    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Jacksonport Commercial",
    slug: slugify("Jacksonport Commercial"),
    imgs: [
      "/projectss/Jacksonport Commercial/1.webp",
      "/projectss/Jacksonport Commercial/2.webp",
      "/projectss/Jacksonport Commercial/3.webp",
      "/projectss/Jacksonport Commercial/4.webp",
      "/projectss/Jacksonport Commercial/5.webp",
      "/projectss/Jacksonport Commercial/6.webp",
      "/projectss/Jacksonport Commercial/7.webp",
      "/projectss/Jacksonport Commercial/8.webp",
      "/projectss/Jacksonport Commercial/9.webp",
      "/projectss/Jacksonport Commercial/10.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "7711",
    slug: slugify("7711"),
    imgs: [
      "/projectss/7711/1.webp",
      "/projectss/7711/2.webp",
    ],
    industry: "Residential - Multi Family",
    status: "Completed - 2018",
    description:"The project consists of five six-storey multifamily buildings constructed over a two-level concrete parkade in southwest Calgary. The main floor of each building is designed as a reinforced concrete transfer slab supported by concrete columns and perimeter concrete walls. The superstructures incorporate cast-in-place concrete floor plates, supported by concrete columns and concrete elevator and stair cores. Building 3 includes one storey of commercial space at the main floor, while Building 4 includes a two-storey commercial space with no second-floor slab. Non-loadbearing and perimeter exterior walls are designed as wood-framed infill with slip tracks to accommodate structural movement. The lowest parkade level includes a concrete slab-on-grade, supported by conventional strip and spread footings. The entire project is to be constructed in a single phase, and project drawings are to be produced using Revit.",
    awards:[
      "Structural engineering and drafting for all buildings and the two-level parkade",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Sealing of structural drawings for building permit submission",
      "Structural engineering services during the tender period",
      "Construction-phase services, including shop drawing review and field reviews",
      "Provision of C2 schedules upon structural completion",
      "Preparation of BAR Reports for each building as required by New Home Warranty",
    ]
  },
  {
    name: "Arcola at Spring Willow",
    slug: slugify("Arcola at Spring Willow"),
    imgs: [
      "/projectss/Arcola at Spring Willow/1.webp",
      "/projectss/Arcola at Spring Willow/2.webp",
      "/projectss/Arcola at Spring Willow/3.webp",
      "/projectss/Arcola at Spring Willow/4.webp",
      "/projectss/Arcola at Spring Willow/5.webp",
      "/projectss/Arcola at Spring Willow/6.webp",
      "/projectss/Arcola at Spring Willow/7.webp",
    ],
    industry: "Residential - Multi Family",
    status: "Completed - 2020",
    description:"The project consists of 87 three-storey wood-framed townhomes distributed across 26 separate buildings in northeast Calgary. The superstructures are designed with conventionally framed wood floors, load-bearing wood stud walls, and prefabricated wood truss roofs. Foundations are anticipated to consist of concrete frost walls with strip and spread footings, and the basement slabs are to be constructed as concrete slab-on-grade systems.",
    awards:[
      "Structural engineering and drafting for all townhouse buildings",
      "Preparation of concise structural specifications for inclusion on drawings",
      "Sealing of structural drawings for foundation and building permit submission",
      "Structural engineering support during the tender period",
      "Construction-phase services, including shop drawing review and field reviews",
    ]
  },
  {
    name: "Calgary Zoo - Bugtopia",
    slug: slugify("Calgary Zoo - Bugtopia"),
    imgs: [
      "/projectss/Calgary Zoo - Bugtopia/1.webp",
      "/projectss/Calgary Zoo - Bugtopia/2.webp",
      "/projectss/Calgary Zoo - Bugtopia/3.webp",
      "/projectss/Calgary Zoo - Bugtopia/4.webp",
      "/projectss/Calgary Zoo - Bugtopia/5.webp",
      "/projectss/Calgary Zoo - Bugtopia/6.webp",
      "/projectss/Calgary Zoo - Bugtopia/7.webp",
      "/projectss/Calgary Zoo - Bugtopia/8.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Calgary Zoo - Lions Walk",
    slug: slugify("Calgary Zoo - Lions Walk"),
    imgs: [
      "/projectss/Calgary Zoo - Lions Walk/1.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Calgary Zoo Egg",
    slug: slugify("Calgary Zoo Egg"),
    imgs: [
      "/projectss/Calgary Zoo Egg/1.webp",
      "/projectss/Calgary Zoo Egg/2.webp",
      "/projectss/Calgary Zoo Egg/3.webp",
      "/projectss/Calgary Zoo Egg/4.webp",
      "/projectss/Calgary Zoo Egg/5.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Capital Paper Edmonton",
    slug: slugify("Capital Paper Edmonton"),
    imgs: [
      "/projectss/Capital Paper Edmonton/1.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Cirque Du Soleil",
    slug: slugify("Cirque Du Soleil"),
    imgs: [
      "/projectss/Cirque Du Soleil/1.webp",
      "/projectss/Cirque Du Soleil/2.webp",
      "/projectss/Cirque Du Soleil/3.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Clearwater Lighthouse",
    slug: slugify("Clearwater Lighthouse"),
    imgs: [
      "/projectss/Clearwater Lighthouse/1.webp",
      "/projectss/Clearwater Lighthouse/2.webp",
      "/projectss/Clearwater Lighthouse/3.webp",
      "/projectss/Clearwater Lighthouse/4.webp",
    ],
    industry: "Specialty Fabrications",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Cochrane GM",
    slug: slugify("Cochrane GM"),
    imgs: [
      "/projectss/Cochrane GM/1.webp",
      "/projectss/Cochrane GM/2.webp",
      "/projectss/Cochrane GM/3.webp",
      "/projectss/Cochrane GM/4.webp",
      "/projectss/Cochrane GM/5.webp",
      "/projectss/Cochrane GM/6.webp",
      "/projectss/Cochrane GM/7.webp",
      "/projectss/Cochrane GM/8.webp",
      "/projectss/Cochrane GM/9.webp",
      "/projectss/Cochrane GM/10.webp",
    ],
    industry: "Commercial",
    status: "Completed - 2017",
    description:"The project consists of a new two-storey GMC dealership with an approximate 30,200 ft² footprint, a 7,266 ft² second floor, and a 24,607 ft² lower level. The superstructure uses conventional structural steel framing, with the second floor designed using steel beams with metal deck and concrete topping. The main floor slab over the lower level is a two-way reinforced concrete slab supported on concrete columns and perimeter concrete walls. Shop walls consist of steel framing with pre-finished metal panels, while the showroom utilizes curtain wall systems as its primary exterior enclosure. Foundations are anticipated to consist of concrete grade beams with slab-on-grade construction at the main level.",
    awards:[
      "Structural engineering and drafting for the dealership foundation and superstructure",
      "Structural engineering and drafting for the dealership foundation and superstructure",
      "Sealing of structural drawings for foundation and building permit submission",
      "Structural engineering support during the tender period",
      "Construction-phase services, including shop drawing review and field reviews",
    ]
  },
  {
    name: "Comfort Inn",
    slug: slugify("Comfort Inn"),
    imgs: [
      "/projectss/Comfort Inn/1.webp",
      "/projectss/Comfort Inn/2.webp",
      "/projectss/Comfort Inn/3.webp",
      "/projectss/Comfort Inn/4.webp",
      "/projectss/Comfort Inn/5.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "CrossIron Interior Sculpture",
    slug: slugify("CrossIron Interior Sculpture"),
    imgs: [
      "/projectss/CrossIron Interior Sculpture/1.webp",
      "/projectss/CrossIron Interior Sculpture/2.webp",
      "/projectss/CrossIron Interior Sculpture/3.webp",
      "/projectss/CrossIron Interior Sculpture/4.webp",
      "/projectss/CrossIron Interior Sculpture/5.webp",
    ],
    industry: "Specialty Fabrications",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "CrossIron Mills",
    slug: slugify("CrossIron Mills"),
    imgs: [
      "/projectss/CrossIron Mills/1.webp",
      "/projectss/CrossIron Mills/2.webp",
      "/projectss/CrossIron Mills/3.webp",
      "/projectss/CrossIron Mills/4.webp",
      "/projectss/CrossIron Mills/5.webp",
      "/projectss/CrossIron Mills/6.webp",
      "/projectss/CrossIron Mills/7.webp",
      "/projectss/CrossIron Mills/8.webp",
      "/projectss/CrossIron Mills/9.webp",
      "/projectss/CrossIron Mills/10.webp",
      "/projectss/CrossIron Mills/11.webp",
      "/projectss/CrossIron Mills/12.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Crowfoot Crossing",
    slug: slugify("Crowfoot Crossing"),
    imgs: [
      "/projectss/Crowfoot Crossing/1.webp",
      "/projectss/Crowfoot Crossing/2.webp",
      "/projectss/Crowfoot Crossing/3.webp",
      "/projectss/Crowfoot Crossing/4.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Datalog",
    slug: slugify("Datalog"),
    imgs: [
      "/projectss/Datalog/1.webp",
      "/projectss/Datalog/2.webp",
      "/projectss/Datalog/3.webp",
      "/projectss/Datalog/4.webp",
      "/projectss/Datalog/5.webp",
      "/projectss/Datalog/6.webp",
      "/projectss/Datalog/7.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Porsche Centre Calgary",
    slug: slugify("Porsche Centre Calgary"),
    imgs: [
      "/projectss/Porsche-Centre-Calgary/Porsche-Centre-Calgary.webp",
    ],
    industry: "Commercial",
    status: "Completed",
    description:"The project consists of a new two-storey dealership with an approximate 32,000 ft² footprint and an 11,000 ft² second floor. The superstructure uses conventional steel framing, with the second floor framed using steel beams, metal deck, and concrete topping. Shop walls are steel-framed with pre-finished metal panels, the two-storey portion uses non-load-bearing metal studs with metal panels, and the showroom features curtain wall glazing as the primary exterior enclosure. Foundations are anticipated to consist of grade beams with a concrete slab on grade. Completed in 2017 with steel design and a concrete foundation.",
    awards:[
      "Structural engineering and drafting for the dealership’s foundation and superstructure.",
      "Concise structural specifications incorporated into the drawings.",
      "Sealed structural drawings for foundation and building permit submission",
      "Structural engineering services during the tender period."
    ]
  },
];

export default ProjectsData;
