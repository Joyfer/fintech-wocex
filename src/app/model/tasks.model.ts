interface TasksInterface {
  title: string;
  description: string;
  finished: boolean;
  id: number;
} 

export class Tasks implements TasksInterface {
  constructor(title: string, description: string, finished: boolean) {
    this.title = title;
    this.description = description;
    this.finished = finished;
    this.id = new Date().getTime();
  }
  title: string;
  description: string;
  finished: boolean;
  id: number;
}
