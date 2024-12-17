export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'peerReview' | 'done';
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}