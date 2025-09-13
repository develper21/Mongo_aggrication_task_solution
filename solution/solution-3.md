
## Find top 5 highest-paying companies that also offer WFH.
```js
[
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    },
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 37,
      "stock": 24
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    },
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 37,
      "stock": 24
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    },
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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
    },
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    },
    "totalComp": null
  }
]
```
## Find companies with avg salary > 30 LPA grouped by location.
```js
[
  {
    "_id": "Bangalore",
    "avgBase": 36
  },
  {
    "_id": "Hyderabad",
    "avgBase": 36
  },
  {
    "_id": "Chennai",
    "avgBase": 35
  }
]
```
## Find companies requiring DSA and sort by totalComp.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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
    },
    "totalComp": null
  },
  {
    "_id": {
      "$oid": "68b8333140437556f6099aed"
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
    "employeeCount": 800,
    "totalComp": null
  }
]
```
## Find companies where base > avg(base).
```js
[
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 37,
      "stock": 24
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
      "base": 37,
      "stock": 24
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
      "base": 42,
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
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ]
  }
]
```
## Bucket companies by CGPA requirement.
```js
[
  {
    "_id": 6.5,
    "count": 2
  },
  {
    "_id": "Other",
    "count": 8
  }
]
```
## Find most common skill required across companies.
```js
[
  {
    "_id": "DSA",
    "count": 2
  }
]
```
## Find most common benefit offered.
```js
[
  {
    "_id": "WFH",
    "count": 7
  }
]
```

## Rank companies by salary in each location.
```js
[
  {
    "_id": "Chennai",
    "companies": [
      {
        "name": "Freshworks",
        "totalComp": null
      },
      {
        "name": "Freshworks",
        "totalComp": null
      }
    ]
  },
  {
    "_id": "Bangalore",
    "companies": [
      {
        "name": "Tesla",
        "totalComp": null
      },
      {
        "name": "Stripe",
        "totalComp": null
      },
      {
        "name": "Stripe",
        "totalComp": null
      },
      {
        "name": "Tesla",
        "totalComp": null
      },
      {
        "name": "Stripe",
        "totalComp": null
      }
    ]
  },
  {
    "_id": "Hyderabad",
    "companies": [
      {
        "name": "Coinbase",
        "totalComp": null
      },
      {
        "name": "Coinbase",
        "totalComp": null
      },
      {
        "name": "Coinbase",
        "totalComp": null
      }
    ]
  }
]
```

## Dashboard pipeline: { location, avgSalary, topCompany }.
```js
[
  {
    "_id": "Bangalore",
    "avgSalary": 36,
    "topCompany": "Tesla"
  },
  {
    "_id": "Hyderabad",
    "avgSalary": 36,
    "topCompany": "Coinbase"
  },
  {
    "_id": "Chennai",
    "avgSalary": 35,
    "topCompany": "Freshworks"
  }
]
```

## Count average interview rounds per company.
```js

```

## Find companies with both "Stock Options" and "Relocation".
```js
[]
```

## Find total employees across all Bangalore companies.
```js
[
  {
    "_id": null,
    "total": 1600
  }
]
```

## Find company with highest stock in salary.
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
      "stock": 30
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    }
  }
]
```

## Find company with lowest bonus.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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

## Find all skills required across all companies.
```js
[
  "DSA",
  "Distributed Systems",
  "Python"
]
```

## Count unique interview types across dataset.
```js
[
  {
    "uniqueInterviewTypes": 4
  }
]
```

## Create a leaderboard of companies by headcount.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b8333140437556f6099aed"
    },
    "name": "Tesla",
    "employeeCount": 800
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe"
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase"
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase"
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe"
  },
  {
    "_id": {
      "$oid": "68b7f18f6854c54f781178db"
    },
    "name": "Freshworks"
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30e"
    },
    "name": "Stripe"
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30f"
    },
    "name": "Coinbase"
  },
  {
    "_id": {
      "$oid": "68b967f281d6d67b92f290e9"
    },
    "name": "Freshworks"
  }
]
```

## Find companies offering device discounts.
```js
[]
```

## Find companies where benefits > skills count.
```js

```

## Nested populate simulation (companies ↔ candidates).
```js
[]
```

## Find average stock by location.
```js
[
  {
    "_id": "Chennai",
    "avgStock": 0
  },
  {
    "_id": "Bangalore",
    "avgStock": 15.6
  },
  {
    "_id": "Hyderabad",
    "avgStock": 25
  }
]
```
## Find companies where salary > 1.5x avg salary.
```js
[]
```

## Find locations with more than 3 companies.
```js
[
  {
    "_id": "Bangalore",
    "count": 5
  }
]
```

## Find companies in Bangalore with WFH and >25 base.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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
      "base": 37,
      "stock": 24
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
      "base": 37,
      "stock": 24
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

## Find companies that don’t require CGPA >= 7.5.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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

## Find top 3 companies by interview rounds count.
```js

