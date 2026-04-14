export type EventCategory = 'Academic' | 'Sports' | 'Cultural' | 'Holiday' | 'PTM';

export interface SchoolEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: EventCategory;
  location?: string;
  isImportant?: boolean;
}
