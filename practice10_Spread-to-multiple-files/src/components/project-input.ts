/// <reference path="../components/renderable.ts" />
/// <reference path="../utils/validation.ts" />
/// <reference path="../decorators/autoBind.ts" />

namespace App {
  //* Project Input Class *//
  export class ProjectInput extends RenderableClass<
    HTMLDivElement,
    HTMLFormElement
  > {
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
}
