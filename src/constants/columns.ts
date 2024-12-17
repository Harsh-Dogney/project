import { Column } from '../types';

export const COLUMNS: Column[] = [
  { id: 'todo', title: 'To Do', tasks: [] },
  { id: 'inProgress', title: 'In Progress', tasks: [] },
  { id: 'peerReview', title: 'Peer Review', tasks: [] },
  { id: 'done', title: 'Done', tasks: [] },
] as const;