const config = {
    s3: {
      REGION: "eu-central-1",
      BUCKET: "notes-app-upload-alf",
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://fb8a97kru4.execute-api.eu-central-1.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_Szghr6Rji",
      APP_CLIENT_ID: "7aad9lkn61m1jiacnf2gutv81n",
      IDENTITY_POOL_ID: "eu-central-1:8582e1fe-2f1b-4490-9808-d5c3772b8b49",
    },
  };
  
  export default config;