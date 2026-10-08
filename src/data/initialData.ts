import {
  Notice,
  Teacher,
  LeadershipMember,
  Program,
  Subject,
  OJTGradeInfo,
  GalleryItem,
  Testimonial,
  Spokesperson,
  DeveloperProfile,
} from '../types';

export const initialLeadership: LeadershipMember[] = [
  {
    id: 'lead-coordinator',
    name: 'Kailash Rayamajhi',
    nepaliName: 'कैलाश रायमाझी',
    role: 'Coordinator',
    designation: 'Department Coordinator — Plant Science',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    phone: '035-450-154 / +977-9842851234',
    email: 'kailash.rayamajhi@trivenischool.edu.np',
    introduction:
      'Dedicated agricultural educator leading the technical Plant Science stream at Triveni Secondary School. Passionate about empowering students through hands-on polyhouse cultivation, soil testing, and modern farming techniques in Koshi Province.',
    message:
      'Welcome to the Department of Plant Science at Triveni Secondary School, Katari. Our curriculum integrates theoretical rigor with deep, field-based agricultural training. We believe in preparing young minds not just to pass exams, but to become self-reliant agricultural leaders, agronomists, and entrepreneurs who transform the farming landscape of Nepal.',
    credentials: ['M.Sc. Agriculture (Agronomy)', '12+ Years Teaching & Field Training', 'Lead Trainer — National OJT Framework'],
  },
  {
    id: 'lead-principal',
    name: 'Gyanendra Bahadur Karki',
    nepaliName: 'ज्ञानेन्द्र बहादुर कार्की',
    role: 'Principal',
    designation: 'Principal — Triveni Secondary School',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    phone: '035-450-154',
    email: 'principal@trivenischool.edu.np',
    introduction:
      'Long-serving visionary institutional leader with decades of academic governance experience in Udayapur district. Committed to quality education, academic discipline, and vocational excellence in rural and semi-urban Nepal.',
    message:
      'Triveni Secondary School stands as an academic beacon in Katari, Udayapur. By establishing our specialized Department of Plant Science, we have bridged the gap between secondary education and national agrarian prosperity. Our students enjoy modern scientific laboratories, experimental crop plots, and invaluable On-the-Job Training.',
    credentials: ['M.Ed. Educational Leadership', 'M.A. Sociology', '25+ Years in Educational Administration'],
  },
];

export const initialTeachers: Teacher[] = [
  {
    id: 't-1',
    name: 'Kailash Rayamajhi',
    nepaliName: 'कैलाश रायमाझी',
    designation: 'Department Coordinator & Senior Agronomy Instructor',
    qualification: 'M.Sc. Ag (Agronomy), Tribhuvan University (IAAS)',
    subject: 'Agronomy, Crop Production & Seed Science',
    department: 'Department of Plant Science',
    email: 'kailash.rayamajhi@trivenischool.edu.np',
    phone: '035-450-154',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Specialist in cereal crop agronomy, climate-resilient crop rotation, and technical curriculum development for secondary technical education.',
    specializations: ['Cereal Production', 'Commercial Seed Tech', 'Nursery Management', 'OJT Mentorship'],
    experienceYears: 12,
  },
  {
    id: 't-2',
    name: 'Birendra Chaudhary',
    nepaliName: 'बिरेन्द्र चौधरी',
    designation: 'Lecturer in Horticulture & Floriculture',
    qualification: 'B.Sc. Agriculture, Agriculture and Forestry University (AFU)',
    subject: 'Horticulture, Polyhouse Cultivation & Post-Harvest',
    department: 'Department of Plant Science',
    email: 'birendra.chaudhary@trivenischool.edu.np',
    phone: '035-450-154',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Passionate horticulturalist guiding students in organic vegetable farming, grafting, budding, and commercial orchard management.',
    specializations: ['Orchard Management', 'Vegetable Grafting', 'Greenhouse Climate Control', 'Mushroom Cultivation'],
    experienceYears: 8,
  },
  {
    id: 't-3',
    name: 'Sarita Katuwal',
    nepaliName: 'सरिता कटुवाल',
    designation: 'Instructor — Plant Protection & Pathology',
    qualification: 'M.Sc. Plant Pathology, IAAS Rampur',
    subject: 'Plant Pathology, Entomology & Integrated Pest Management (IPM)',
    department: 'Department of Plant Science',
    email: 'sarita.katuwal@trivenischool.edu.np',
    phone: '035-450-154',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Expert in non-chemical biological pest control, pathogen diagnosis in regional crops of Eastern Nepal, and laboratory microscopy training.',
    specializations: ['Integrated Pest Management', 'Microbial Biocontrol', 'Fungal Disease Diagnostics', 'Laboratory Safety'],
    experienceYears: 7,
  },
  {
    id: 't-4',
    name: 'Prakash Bhattarai',
    nepaliName: 'प्रकाश भट्टराई',
    designation: 'Instructor — Soil Science & Agricultural Engineering',
    qualification: 'B.Sc. Agriculture, Purbanchal University',
    subject: 'Soil Science, Fertilizer Management & Farm Machinery',
    department: 'Department of Plant Science',
    email: 'prakash.bhattarai@trivenischool.edu.np',
    phone: '035-450-154',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Leads the school soil testing mini-laboratory, training students in pH analysis, organic manure formulation, and drip irrigation systems.',
    specializations: ['Soil Chemistry & Fertility', 'Micro-Irrigation', 'Bio-fertilizer Formulation', 'Farm Mechanization'],
    experienceYears: 6,
  },
  {
    id: 't-5',
    name: 'Nirmala Adhikari',
    nepaliName: 'निर्मला अधिकारी',
    designation: 'Instructor — Agricultural Economics & Extension',
    qualification: 'B.Sc. Agriculture, IAAS Paklihawa',
    subject: 'Agricultural Economics, Agribusiness & Farm Marketing',
    department: 'Department of Plant Science',
    email: 'nirmala.adhikari@trivenischool.edu.np',
    phone: '035-450-154',
    photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
    bio: 'Fosters rural entrepreneurship, cooperative farming structures, value-chain mapping, and farmer group facilitation techniques.',
    specializations: ['Agribusiness Planning', 'Rural Cooperatives', 'Value-Chain Analysis', 'Community Field Extension'],
    experienceYears: 5,
  },
  {
    id: 't-6',
    name: 'Roshan Magar',
    nepaliName: 'रोशन मगर',
    designation: 'Practical Field Supervisor & Farm In-charge',
    qualification: 'Diploma in Agriculture (Plant Science), CTEVT',
    subject: 'Practical Field Works, Nursery Operations & Equipment Maintenance',
    department: 'Department of Plant Science',
    email: 'roshan.magar@trivenischool.edu.np',
    phone: '035-450-154',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    bio: 'Oversees day-to-day demonstration farms, seed beds, tool custody, compost pits, and experimental vegetable plots at the school premises.',
    specializations: ['Nursery Operations', 'Compost Composting', 'Sprayer Calibration', 'Field Demonstrations'],
    experienceYears: 9,
  },
];

