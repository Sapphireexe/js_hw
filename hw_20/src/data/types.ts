interface ILoggedPageObject {
  title: string,
  message: string,
  subheader: string,
  logoutButton: string,
}

interface ITestData {
    testName: string,
    login: string,
    password: string,
    message: string,
}

interface ISelectors {
  [key: string]: string;
}

interface IMessages {
  [key: string]: string;
}

export type {ILoggedPageObject, ITestData, ISelectors, IMessages}