```
## Find distribution of salaries into 5 bands.
```js
[
  {
    "_id": {
      "min": null,
      "max": 33
    },
    "count": 2
  },
  {
    "_id": {
      "min": 33,
      "max": 37
    },
    "count": 4
  },
  {
    "_id": {
      "min": 37,
      "max": 38
    },
    "count": 2
  },
  {
    "_id": {
      "min": 38,
      "max": 42
    },
    "count": 2
  }
]
```

## Build a search API style query with $text + $meta.
```js
[
  {
    "_id": {
      "$oid": "68b8333140437556f6099aed"
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
    "employeeCount": 800,
    "score": 0.75
  },
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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
    },
    "score": 0.75
  }
]
```
## Count companies by experience requirement.
```js
[
  {
    "_id": "1-2 years",
    "count": 2
  },
  {
    "_id": null,
    "count": 8
  }
]
```

## Find companies offering both Free Meals and Free Lunch.
```js
[]
```

## Find location with highest avg stock.
```js
[
  {
    "_id": "Hyderabad",
    "avgStock": 25
  }
]
```

## Rank skills by frequency across dataset.
```js
[
  {
    "_id": "DSA",
    "freq": 2
  },
  {
    "_id": "Python",
    "freq": 2
  },
  {
    "_id": "Distributed Systems",
    "freq": 2
  }
]
```

## Find company offering stock + base > 40.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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
    },
    "sum": 45
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68338"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 37,
      "stock": 24
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    },
    "sum": 61
  },
  {
    "_id": {
      "$oid": "68b6d90c6bf4c7525bd68339"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.074Z"
    },
    "sum": 65
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbb"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 37,
      "stock": 24
    },
    "benefits": [
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    },
    "sum": 61
  },
  {
    "_id": {
      "$oid": "68b7ee95d3d8d92ca7102fbc"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 35,
      "stock": 30
    },
    "benefits": [
      "Free Snacks",
      "WFH"
    ],
    "lastUpdated": {
      "$date": "2025-09-03T09:32:50.075Z"
    },
    "sum": 65
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30e"
    },
    "name": "Stripe",
    "location": "Bangalore",
    "salaryBand": {
      "base": 42,
      "stock": 12
    },
    "sum": 54
  },
  {
    "_id": {
      "$oid": "68b8335ea1bc497440f1c30f"
    },
    "name": "Coinbase",
    "location": "Hyderabad",
    "salaryBand": {
      "base": 38,
      "stock": 15
    },
    "benefits": [
      "Free Snacks"
    ],
    "sum": 53
  }
]
```

## Find companies requiring Java but not System Design.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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
      "base": 37,
      "stock": 24
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
      "stock": 30
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
      "base": 37,
      "stock": 24
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
      "stock": 30
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
      "$oid": "68b8335ea1bc497440f1c30e"
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
      "$oid": "68b8335ea1bc497440f1c30f"
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
      "$oid": "68b967f281d6d67b92f290e9"
    },
    "name": "Freshworks",
    "location": "Chennai"
  }
]
```

## Find companies where interview type = "Culture Fit".
```js
[]
```

## Find companies where base > stock+bonus.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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
      "base": 37,
      "stock": 24
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
      "stock": 30
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
      "base": 37,
      "stock": 24
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
      "stock": 30
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
      "$oid": "68b8335ea1bc497440f1c30e"
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
      "$oid": "68b8335ea1bc497440f1c30f"
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

## Find company with maximum total compensation.
```js
[
  {
    "_id": {
      "$oid": "68b6d8bb7f61ef28f1819ce7"
    },
    "name": "Tesla",
    "location": "Bangalore",
    "salaryBand": {
      "base": 33,
      "stock": 12
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
    },
    "totalComp": null
  }
]
```
## Build a pipeline to compute salary percentiles.
```js
[
  {
    "_id": {
      "min": null,
      "max": 35
    },
    "count": 3
  },
  {
    "_id": {
      "min": 35,
      "max": 37
    },
    "count": 3
  },
  {
    "_id": {
      "min": 37,
      "max": 42
    },
    "count": 3
  },
  {
    "_id": {
      "min": 42,
      "max": 42
    },
    "count": 1
  }
]
```

## Group companies by benefit count.
```js
[
  {
    "totalCompanies": [
      {
        "count": 10
      }
    ],
    "avgBase": [
      {
        "_id": null,
        "avg": 35.888888888888886
      }
    ],
    "mostCommonSkill": [
      {
        "_id": "Distributed Systems",
        "count": 2
      }
    ],
    "mostCommonBenefit": [
      {
        "_id": "WFH",
        "count": 7
      }
    ],
    "highestPayingCompany": [
      {
        "_id": {
          "$oid": "68b6d8bb7f61ef28f1819ce7"
        },
        "name": "Tesla",
        "totalComp": null
      }
    ]
  }
]
```
## Output final dashboard