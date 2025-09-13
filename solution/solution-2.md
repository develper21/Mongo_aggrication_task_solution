## Insert a new company document for "Tesla" in Bangalore with base = 29 LPA.
```js
{
  "acknowledged": true,
  "insertedId": {
    "$oid": "68b8333140437556f6099aed"
  }
}
```

## Insert multiple new companies at once (add "Stripe" and "Coinbase").
```js
{
  "acknowledged": true,
  "insertedIds": {
    "0": {
      "$oid": "68b8335ea1bc497440f1c30e"
    },
    "1": {
      "$oid": "68b8335ea1bc497440f1c30f"
    }
  }
}
```

## Find all companies.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 31,
      "stock": 12,
      "bonus": 5
    },
    "hiringCriteria": {
      "cgpa": 7,
      "skills": [
        "DSA",
        "Python",
        "Distributed Systems"
      ],
      "experience": "1-2 years"
    },
    "interviewRounds": [
      {
        "round": 1,
        "type": "OA"
      },
      {
        "round": 2,
        "type": "Technical"
      },
      {
        "round": 3,
        "type": "Tech Screen"
      }
    ],
    "benefits": [
      "Relocation",
      "WFH"
    ],
    "employeeCount": 800,
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 35,
      "stock": 24,
      "bonus": 5
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30,
      "bonus": 5
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 35,
      "stock": 24,
      "bonus": 5
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30,
      "bonus": 5
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    }
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai",
    "salaryBand": {
      "stock": 0,
      "bonus": 5,
      "base": 35
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    }
  },
  {
    "_id": {
      "$oid": "68b8333140437556f6099aed"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 29,
      "bonus": 4,
      "stock": 6
    },
    "hiringCriteria": {
      "cgpa": 7,
      "skills": [
        "DSA",
        "Python",
        "Distributed Systems"
      ],
      "experience": "1-2 years"
    },
    "interviewRounds": [
      {
        "round": 1,
        "type": "OA"
      },
      {
        "round": 2,
        "type": "Technical"
      },
      {
        "round": 3,
        "type": "HR"
      }
    ],
    "benefits": [
      "Relocation",
      "WFH"
    ],
    "headcount": 800
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30e"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 40,
      "bonus": 8,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30f"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "bonus": 6,
      "stock": 15
    }
  }
]
```

## Find one company (findOne()) in Bangalore.
```js
{
  "_id": {
    "$oid": "68b6d8bb7f61ef28f1819ce7"
  },
  "name": "Tesla",
  "location": "Bangalore",
  "salaryBand": {
    "base": 31,
    "stock": 12,
    "bonus": 5
  },
  "hiringCriteria": {
    "cgpa": 7,
    "skills": [
      "DSA",
      "Python",
      "Distributed Systems"
    ],
    "experience": "1-2 years"
  },
  "interviewRounds": [
    {
      "round": 1,
      "type": "OA"
    },
    {
      "round": 2,
      "type": "Technical"
    },
    {
      "round": 3,
      "type": "Tech Screen"
    }
  ],
  "benefits": [
    "Relocation",
    "WFH"
  ],
  "employeeCount": 800,
  "lastUpdated": {
    "$date": "2025-09-03T09:32:50.074Z"
  }
}
```

## Find companies offering base > 30 LPA.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 31,
      "stock": 12,
      "bonus": 5
    },
    "hiringCriteria": {
      "cgpa": 7,
      "skills": [
        "DSA",
        "Python",
        "Distributed Systems"
      ],
      "experience": "1-2 years"
    },
    "interviewRounds": [
      {
        "round": 1,
        "type": "OA"
      },
      {
        "round": 2,
        "type": "Technical"
      },
      {
        "round": 3,
        "type": "Tech Screen"
      }
    ],
    "benefits": [
      "Relocation",
      "WFH"
    ],
    "employeeCount": 800,
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 35,
      "stock": 24,
      "bonus": 5
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30,
      "bonus": 5
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 35,
      "stock": 24,
      "bonus": 5
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30,
      "bonus": 5
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    }
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai",
    "salaryBand": {
      "stock": 0,
      "bonus": 5,
      "base": 35
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    }
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30e"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 40,
      "bonus": 8,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30f"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "bonus": 6,
      "stock": 15
    }
  }
]
```

## Find companies in Hyderabad.
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30,
      "bonus": 5
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30,
      "bonus": 5
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    }
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30f"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "bonus": 6,
      "stock": 15
    }
  }
]
```

## Find companies requiring CGPA >= 8.0.
```js
[]
```

## Find companies that list "System Design" in skills.
```js
[]
```

## Find companies that offer "Relocation".
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 31,
      "stock": 12,
      "bonus": 5
    },
    "hiringCriteria": {
      "cgpa": 7,
      "skills": [
        "DSA",
        "Python",
        "Distributed Systems"
      ],
      "experience": "1-2 years"
    },
    "interviewRounds": [
      {
        "round": 1,
        "type": "OA"
      },
      {
        "round": 2,
        "type": "Technical"
      },
      {
        "round": 3,
        "type": "Tech Screen"
      }
    ],
    "benefits": [
      "Relocation",
      "WFH"
    ],
    "employeeCount": 800,
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b8333140437556f6099aed"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 29,
      "bonus": 4,
      "stock": 6
    },
    "hiringCriteria": {
      "cgpa": 7,
      "skills": [
        "DSA",
        "Python",
        "Distributed Systems"
      ],
      "experience": "1-2 years"
    },
    "interviewRounds": [
      {
        "round": 1,
        "type": "OA"
      },
      {
        "round": 2,
        "type": "Technical"
      },
      {
        "round": 3,
        "type": "HR"
      }
    ],
    "benefits": [
      "Relocation",
      "WFH"
    ],
    "headcount": 800
  }
]
```

