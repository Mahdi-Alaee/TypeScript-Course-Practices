namespace App {
  //* renderable class *//
  export class RenderableClass<T extends HTMLElement, U extends HTMLElement> {
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
}
