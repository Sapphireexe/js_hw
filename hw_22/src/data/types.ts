interface ITestData {
  testName: string;
  login: string;
  password: string;
  message: string;
}

interface ICredentials {
  login: string;
  password: string;
}

export type { ICredentials, ITestData };
