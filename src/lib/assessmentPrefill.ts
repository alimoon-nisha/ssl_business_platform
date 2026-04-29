export interface AssessmentData {
  businessType: string;
  sector: string;
  employeeRange: string;
  selectedNeeds: string[];
  readiness: {
    sellsOnline: string;
    hasWebsite: string;
    monthlyActivity: string;
    documentsReady: string;
  };
}

const STORAGE_KEY = "ssl_service_assessment_answers";

export function saveAssessmentAnswers(answers: AssessmentData): void {
  if (typeof window === "undefined") return;
  
  const dataToStore = {
    businessType: answers.businessType,
    sector: answers.sector,
    employeeRange: answers.employeeRange,
    selectedNeeds: answers.selectedNeeds,
    readiness: answers.readiness,
  };
  
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
}

export function getAssessmentAnswers(): AssessmentData | null {
  if (typeof window === "undefined") return null;
  
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  
  try {
    const parsed = JSON.parse(stored);
    
    // Basic validation to ensure required fields exist
    if (
      parsed &&
      typeof parsed.businessType === "string" &&
      typeof parsed.sector === "string" &&
      typeof parsed.employeeRange === "string"
    ) {
      return parsed as AssessmentData;
    }
  } catch (e) {
    console.error("Failed to parse assessment answers", e);
  }
  
  return null;
}

export function clearAssessmentAnswers(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(STORAGE_KEY);
}