## Find companies with stock >= 15 LPA.
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 35,
      "stock": 24,
      "bonus": 5
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30,
      "bonus": 5
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 35,
      "stock": 24,
      "bonus": 5
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30,
      "bonus": 5
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    }
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30f"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "bonus": 6,
      "stock": 15
    }
  }
]
```

## Find companies with at least 4 interview rounds.
```js
[]
```

## Find companies with headcount > 5000.
```js
[]
```

## Insert a company with only name and location.
```js
{
  "acknowledged": true,
  "insertedId": {
    "$oid": "68b967f281d6d67b92f290e9"
  }
}
```

## Update Amazon’s bonus to 6.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Update all companies in Hyderabad to add benefit = "Free Snacks".
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 3,
  "modifiedCount": 1,
  "upsertedCount": 0
}
```

## Add skill "Python" to Google’s criteria.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Remove "Gym" from Microsoft benefits.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Replace entire salaryBand for Netflix.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Delete company "Infosys".
```js
{
  "acknowledged": true,
  "deletedCount": 0
}
```

## Delete all companies with base < 10.
```js
{
  "acknowledged": true,
  "deletedCount": 0
}
```

## Use $set to add a new field isTopTier: true for Google.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Use $inc to increase Amazon’s stock by 2.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Use $rename to rename field headcount → employeeCount.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 10,
  "modifiedCount": 1,
  "upsertedCount": 0
}
```

## Use $unset to remove "bonus" from salaryBand.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 10,
  "modifiedCount": 9,
  "upsertedCount": 0
}
```

## Insert 5 dummy companies with minimal fields.
```js
{
  "acknowledged": true,
  "insertedIds": {
    "0": {
      "$oid": "68b96a1486ac31bac3ad798d"
    },
    "1": {
      "$oid": "68b96a1486ac31bac3ad798e"
    },
    "2": {
      "$oid": "68b96a1486ac31bac3ad798f"
    },
    "3": {
      "$oid": "68b96a1486ac31bac3ad7990"
    },
    "4": {
      "$oid": "68b96a1486ac31bac3ad7991"
    }
  }
}
```

## Delete all dummy companies.
```js
{
  "acknowledged": true,
  "deletedCount": 5
}
```

## Find all companies, project only name and salaryBand.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "salaryBand": {
      "base": 31,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "salaryBand": {
      "base": 35,
      "stock": 24
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "salaryBand": {
      "base": 35,
      "stock": 30
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "salaryBand": {
      "base": 35,
      "stock": 30
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "salaryBand": {
      "base": 35,
      "stock": 24
    }
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "salaryBand": {
      "stock": 0,
      "base": 35
    }
  },
  {
    "_id": {
      "$oid": "68b8333140437556f6099aed"
    },
    "name": "Tesla",
    "salaryBand": {
      "base": 29,
      "stock": 6
    }
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30e"
    },
    "name": "Stripe",
    "salaryBand": {
      "base": 40,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30f"
    },
    "name": "Coinbase",
    "salaryBand": {
      "base": 38,
      "stock": 15
    }
  },
  {
    "_id": {
      "$oid": "68b967f281d6d67b92f290e9"
    },
    "name": "Freshworks"
  }
]
```

## Find all companies, exclude _id.
```js
[
  {
    "name": "Tesla",
    "location": "Bangalore"
  },
  {
    "name": "Stripe",
    "location": "Bangalore"
  },
  {
    "name": "Coinbase",
    "location": "Hyderabad"
  },
  {
    "name": "Coinbase",
    "location": "Hyderabad"
  },
  {
    "name": "Stripe",
    "location": "Bangalore"
  },
  {
    "name": "Freshworks",
    "location": "Chennai"
  },
  {
    "name": "Tesla",
    "location": "Bangalore"
  },
  {
    "name": "Stripe",
    "location": "Bangalore"
  },
  {
    "name": "Coinbase",
    "location": "Hyderabad"
  },
  {
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## Find only name and benefits for Microsoft.
```js
[]
```

## Count all companies in Bangalore.
```js
5
```

## Count all companies requiring CGPA >= 7.0.
```js
2
```

## Get distinct locations.
```js
[
  "Bangalore",
  "Chennai",
  "Hyderabad"
]
```

## Get distinct benefits offered.
```js
[
  "Free Snacks",
  "Relocation",
  "WFH"
]
```

## Check if any company offers stock = 20.
```js
null
```

## Insert company with nested object { perks: { transport: true } }.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Push new round { round: 5, type: "CTO Interview" } to Meta.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Pull "HR" round out of Amazon’s rounds.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Add "Health Insurance" only if not present in Swiggy benefits.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## Increase base salary by 2 for all companies in Bangalore.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 5,
  "modifiedCount": 5,
  "upsertedCount": 0
}
```

## Delete all companies in "Delhi" (if any exist).
```js
{
  "acknowledged": true,
  "deletedCount": 0
}
```