export const initialNotices: Notice[] = [
  {
    id: 'notice-1',
    title: 'Admission Notice 2083/2084: Secondary Technical Stream (Plant Science)',
    nepaliTitle: 'भर्ना सम्बन्धी सूचना २०८३/२०८४: प्राविधिक धार (बाली विज्ञान)',
    date: '2026-03-28',
    nepaliDate: '२०८२ चैत्र १५',
    category: 'Admission',
    type: 'pdf',
    important: true,
    publishedBy: 'Administration Office & Plant Science Dept',
    description:
      'Applications are formally invited for Class 9 and Class 11 Technical Plant Science stream for the academic session 2083/2084. Limited seats are reserved for quota and open merit candidates with practical aptitude.',
    fileUrl: '/documents/admission-notice-2083.pdf',
    downloadUrl: '#download-admission-2083',
    pdfPages: [
      `TRIVENI SECONDARY SCHOOL
DEPARTMENT OF PLANT SCIENCE
Katari-4, Udayapur, Koshi Province, Nepal
Phone: 035-450-154

OFFICIAL NOTICE: ADMISSION OPEN (SESSION 2083/2084)
Ref No: TSS/ADM/2083-04
Date: 2082 Chaitra 15 (March 28, 2026)

This is to notify all aspiring students, parents, and guardians that admissions are officially open for:
1. Technical Secondary Stream (Grade 9 Plant Science) - 48 Seats
2. Technical Higher Secondary Stream (Grade 11 Plant Science) - 48 Seats

ELIGIBILITY CRITERIA:
- Grade 9: Passed Grade 8 (BLE) with minimum Grade Point 'C' in Science, Math, and English.
- Grade 11: Passed Secondary Education Examination (SEE) with minimum GPA 2.0 and 'C+' in Science and Mathematics.

KEY DATES:
• Form Submission Deadline: 2083 Baishakh 12 (April 25, 2026)
• Entrance Examination: 2083 Baishakh 15 at 11:00 AM (School Hall)
• Result Publication: 2083 Baishakh 18
• Orientation & Class Commencement: 2083 Baishakh 22

REQUIRED DOCUMENTS:
1. Two passport size photographs
2. Copy of BLE / SEE Marksheet and Character Certificate
3. Copy of Birth Certificate / Citizenship of guardian
4. Recommendation for targeted / scholarship quotas from local ward office.

Approved by:
Gyanendra Bahadur Karki (Principal)
Kailash Rayamajhi (Coordinator, Plant Science)`,
    ],
  },
  {
    id: 'notice-2',
    title: 'OJT Schedule 2083: Grade 12 Comprehensive Field Internship Placement',
    nepaliTitle: 'ओ.जे.टी. कार्यतालिका २०८३: कक्षा १२ विस्तृत प्रयोगात्मक तालिम',
    date: '2026-04-02',
    nepaliDate: '२०८२ चैत्र २०',
    category: 'OJT',
    important: true,
    publishedBy: 'OJT Coordination Committee',
    description:
      'Detailed schedule, mandatory logbook distribution, and placement allocations for Grade 12 On-the-Job Training at Krishi Gyan Kendra, Katari Municipality Agriculture Section, and Regional Seed Farms.',
    type: 'pdf',
    fileUrl: '/documents/ojt-schedule-2083.pdf',
    downloadUrl: '#download-ojt-2083',
    pdfPages: [
      `TRIVENI SECONDARY SCHOOL
DEPARTMENT OF PLANT SCIENCE
Katari-4, Udayapur, Koshi Province

NOTICE REGARDING ON-THE-JOB TRAINING (OJT) 2083
Grade 12 Plant Science Students

All students of Class 12 Plant Science are hereby notified to collect their official OJT Daily Activity Logbook and Internship Placement Letters from the Coordinator Office.

OJT PHASES & TIMELINE:
• Orientation & Safety Briefing: 2083 Baishakh 05
• Deployment to Assigned Farms / Agribusiness Centers: 2083 Baishakh 08
• Mid-Term Field Inspection by Faculty: 2083 Ashadh 15-20
• Final Logbook Submission & Viva Voce: 2083 Ashwin 10

PLACEMENT CENTERS:
1. Krishi Gyan Kendra, Udayapur (Gaighat & Katari Field Units)
2. Katari Municipality Agriculture Extension Section
3. Udayapur Tea & Coffee Development Cooperative
4. Regional Maize and Vegetable Seed Production Farm
5. Katari Hi-Tech Nursery & Organic Vegetable Hub

Mandatory: All trainees must maintain their daily log with institutional supervisor signatures.

Kailash Rayamajhi
Coordinator / OJT Supervisor`,
    ],
  },
  {
    id: 'notice-3',
    title: 'Pre-Board Examination Routine 2083 (Classes 9, 10, 11 & 12)',
    nepaliTitle: 'प्रि-बोर्ड परीक्षा तालिका २०८३ (कक्षा ९, १०, ११ र १२)',
    date: '2026-04-05',
    nepaliDate: '२०८२ चैत्र २३',
    category: 'Examination',
    important: false,
    publishedBy: 'Internal Examination Committee',
    description:
      'The complete routine for both theoretical and practical examinations for Classes 9, 10, 11, and 12 Plant Science stream. Theory exams will be conducted in the morning shift from 8:00 AM.',
    type: 'pdf',
    fileUrl: '/documents/exam-routine-2083.pdf',
    downloadUrl: '#download-exam-routine',
    pdfPages: [
      `TRIVENI SECONDARY SCHOOL
EXAMINATION CONTROLLER DIVISION
Katari-4, Udayapur

PRE-BOARD EXAMINATION ROUTINE 2083 (PLANT SCIENCE STREAM)
Examination Shift: Morning (8:00 AM - 11:00 AM)

Date & Day          | Class 9 & 10                     | Class 11 & 12
--------------------------------------------------------------------------------------
2083-01-20 (Sun)    | Compulsory English               | Compulsory English
2083-01-21 (Mon)    | Compulsory Nepali                | Compulsory Nepali
2083-01-22 (Tue)    | Compulsory Mathematics           | Agronomy & Cereal Science
2083-01-23 (Wed)    | General Plant Science            | Horticulture & Pomology
2083-01-24 (Thu)    | Soil Science & Fertilizer        | Plant Pathology & Entomology
2083-01-25 (Fri)    | Agri Extension & Farm Tech       | Agribusiness & Soil Chemistry
2083-01-27 (Sun)    | Practical & Viva Examination     | Practical Demonstration & Viva

RULES:
1. Entry to exam hall strictly requires Admit Card.
2. Mobile phones and unauthorized materials are strictly prohibited.
3. Arrive 15 minutes prior to commencement.`,
    ],
  },
  {
    id: 'notice-4',
    title: 'Koshi Province Agriculture Talent Scholarship Distribution Notice',
    nepaliTitle: 'कोशी प्रदेश कृषि प्रतिभा छात्रवृत्ति वितरण सूचना',
    date: '2026-04-06',
    nepaliDate: '२०८२ चैत्र २४',
    category: 'Scholarship',
    important: true,
    publishedBy: 'Scholarship & Welfare Desk',
    description:
      'Announcement of selected merit and underprivileged scholarship recipients for technical agricultural education, funded by the Koshi Province Ministry of Agriculture and Katari Municipality.',
    type: 'text',
    fileUrl: '',
    downloadUrl: '',
    descriptionDetailed: `The Department of Plant Science at Triveni Secondary School is proud to publish the final selected list of candidates awarded the Koshi Province Agriculture Talent Scholarship and Institutional Fee Waiver for the current term.

Selected categories include:
1. Female Plant Science Leadership Scholarship (100% Tuition Waiver)
2. Janajati and Marginalized Community Agro-Education Support
3. Top Academic Performer across BLE and SEE Technical streams

Recipients are requested to visit the school accounts section along with their original recommendation certificates and student identity cards within Baishakh 10, 2083 to complete paperwork.`,
  },
  {
    id: 'notice-5',
    title: 'Field Practical & Polyhouse Nursery Guidelines for Summer Season',
    nepaliTitle: 'गर्मी यामका लागि प्रयोगात्मक तथा नर्सरी कार्य निर्देशिका',
    date: '2026-04-07',
    nepaliDate: '२०८२ चैत्र २५',
    category: 'Academic',
    important: false,
    publishedBy: 'Farm Management Unit',
    description:
      'Instructions for all Plant Science students participating in early-morning seedling bed preparation, off-season tomato grafting, and drip irrigation maintenance.',
    type: 'image',
    fileUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1200&q=80',
    downloadUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1200&q=80',
  },
];

