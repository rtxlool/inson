/* Project data — drives project.html via ?slug=<slug>
   Each entry: slug, title, location, year, scope, brief, image (relative path)
   Order = display order on projects.html. next/prev wraps around.
*/
window.PROJECTS = [
  { slug: 'greenwich-manor-house',          title: 'Greenwich Manor House',        location: 'Greenwich, Connecticut',  year: '2022', scope: 'Full residential interiors',
    brief: 'An Old Greenwich stone manor, reimagined as a quiet family home. Warm woods, layered linens, low light — rooms built for a long, slow life indoors.',
    image: 'images/projects/greenwich-manor-house.jpg' },

  { slug: 'malmo-pool-house',               title: 'Midcentury Pool House',        location: 'Malmö, Sweden',           year: '2019', scope: 'Architecture & interiors',
    brief: 'A low-slung pool house on Sweden\'s southern coast. Built around the angle of the summer light, restrained in material, generous in volume.',
    image: 'images/projects/malmo-pool-house.jpg' },

  { slug: 'west-village-townhouse',         title: 'West Village Townhouse',       location: 'New York, New York',      year: '2020', scope: 'Full residential interiors',
    brief: 'A narrow Federal townhouse on a brick block in Manhattan. Bright rooms stacked over a garden, with a stair you can hear from every floor.',
    image: 'images/projects/west-village-townhouse.jpg' },

  { slug: 'upper-east-side-townhouse',      title: 'Upper East Side Townhouse',    location: 'New York, New York',      year: '2021', scope: 'Renovation & interiors',
    brief: 'Four floors above 75th Street, reorganized around how a family actually moves through a townhouse. Quieter, lighter, less formal than it was.',
    image: 'images/projects/upper-east-side-townhouse.jpg' },

  { slug: 'palm-beach-residence',           title: 'Palm Beach Residence',         location: 'Palm Beach, Florida',     year: '2022', scope: 'Full residential interiors',
    brief: 'A bright coastal residence — pale plaster, deep verandas, a few well-chosen pieces. Most of the design is the light.',
    image: 'images/projects/palm-beach-residence.jpg' },

  { slug: 'tribeca-loft',                   title: 'Tribeca Loft',                 location: 'New York, New York',      year: '2018', scope: 'Loft conversion & interiors',
    brief: 'A cast-iron loft made domestic without losing the loft. Open volumes, warm joinery, art held quietly on the walls.',
    image: 'images/projects/tribeca-loft.jpg' },

  { slug: '5th-avenue-condo',               title: 'Fifth Avenue Condo',           location: 'New York, New York',      year: '2019', scope: 'Apartment renovation',
    brief: 'A pre-war apartment on Fifth, returned to its proportions and dressed in soft modern furniture. Park light through every room.',
    image: 'images/projects/5th-avenue-condo.png' },

  { slug: 'upper-eastside-condo',           title: 'Upper Eastside Condo',         location: 'New York, New York',      year: '2020', scope: 'Apartment interiors',
    brief: 'A 73rd Street apartment for a young couple — gentle, warm, easy to live in on a Tuesday morning.',
    image: 'images/projects/upper-eastside-condo.jpg' },

  { slug: 'upper-eastside-renovation',      title: 'Upper Eastside Renovation',    location: 'New York, New York',      year: '2017', scope: 'Renovation & interiors',
    brief: 'A full-floor renovation that opened up the central wall and let the light cross the apartment for the first time in seventy years.',
    image: 'images/projects/upper-eastside-renovation.jpg' },

  { slug: 'greenwich-carriage-house',       title: 'Greenwich Carriage House',     location: 'Greenwich, Connecticut',  year: '2016', scope: 'Adaptive reuse & interiors',
    brief: 'A 19th-century carriage house adapted into a family residence. The original timber stair carries you through three quietly different worlds.',
    image: 'images/projects/greenwich-carriage-house.jpg' },

  { slug: 'greenwich-village-church-condo', title: 'Greenwich Village Church Condo', location: 'New York, New York',    year: '2018', scope: 'Apartment interiors',
    brief: 'An apartment inside a deconsecrated village church. Tall windows, plain plaster, furniture chosen to honor the height of the room.',
    image: 'images/projects/greenwich-village-church-condo.jpg' },

  { slug: 'central-park-penthouse',         title: 'Central Park Penthouse',       location: 'New York, New York',      year: '2021', scope: 'Penthouse interiors',
    brief: 'A penthouse over the park, kept low and quiet so the view does the talking. The interior reads as a single long horizon line.',
    image: 'images/projects/central-park-penthouse.jpg' },

  { slug: 'upper-east-side-carriage-house', title: 'UES Carriage House',           location: 'New York, New York',      year: '2015', scope: 'Adaptive reuse & interiors',
    brief: 'A Waterfall Mansion carriage house, rebuilt around a triple-height living room. Heavy plaster, slow furniture, a fireplace you can stand inside.',
    image: 'images/projects/upper-east-side-carriage-house.jpg' },

  { slug: 'lake-como-farm-house',           title: 'Lake Como Farm House',         location: 'Lombardy, Italy',         year: '2017', scope: 'Restoration & interiors',
    brief: 'A working Lombard farm house above the lake. Restored stone, washed-linen rooms, a kitchen built for friends who arrive without warning.',
    image: 'images/projects/lake-como-farm-house.jpg' },

  { slug: 'upper-east-side-studio',         title: 'Upper East Side Studio',       location: 'New York, New York',      year: '2019', scope: 'Studio apartment',
    brief: 'A small Upper East Side studio that lives like an apartment three times its size. Every inch is built-in, none of it announces itself.',
    image: 'images/projects/upper-east-side-studio.jpg' },

  { slug: 'townhouse-holiday',              title: 'Holiday Townhouse',            location: 'New York, New York',      year: '2018', scope: 'Townhouse interiors',
    brief: 'A holiday-season townhouse for a family that hosts. Long tables, deep upholstery, the kind of rooms you don\'t want to leave at 11pm.',
    image: 'images/projects/townhouse-holiday.jpg' },

  { slug: 'greenwich-village-townhouse',    title: 'Greenwich Village Townhouse',  location: 'New York, New York',      year: '2020', scope: 'Townhouse interiors',
    brief: 'A Greenwich Avenue townhouse on a noisy block, made completely calm inside. Heavy joinery, soft light, a private rear courtyard.',
    image: 'images/projects/greenwich-village-townhouse.jpg' },

  { slug: 'park-avenue-duplex',             title: 'Park Avenue Duplex',           location: 'New York, New York',      year: '2019', scope: 'Duplex interiors',
    brief: 'A Park Avenue duplex for a family that wanted formality without stiffness. Classical bones, modern furniture, one strong color per room.',
    image: 'images/projects/park-avenue-duplex.jpg' },

  { slug: '5th-avenue-museum-mile',         title: 'Fifth Avenue · Museum Mile',   location: 'New York, New York',      year: '2022', scope: 'Apartment interiors',
    brief: 'A Museum Mile apartment built around a small but serious art collection. The rooms step back; the work steps forward.',
    image: 'images/projects/5th-avenue-museum-mile.png' },

  { slug: 'greenwich-manor',                title: 'Greenwich Manor',              location: 'Greenwich, Connecticut',  year: '2014', scope: 'Estate interiors',
    brief: 'A Stanwich Road estate, eleven principal rooms, drawn down into a coherent quiet palette. The kind of house you forget is large.',
    image: 'images/projects/greenwich-manor.jpg' },

  { slug: 'connecticut-country-house',      title: 'Connecticut Country House',    location: 'Falls Village, Connecticut', year: '2016', scope: 'Country house interiors',
    brief: 'A Falls Village country house on twenty acres. Painted wood, durable linens, a fireplace in nearly every principal room.',
    image: 'images/projects/connecticut-country-house.jpg' },

  { slug: 'mardi-gras-academy-mansion',     title: 'Academy Mansion',              location: 'New York, New York',      year: '2017', scope: 'Mansion interiors',
    brief: 'A historic mansion off Madison, designed for a client who hosts an annual Mardi Gras. Theatrical color in the public rooms, near-silence everywhere else.',
    image: 'images/projects/mardi-gras-academy-mansion.jpg' },

  { slug: 'hamptons-colonial',              title: 'Hamptons Colonial',            location: 'Quogue, New York',        year: '2020', scope: 'Beach house interiors',
    brief: 'A Quogue colonial three blocks from the ocean. Painted floors, slipcovered everything, the salt air given the run of the house.',
    image: 'images/projects/hamptons-colonial.jpg' },

  { slug: 'northern-thailand-retreat',      title: 'Northern Thailand Retreat',    location: 'Chiang Rai, Thailand',    year: '2015', scope: 'Retreat & interiors',
    brief: 'A retreat in the hills above Chiang Rai. Open pavilions, teak and lime plaster, the architecture barely separating the inside from the forest.',
    image: 'images/projects/northern-thailand-retreat.jpg' },

  { slug: 'chiangmai-country-house',        title: 'Chiang Mai Country House',     location: 'Chiang Mai, Thailand',    year: '2018', scope: 'Country house interiors',
    brief: 'A Chiang Mai country house with deep eaves and slow ceiling fans. Furnished sparely so the breeze has somewhere to go.',
    image: 'images/projects/chiangmai-country-house.jpg' },

  { slug: 'uppereastside-custom-kitchen',   title: 'UES Custom Kitchen',           location: 'New York, New York',      year: '2021', scope: 'Custom kitchen',
    brief: 'A custom kitchen on 75th Street, drawn entirely from scratch. Heavy stone, oak, and a single long window across the back wall.',
    image: 'images/projects/uppereastside-custom-kitchen.jpg' },

  { slug: 'paris-penthouse',                title: 'Paris Penthouse',              location: 'Paris, France',           year: '2019', scope: 'Penthouse interiors',
    brief: 'A penthouse on a quiet rue in the 8th. Pale boiserie restored, modern furniture eased in beside it, Paris held at a slight distance.',
    image: 'images/projects/paris-penthouse.jpg' },

  { slug: 'mediterranean-villa',            title: 'Mediterranean Estate',         location: 'Santanyí, Mallorca',      year: '2020', scope: 'Estate interiors',
    brief: 'A Mallorcan estate above the sea — lime walls, terracotta floors, a long table on a covered terrace where most of the living happens.',
    image: 'images/projects/mediterranean-villa.jpg' },

  { slug: 'lower-east-side-triplex',        title: 'Lower East Side Triplex',      location: 'New York, New York',      year: '2017', scope: 'Triplex interiors',
    brief: 'A LES triplex carved out of a former tenement. Three floors of warm, slightly raw rooms connected by a deliberately heavy stair.',
    image: 'images/projects/lower-east-side-triplex.jpg' },

  { slug: 'palm-beach-villa',               title: 'Palm Beach Villa',             location: 'Palm Beach, Florida',     year: '2023', scope: 'Villa interiors',
    brief: 'A new villa on a quiet Palm Beach block. Low front, deep loggia, every principal room opening to the same pale courtyard.',
    image: 'images/projects/palm-beach-villa.jpg' }
];
