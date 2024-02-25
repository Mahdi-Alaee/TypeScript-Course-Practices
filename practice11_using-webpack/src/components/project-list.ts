import { RenderableClass } from "./renderable";
import { DropTarget } from "../models/drag-drop-interface";
import { Project } from "../models/Project";
import { prjState } from "../states/projects-state";
import { AutoBind } from "../decorators/autoBind";
import { ProjectStatus } from "../models/Project";
import { ProjectItem } from "./project-item";

//* Project List Class *//
export class ProjectList
  extends RenderableClass<HTMLDivElement, HTMLElement>
  implements DropTarget
{
  assignedProjects: Project[] = [];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", "beforeend", `${type}-projects`);

    this.generateContent();
    prjState.addListener((projects: any[]) => {
      if (this.type === "active")
        this.assignedProjects = projects.filter(
          (project) => project.status === ProjectStatus.Active
        );
      else
        this.assignedProjects = projects.filter(
          (project) => project.status === ProjectStatus.Finished
        );

      this.renderProjects();
    });

    this.configure();
  }

  @AutoBind
  dragOverHandler(event: DragEvent) {
    event.preventDefault();
    this.element.querySelector("ul")!.classList.add("droppable");
  }

  @AutoBind
  dropHandler(event: DragEvent) {
    const projectId = event.dataTransfer!.getData("text/plain");
    prjState.moveProject(projectId);
  }

  @AutoBind
  dragLeaveHandler(_: DragEvent) {
    this.element.querySelector("ul")!.classList.remove("droppable");
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
  }

  renderProjects() {
    const ulElem = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;
    ulElem.innerHTML = "";
    this.assignedProjects.forEach((project) => {
      new ProjectItem(ulElem.id, project);
    });
  }

  generateContent() {
    this.element.querySelector(
      "header > h2"
    )!.innerHTML = `${this.type.toUpperCase()} PROJECTS`;
    this.element.querySelector("ul")!.id = `${this.type}-projects-list`;
  }
}