export const initialPrograms: Program[] = [
  {
    id: 'prog-plant-science',
    slug: 'plant-science-secondary',
    title: 'Secondary Technical Stream: Plant Science (Classes 9–12)',
    nepaliTitle: 'प्राविधिक तथा व्यावसायिक धार: बाली विज्ञान (कक्षा ९-१२)',
    tagline: 'Empowering future agricultural leaders through scientific rigor and practical agronomy',
    level: 'Secondary Technical Level (National Curriculum Framework Nepal)',
    duration: '4 Years (Grade 9 to 12) + Comprehensive OJT',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80',
    description:
      'A prestigious 4-year technical stream under the National Examination Board (NEB) designed to equip students with specialized competencies in cereal crops, horticulture, soil fertility, plant protection, and farm entrepreneurship.',
    fullDescription:
      'The Plant Science stream at Triveni Secondary School in Katari-4, Udayapur is crafted to bridge the gap between rural agrarian potential and modern scientific farming. Spanning from Grade 9 through Grade 12, the curriculum blends foundational science, mathematics, and communication skills with rigorous theoretical and hands-on agricultural training. Students gain immediate, practical experience in our on-campus nursery, vegetable polyhouse, mushroom shed, and micro-soil testing lab, culminating in a mandatory field On-the-Job Training (OJT).',
    objectives: [
      'Master scientific principles of cereal, cash crop, fruit, and vegetable production.',
      'Develop hands-on expertise in soil testing, composting, and micro-irrigation management.',
      'Identify and diagnose major crop pests, fungal diseases, and deploy Integrated Pest Management (IPM).',
      'Gain commercial skills in nursery propagation, grafting, budding, and tissue-culture handling.',
      'Understand rural agribusiness economics, cooperative formation, and produce marketing.',
      'Successfully complete real-world industry attachments through On-the-Job Training (OJT).',
    ],
    eligibility: 'Completion of Grade 8 (BLE) with minimum Grade C in Science and Mathematics for Grade 9 entry; or SEE passed with GPA 2.0+ for direct Grade 11 entry.',
    majorSubjects: [
      'Agronomy & Cereal Crop Production',
      'Horticulture (Pomology, Olericulture, Floriculture)',
      'Soil Science & Agricultural Chemistry',
      'Plant Protection (Entomology & Plant Pathology)',
      'Agribusiness & Agricultural Extension',
      'Farm Power, Machinery & Irrigation',
    ],
    careerOpportunities: [
      'Junior Technical Assistant (JTA) in Local Municipality Agriculture Sections',
      'Field Officer in Agricultural Cooperatives and Micro-finance',
      'Commercial Nursery & Polyhouse Farm Entrepreneur',
      'Seed Quality Inspector & Agro-Vet Professional',
      'Technical Assistant in Prime Minister Agriculture Modernization Project (PMAMP)',
    ],
    higherStudies: [
      'B.Sc. Agriculture (IAAS Tribhuvan University, AFU, Purbanchal University)',
      'B.Sc. Horticulture & Forestry',
      'B.Tech. Food Technology / Biotechnology',
      'International Agricultural Exchange & Specialized Diplomas',
    ],
    practicalFeatures: [
      'Dedicated 5-Ropani on-campus practical experimental plots',
      'Modern climate-controlled polyhouse for off-season vegetable production',
      'Mini-soil testing lab equipped with digital pH, EC meters, and nutrient kits',
      'Mushroom spawning and incubation chamber',
      'Fruit nursery showcasing mango, litchi, citrus, and vegetable grafting',
    ],
    curriculumOverview:
      'Conducted strictly adhering to the technical curriculum guidelines of the Curriculum Development Centre (CDC) and National Examination Board (NEB), Sanothimi, Bhaktapur, Nepal.',
  },
  {
    id: 'prog-ojt-training',
    slug: 'on-the-job-training',
    title: 'On-the-Job Training (OJT) & Field Internship',
    nepaliTitle: 'प्रयोगात्मक कार्यथलो तालिम (OJT)',
    tagline: 'Bridging classroom science with commercial agribusiness & government extension',
    level: 'Core Experiential Requirement (Grades 10, 11 & 12)',
    duration: 'Modular (Field Weeks) + 6-Month Intensive Capstone in Grade 12',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1000&q=80',
    description:
      'Immersive vocational field placements where students work alongside certified agronomists, Krishi Gyan Kendra experts, and commercial farmers to solve authentic agricultural challenges.',
    fullDescription:
      'The On-the-Job Training (OJT) framework at Triveni Secondary School is the cornerstone of our technical excellence. Rather than remaining confined to textbooks, our students undergo progressive field attachments starting with foundational nursery tasks in Grade 10, regional commercial farming in Grade 11, and a comprehensive 6-month capstone internship in Grade 12. Students maintain official daily logbooks, participate in farmer problem-solving clinics, and undergo formal external viva voce assessments.',
    objectives: [
      'Apply theoretical knowledge in real-world agricultural research stations and commercial farms.',
      'Develop professionalism, workplace ethics, and direct farmer communication skills.',
      'Master commercial tools, tractors, sprayers, and nursery seedbed techniques under field conditions.',
      'Compile analytical field reports evaluating local pest outbreaks and soil deficiencies.',
    ],
    eligibility: 'Enrolled students of Technical Plant Science in Grades 10, 11, and 12 who have completed requisite coursework.',
    majorSubjects: [
      'Field Farm Operations',
      'Farmer Group Extension Demonstrations',
      'Agro-Chemical Safety & IPM Implementation',
      'Agribusiness Cost-Benefit Accounting',
      'Internship Logbook Maintenance & Project Defense',
    ],
    careerOpportunities: [
      'Direct hiring by agro-enterprises upon graduation',
      'Readiness for government civil service technical examinations (Lok Sewa Aayog)',
      'Self-employment in high-value cash crop cultivation in Koshi Province',
    ],
    higherStudies: [
      'Direct advantage during practical interviews for university degree programs',
      'Eligibility for agricultural scholarship programs in Nepal and abroad',
    ],
    practicalFeatures: [
      'MoU with Krishi Gyan Kendra Udayapur',
      'Partnership with Katari Municipality Agriculture Department',
      'Direct mentorship by senior government Agriculture Officers',
      'Comprehensive logbook assessment and presentation viva',
    ],
    curriculumOverview:
      'Evaluated through continuous supervisor feedback, mid-term field audits, logbook validation, and an external viva conducted with government evaluators.',
  },
];

