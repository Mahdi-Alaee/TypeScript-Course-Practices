import { Project } from "../models/Project";
import { ProjectStatus } from "../models/Project";

//* Project State managment *//
export class ProjectState {
  private projects: Project[] = [];
  private listeners: Function[] = [];
  private static instence: ProjectState;

  private constructor() {}

  moveProject(id: string) {
    this.projects.forEach((project) => {
      if (project.id === id) {
        const newStatus =
          project.status === ProjectStatus.Active
            ? ProjectStatus.Finished
            : ProjectStatus.Active;
        project.status = newStatus;
      }
    });

    this.updateListeners();
  }

  updateListeners() {
    for (let listenerFn of this.listeners) {
      listenerFn(this.projects);
    }
  }

  static getInstence() {
    if (this.instence) return this.instence;

    return new ProjectState();
  }

  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, description: string, people: number) {
    const newProject: Project = {
      id: crypto.randomUUID(),
      title,
      description,
      people,
      status: 0,
    };

    this.projects.push(newProject);
    this.updateListeners();
  }
}

export const prjState = ProjectState.getInstence();
