function AutoBind(
  _target: any,
  _methodName: string | Symbol,
  descriptor: TypedPropertyDescriptor<any>
) {

  const originalMethod = descriptor.value as Function;

  return {
    // enumerable: false,
    // configurable: true,
    get() {
      const boundFn = originalMethod?.bind(this);
      return boundFn;
    },
  };
}

class ProjectInput {
  templateElem: HTMLTemplateElement;
  appElem: HTMLDivElement;
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
    this.appElem = document.getElementById("app") as HTMLDivElement;

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

  @AutoBind
  private submitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInput.value);
    console.log(this.descriptionInput.value);
    console.log(this.peopleInput.value);
  }

  private configure() {
    this.submitButton.addEventListener("click", this.submitHandler);
  }

  private attach() {
    this.appElem.insertAdjacentElement("afterbegin", this.formElem);
  }
}

const prjInput = new ProjectInput();
