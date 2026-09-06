import { SportCardData, EducationItem, AthleticSkillCategory, PersonalValue } from '../types';

export const ATHLETE_INFO = {
  fullName: "Md Tazdir Hasan",
  shortName: "Tazdir Hasan",
  professionalTitle: "Sports Person",
  location: "Meherpur, Bangladesh",
  email: "tazdir@gmail.com",
  phone: "01893769277",
  formattedPhone: "+880 1893 769277",
  facebookName: "Md Tazdir Hasan",
  facebookUrl: "https://www.facebook.com/search/top?q=Md%20Tazdir%20Hasan", // Easily configurable profile link
  instagramUsername: "@tazdirtiloy",
  instagramUrl: "https://www.instagram.com/tazdirtiloy",
  tagline: "PASSION. DISCIPLINE. PERFORMANCE.",
  heroSummary: "Driven by passion, strengthened by discipline, and always ready to take on new challenges.",
  bioParagraphs: [
    "Md Tazdir Hasan is a passionate and dedicated sports person from Meherpur, Bangladesh. He is currently studying in the Arts department at Meherpur Pauro Degree College and is expected to complete his education in 2027.",
    "He has a strong interest and experience in sports, especially Cricket, along with skills in Football and Badminton. Through his passion, discipline, teamwork, and dedication, he continues to develop his sporting abilities and work towards achieving greater success in the future.",
    "Tazdir believes that sports build confidence, leadership, discipline, and teamwork. He is always motivated to improve his skills, take on new challenges, and represent himself through dedication and hard work."
  ],
  quickInfo: [
    { label: "Location", value: "Meherpur, Bangladesh", icon: "MapPin" },
    { label: "Professional Role", value: "Sports Person", icon: "Medal" },
    { label: "Main Sport", value: "Cricket (Primary)", icon: "Trophy" },
    { label: "College", value: "Meherpur Pauro Degree College", icon: "GraduationCap" }
  ]
};

export const SPORTS_DATA: SportCardData[] = [
  {
    id: "cricket",
    name: "Cricket",
    isPrimary: true,
    tagline: "Primary Sporting Passion",
    description: "Cricket is my main sporting passion. It has helped me develop discipline, focus, teamwork, and determination.",
    icon: "Cricket",
    accentColor: "emerald",
    keyAspects: ["Batting & Bowling Focus", "Match Temperament", "Strategic Awareness", "Team Camaraderie"]
  },
  {
    id: "football",
    name: "Football",
    isPrimary: false,
    tagline: "Supporting Sport",
    description: "Football strengthens teamwork, strategy, fitness, and the ability to perform under pressure.",
    icon: "Football",
    accentColor: "cyan",
    keyAspects: ["High Stamina & Pace", "Pressure Execution", "Tactical Positioning", "Rapid Transition"]
  },
  {
    id: "badminton",
    name: "Badminton",
    isPrimary: false,
    tagline: "Supporting Sport",
    description: "Badminton helps improve speed, focus, coordination, and quick decision-making.",
    icon: "Badminton",
    accentColor: "teal",
    keyAspects: ["Rapid Reflexes", "Hand-Eye Coordination", "Explosive Footwork", "Split-Second Choices"]
  }
];

