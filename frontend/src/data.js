// Static content that used to be hard-coded in the Jinja templates.

export const INCIDENT_TYPES = [
  'Physical Assault', 'Verbal Abuse', 'Theft', 'Property Damage', 'Noise Complaint',
  'Domestic Dispute', 'Trespassing', 'Harassment', 'Other',
];

export const ANNOUNCEMENT_CATEGORIES = ['General', 'Health', 'Safety', 'Event', 'Reminder', 'Emergency'];

export const STATUSES = ['Pending', 'Settled', 'Dismissed'];

// Colours for announcement categories (same palette as the old templates)
export const CATEGORY_STYLE = {
  Emergency: { border: '#ef233c', bg: 'rgba(239,35,60,0.18)', fg: '#fca5a5' },
  Health: { border: '#34d399', bg: 'rgba(52,211,153,0.18)', fg: '#6ee7b7' },
  Safety: { border: '#fbbf24', bg: 'rgba(251,191,36,0.18)', fg: '#fde68a' },
  Event: { border: '#60a5fa', bg: 'rgba(96,165,250,0.18)', fg: '#93c5fd' },
  Reminder: { border: '#a1a1aa', bg: 'rgba(161,161,170,0.18)', fg: '#d4d4d8' },
};
export const DEFAULT_CATEGORY_STYLE = CATEGORY_STYLE.Event;

export const ORDINANCES = [
  { no: '001', img: '/static/images/karaoke.webp', alt: 'Karaoke', title: 'Anti-Noise Pollution',
    summary: 'No excessive noise (karaoke, loud machinery) between 10:00 PM and 6:00 AM in residential areas.',
    penalty: '₱500 – ₱2k' },
  { no: '002', img: '/static/images/Litter.webp', alt: 'Littering', title: 'Anti-Littering',
    summary: 'Proper waste disposal and segregation is required. Dumping trash in creeks and vacant lots is prohibited.',
    penalty: '₱200 – ₱1k' },
  { no: '003', img: '/static/images/Curfew.webp', alt: 'Curfew', title: 'Curfew for Minors',
    summary: 'Minors under 18 years old are strictly not allowed in public areas, streets, and internet cafes between 10:00 PM and 5:00 AM.',
    penalty: 'Parent Summons' },
  { no: '004', img: '/static/images/smoking.jpg', alt: 'Smoking', title: 'Anti-Smoking',
    summary: 'Smoking and vaping are strictly prohibited in public parks, main streets, and public utility vehicles.',
    penalty: '₱500 – ₱1k' },
  { no: '005', img: '/static/images/dog.webp', alt: 'Dog', title: 'Stray Animal Control',
    summary: 'Pet owners must keep dogs and cats inside their premises. Roaming pets without a leash will be impounded.',
    penalty: '₱500 + Impound' },
  { no: '006', img: '/static/images/no%20parking.webp', alt: 'No Parking', title: 'Anti-Road Obstruction',
    summary: 'Sidewalks and public roads must remain clear of illegal parking, vendor stalls, and private property extensions.',
    penalty: '₱1k + Towing' },
  { no: '007', img: '/static/images/fire.webp', alt: 'Fire', title: 'Anti-Open Burning',
    summary: 'The burning of garbage, dried leaves, tires, or plastics (siga) in backyards and public spaces is strictly prohibited.',
    penalty: '₱500 – ₱1k' },
  { no: '008', img: '/static/images/liqour.webp', alt: 'Liquor', title: 'Liquor Regulations',
    summary: 'Selling alcohol to minors is banned. Drinking alcoholic beverages on public sidewalks and streets is not allowed.',
    penalty: '₱1k – ₱2.5k' },
  { no: '009', img: '/static/images/vandal.webp', alt: 'Vandalism', title: 'Anti-Vandalism',
    summary: 'Defacing, writing graffiti, or drawing on public property, community fences, and private walls is an offense.',
    penalty: '₱1k + Cleaning' },
];

export const FILING_GUIDELINES = [
  { title: 'File within 24 hours',
    text: 'Report incidents as soon as possible for accurate documentation and faster resolution.' },
  { title: 'Provide accurate information',
    text: 'All information must be truthful and complete. Filing false reports carries legal penalties.' },
  { title: 'One report per incident',
    text: 'Do not file duplicate reports for the same incident. Contact the barangay to update existing ones.' },
];
