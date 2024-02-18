class ProjectInput{
    templateElem: HTMLTemplateElement;
    appElem: HTMLDivElement;
    formElem: HTMLFormElement;


    constructor() {
        this.templateElem = document.getElementById('project-input') as HTMLTemplateElement;
        this.appElem = document.getElementById('app') as HTMLDivElement;

        const importedNode = document.importNode(this.templateElem.content, true);

        this.formElem = importedNode.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach(){        
        this.appElem.insertAdjacentElement('afterbegin', this.formElem);
    }
}

const prjInput = new ProjectInput();