export const initialSubjects: Subject[] = [
  // CLASS 9 SUBJECTS
  {
    id: 'c9-sub-1',
    code: 'AGR-901',
    name: 'Agronomy & Cereal Crops',
    nepaliName: 'सस्य विज्ञान तथा अन्नबाली',
    grade: 9,
    creditHours: 4,
    theoryHours: 75,
    practicalHours: 65,
    description: 'Introduction to agriculture, crop classification, climatic factors, seed germination, tillage, and basic cultivation of rice, maize, and wheat.',
    objectives: [
      'Explain the scope and importance of agronomy in Nepal.',
      'Classify regional field crops based on season, lifecycle, and economic usage.',
      'Master primary and secondary tillage tools and seedbed preparation.',
      'Calculate seed rates and plant population for cereal crops.',
    ],
    units: [
      { unitNumber: 1, title: 'Introduction to Agriculture & Agronomy', topics: ['History of Nepalese farming', 'Role in GDP and food security', 'Branches of agriculture'], hours: 15 },
      { unitNumber: 2, title: 'Crops and Agro-Climatic Zones of Nepal', topics: ['Terai, Mid-Hills, High-Hills cropping patterns', 'Kharif and Rabi cropping seasons'], hours: 20 },
      { unitNumber: 3, title: 'Tillage, Sowing and Seedbed Preparation', topics: ['Primary and secondary tillage implements', 'Direct seeding vs transplantation', 'Seed dormancy and testing'], hours: 25 },
      { unitNumber: 4, title: 'Major Cereals: Rice and Maize Cultivation', topics: ['Varietal selection', 'Nursery raising (Wet bed, dry bed, Dapog)', 'Nutrient and water management'], hours: 40 },
    ],
    practicalActivities: [
      'Collection and identification of 20 regional cereal and legume crop seeds',
      'Preparation of wet-bed nursery for paddy in the school farm',
      'Testing seed viability using Tetrazolium and simple germination percentage tests',
      'Calibration of knapsack sprayers and calculation of field application rates',
    ],
    resources: [
      { id: 'r-901-1', title: 'Class 9 Agronomy Official Syllabus CDC', format: 'PDF', size: '1.8 MB', downloadUrl: '#' },
      { id: 'r-901-2', title: 'Rice Cultivation Practice Guide TSS', format: 'PDF', size: '2.4 MB', downloadUrl: '#' },
    ],
    syllabusContent: 'Comprehensive CDC curriculum covering fundamentals of field agronomy, climate classification, cereal crop genetics, and seed rate calculations.',
  },
  {
    id: 'c9-sub-2',
    code: 'HOR-902',
    name: 'Fundamentals of Horticulture',
    nepaliName: 'बागबानी विज्ञानको आधारशिला',
    grade: 9,
    creditHours: 4,
    theoryHours: 70,
    practicalHours: 70,
    description: 'Principles of fruit and vegetable production, orchard site selection, nursery raising, pruning, training, and grafting techniques.',
    objectives: [
      'Understand the principles of pomology and olericulture.',
      'Identify fruit species suitable for eastern hills and inner Terai regions.',
      'Execute plant propagation methods including cutting, layering, budding, and grafting.',
    ],
    units: [
      { unitNumber: 1, title: 'Scope & Branches of Horticulture', topics: ['Pomology, Olericulture, Floriculture, Post-harvest', 'Nutritional significance of fruits'], hours: 14 },
      { unitNumber: 2, title: 'Plant Propagation Techniques', topics: ['Sexual vs asexual propagation', 'T-budding, tongue grafting, air layering', 'Rootstocks and scion selection'], hours: 26 },
      { unitNumber: 3, title: 'Orchard Planning and Layout', topics: ['Square, rectangular, hexagonal and contour planting systems', 'Windbreaks and shelterbelts'], hours: 20 },
      { unitNumber: 4, title: 'Nursery Bed Preparation for Vegetables', topics: ['Raised beds, sterilization, seedling potting', 'Hardening of seedlings'], hours: 20 },
    ],
    practicalActivities: [
      'Hands-on practice of whip and tongue grafting in apple/pear rootstocks',
      'Air-layering in litchi and guava in the school orchard',
      'Layout of a 1-Ropani fruit orchard using 3:4:5 right-angle triangulation',
    ],
    resources: [
      { id: 'r-902-1', title: 'Horticulture Practical Manual Grade 9', format: 'PDF', size: '3.1 MB', downloadUrl: '#' },
    ],
    syllabusContent: 'Detailed horticultural instruction following NEB standards for technical secondary schools.',
  },
  {
    id: 'c9-sub-3',
    code: 'SLS-903',
    name: 'Soil Science & Plant Nutrition',
    nepaliName: 'माटो विज्ञान र बिरुवा पोषण',
    grade: 9,
    creditHours: 3,
    theoryHours: 60,
    practicalHours: 60,
    description: 'Physical and chemical properties of soil, soil sampling, essential plant nutrients, bio-fertilizers, and farm yard manure preparation.',
    objectives: [
      'Explain soil texture, structure, bulk density, and color.',
      'Conduct standard soil sampling from agricultural fields in Katari.',
      'Differentiate macro and micronutrients and recognize deficiency symptoms.',
    ],
    units: [
      { unitNumber: 1, title: 'Soil Genesis and Components', topics: ['Weathering of rocks', 'Soil profile horizons', 'Mineral and organic matter balance'], hours: 15 },
      { unitNumber: 2, title: 'Soil Physical Properties', topics: ['Texture analysis', 'Structure types', 'Soil water categories'], hours: 15 },
      { unitNumber: 3, title: 'Plant Nutrients and Fertilizers', topics: ['Primary (NPK), secondary, micronutrients', 'Urea, DAP, MOP calculation', 'Composting and vermicomposting'], hours: 25 },
    ],
    practicalActivities: [
      'Zigzag soil sampling in Katari terrace fields',
      'Soil texture determination by jar sedimentation and feel method',
      'Digital pH and electrical conductivity testing in school lab',
      'Preparation of aerobic compost heap with cow dung and biomass',
    ],
    resources: [
      { id: 'r-903-1', title: 'Soil Science Lab Handbook', format: 'PDF', size: '2.2 MB', downloadUrl: '#' },
    ],
  },
  {
    id: 'c9-sub-4',
    code: 'SCI-904',
    name: 'General Science & Applied Botany',
    nepaliName: 'सामान्य विज्ञान तथा व्यवहारिक वनस्पति विज्ञान',
    grade: 9,
    creditHours: 4,
    theoryHours: 80,
    practicalHours: 60,
    description: 'Foundational physics, chemistry, and plant morphology/anatomy essential for agricultural understanding.',
    objectives: [
      'Understand cellular anatomy of monocot and dicot plants.',
      'Explain photosynthesis, respiration, and transpiration mechanisms.',
    ],
    units: [
      { unitNumber: 1, title: 'Plant Cell & Tissue Systems', topics: ['Meristematic vs permanent tissue', 'Xylem and phloem conduction'], hours: 20 },
      { unitNumber: 2, title: 'Plant Physiology', topics: ['Photosynthesis light and dark reactions', 'Stomatal regulation'], hours: 25 },
      { unitNumber: 3, title: 'Applied Physics & Chemistry', topics: ['Pressure, hydraulics in irrigation', 'Acid-base reactions in soils'], hours: 35 },
    ],
    practicalActivities: [
      'Microscopic examination of onion epidermal cells and stomata',
      'Demonstration of transpiration using Ganong potometer',
    ],
    resources: [
      { id: 'r-904-1', title: 'Applied Botany Lab Guide', format: 'PDF', size: '1.9 MB', downloadUrl: '#' },
    ],
  },

  // CLASS 10 SUBJECTS
  {
    id: 'c10-sub-1',
    code: 'AGR-1001',
    name: 'Grain Legumes, Oilseeds & Cash Crops',
    nepaliName: 'दलहन, तेलहन तथा नगदे बाली',
    grade: 10,
    creditHours: 4,
    theoryHours: 75,
    practicalHours: 65,
    description: 'Cultivation package of practices for lentil, chickpea, mustard, groundnut, sugarcane, and ginger in eastern Nepal.',
    objectives: [
      'Master the commercial production practices of major pulses and oilseeds.',
      'Understand nitrogen fixation and rhizobium inoculation.',
      'Plan intercropping and crop rotation systems for enhanced farm profitability.',
    ],
    units: [
      { unitNumber: 1, title: 'Grain Legumes Production', topics: ['Lentil, soybean, cowpea cultivation', 'Rhizobial symbiotic fixation'], hours: 25 },
      { unitNumber: 2, title: 'Oilseed Crops Management', topics: ['Mustard, sunflower, groundnut package of practices', 'Oil recovery testing'], hours: 25 },
      { unitNumber: 3, title: 'High-Value Cash Crops of Koshi Province', topics: ['Ginger, turmeric, ginger processing', 'Sugarcane cultivation'], hours: 25 },
    ],
    practicalActivities: [
      'Inoculation of chickpea seeds with Rhizobium culture',
      'Yield estimation per hectare using 1m x 1m quadrant sampling',
      'Harvesting and post-harvest drying of ginger and turmeric',
    ],
    resources: [
      { id: 'r-1001-1', title: 'Class 10 Cash Crops CDC Syllabus', format: 'PDF', size: '2.1 MB', downloadUrl: '#' },
    ],
  },
  {
    id: 'c10-sub-2',
    code: 'PPR-1002',
    name: 'Plant Protection & Entomology',
    nepaliName: 'बिरुवा संरक्षण तथा कीटनाशक विज्ञान',
    grade: 10,
    creditHours: 4,
    theoryHours: 70,
    practicalHours: 70,
    description: 'Study of destructive crop insect pests, chewing and sucking insect mouthparts, life cycles, and safe pest management.',
    objectives: [
      'Identify beneficial insects (honeybees, ladybird beetles) vs harmful crop pests.',
      'Differentiate symptoms caused by stem borers, aphids, thrips, and beetles.',
      'Prepare botanical pesticides using neem, ginger, and local herbs (Jholmal).',
    ],
    units: [
      { unitNumber: 1, title: 'General Entomology', topics: ['Insect morphology, antenna, legs, wings', 'Complete vs incomplete metamorphosis'], hours: 20 },
      { unitNumber: 2, title: 'Major Insect Pests of Cereals and Vegetables', topics: ['Paddy stem borer, Gundhi bug, Fall armyworm', 'Diamondback moth, Fruit fly'], hours: 30 },
      { unitNumber: 3, title: 'Integrated Pest Management (IPM)', topics: ['Cultural, mechanical, biological, and chemical control', 'Pheromone traps and yellow sticky traps'], hours: 20 },
    ],
    practicalActivities: [
      'Collection and pinning of 30 common agricultural insects with taxonomic labels',
      'Installation of cue-lure pheromone traps in the cucumber polyhouse',
      'Preparation of fermented organic bio-pesticide (Jholmal-1, Jholmal-2)',
    ],
    resources: [
      { id: 'r-1002-1', title: 'Insect Collection & IPM Guide Grade 10', format: 'PDF', size: '3.4 MB', downloadUrl: '#' },
    ],
  },
  {
    id: 'c10-sub-3',
    code: 'AGX-1003',
    name: 'Agricultural Extension & Communication',
    nepaliName: 'कृषि प्रसार तथा सञ्चार',
    grade: 10,
    creditHours: 3,
    theoryHours: 60,
    practicalHours: 60,
    description: 'Techniques of transferring agricultural technologies to rural farmers, organizing farmer field schools (FFS), and method demonstrations.',
    objectives: [
      'Explain communication models and barriers in rural agricultural communities.',
      'Plan and execute a result demonstration and method demonstration.',
      'Conduct a participatory rural appraisal (PRA) in local Katari farming communities.',
    ],
    units: [
      { unitNumber: 1, title: 'Concepts and Principles of Extension', topics: ['Philosophy of helping farmers help themselves', 'History of extension in Nepal'], hours: 15 },
      { unitNumber: 2, title: 'Teaching Methods in Agriculture', topics: ['Individual, group, and mass contact methods', 'Field trips, exhibitions, farmer field school'], hours: 25 },
      { unitNumber: 3, title: 'Adoption and Diffusion of Innovations', topics: ['Innovators, early adopters, late adopters', 'Role of youth in agro-technological transition'], hours: 20 },
    ],
    practicalActivities: [
      'Conducting a live method demonstration on seed treatment for local Katari farmers',
      'Designing visual extension leaflets and posters for Fall Armyworm management',
    ],
    resources: [
      { id: 'r-1003-1', title: 'Agri Extension Manual', format: 'PDF', size: '1.7 MB', downloadUrl: '#' },
    ],
  },

  // CLASS 11 SUBJECTS
  {
    id: 'c11-sub-1',
    code: 'PLB-1101',
    name: 'Plant Breeding & Seed Technology',
    nepaliName: 'पादप प्रजनन् तथा बिउ प्रविधि',
    grade: 11,
    creditHours: 4,
    theoryHours: 80,
    practicalHours: 60,
    description: 'Mendelian genetics, floral biology of self and cross-pollinated crops, hybrid seed production, seed certification classes, and germination testing.',
    objectives: [
      'Understand male sterility, self-incompatibility, and hybrid vigor.',
      'Perform artificial emasculation and hand pollination in tomatoes and maize.',
      'Master seed testing procedures under the National Seed Regulatory Board of Nepal.',
    ],
    units: [
      { unitNumber: 1, title: 'Floral Biology & Pollination Mechanisms', topics: ['Flower structure, anthesis, dehiscence', 'Self vs cross pollination mechanisms'], hours: 20 },
      { unitNumber: 2, title: 'Breeding Methods for Crop Improvement', topics: ['Mass selection, pureline selection, pedigree breeding', 'Heterosis breeding'], hours: 30 },
      { unitNumber: 3, title: 'Seed Technology & Certification Classes', topics: ['Breeder, foundation, certified, and improved seeds', 'Isolation distance and rouging'], hours: 30 },
    ],
    practicalActivities: [
      'Floral dissection and artificial emasculation in Solanaceae crops',
      'Determining seed purity and moisture content with digital grain moisture meter',
      'Field inspection and off-type rouging in certified maize seed plots',
    ],
    resources: [
      { id: 'r-1101-1', title: 'Class 11 Seed Technology Curriculum NEB', format: 'PDF', size: '2.5 MB', downloadUrl: '#' },
    ],
  },
  {
    id: 'c11-sub-2',
    code: 'PPA-1102',
    name: 'Plant Pathology & Disease Management',
    nepaliName: 'बिरुवा रोग विज्ञान तथा व्यवस्थापन',
    grade: 11,
    creditHours: 4,
    theoryHours: 75,
    practicalHours: 65,
    description: 'Fungal, bacterial, viral, and nematode diseases of crops, disease cycle, Koch’s postulates, fungicides, and biological disease control.',
    objectives: [
      'Identify symptoms of major crop diseases: late blight, blast, rust, and wilt.',
      'Prepare pure culture media (PDA) and observe fungal spores under compound microscope.',
      'Formulate Bordeaux mixture and chemical spray schedules safely.',
    ],
    units: [
      { unitNumber: 1, title: 'General Plant Pathology', topics: ['History and classification of plant pathogens', 'Disease triangle concept and epidemiology'], hours: 20 },
      { unitNumber: 2, title: 'Major Diseases of Field and Horticultural Crops', topics: ['Rice blast, wheat yellow rust, potato late blight', 'Citrus canker, tomato leaf curl virus'], hours: 35 },
      { unitNumber: 3, title: 'Principles of Plant Disease Control', topics: ['Avoidance, exclusion, eradication, protection, resistance', 'Preparation of fungicides'], hours: 20 },
    ],
    practicalActivities: [
      'Preparation of Potato Dextrose Agar (PDA) medium and aseptic plating in laminar airflow',
      'Preparation of fresh 1% Bordeaux mixture and testing alkalinity with knife blade',
      'Field survey and herbarium compilation of 25 diseased crop specimens with diagnosis',
    ],
    resources: [
      { id: 'r-1102-1', title: 'Plant Pathology Practical Manual NEB', format: 'PDF', size: '3.2 MB', downloadUrl: '#' },
    ],
  },
  {
    id: 'c11-sub-3',
    code: 'HOR-1103',
    name: 'Commercial Vegetable Production & Polyhouse Tech',
    nepaliName: 'व्यावसायिक तरकारी खेती तथा पोलिहाउस प्रविधि',
    grade: 11,
    creditHours: 4,
    theoryHours: 70,
    practicalHours: 70,
    description: 'Off-season vegetable cultivation under protected structures, micro-climate automation, vertical farming, and nutrient fertigation.',
    objectives: [
      'Design low-cost naturally ventilated bamboo and GI pipe polyhouses.',
      'Manage high-density determinate and indeterminate tomato cultivars.',
      'Operate automated drip fertigation and fogger cooling systems.',
    ],
    units: [
      { unitNumber: 1, title: 'Commercial Olericulture in Nepal', topics: ['Status of commercial vegetables in Koshi Province', 'Solanaceous, cucurbitaceous, and cole crops'], hours: 25 },
      { unitNumber: 2, title: 'Protected Horticulture & Polyhouse Technology', topics: ['Polyhouse design, UV stabilized plastic 200 micron', 'Shade net houses and mulching'], hours: 25 },
      { unitNumber: 3, title: 'Drip Irrigation & Fertigation', topics: ['Venturi injectors, water soluble fertilizers (WSF)', 'Soil electrical conductivity management'], hours: 20 },
    ],
    practicalActivities: [
      'Complete production cycle of indeterminate hybrid tomatoes in the school polyhouse',
      'Installation and troubleshooting of inline drip lateral pipes and filters',
      'Seedling tray propagation using cocopeat, vermiculite, and perlite media',
    ],
    resources: [
      { id: 'r-1103-1', title: 'Polyhouse Vegetable Production Manual', format: 'PDF', size: '2.8 MB', downloadUrl: '#' },
    ],
  },

  // CLASS 12 SUBJECTS
  {
    id: 'c12-sub-1',
    code: 'AGB-1201',
    name: 'Agribusiness Management & Marketing',
    nepaliName: 'कृषि व्यवसाय व्यवस्थापन तथा बजारीकरण',
    grade: 12,
    creditHours: 4,
    theoryHours: 80,
    practicalHours: 60,
    description: 'Farm budgeting, cost-benefit analysis, agricultural credit, crop insurance, supply chain logistics, and digital agri-marketing.',
    objectives: [
      'Formulate a comprehensive bankable agricultural business plan.',
      'Calculate gross margin, net farm income, and benefit-cost ratio (BCR).',
      'Analyze market intermediaries, price determination, and cold storage logistics in Nepal.',
    ],
    units: [
      { unitNumber: 1, title: 'Agribusiness Structure and Farm Planning', topics: ['Characteristics of agribusiness in developing economies', 'Types of farm records and farm bookkeeping'], hours: 25 },
      { unitNumber: 2, title: 'Agricultural Finance & Risk Management', topics: ['Subsidized agricultural loans in Nepal', 'Crop and livestock insurance policies and claims'], hours: 25 },
      { unitNumber: 3, title: 'Marketing and Supply Chain Operations', topics: ['Wholesale, retail, and cooperative market channels', 'Value addition and grading of farm output'], hours: 30 },
    ],
    practicalActivities: [
      'Drafting a 10-page commercial dairy/vegetable project proposal for commercial bank loan',
      'Survey of Katari weekly Haat Bazaar price fluctuations across seasons',
      'Cost-return calculation for 1 Ropani off-season capsicum production',
    ],
    resources: [
      { id: 'r-1201-1', title: 'Agribusiness Business Plan Model TSS', format: 'PDF', size: '2.0 MB', downloadUrl: '#' },
    ],
  },
  {
    id: 'c12-sub-2',
    code: 'PHT-1202',
    name: 'Post-Harvest Technology & Food Processing',
    nepaliName: 'बाली कटानी उप्रान्त प्रविधि तथा खाद्य प्रशोधन',
    grade: 12,
    creditHours: 4,
    theoryHours: 70,
    practicalHours: 70,
    description: 'Physiology of ripening, post-harvest losses, grading, packaging, cold storage, fruit drying, jam/jelly/pickle preparation.',
    objectives: [
      'Measure physiological loss in weight (PLW) and total soluble solids (TSS/Brix).',
      'Execute food preservation techniques: curing, pasteurization, chemical preservatives.',
      'Manufacture commercial fruit squash, tomato puree, and fermented pickles.',
    ],
    units: [
      { unitNumber: 1, title: 'Post-Harvest Physiology', topics: ['Climacteric vs non-climacteric fruits', 'Ethylene synthesis and temperature management'], hours: 20 },
      { unitNumber: 2, title: 'Harvesting, Grading and Packaging', topics: ['Maturity indices for fruits and vegetables', 'Corrugated cardboard boxes and modified atmosphere packaging'], hours: 25 },
      { unitNumber: 3, title: 'Processing and Preservation Technologies', topics: ['Preservation by sugar, salt, and vinegar', 'FSSAI and Nepalese food safety standards'], hours: 25 },
    ],
    practicalActivities: [
      'Determining fruit sugar content with optical handheld refractometer',
      'Preparation and bottling of 20 bottles of mixed fruit jam and citrus marmalade',
      'Solar drying of green leafy vegetables and seasonal mushrooms',
    ],
    resources: [
      { id: 'r-1202-1', title: 'Post Harvest Food Processing Handbook', format: 'PDF', size: '3.6 MB', downloadUrl: '#' },
    ],
  },
  {
    id: 'c12-sub-3',
    code: 'OJT-1203',
    name: 'On-the-Job Training (OJT) Practicum & Project Work',
    nepaliName: 'प्रयोगात्मक कार्यथलो तालिम (OJT) तथा परियोजना',
    grade: 12,
    creditHours: 6,
    theoryHours: 0,
    practicalHours: 240,
    description: 'Mandatory field placement across research farms, agricultural government units, cooperatives, or agribusiness enterprises.',
    objectives: [
      'Immerse student in daily operational responsibilities of a professional agricultural organization.',
      'Record daily farm activities in the certified OJT Logbook with mentor sign-off.',
      'Defend technical project thesis before an external panel appointed by the National Examination Board (NEB).',
    ],
    units: [
      { unitNumber: 1, title: 'Pre-Deployment & Field Ethics', topics: ['Institutional hierarchy, work safety, professional communication'], hours: 20 },
      { unitNumber: 2, title: 'Experiential Farm Management', topics: ['Crop monitoring, pesticide application, harvest supervision, customer liaison'], hours: 140 },
      { unitNumber: 3, title: 'Reporting, Synthesis & Viva Voce', topics: ['Logbook compilation, technical writing, oral presentation defense'], hours: 80 },
    ],
    practicalActivities: [
      '24-week continuous rotational assignment at verified agro-enterprises',
      'Weekly supervisor progress evaluation submission',
      'Preparation and defense of the final OJT Comprehensive Technical Monograph',
    ],
    resources: [
      { id: 'r-1203-1', title: 'Official Grade 12 OJT Logbook & Guidelines', format: 'PDF', size: '4.5 MB', downloadUrl: '#' },
      { id: 'r-1203-2', title: 'OJT Evaluation Rubric & Viva Scorecard', format: 'PDF', size: '1.2 MB', downloadUrl: '#' },
    ],
    syllabusContent: 'Capstone experiential training complying with NEB / CTEVT technical secondary educational regulations.',
  },
];

