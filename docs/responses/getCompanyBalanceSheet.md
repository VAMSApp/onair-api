
## getCompanyBalanceSheet()

### response
```javascript
{
  ASSAccounts: [
    {
      Name: 'FBOs',
      ShortName: 'ASSFBOs',
      Entries: [
        {
          Id: '8a691fdd-d4e7-4053-8221-528214b2eca3',
          CompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
          AccountId: '89d9af7c-aa31-464c-b688-a61e7d8c0f46',
          Amount: 3534000,
          Account: {
            Id: '89d9af7c-aa31-464c-b688-a61e7d8c0f46',
            ShortName: 'ASSFBOs',
            Name: 'FBOs',
            Category: 2,
            Order: 0
          },
          CreationDate: '2022-01-01T02:55:30.777',
          Description: 'NDBB Airways - EGLL FBO (EGLL)',
          Key: '751bca9c-0097-4190-80f4-789e377c9f0c',
          CarryForward: false
        }
        // removed for brevity
      ],
      Order: 0,
      Amount: 32839300
    },
    {
      Name: 'Cash',
      ShortName: 'ASSCash',
      Entries: [

      ],
      Order: -1,
      Amount: 1424971819.5
    },
    {
      Name: 'Aircraft Expert Estimation',
      ShortName: 'ASSAircrafts',
      Entries: [
        {
          Id: '0682bc4e-3ca1-4e0f-a7bc-e1528443c752',
          CompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
          AccountId: '7d1ce4cb-9005-4c33-a918-cfe3697eaf5d',
          Amount: 998600,
          Account: {
            Id: '7d1ce4cb-9005-4c33-a918-cfe3697eaf5d',
            ShortName: 'ASSAircrafts',
            Name: 'Aircraft Expert Estimation',
            Category: 2,
            Order: 0
          },
          CreationDate: '2022-01-16T19:24:09.743',
          Description: 'Cessna 208B Grand Caravan EX - N1266X',
          Key: '22d66fac-51eb-4f9a-bd65-a25bd5dd9c66',
          CarryForward: false
        }
        // removed for brevity
      ],
      Order: 0,
      Amount: 2022847000
    },
    {
      Name: 'VA Shares',
      ShortName: 'ASSVAShares',
      Entries: [
        {
          Id: 'f22e08c5-7cd4-4d0e-9c0d-0912fac0410b',
          CompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
          AccountId: '928c63ad-c3f9-4a0c-ab84-ec9cf8c63857',
          Amount: 0,
          Account: {
            Id: '928c63ad-c3f9-4a0c-ab84-ec9cf8c63857',
            ShortName: 'ASSVAShares',
            Name: 'VA Shares',
            Category: 2,
            Order: 0
          },
          CreationDate: '2022-01-26T04:33:06.91',
          Description: 'Amazon Airways shares',
          Key: 'c37212b4-c6b3-40c8-93f2-f442e58e91a0',
          CarryForward: false
        }
        // removed for brevity
      ],
      Order: 0,
      Amount: 0
    },
    {
      Name: 'FBO Fuel',
      ShortName: 'ASSFBOFuel',
      Entries: [
        {
          Id: 'f4e09316-1260-4908-8958-f43c03d48cff',
          CompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
          AccountId: '4c7b147b-856e-494e-9208-ee8c06514cc4',
          Amount: 0,
          Account: {
            Id: '4c7b147b-856e-494e-9208-ee8c06514cc4',
            ShortName: 'ASSFBOFuel',
            Name: 'FBO Fuel',
            Category: 2,
            Order: 0
          },
          CreationDate: '2022-01-16T19:27:23.287',
          Description: 'NDBB Airways - AYXM FBO Fuel (AYXM)',
          Key: '60254a22-39f6-4719-a182-2d43ae432e5c-fuel',
          CarryForward: false
        }
        // removed for brevity
      ],
      Order: 0,
      Amount: 124234.98
    }
  ],
  LIAAccounts: [
    {
      Name: 'Share Capital',
      ShortName: 'LIACapital',
      Entries: [
        {
          Id: '7cc51711-d39b-4282-b9b0-b2d84554ff66',
          CompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
          AccountId: '6e1ce4cb-9005-4c33-a918-cfe3697eaf5d',
          Amount: 170000,
          Account: {
            Id: '6e1ce4cb-9005-4c33-a918-cfe3697eaf5d',
            ShortName: 'LIACapital',
            Name: 'Share Capital',
            Category: 3,
            Order: 0
          },
          CreationDate: '2021-08-29T02:12:45.367',
          Description: "Owner's equity",
          CarryForward: false
        }
        // removed for brevity
      ],
      Order: 0,
      Amount: 170000
    },
    {
      Name: 'Loans',
      ShortName: 'LIALoans',
      Entries: [],
      Order: 0,
      Amount: 0
    }
  ],
  ASSAmount: 3480782354.48,
  LIAAmount: 170000,
  DeltaBalance: 3480612354.48
}
```
