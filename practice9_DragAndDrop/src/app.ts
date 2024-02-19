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
