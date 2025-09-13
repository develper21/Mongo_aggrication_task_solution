## 1.Insert a new company document for "Tesla" in Bangalore with base = 29 LPA.
>Responces:
```js
{
  "_id": {
    "$oid": "68b6d8bb7f61ef28f1819ce7"
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
```

## // 2.Insert multiple new companies at once (add "Stripe" and "Coinbase").
>Responces:
```js
{
  "acknowledged": true,
  "insertedIds": {
    "0": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "1": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    }
  }
}
```

## // 3.Find all companies.
>Responces:
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
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
      "$oid": "68b6d90c6bf4c7525bd68338"
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
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "bonus": 6,
      "stock": 15
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
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
      "$oid": "68b7ee95d3d8d92ca7102fbc"
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

## // 4.Find one company (findOne()) in Bangalore.
>Responces:
```js
{
  "_id": {
    "$oid": "68b6d8bb7f61ef28f1819ce7"
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
```

## // 5.Find companies offering base > 30 LPA.
>Responces:
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
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
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "bonus": 6,
      "stock": 15
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
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
      "$oid": "68b7ee95d3d8d92ca7102fbc"
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

## // 6.Find companies in Hyderabad.
>Responces:
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "bonus": 6,
      "stock": 15
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
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

## // 7.Find companies requiring CGPA >= 8.0.
>Responces:
```js
[]
```

## // 8.Find companies that list "System Design" in skills.
>Responces:
```js
[]
```

## // 9.Find companies that offer "Relocation".
>Responces:
```js
[]
```

## // 10. Find companies with stock >= 15 LPA.
>Responces:
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "bonus": 6,
      "stock": 15
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
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

## // 11.Find companies with at least 4 interview rounds.
>Responces:
```js
[]
```

## // 12.Find companies with headcount > 5000.
>Responces:
```js
[]
```

## // 13.Insert a company with only name and location.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": {
    "$oid": "68b7f18f6854c54f781178db"
  }
}
```

## // 14.Update Amazon’s bonus to 6.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // 15.Update all companies in Hyderabad to add benefit = "Free Snacks".
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 2,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // 16.Add skill "Python" to Google’s criteria.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // 17.Remove "Gym" from Microsoft benefits.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // 18.Replace entire salaryBand for Netflix.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // 19.Delete company "Infosys".
>Responces:
```js
{
  "acknowledged": true,
  "deletedCount": 0
}
```

## // 20.Delete all companies with base < 10.
>Responces:
```js
{
  "acknowledged": true,
  "deletedCount": 0
}
```

## // 21.Use $set to add a new field isTopTier: true for Google.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // Use $inc to increase Amazon’s stock by 2.
>commands:
```js
db.companies.updateOne(
  { name: "Amazon" },
  { $inc: { "salaryBand.stock": 2 } }
)
```
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // Use $rename to rename field headcount → employeeCount.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 6,
  "modifiedCount": 1,
  "upsertedCount": 0
}
```

## // Use $unset to remove "bonus" from salaryBand.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 6,
  "modifiedCount": 5,
  "upsertedCount": 0
}
```

## // Insert 5 dummy companies with minimal fields.
>Responces:
```js
{
  "acknowledged": true,
  "insertedIds": {
    "0": {
      "$oid": "68b7f491dded994f1ee6fca5"
    },
    "1": {
      "$oid": "68b7f491dded994f1ee6fca6"
    },
    "2": {
      "$oid": "68b7f491dded994f1ee6fca7"
    },
    "3": {
      "$oid": "68b7f491dded994f1ee6fca8"
    },
    "4": {
      "$oid": "68b7f491dded994f1ee6fca9"
    }
  }
}
```

## // Delete all dummy companies.
>Responces:
```js
{
  "acknowledged": true,
  "deletedCount": 5
}
```

## // Find all companies, project only name and salaryBand.
>Responces:
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "salaryBand": {
      "base": 29,
      "stock": 6
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "salaryBand": {
      "base": 40,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "salaryBand": {
      "base": 38,
      "stock": 15
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "salaryBand": {
      "base": 40,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "salaryBand": {
      "base": 38,
      "stock": 15
    }
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks"
  }
]
```

## // Find all companies, exclude _id.
>Responces:
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
## // Find only name and benefits for Microsoft.
>Responces:
```js
[]
```

## // Count all companies in Bangalore.
>Responces:
```js
3
```

## // Count all companies requiring CGPA >= 7.0.
>Responces:
```js
1
```

## // Get distinct locations.
>Responces:
```js
[
  "Bangalore",
  "Chennai",
  "Hyderabad"
]
```

## // Get distinct benefits offered.
>Responces:
```js
[
  "Free Snacks",
  "Relocation",
  "WFH"
]
```

## // Check if any company offers stock = 20.
>Responces:
```js
null
```

## // Insert company with nested object { perks: { transport: true } }.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // Push new round { round: 5, type: "CTO Interview" } to Meta.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // Pull "HR" round out of Amazon’s rounds.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // Add "Health Insurance" only if not present in Swiggy benefits.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 0,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // Increase base salary by 2 for all companies in Bangalore.
>Responces:
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 3,
  "modifiedCount": 3,
  "upsertedCount": 0
}
```

## // Delete all companies in "Delhi" (if any exist).
>Responces:
```js
{
  "acknowledged": true,
  "deletedCount": 0
}
```

## // Find companies with base between 25–35.
>Responces:
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
    "employeeCount": 800
  }
]
```

