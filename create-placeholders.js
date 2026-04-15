const fs = require('fs');
const path = require('path');

// Using sharp library if available, otherwise create simple SVG placeholders
const doctors = [
  { filename: 'dr-nisha-bali.jpg', name: 'Dr. Nisha Bali', initials: 'NB', color: '#0284c7' },
  { filename: 'dr-aneesh-katyal.jpg', name: 'Dr. Aneesh Katyal', initials: 'AK', color: '#0369a1' },
  { filename: 'dr-gauri-kalra-yadav.jpg', name: 'Dr. Gauri Kalra Yadav', initials: 'GK', color: '#0284c7' },
  { filename: 'dr-shiva-sharma.jpg', name: 'Dr. Shiva Sharma', initials: 'SS', color: '#0369a1' },
];

const docsDir = path.join(__dirname, 'public', 'images', 'doctors');

doctors.forEach(({ filename, name, initials, color }) => {
  const svg = `
    <svg width="400" height="500" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="500" fill="${color}"/>
      <circle cx="200" cy="150" r="100" fill="white"/>
      <text x="200" y="180" font-size="60" font-weight="bold" text-anchor="middle" fill="${color}" font-family="Arial">
        ${initials}
      </text>
      <text x="200" y="420" font-size="24" text-anchor="middle" fill="white" font-family="Arial">
        ${name}
      </text>
    </svg>
  `;

  const filepath = path.join(docsDir, filename.replace('.jpg', '.svg'));
  fs.writeFileSync(filepath, svg.trim());
  console.log(`Created ${filepath}`);
});

console.log('✓ Placeholder images created!');
