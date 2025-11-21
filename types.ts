import { ReactNode } from "react";

export interface StepData {
  id: number;
  title: string;
  image: string;
}

export interface FileData {
  name: string;
  size: string;
  type: 'pdf' | 'video' | 'zip' | 'excel' | 'ppt';
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: ReactNode;
}
