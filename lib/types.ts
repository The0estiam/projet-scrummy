// lib/types.ts
export type ParticipantRole = 'CP' | 'PO' | 'SM' | 'DEV';

export interface Participant {
  name: string;
  roles: ParticipantRole[];
  active: boolean;
}

export interface UserStory {
  title: string;
  description: string;
  effort: 1 | 2 | 3 | 5 | 8;
  priority: 'MUST' | 'SHOULD' | 'COULD' | 'WOULD';
  remaining: number;
  completedAt?: Date;
}

export interface Sprint {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  userStories: UserStory[];
}

export interface Project {
  name: string;
  code: string;
  participants: Participant[];
  sprints: Sprint[];
}