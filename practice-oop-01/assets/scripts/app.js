class ToolTip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjItems);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjecstList = new ProjectList('finished');
  }
}

App.init();