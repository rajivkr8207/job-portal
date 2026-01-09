export type Job = {
  id: string;
  title: string;
  company: string;
  tags: string[];
  description: string;
  eligible: boolean;
  ineligibilityReason?: string;
  applied: boolean;
};
