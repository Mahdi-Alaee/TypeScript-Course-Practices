
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

//* project input *//
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

  validate<T extends { value: string }>(param: T) {
    const { value } = param;

    switch (param) {
    }
  }

  clearInputs() {
    this.titleInput.value = "";
    this.descriptionInput.value = "";
    this.peopleInput.value = "";
  }

  gatherInputValues(): [string, string, number] | void {
    const EnteredTitle = this.titleInput.value;
    const EnteredDescription = this.descriptionInput.value;
    const EnteredPeople = +this.peopleInput.value;

    if (EnteredTitle && EnteredDescription && EnteredPeople)
      return [EnteredTitle, EnteredDescription, EnteredPeople];

    alert("you must fill the inputs");
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
      console.log(title, description, people);
    }
  }

  private configure() {
    this.submitButton.addEventListener("click", this.submitHandler);
  }

  private attach() {
    this.appElem.insertAdjacentElement("afterbegin", this.formElem);
  }
}

const prjInput = new ProjectInput();
