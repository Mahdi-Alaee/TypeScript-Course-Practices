//* project interface *//

interface Project {
  id: string;
  title: string;
  description: string;
  people: number;
}

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
  if (ValidationRule.max != null && typeof ValidationRule.value === "number") {
    isValid = isValid && ValidationRule.value <= ValidationRule.max;
  }
  if (ValidationRule.min != null && typeof ValidationRule.value === "number") {
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

//* Project State *//
class ProjectState {
  private projects: Project[] = [];
  private listeners: Function[] = [];
  private static instence: ProjectState;

  private constructor() {}

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
    };

    this.projects.push(newProject);
    for (let listenerFn of this.listeners) {
      listenerFn(this.projects);
    }
  }
}

const prjState = ProjectState.getInstence();

//* Project List Class *//
class ProjectList {
  templateElem: HTMLTemplateElement;
  rootElem: HTMLDivElement;
  sectionElem: HTMLElement;
  assignedProjects: Project[] = [];

  constructor(private type: "active" | "finished") {
    this.templateElem = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;
    this.rootElem = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(this.templateElem.content, true);

    this.sectionElem = importedNode.firstElementChild as HTMLElement;
    this.sectionElem.id = `${type}-projects`;

    this.attach();
    this.generateContent();
    prjState.addListener((projects: any[]) => {
      this.assignedProjects = projects;
      this.renderProjects();
    });
  }

  renderProjects() {
    const ulElem = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;
    ulElem.innerHTML = "";
    this.assignedProjects.forEach((project) => {
      const newLi = document.createElement("li");
      newLi.innerHTML = project.title;
      ulElem.appendChild(newLi);
    });
  }

  generateContent() {
    this.sectionElem.querySelector(
      "header > h2"
    )!.innerHTML = `${this.type.toUpperCase()} PROJECTS`;
    this.sectionElem.querySelector("ul")!.id = `${this.type}-projects-list`;
  }

  attach() {
    this.rootElem.insertAdjacentElement("beforeend", this.sectionElem);
  }
}

//* Project Input Class *//
class ProjectInput {
  templateElem: HTMLTemplateElement;
  rootElem: HTMLDivElement;
  formElem: HTMLFormElement;

  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;
  submitButton: HTMLButtonElement;

  constructor() {
    //! load Form to the DOM
    this.templateElem = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.rootElem = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(this.templateElem.content, true);

    this.formElem = importedNode.firstElementChild as HTMLFormElement;
    this.formElem.id = "user-input";
    this.attach();

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

  private attach() {
    this.rootElem.insertAdjacentElement("afterbegin", this.formElem);
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