export const initialOJTInfo: Record<10 | 11 | 12, OJTGradeInfo> = {
  10: {
    grade: 10,
    title: 'Grade 10 — Introductory Field Apprenticeship & Nursery Practicum',
    duration: '4 Weeks (120 Hours) Modular Placement',
    creditHours: 3,
    introduction:
      'The Grade 10 OJT module introduces students to authentic commercial nursery operations and municipal agricultural extension. Students bridge foundational theory with basic farm chores, seedbed preparation, seedling hardening, and pest monitoring under qualified faculty oversight.',
    objectives: [
      'Acquire muscle memory in commercial vegetable seedling tray filling and germination monitoring.',
      'Learn routine maintenance of tractor attachments, power tillers, and spray equipment.',
      'Shadow municipal Junior Technical Assistants (JTAs) during ward-level farmer seed distribution campaigns in Katari.',
      'Maintain an organized daily log of agricultural tasks performed.',
    ],
    activities: [
      'Polyhouse climate regulation: vent opening, temperature logging, and shading adjustment.',
      'Preparation of raised seedbeds for cabbage, cauliflower, and onion seedlings.',
      'Cleaning, greasing, and troubleshooting 4-stroke knapsack power sprayers.',
      'Conducting field plant count and weed eradication in cereal observation plots.',
    ],
    studentResponsibilities: [
      'Report on time at 7:30 AM to assigned school demonstration farm or local nursery partner.',
      'Wear protective agricultural overalls, rubber boots, and safety gloves during agrochemical handling.',
      'Submit daily logbook entries to the designated field instructor at the end of each working day.',
    ],
    evaluationSystem:
      'Continuous daily attendance (20%), Field supervisor practical evaluation (50%), Logbook inspection & oral viva (30%). Total: 100 Marks.',
    partnerInstitutions: [
      'Katari Municipality Agriculture Section Demonstration Plots',
      'Katari Community Agro-Forestry Nursery',
      'Triveni School On-Campus Polyhouse Farm',
    ],
    documents: [
      {
        title: 'Grade 10 OJT Activity Logbook Template',
        format: 'PDF',
        size: '1.4 MB',
        downloadUrl: '#download-g10-logbook',
        description: 'Standard 4-week logbook for recording daily farm operations and supervisor signatures.',
      },
      {
        title: 'Safety Guidelines for Farm Equipment Handling',
        format: 'PDF',
        size: '890 KB',
        downloadUrl: '#download-safety-guide',
        description: 'Mandatory PPE and safety protocol for students working with mechanical tillers and biocides.',
      },
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=800&q=80',
        caption: 'Students preparing raised beds and grafting seedlings in the Katari polyhouse.',
      },
      {
        url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
        caption: 'Soil pH testing and seedling transplanting under field instructor supervision.',
      },
    ],
  },
  11: {
    grade: 11,
    title: 'Grade 11 — Intermediate Agribusiness & Commercial Crop Placement',
    duration: '8 Weeks (240 Hours) Structured Practicum',
    creditHours: 4,
    introduction:
      'The Grade 11 OJT exposes students to structured commercial farming enterprises, cooperative seed processing facilities, and integrated pest management clinics. Trainees take on responsible tasks including nutrient calculation, pesticide mixing, and commercial harvest grading.',
    objectives: [
      'Formulate and execute seasonal spray calendars for high-value horticultural crops.',
      'Operate automated drip irrigation fertigation units and calculate electrical conductivity (EC).',
      'Assist local agriculture cooperatives with seed quality testing and storage fumigation.',
      'Analyze farm profitability, input costs, and yield figures for assigned plots.',
    ],
    activities: [
      'Execution of hybrid tomato and capsicum trellising and lateral pruning in high-tunnels.',
      'Collection and identification of fungal pathogens in rice blast and potato blight affected fields.',
      'Seed lot sampling, purity testing, and packaging at local seed producers’ union in Udayapur.',
      'Assisting local farmers in preparing botanical Jholmal bio-pesticides.',
    ],
    studentResponsibilities: [
      'Maintain disciplined presence at external partner farms for 8 consecutive weeks.',
      'Record detailed technical observations: dosage, weather, temperature, and crop physiological stage.',
      'Prepare a mid-term analytical presentation on pest incidence observed during placement.',
    ],
    evaluationSystem:
      'External Farm Mentor assessment (40%), School faculty site-visit audit (30%), Final written project report & viva (30%).',
    partnerInstitutions: [
      'Krishi Gyan Kendra Udayapur (Field Station Katari)',
      'Udayapur District Agriculture Cooperative Union',
      'Katari Hi-Tech Vegetable & Seed Production Hub',
    ],
    documents: [
      {
        title: 'Grade 11 Intermediate OJT Manual & Rubric',
        format: 'PDF',
        size: '2.1 MB',
        downloadUrl: '#download-g11-manual',
        description: 'Detailed instructions on field project writing and intermediate competencies.',
      },
      {
        title: 'IPM Field Scouting Protocol Sheet',
        format: 'PDF',
        size: '1.1 MB',
        downloadUrl: '#download-ipm-sheet',
        description: 'Standardized observation form for recording pest-to-predator ratios in fields.',
      },
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80',
        caption: 'Grade 11 trainees conducting pest scouting and pruning in commercial vegetable fields.',
      },
      {
        url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
        caption: 'Field visit and inspection by Coordinator Kailash Rayamajhi at external cooperative farm.',
      },
    ],
  },
  12: {
    grade: 12,
    title: 'Grade 12 — Comprehensive Professional OJT & Capstone Internship',
    duration: '6 Months (24 Weeks / 720 Hours) Capstone Field Residency',
    creditHours: 6,
    introduction:
      'The pinnacle of technical plant science education at Triveni Secondary School. Grade 12 students complete a continuous 6-month capstone internship in leading governmental research stations, Krishi Gyan Kendra, agricultural NGOs, or registered commercial agribusinesses. This rigorous immersion directly bridges secondary education with professional employment as Junior Technical Assistants (JTAs) or direct entry into B.Sc. Agriculture degree programs.',
    objectives: [
      'Function independently as junior agronomists managing real-world crop cycles from sowing to market sale.',
      'Diagnose complex plant diseases and prescribe safe, scientifically validated remedial measures.',
      'Prepare commercial bank-ready agricultural business proposals and enterprise financial budgets.',
      'Compile, author, and defend a comprehensive technical graduation monograph before an NEB-appointed external board.',
    ],
    activities: [
      'Full-season management of 2–5 Ropanies of commercial crops or nursery operations.',
      'Conducting extension training for smallholder women farmers groups in surrounding rural municipalities.',
      'Supervising harvest, grading, post-harvest packaging, and wholesale market logistics.',
      'Drafting technical case studies evaluating local micro-climatic impacts on crop yields.',
    ],
    studentResponsibilities: [
      'Comply with all institutional regulations, workplace codes, and safety procedures of the hosting organization.',
      'Submit bi-weekly digital or written status reports to the Triveni School OJT Coordination Committee.',
      'Complete a minimum of 90% verified attendance to qualify for the final NEB external board examination.',
    ],
    evaluationSystem:
      'Hosting Agency Supervisor Rating (35%), Faculty Field Audit & Mid-Term Review (25%), Final Capstone Monograph Report (20%), External Viva Voce with NEB Examiner (20%). Total: 100 Marks.',
    partnerInstitutions: [
      'Krishi Gyan Kendra, Koshi Province (Udayapur / Gaighat)',
      'Katari Municipality Agricultural Development Directorate',
      'Nepal Agricultural Research Council (NARC) Regional Research Centers',
      'Prime Minister Agriculture Modernization Project (PMAMP) Citrus & Vegetable Zone',
      'Commercial Seed Production & Processing Enterprises of Koshi Province',
    ],
    documents: [
      {
        title: 'Grade 12 Capstone OJT Monograph Format & Template',
        format: 'PDF',
        size: '3.8 MB',
        downloadUrl: '#download-g12-monograph-template',
        description: 'Official academic formatting guidelines, chapter headings, and citation standards for final thesis.',
      },
      {
        title: 'NEB Official OJT Evaluation Scorecard & Viva Guidelines',
        format: 'PDF',
        size: '1.5 MB',
        downloadUrl: '#download-neb-scorecard',
        description: 'Comprehensive scoring rubric used by external examiners during final oral defense.',
      },
      {
        title: 'MoU & Placement Agreement Contract Form',
        format: 'PDF',
        size: '950 KB',
        downloadUrl: '#download-mou-agreement',
        description: 'Tripartite agreement between Triveni School, the trainee student, and the hosting agricultural company.',
      },
    ],
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
        caption: 'Grade 12 students in the research lab preparing cultures and diagnosing plant pathogens.',
      },
      {
        url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
        caption: 'Capstone field demonstration with local farmers on high-density maize planting.',
      },
    ],
  },
};

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'School Campus & Agricultural Demonstration Grounds',
    category: 'Campus Life',
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Overview of Triveni Secondary School academic buildings and lush green agricultural fields in Katari-4, Udayapur.',
    date: '2026-02-14',
    location: 'Katari-4, Udayapur',
  },
  {
    id: 'gal-2',
    title: 'Off-Season Vegetable Polyhouse Cultivation',
    category: 'Polyhouse & Nursery',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    caption: 'Modern UV-stabilized polyhouse where students cultivate indeterminate hybrid tomatoes and sweet peppers using drip fertigation.',
    date: '2026-03-02',
    location: 'Triveni Ag Experimental Farm',
  },
  {
    id: 'gal-3',
    title: 'Seedling Propagation & Nursery Bed Care',
    category: 'Polyhouse & Nursery',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1200&q=80',
    caption: 'Students practicing seed germination tray filling, potting soil sterilization, and micro-watering for winter crops.',
    date: '2026-03-10',
    location: 'School Nursery Unit',
  },
  {
    id: 'gal-4',
    title: 'Microscopic Plant Pathogen Diagnostics in Lab',
    category: 'Lab & Soil Science',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Under the supervision of Instructor Sarita Katuwal, students isolate fungal spores and conduct microscopic stain tests.',
    date: '2026-03-18',
    location: 'Plant Protection Laboratory',
  },
  {
    id: 'gal-5',
    title: 'Soil Testing Mini-Lab: pH & NPK Analysis',
    category: 'Lab & Soil Science',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Instructor Prakash Bhattarai guiding Grade 9 students through electronic pH meter calibration and nitrogen availability tests.',
    date: '2026-03-22',
    location: 'Soil Science Mini-Lab',
  },
  {
    id: 'gal-6',
    title: 'Field Practical: Rice Nursery Transplantation',
    category: 'Field Practicals',
    imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Class 10 students actively engaging in paddy transplantation methods, spacing optimization, and bio-fertilizer incorporation.',
    date: '2026-02-28',
    location: 'Katari Field Terrace Plots',
  },
  {
    id: 'gal-7',
    title: 'Grade 12 OJT Attachment at Krishi Gyan Kendra',
    category: 'OJT & Farm Visits',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    caption: 'Final year students working with senior agronomists in regional seed testing fields as part of their 6-month capstone OJT.',
    date: '2026-03-15',
    location: 'Krishi Gyan Kendra Field Center',
  },
  {
    id: 'gal-8',
    title: 'Mushroom Spawning and Organic Compost Unit',
    category: 'Field Practicals',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Hands-on training in oyster mushroom straw sterilization, spawning, and dark-room incubation for home entrepreneurship.',
    date: '2026-03-05',
    location: 'Organic Ag Unit',
  },
  {
    id: 'gal-9',
    title: 'Annual Agricultural Exhibition & Farmers Day',
    category: 'Campus Life',
    imageUrl: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80',
    caption: 'Plant Science students demonstrating organic IPM models, soil test results, and grafted saplings to visiting parents and Katari farmers.',
    date: '2026-02-20',
    location: 'Triveni Secondary School Courtyard',
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sushil Shrestha',
    batch: 'Batch of 2079 (Plant Science)',
    gradeCompleted: 'Grade 12 Plant Science Graduate',
    currentRole: 'Junior Technical Assistant (JTA)',
    currentInstitution: 'Katari Municipality Agriculture Section',
    location: 'Katari, Udayapur',
    quote:
      'The comprehensive practical education at Triveni Secondary School’s Department of Plant Science changed my life. The daily nursery work and the 6-month OJT gave me the exact skills needed to clear the technical exam and serve farmers in my own municipality right after high school.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    keyHighlight: 'Passed Public Service Technical Examination in first attempt',
  },
  {
    id: 'test-2',
    name: 'Pratima Thapa',
    batch: 'Batch of 2080 (Plant Science)',
    gradeCompleted: 'Grade 12 Plant Science Graduate',
    currentRole: 'B.Sc. Agriculture Scholar',
    currentInstitution: 'Institute of Agriculture and Animal Science (IAAS), Rampur',
    location: 'Chitwan, Nepal',
    quote:
      'Having spent four years in Triveni’s laboratories and experimental plots under Coordinator Kailash Rayamajhi Sir, my foundational concepts in botany, agronomy, and pathology were rock-solid. It made cracking the university entrance exam effortless compared to students from general streams.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    keyHighlight: 'Awarded Full Merit Scholarship for B.Sc. Agriculture',
  },
  {
    id: 'test-3',
    name: 'Dipendra Karki',
    batch: 'Batch of 2078 (Plant Science)',
    gradeCompleted: 'Grade 12 Plant Science Graduate',
    currentRole: 'Founder & Commercial Agribusiness Director',
    currentInstitution: 'Green Valley Hi-Tech Nursery & Organic Farm',
    location: 'Udayapur, Koshi Province',
    quote:
      'Triveni did not just teach us to pass tests; it taught us self-reliance. I started my commercial nursery right after completing my Grade 12 OJT. Today, we supply thousands of grafted fruit saplings across Udayapur and Sindhuli districts.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    keyHighlight: 'Employs 6 local youths in commercial grafting & seedling propagation',
  },
  {
    id: 'test-4',
    name: 'Anjali Raut',
    batch: 'Batch of 2081 (Plant Science)',
    gradeCompleted: 'Grade 12 Plant Science Graduate',
    currentRole: 'Field Coordinator & Soil Technician',
    currentInstitution: 'Prime Minister Agriculture Modernization Project (PMAMP)',
    location: 'Koshi Province Field Unit',
    quote:
      'The teachers at Triveni Secondary School were mentors in the truest sense. From identifying subtle plant diseases under the microscope to negotiating with wholesale markets, the education gave me immense confidence to excel in the field.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    keyHighlight: 'Leading soil testing campaigns across 12 rural wards',
  },
];

