import { FileData, StepData } from "./types";

export const STUDENT_NAME = "Tagore House Team";
export const TEAM_MEMBERS = "Pranika, Samarth, Devansh, Raphael, and Rozaldo";
export const PROJECT_TITLE = "How to Save Water and Energy Using AI";
export const CLASS_NAME = "Class 6";
export const TEACHER_NAME = "Mrs. Johnson";
export const SCHOOL_NAME = "Sunnydale Elementary";
export const DATE = "October 2023";

export const FILES_LIST: FileData[] = [
  { name: "Project_Report.pdf", size: "2.4 MB", type: "pdf" },
  { name: "Making_Video.mp4", size: "150 MB", type: "video" },
  { name: "Photos.zip", size: "45 MB", type: "zip" },
  { name: "Presentation.pptx", size: "12 MB", type: "ppt" },
  { name: "Experiment_Data.xlsx", size: "1.1 MB", type: "excel" }
];

export const STEPS: StepData[] = [
  {
    id: 1,
    title: "Concept: AI & Moisture Sensors",
    image: "https://picsum.photos/400/300?random=10"
  },
  {
    id: 2,
    title: "Inserting the two probes into the soil.",
    image: "https://picsum.photos/400/300?random=11"
  },
  {
    id: 3,
    title: "Connecting probes to the circuit.",
    image: "https://picsum.photos/400/300?random=12"
  },
  {
    id: 4,
    title: "Measuring electrical resistance.",
    image: "https://picsum.photos/400/300?random=13"
  },
  {
    id: 5,
    title: "Arduino logic: Dry vs. Wet soil.",
    image: "https://picsum.photos/400/300?random=14"
  },
  {
    id: 6,
    title: "Automated sprinkler activation test.",
    image: "https://picsum.photos/400/300?random=15"
  },
];