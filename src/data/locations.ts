import cofferedCeiling from "../assets/images/coffered-ceiling.jpg";
import commercialArchedWindows from "../assets/images/commercial-arched-windows.jpg";
import frontPorchDeck from "../assets/images/front-porch-deck.jpg";
import wallPanelling from "../assets/images/wall-panelling.jpg";
import whiteWainscoting from "../assets/images/white-wainscoting.jpg";
import porchColumnsProgress from "../assets/images/porch-columns-progress.jpg";
import porchRestoration from "../assets/images/porch-restoration.jpg";
import fireplaceSurround from "../assets/images/fireplace-surround.jpg";
import displayShelving from "../assets/images/display-shelving.jpg";
import deckStairs from "../assets/images/deck-stairs.jpg";
import basementBuiltin from "../assets/images/basement-builtin.jpg";
import ceilingTrimRenovation from "../assets/images/ceiling-trim-renovation.jpg";
import customShelfBuild from "../assets/images/custom-shelf-build.jpg";

export interface LocationImage {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export interface Location {
  slug: string;
  name: string;
  description: string;
  nearbyAreas: string[];
  images: LocationImage[];
  metaTitle: string;
  metaDescription: string;
}

export const locations: Location[] = [
  {
    slug: "hamilton",
    name: "Hamilton",
    description: "Based right here in Hamilton, Walkercraft Carpentry has been serving the Hammer since 2019. From Westdale to Stoney Creek, we know these homes — their character, their quirks, and what they need.",
    nearbyAreas: ["Westdale", "Dundas", "Ancaster", "Stoney Creek", "Binbrook"],
    images: [
      { src: cofferedCeiling, alt: "Custom coffered ceiling installed by Walkercraft Carpentry in Hamilton", caption: "Coffered ceiling — Hamilton" },
      { src: commercialArchedWindows, alt: "Commercial arched window trim by Walkercraft Carpentry in Hamilton", caption: "Arched window trim — Hamilton" },
      { src: frontPorchDeck, alt: "Cedar front porch deck built by Walkercraft Carpentry in Hamilton", caption: "Front porch build — Hamilton" },
    ],
    metaTitle: "Carpentry & Handyman Services in Hamilton | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Hamilton, Ontario. Custom builds, decks, trim, and home repairs by Brett Walker. Free estimates.",
  },
  {
    slug: "burlington",
    name: "Burlington",
    description: "Walkercraft Carpentry serves homeowners across Burlington, from the lakefront to Alton Village. Quality craftsmanship for your home — no runaround.",
    nearbyAreas: ["Alton Village", "Tyandaga", "Palmer", "Hamilton", "Oakville"],
    images: [
      { src: wallPanelling, alt: "Custom wall panelling installed by Walkercraft Carpentry in Burlington", caption: "Wall panelling — Burlington" },
      { src: whiteWainscoting, alt: "Full wall white wainscoting by Walkercraft Carpentry in Burlington", caption: "White wainscoting — Burlington" },
      { src: fireplaceSurround, alt: "Custom fireplace surround by Walkercraft Carpentry", caption: "Fireplace surround" },
    ],
    metaTitle: "Carpentry & Handyman Services in Burlington | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Burlington, Ontario. Custom builds, trim, wainscoting, and home repairs. Free estimates.",
  },
  {
    slug: "oakville",
    name: "Oakville",
    description: "Serving Oakville homeowners with the same hands-on craftsmanship we bring to every job. From Bronte to Old Oakville, we handle custom carpentry, decks, and repairs.",
    nearbyAreas: ["Bronte", "Old Oakville", "Glen Abbey", "Burlington", "Mississauga"],
    images: [
      { src: ceilingTrimRenovation, alt: "Ceiling and trim renovation by Walkercraft Carpentry", caption: "Ceiling & trim renovation" },
      { src: customShelfBuild, alt: "Custom shelf build by Walkercraft Carpentry", caption: "Custom shelf build" },
      { src: wallPanelling, alt: "Custom wall panelling by Walkercraft Carpentry", caption: "Wall panelling" },
    ],
    metaTitle: "Carpentry & Handyman Services in Oakville | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Oakville, Ontario. Custom woodwork, decks, trim, and repairs by Brett Walker. Free estimates.",
  },
  {
    slug: "ancaster",
    name: "Ancaster",
    description: "Walkercraft Carpentry serves Ancaster and the surrounding area. From heritage home restorations to new builds, we bring careful craftsmanship to every project.",
    nearbyAreas: ["Dundas", "Hamilton", "Brantford", "Copetown", "Jerseyville"],
    images: [
      { src: porchColumnsProgress, alt: "Porch column restoration by Walkercraft Carpentry in Ancaster", caption: "Porch columns — Ancaster" },
      { src: porchRestoration, alt: "Porch soffit restoration by Walkercraft Carpentry in Ancaster", caption: "Porch restoration — Ancaster" },
      { src: cofferedCeiling, alt: "Custom coffered ceiling by Walkercraft Carpentry", caption: "Coffered ceiling" },
    ],
    metaTitle: "Carpentry & Handyman Services in Ancaster | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Ancaster, Ontario. Porch restorations, custom builds, trim, and repairs. Free estimates.",
  },
  {
    slug: "dundas",
    name: "Dundas",
    description: "Just down the road from our home base, Walkercraft Carpentry has completed projects throughout Dundas. We understand the character of the Valley Town's homes.",
    nearbyAreas: ["Ancaster", "Hamilton", "Waterdown", "Flamborough", "Greensville"],
    images: [
      { src: fireplaceSurround, alt: "Custom fireplace surround by Walkercraft Carpentry", caption: "Fireplace surround" },
      { src: displayShelving, alt: "Custom display shelving by Walkercraft Carpentry", caption: "Display shelving" },
      { src: ceilingTrimRenovation, alt: "Ceiling and trim renovation by Walkercraft Carpentry", caption: "Ceiling & trim renovation" },
    ],
    metaTitle: "Carpentry & Handyman Services in Dundas | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Dundas, Ontario. Custom woodwork, shelving, trim, and home repairs. Free estimates.",
  },
  {
    slug: "stoney-creek",
    name: "Stoney Creek",
    description: "Walkercraft Carpentry serves homeowners across Stoney Creek, from Winona to the Battlefield area. Reliable carpentry and handyman services for your home.",
    nearbyAreas: ["Winona", "Grimsby", "Hamilton", "Binbrook", "Fruitland"],
    images: [
      { src: deckStairs, alt: "Custom deck stairs by Walkercraft Carpentry", caption: "Custom deck stairs" },
      { src: basementBuiltin, alt: "Basement built-in cabinet by Walkercraft Carpentry", caption: "Basement built-in" },
      { src: frontPorchDeck, alt: "Cedar front porch deck by Walkercraft Carpentry", caption: "Front porch build" },
    ],
    metaTitle: "Carpentry & Handyman Services in Stoney Creek | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Stoney Creek, Ontario. Decks, built-ins, repairs, and custom woodwork. Free estimates.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getOtherLocations(slug: string): Location[] {
  return locations.filter((loc) => loc.slug !== slug);
}
