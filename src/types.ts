export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  hasLiveProject: boolean;
  images: {
    leftTop: string;
    leftBottom: string;
    rightTall: string;
  };
}

export interface SkillItem {
  number: string;
  title: string;
  description: string;
}

export interface DecorativeAsset {
  id: string;
  url: string;
  alt: string;
  positionClass: string;
  sizeClass: string;
  rotation?: number;
}