## // Find companies where stock < 10.
>Responces:
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
    "employeeCount": 800
  }
]
```

## // Find companies with bonus > 5 AND stock > 10.
>Responces:
```js
[]
```

## // Find companies with base >= 30 OR stock >= 12.
>Responces:
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  }
]
```

## // Find companies NOT requiring "OS".
>Responces:
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Find companies requiring at least one skill from ["Java", "C++"].
>Responces
```js
[]
```

## // Find companies requiring BOTH "DSA" and "System Design".
>Responces
```js
[]
```

## // Find companies not offering WFH.
>Responces
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Find companies with > 3 benefits.
>Responces
```js

```

## // Find companies with exactly 4 interview rounds.
>Responces
```js
[]
```

## // Find companies where employeeCount > 2000.
>Responces
```js
[]
```

## // Find companies offering salaries in multiples of 5.
>Responces
```js
[]
```

## // Find companies where CGPA is in [6.5, 7.0, 7.5].
>Responces
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
    "employeeCount": 800
  }
]
```

## // Find companies not in Bangalore.
>Responces
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Use regex to find skills ending in "Design".
>Responces
```js
[]
```

## // Use regex to find companies starting with "A".
>Responces
```js
[]
```

## // Case-insensitive search for "amazon".
>Responces
```js
[]
```

## // Find companies where salaryBand.stock exists.
>Responces
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  }
]
```

## // Find companies where perks does NOT exist.
>Responces
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Find companies where salaryBand.base is of type number.
>Responces
```js
[
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  },
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 31,
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  }
]
```

## // Sort companies by base ascending.

```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 31,
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Sort by bonus, then stock.

```js
[
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  },
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 31,
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  }
]
```

## // Limit results to top 5 highest base salary.
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 31,
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
    "employeeCount": 800
  }
]
```

## // Skip first 5 and return next 5.
```js
[
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Find company with maximum base salary.
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  }
]
```

## // Find company with minimum CGPA requirement.
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  }
]
```

## // Return first 3 companies alphabetically by name.
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Find companies with at least one "Technical" interview round.
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
    "employeeCount": 800
  }
]
```

## // Find companies where round 2 is "System Design".
```js
[]
```

## // Find companies where interviewRounds length > 3.
```js
[]
```
## // Find companies where second benefit = "WFH".
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
    "employeeCount": 800
  }
]
```

## // Use $all to find companies requiring ["DSA", "Java"].
```js
[]
```

## // Use $elemMatch for base > 25 and stock > 5 in salaryBand.
```js
[]
```

## // Use $in for location in ["Hyderabad", "Bangalore"].
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  }
]
```

## // Use $nin for location not in ["Mumbai", "Pune"].
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Find company closest to base = 30.
```js
[
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "diff": null
  }
]
```

## // Use $not to exclude base < 20.
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Use $expr to find companies where bonus < base/10.
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
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    }
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## // Use $size to find companies with exactly 2 benefits.
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
    "employeeCount": 800
  }
]
```

## // Project new field totalComp = base+bonus+stock.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "totalComp": null
  }
]
```

## // Find companies where totalComp > 45.
```js
[]
```

## // Sort companies by totalComp descending.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "totalComp": null
  }
]
```

## // Use $mul to multiply stock by 2.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 6,
  "modifiedCount": 6,
  "upsertedCount": 0
}
```

## // Use $max to ensure bonus >= 5.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 6,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // Use $min to cap base salary at 35.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 6,
  "modifiedCount": 5,
  "upsertedCount": 0
}
```

## // Use $addToSet to ensure unique benefit "WFH".
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 6,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // Use arrayFilters to update only 3rd round = "Tech Screen".
```js

```

## // Update multiple docs with $currentDate for lastUpdated.
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 6,
  "modifiedCount": 6,
  "upsertedCount": 0
}
```

## // Delete companies without benefits field.
```js
{
  "acknowledged": true,
  "deletedCount": 0
}
```

## // Upsert: Update "Tesla" if exists, insert if not.
```js

```

## // Find all companies but exclude "salaryBand".
```js
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 1,
  "modifiedCount": 0,
  "upsertedCount": 0
}
```

## // Project only name and computed field doubleStock = stock*2.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "doubleStock": 24
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "doubleStock": 48
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "doubleStock": 60
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "doubleStock": 48
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "doubleStock": 60
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks",
    "doubleStock": 0
  }
]
```

## // Match companies whose name length = 6 using $expr.
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
  }
]
```

## // Query with $mod: base % 2 = 0.
```js
[]
```

## // Query with $where: headcount > 2000.
```js

```

## // Query using $text after creating text index on skills.
```js
hiringCriteria.skills_text
```


```js
[]
```

## // Use collation for case-insensitive sort by name.
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
]
```

## // Query with $type: "array" on benefits.
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
  }
]
```

## // Find companies where "Free Meals" is one of the benefits.
```js
[]
```