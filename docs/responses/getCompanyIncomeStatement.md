## getCompanyIncomeStatement() Object

### response
```javascript
{
  REVAccounts: [
    {
      Name: 'Passenger Services',
      ShortName: 'REVPax',
      Entries: [
        {
          Id: '9a509279-aad5-4b12-90d2-599c9412dfe2',
          CompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
          AccountId: '4780f80f-e426-4b7f-92f2-058b722c6c8c',
          Amount: 183606.21,
          Account: [
            {
              Id: '4780f80f-e426-4b7f-92f2-058b722c6c8c',
              ShortName: 'REVPax',
              Name: 'Passenger Services',
              Category: 0,
              Order: 0
            }
          ],
          CreationDate: '2022-01-14T18:03:43.237',
          Description: 'Payment for PAX (Medical Transportation).',
          CarryForward: false
        },
        // removed for brevity
      ]
    },
    // removed for brevity
  ],
  EXPAccounts: [
    {
      Name: 'Staff',
      ShortName: 'EXPStaff',
      Entries: [
        {
          Id: 'd793f13e-7542-48c0-a2bb-29c5994cf19b',
          CompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
          AccountId: 'ca55e96a-75a9-48ec-be66-3373c2c3c294',
          Amount: 3424.62,
          Account: [
            {
              Id: 'ca55e96a-75a9-48ec-be66-3373c2c3c294',
              ShortName: 'EXPStaff',
              Name: 'Staff',
              Category: 1,
              Order: 0
            }
          ],
          CreationDate: '2022-01-16T05:00:00',
          Description: 'Salary from 1/9/2022 to 1/16/2022 for Christopher Gillott\n' +
            'Total flight hours : 26.2 in 7.0 days\n' +
            'Minimum contractual amount : 1,995.00 Cr.',
          CarryForward: false
        },
        // removed for brevity
      ],
      Order: 0,
      Amount: 49873.98
    },
    // removed for brevity
  ],
  REVAmount: 410666.86,
  EXPAmount: 82824589.71,
  NetIncomeAmount: -82413922.85
}
```