export const spokespersonInfo: Spokesperson = {
  name: 'Kailash Rayamajhi',
  position: 'Department Coordinator & Information Officer',
  department: 'Department of Plant Science',
  phone: '035-450-154',
  email: 'info.plantscience@trivenischool.edu.np',
  photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  availability: 'Sunday to Friday: 10:00 AM – 4:00 PM (Kathmandu Time)',
};

export const developerBibashLamichhane: DeveloperProfile = {
  name: 'Bibash Lamichhane',
  title: 'Full-Stack Software Engineer & UI/UX Designer',
  photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  bio: 'Passionate software craftsman and digital designer committed to engineering high-performance web systems, modern educational portals, and elegant user interfaces for institutions across Nepal. Specializes in accessible, resilient React architectures, fluid typography, and clean institutional digital experiences.',
  skills: [
    {
      category: 'Frontend Engineering',
      items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Motion', 'Responsive Design', 'Accessibility (WCAG AA)'],
    },
    {
      category: 'Architecture & Backend',
      items: ['Node.js', 'Express', 'RESTful APIs', 'Client CMS Architecture', 'State Modeling', 'SEO Architecture'],
    },
    {
      category: 'UI/UX & Graphic Design',
      items: ['Figma', 'Visual Hierarchy', 'Typography Systems', 'Design Systems', 'Editorial Layout', 'Brand Identity'],
    },
  ],
  education: 'Bachelor of Computer Applications (BCA) / Software Engineering, Nepal',
  experience: [
    'Senior Frontend & Web Solutions Specialist (5+ Years)',
    'Lead Architect for Institutional and Educational Platforms',
    'Specialist in high-speed responsive web applications and custom Content Management Systems',
  ],
  webProjects: [
    {
      title: 'Triveni Secondary School — Department of Plant Science Portal',
      role: 'Lead Architect & Designer',
      description: 'Comprehensive digital portal with in-browser CMS, interactive syllabus reader, embedded PDF viewer, notice ticker, and OJT training modules.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    },
    {
      title: 'Agricultural Knowledge & Learning Management System',
      role: 'Frontend Architect',
      description: 'Dedicated web platform facilitating farmer extension materials, crop calendar synchronization, and interactive student logbooks.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Civic & Academic Institutional Web Framework',
      role: 'Full-Stack Developer',
      description: 'High-speed, SEO-optimized web architecture serving government and community secondary schools with multi-tiered role authorization.',
      tech: ['TypeScript', 'Express', 'Tailwind CSS'],
    },
  ],
  graphicDesign: [
    {
      title: 'Institutional Brand Identity & Visual Guidelines',
      description: 'Complete branding packages including vector emblems, typography guidelines, and educational publication covers.',
      tools: ['Adobe Illustrator', 'Figma', 'Photoshop'],
    },
    {
      title: 'Academic Prospectus & Curriculum Infographics',
      description: 'Complex technical agricultural charts, soil classification infographics, and student orientation brochures.',
      tools: ['Figma', 'InDesign'],
    },
  ],
  contact: {
    email: 'filestore.bib@gmail.com',
    location: 'Nepal',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    website: 'https://tankanath.com.np',
  },
};
