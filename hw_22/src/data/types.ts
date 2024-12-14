interface ITestData {
  testName: string;
  login: string;
  password: string;
  message: string;
}

interface ISelectors {
  [key: string]: string;
}

interface IMessages {
  [key: string]: string;
}

interface ICredentials {
  login: string;
  password: string;
}

export type { ICredentials, ITestData, ISelectors, IMessages };
