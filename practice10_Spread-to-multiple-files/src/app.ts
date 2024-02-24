/// <reference path="drag-drop-interface.ts" />

namespace App {
  //* Validation *//
  interface ValidationRule {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  function validate(ValidationRule: ValidationRule): boolean {
    let isValid = true;

    if (ValidationRule.required != null) {
      isValid = isValid && ValidationRule.value.toString().length > 0;
    }
    if (
      ValidationRule.maxLength != null &&
      typeof ValidationRule.value === "string"
    ) {
      isValid =
        isValid &&
        ValidationRule.value.toString().length <= ValidationRule.maxLength;
    }
    if (
      ValidationRule.minLength != null &&
      typeof ValidationRule.value === "string"
    ) {
      isValid =
        isValid &&
        ValidationRule.value.toString().length >= ValidationRule.minLength;
    }
    if (
      ValidationRule.max != null &&
      typeof ValidationRule.value === "number"
    ) {
      isValid = isValid && ValidationRule.value <= ValidationRule.max;
    }
    if (
      ValidationRule.min != null &&
      typeof ValidationRule.value === "number"
    ) {
      isValid = isValid && ValidationRule.value >= ValidationRule.min;
    }

    return isValid;
  }

  //* AutoBind Decorator *//
  function AutoBind(
    _target: any,
    _methodName: string | Symbol,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    const originalMethod = descriptor.value as Function;

    return {
      get() {
        const boundFn = originalMethod?.bind(this);
        return boundFn;
      },
    };
  }

  //* Project State managment *//
  class ProjectState {
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

  const prjState = ProjectState.getInstence();

  //* renderable class *//
  class RenderableClass<T extends HTMLElement, U extends HTMLElement> {
    templateElem: HTMLTemplateElement;
    rootElem: T;
    element: U;

    constructor(
      templateElemId: string,
      rootElemId: string,
      private insertPosition: InsertPosition,
      elementId?: string
    ) {
      this.templateElem = document.getElementById(
        templateElemId
      ) as HTMLTemplateElement;
      this.rootElem = document.getElementById(rootElemId) as T;

      const importedNode = document.importNode(this.templateElem.content, true);
      this.element = importedNode.firstElementChild as U;
      if (elementId) this.element.id = elementId;

      this.attach();
    }

    private attach() {
      this.rootElem.insertAdjacentElement(this.insertPosition, this.element);
    }
  }

  //* Project Item *//
  class ProjectItem
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
      return `${peopleCount} ${
        peopleCount > 1 ? "persons" : "person"
      } assigned`;
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

  //* Project List Class *//
  class ProjectList
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

  //* Project Input Class *//
  class ProjectInput extends RenderableClass<HTMLDivElement, HTMLFormElement> {
    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    peopleInput: HTMLInputElement;
    submitButton: HTMLButtonElement;

    constructor() {
      super("project-input", "app", "afterbegin", "user-input");

      //! get Elements
      this.titleInput = document.getElementById("title") as HTMLInputElement;
      this.descriptionInput = document.getElementById(
        "description"
      ) as HTMLInputElement;
      this.peopleInput = document.getElementById("people") as HTMLInputElement;
      this.submitButton = document.querySelector("button")!;

      //! set submit Event
      this.configure();
    }

    clearInputs() {
      this.titleInput.value = "";
      this.descriptionInput.value = "";
      this.peopleInput.value = "";
    }

    gatherInputValues(): [string, string, number] | void {
      const enteredTitle = this.titleInput.value;
      const enteredDescription = this.descriptionInput.value;
      const enteredPeople = +this.peopleInput.value;

      if (
        validate({
          value: enteredTitle,
          minLength: 3,
          maxLength: 20,
          required: true,
        }) &&
        validate({
          value: enteredDescription,
          minLength: 10,
          maxLength: 50,
          required: true,
        }) &&
        validate({ value: enteredPeople, min: 1, max: 5, required: true })
      )
        return [enteredTitle, enteredDescription, enteredPeople];

      alert("your entered data isn't Valid");
    }

    @AutoBind
    private submitHandler(e: Event) {
      e.preventDefault();

      const gatheredInputs = this.gatherInputValues();

      if (Array.isArray(gatheredInputs)) {
        const [title, description, people] = this.gatherInputValues() as [
          string,
          string,
          number
        ];
        this.clearInputs();

        prjState.addProject(title, description, people);
      }
    }

    private configure() {
      this.submitButton.addEventListener("click", this.submitHandler);
    }
  }

  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
