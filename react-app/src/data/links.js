// Fulton County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-21

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "qPublic (Schneider)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Fulton County (Official Site)", category: "Government", subcategory: "County", url: "https://www.fultoncountyoh.com/", description: "Official government portal for Fulton County, Ohio (county seat: Wauseon)." },
  { name: "Fulton County Auditor", category: "Government", subcategory: "Auditor", url: "https://qpublic.schneidercorp.com/Application.aspx?App=FultonCountyOH&PageType=Search", description: "Property records, valuations, and parcel/property search (hosted on the qPublic / Schneider platform)." },
  { name: "Fulton County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/fulton/", description: "Voter registration, polling locations, and election administration." },
  // ---------- Education ----------
  { name: "Wauseon Public Library", category: "Education", subcategory: "Library", url: "https://wauseonlibrary.org/", description: "Public library in the county seat, Wauseon." },
  { name: "Fulton County Schools & Colleges", category: "Education", subcategory: "K-12", url: "https://www.fultoncountyoh.com/111/Schools-Colleges", description: "Official directory of the county's public school districts and colleges." },
  { name: "Northwest State Community College", category: "Education", subcategory: "Higher Ed", url: "https://www.northweststate.edu/", description: "Public two-year college headquartered in Archbold, in Fulton County." },
  // ---------- Health ----------
  { name: "Fulton County Health Center", category: "Health", subcategory: "Hospital", url: "https://www.fultoncountyhealthcenter.org/", description: "Community hospital and health system in Wauseon." },
  { name: "Fulton County Health Department", category: "Health", subcategory: "Public Health", url: "https://fultoncountyhealthdept.com/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  // ---------- Business & Economy ----------
  { name: "Fulton County Economic Development Corporation", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.thriveinfultoncounty.com/", description: "Countywide economic development, business attraction, and retention (Thrive in Fulton County)." },
  // ---------- Recreation & Tourism ----------
  { name: "Sauder Village", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.saudervillage.org/", description: "Ohio's largest living-history village and a major attraction, in Archbold." },
  // ---------- News & Media ----------
  { name: "The Village Reporter", category: "News & Media", subcategory: "Newspaper", url: "https://thevillagereporter.com/", description: "Community newspaper covering Fulton County and the surrounding area." },
];
