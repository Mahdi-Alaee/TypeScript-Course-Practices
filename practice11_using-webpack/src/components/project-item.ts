import { RenderableClass } from "./renderable.js";
import { AutoBind } from "../decorators/autoBind.js";
import { Draggable } from "../models/drag-drop-interface.js";
import { Project } from "../models/Project.js";

//* Project Item *//
export class ProjectItem
  extends RenderableClass<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  constructor(rootElemId: string, private project: Project) {
    super("single-project", rootElemId, "beforeend", project.id);

    this.configure();
    this.generateContent();
  }

  get peopleText() {
    const peopleCount = this.project.people;
    return `${peopleCount} ${peopleCount > 1 ? "persons" : "person"} assigned`;
  }

  @AutoBind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  @AutoBind
  dragEndHandler(_: DragEvent) {}

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  generateContent() {
    this.element.querySelector("h2")!.innerHTML = this.project.title;
    this.element.querySelector("h3")!.innerHTML = this.peopleText;
    this.element.querySelector("p")!.innerHTML = this.project.description;
  }
}