export const CRICKET_EXPERIENCE = {
  title: "CRICKET EXPERIENCE",
  mainFocus: "Primary Sporting Passion & Regular Practice",
  statement: "Cricket is the primary area of sporting experience and passion. Through regular participation and practice, Tazdir continues to develop discipline, teamwork, confidence, and performance.",
  pillars: [
    {
      title: "Discipline & Routine",
      description: "Consistent net sessions, fielding drills, and physical training that instill athletic rigor and mental patience."
    },
    {
      title: "Tactical Acumen",
      description: "Reading pitch conditions, understanding game tempo, and making split-second decisions on the cricket ground."
    },
    {
      title: "Teamwork & Spirit",
      description: "Working collaboratively with teammates, backing each other in crunch situations, and celebrating collective growth."
    },
    {
      title: "Competitive Confidence",
      description: "Stepping onto the field with dedication, handling match pressure, and continually refining technical execution."
    }
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Meherpur Pauro Degree College",
    department: "Arts",
    qualification: "Degree Program (Arts)",
    yearOrExpected: "Expected 2027",
    status: "In Progress",
    location: "Meherpur, Bangladesh",
    description: "Currently pursuing academic studies in the Arts faculty while actively developing sporting discipline and athletic pursuits."
  },
  {
    institution: "Secondary Education Board",
    qualification: "Secondary School Certificate (SSC)",
    yearOrExpected: "Completed",
    status: "Completed",
    location: "Meherpur, Bangladesh",
    description: "Successfully attained the Secondary School Certificate, laying a solid academic and personal discipline foundation."
  }
];

export const SKILL_CATEGORIES: AthleticSkillCategory[] = [
  {
    category: "Primary Sport Competence",
    sport: "Cricket",
    badge: "Primary Discipline",
    skills: [
      { name: "Batting & Bowling Focus", focus: "Core athletic focus during regular match practice and training", type: "Technical" },
      { name: "Match Temperament", focus: "Maintaining calm execution and composure under competitive pressure", type: "Mental" },
      { name: "Field Positioning & Agility", focus: "Sharp situational alertness and swift ground coverage", type: "Physical" },
      { name: "Game Strategy & Adaptability", focus: "Reading field scenarios and adapting game plans dynamically", type: "Tactical" }
    ]
  },
  {
    category: "Supporting Sport Competence",
    sport: "Football",
    badge: "Secondary Discipline",
    skills: [
      { name: "Cardiovascular Endurance", focus: "High work-rate and sustained physical stamina across playing halves", type: "Physical" },
      { name: "Team Passing & Spatial Play", focus: "Collaborative communication and strategic spatial movements", type: "Tactical" },
      { name: "Pressure Decision Making", focus: "Executing precise actions with limited reaction time", type: "Mental" }
    ]
  },
  {
    category: "Supporting Sport Competence",
    sport: "Badminton",
    badge: "Secondary Discipline",
    skills: [
      { name: "Split-Second Reflexes", focus: "Rapid reaction to fast shuttle trajectories and court coverage", type: "Physical" },
      { name: "Hand-Eye Coordination", focus: "Precision strike alignment and consistent stroke timing", type: "Technical" },
      { name: "Fast Court Footwork", focus: "Agile directional changes, balance recovery, and quick recovery", type: "Tactical" }
    ]
  }
];

export const PERSONAL_VALUES: PersonalValue[] = [
  {
    title: "Discipline",
    description: "Maintaining consistent training habits, respect for time, and unwavering commitment to personal standards on and off the field.",
    iconName: "ShieldCheck",
    highlight: "Foundation"
  },
  {
    title: "Teamwork",
    description: "Valuing collective goals over individual glory, communicating effectively, and elevating teammates through mutual trust.",
    iconName: "Users",
    highlight: "Unity"
  },
  {
    title: "Confidence",
    description: "Believing in prepared abilities, stepping up in critical moments, and embracing challenges with a positive mindset.",
    iconName: "Sparkles",
    highlight: "Belief"
  },
  {
    title: "Leadership",
    description: "Leading by example with work ethic, inspiring sportsmanship, and staying accountable under pressure.",
    iconName: "Award",
    highlight: "Guiding"
  },
  {
    title: "Dedication",
    description: "Wholeheartedly committing hours to practice, refining technique, and respecting every opportunity to play.",
    iconName: "Flame",
    highlight: "Devotion"
  },
  {
    title: "Determination",
    description: "Persisting through setbacks, treating mistakes as learning steps, and relentlessly striving toward athletic growth.",
    iconName: "Zap",
    highlight: "Resilience"
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Sports", href: "#sports" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Values", href: "#values" },
  { name: "Contact", href: "#contact" }
];
