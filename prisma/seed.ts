// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const pujaData = [
  {
    title: "Akshaya Tritiya Puja",
    tag: "Akshaya Tritiya",
    date: "2025-05-10", // Format: YYYY-MM-DD
    location: "Shaktipeeth Mahalaxmi Kolhapur",
    benefits: "Considered highly auspicious for new beginnings, wealth generation, and long-term prosperity.",
    description: "Akshaya Tritiya is one of the most auspicious days in the Hindu calendar. 'Akshaya' means imperishable or eternal - that which never diminishes. Performing puja on this day is believed to bring unending prosperity."
  },
  {
    title: "Ganesh Chaturthi",
    tag: "Ganesh Chaturthi",
    date: "2025-09-02",
    location: "Prachin Vishnu-Lakshmi Temple, Lakshmi Kund, Kashi",
    benefits: "Removes obstacles, brings wisdom, prosperity, and good fortune.",
    description: "Ganesh Chaturthi celebrates the birth of Lord Ganesha, the elephant-headed deity. The festival involves installing clay idols of Ganesha and worshipping them with elaborate rituals."
  },
  {
    title: "Navratri Puja",
    tag: "Navratri",
    date: "2025-10-03",
    location: "TShri Kaal Bhairav Temple, Rameswaram",
    benefits: "Spiritual growth, victory over negativity, and divine blessings from Goddess Durga.",
    description: "Navratri is a nine-night festival celebrating the divine feminine. Each day is dedicated to a different form of Goddess Durga, with specific rituals and offerings."
  },
  {
    title: "Diwali Lakshmi Puja",
    tag: "Diwali",
    date: "2025-11-12",
    location: "Chintaman Ganesh Mandir, Ujjain",
    benefits: "Wealth, prosperity, and divine blessings from Goddess Lakshmi.",
    description: "Lakshmi Puja is performed on Diwali, the festival of lights. Homes are cleaned and decorated with lamps to welcome Goddess Lakshmi, who is believed to visit and bless homes that are well-lit and clean."
  },
  {
    title: "Saraswati Puja",
    tag: "Vasant Panchami",
    date: "2026-01-31",
    location: "Shaktipeeth Vishalakshi, Varanasi",
    benefits: "Knowledge, wisdom, arts, and academic success.",
    description: "Saraswati Puja is performed to honor Goddess Saraswati, the deity of knowledge, music, arts, and learning. Students especially pray for success in their studies."
  },
  {
    title: "Maha Shivratri",
    tag: "Maha Shivratri",
    date: "2026-02-17",
    location: "SNaimisharanya Tirtha Kshetra",
    benefits: "Spiritual awakening, overcoming darkness and ignorance, Lord Shiva's blessings.",
    description: "Maha Shivratri is the great night of Lord Shiva. Devotees fast, stay awake all night, and perform abhishekam (ritual bathing of the Shiva Lingam) to receive his blessings."
  },
  {
    title: "Ram Navami",
    tag: "Ram Navami",
    date: "2026-04-05",
    location: "Kanchipuram Tirtha Kshetra and DevDham",
    benefits: "Righteousness, moral strength, and Lord Ram's divine protection.",
    description: "Ram Navami celebrates the birth of Lord Ram, the seventh avatar of Lord Vishnu. Devotees recite the Ramayana and perform special prayers to honor his life and teachings."
  }
];

async function main() {
  console.log('Start seeding...');
  
  // Clean up existing data
  await prisma.puja.deleteMany();
  console.log('Deleted existing puja records');
  
  // Create new records
  for (const puja of pujaData) {
    const createdPuja = await prisma.puja.create({
      data: puja
    });
    console.log(`Created puja with ID: ${createdPuja.id}`);
  }
  
  console.log('Seeding finished!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });