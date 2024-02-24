/// <reference path="models/drag-drop-interface.ts" />
/// <reference path="models/Project.ts" />
/// <reference path="utils/validation.ts" />
/// <reference path="decorators/autoBind.ts" />
/// <reference path="states/projects-state.ts" />
/// <reference path="components/renderable.ts" />
/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
