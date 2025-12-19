

const BASE = import.meta.env.BASE_URL;
const dummyStories = [
  {
    id: 1,
    name: "Aarushi Sharma",
    diagnosis: "PCOD / PCOS",
    dischargedDate: "2025-08-10",
    videoUrl: `${BASE}Videos/pcod.mp4`,
    package: "PCOD / PCOS Management",
  },
  {
    id: 2,
    name: "Ramesh Gupta",
    diagnosis: "Type 2 Diabetes",
    dischargedDate: "2025-07-20",
    videoUrl: `${BASE}Videos/Diabetic.mp4`,
    package: "Diabetes Care Plan"
  },
  {
    id: 3,
    name: "Suresh Menon",
    diagnosis: "High Cholesterol",
    dischargedDate: "2025-06-15",
    videoUrl: `${BASE}Videos/cholestral.mp4`,
    package: "Heart & Cholesterol Health"
  },
  {
    id: 4,
    name: "Meena Patel",
    diagnosis: "Hypertension",
    dischargedDate: "2025-08-01",
    videoUrl: `${BASE}Videos/Bloodpressure.mp4`,
    package: "Blood Pressure Control"
  },
  {
    id: 5,
    name: "Arjun Rao",
    diagnosis: "GI Surgery Recovery",
    dischargedDate: "2025-09-05",
    videoUrl:  `${BASE}Videos/Rtfeed.mp4`,
    package: "Post-Surgery Nutrition (RT Feeds)"
  },
  {
    id: 6,
    name: "Divya Nair",
    diagnosis: "Hypothyroidism",
    dischargedDate: "2025-08-25",
    videoUrl: `${BASE}Videos/Thyroid.mp4`,
    package: "Thyroid Care Package"
  },
  {
    id: 7,
    name: "Vikram Singh",
    diagnosis: "Chronic Kidney Disease",
    dischargedDate: "2025-07-30",
    videoUrl: `${BASE}Videos/Kidney Care.mp4`,
    package: "Kidney Care Plan"
  },
  {
    id: 8,
    name: "Sanjana Reddy",
    diagnosis: "Fatty Liver",
    dischargedDate: "2025-09-12",
    videoUrl: `${BASE}Videos/Fatty Liver.mp4`,
    package: "Liver Care Package"
  },
  {
    id: 9,
    name: "Karthik Iyer",
    diagnosis: "Cancer (Post Chemo)",
    dischargedDate: "2025-08-05",
    videoUrl: `${BASE}Videos/Cancer.mp4`,
    package: "Cancer Nutrition Package"
  },
  {
    id: 10,
    name: "Anita Das",
    diagnosis: "IBS & Gastritis",
    dischargedDate: "2025-09-02",
    videoUrl: `${BASE}Videos/Gastritis.mp4`,
    package: "Gastrointestinal (GI Health)"
  },
  {
    id: 11,
    name: "Pooja Verma",
    diagnosis: "Pregnancy (3rd Trimester)",
    dischargedDate: "2025-08-18",
    videoUrl: `${BASE}Videos/Pregnancy.mp4`,
    package: "Pregnancy Nutrition Package"
  },
  {
    id: 12,
    name: "Sneha Kulkarni",
    diagnosis: "Post Delivery Recovery",
    dischargedDate: "2025-09-10",
    videoUrl: `${BASE}Videos/Post Delivery.mp4`,
    package: "Lactation Nutrition Package"
  },
  {
    id: 13,
    name: "Rohit Sharma (Child)",
    diagnosis: "Anemia & Low Weight",
    dischargedDate: "2025-07-25",
    videoUrl: `${BASE}Videos/Child Nutrition.mp4`,
    package: "Child Nutrition Package"
  },
  {
    id: 14,
    name: "Krishna Murthy",
    diagnosis: "Joint Pain & Diabetes",
    dischargedDate: "2025-08-28",
    videoUrl: `${BASE}Videos/Joint Pain.mp4`,
    package: "Senior Citizen Nutrition"
  },
  {
    id: 15,
    name: "Aditya Mehra",
    diagnosis: "Sports Nutrition (Athlete)",
    dischargedDate: "2025-09-08",
    videoUrl: `${BASE}Videos/Sports.mp4`,
    package: "Sports & Fitness Nutrition"
  }
];

export default dummyStories;
