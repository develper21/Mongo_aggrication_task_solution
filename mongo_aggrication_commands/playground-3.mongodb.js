
// Find top 5 highest-paying companies that also offer WFH.
db.companies.aggregate([
  { $match: { benefits: "WFH" } },
  { $addFields: { totalComp: { $add: ["$salaryBand.base", "$salaryBand.bonus", "$salaryBand.stock"] } } },
  { $sort: { totalComp: -1 } },
  { $limit: 5 }
])

// Find companies with avg salary > 30 LPA grouped by location.
db.companies.aggregate([
  { $group: { _id: "$location", avgBase: { $avg: "$salaryBand.base" } } },
  { $match: { avgBase: { $gt: 30 } } }
])

// Find companies requiring DSA and sort by totalComp.
db.companies.aggregate([
  { $match: { "hiringCriteria.skills": "DSA" } },
  { $addFields: { totalComp: { $add: ["$salaryBand.base", "$salaryBand.bonus", "$salaryBand.stock"] } } },
  { $sort: { totalComp: -1 } }
])

// Find companies where base > avg(base).
let avgBase = db.companies.aggregate([{ $group: { _id: null, avgBase: { $avg: "$salaryBand.base" } } }]).toArray()[0].avgBase;
db.companies.find({ "salaryBand.base": { $gt: avgBase } })

// Bucket companies by CGPA requirement.
db.companies.aggregate([
  { $bucket: {
      groupBy: "$hiringCriteria.cgpa",
      boundaries: [0, 6.5, 7.5, 8.5, 10],
      default: "Other",
      output: { count: { $sum: 1 } }
  } }
])

// Find most common skill required across companies.
db.companies.aggregate([
  { $unwind: "$hiringCriteria.skills" },
  { $group: { _id: "$hiringCriteria.skills", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Find most common benefit offered.
db.companies.aggregate([
  { $unwind: "$benefits" },
  { $group: { _id: "$benefits", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Rank companies by salary in each location.
db.companies.aggregate([
  { $addFields: { totalComp: { $add: ["$salaryBand.base", "$salaryBand.bonus", "$salaryBand.stock"] } } },
  { $sort: { location: 1, totalComp: -1 } },
  { $group: {
      _id: "$location",
      companies: { $push: { name: "$name", totalComp: "$totalComp" } }
  } }
])

// Dashboard pipeline: { location, avgSalary, topCompany }.
db.companies.aggregate([
  { $addFields: { totalComp: { $add: ["$salaryBand.base", "$salaryBand.bonus", "$salaryBand.stock"] } } },
  { $sort: { totalComp: -1 } },
  { $group: {
      _id: "$location",
      avgSalary: { $avg: "$salaryBand.base" },
      topCompany: { $first: "$name" }
  } }
])

// Count average interview rounds per company.
db.companies.aggregate([
  { $project: { name: 1, rounds: { $size: "$interviewRounds" } } },
  { $group: { _id: null, avgRounds: { $avg: "$rounds" } } }
])

// Find companies with both "Stock Options" and "Relocation".
db.companies.find({ benefits: { $all: ["Stock Options", "Relocation"] } })

// Find total employees across all Bangalore companies.
db.companies.aggregate([
  { $match: { location: "Bangalore" } },
  { $group: { _id: null, total: { $sum: "$employeeCount" } } }
])

// Find company with highest stock in salary.
db.companies.find().sort({ "salaryBand.stock": -1 }).limit(1)

// Find company with lowest bonus.
db.companies.find().sort({ "salaryBand.bonus": 1 }).limit(1)

// Find all skills required across all companies.
db.companies.distinct("hiringCriteria.skills")

// Count unique interview types across dataset.
db.companies.aggregate([
  { $unwind: "$interviewRounds" },
  { $group: { _id: "$interviewRounds.type" } },
  { $count: "uniqueInterviewTypes" }
])

// Create a leaderboard of companies by headcount.
db.companies.find({}, { name: 1, employeeCount: 1 }).sort({ employeeCount: -1 })

// Find companies offering device discounts.
db.companies.find({ benefits: "Device Discounts" })

// Find companies where benefits > skills count.
db.companies.aggregate([
  { $project: {
      name: 1,
      skillCount: { $size: "$hiringCriteria.skills" },
      benefitCount: { $size: "$benefits" }
  } },
  { $match: { $expr: { $gt: ["$benefitCount", "$skillCount"] } } }
])

// Nested populate simulation (companies ↔ candidates).
db.companies.aggregate([
  { $lookup: { from: "candidates", localField: "name", foreignField: "company", as: "applicants" } },
  { $unwind: "$applicants" },
  { $lookup: { from: "interviews", localField: "applicants._id", foreignField: "candidateId", as: "interviewDetails" } }
])

// Find average stock by location.
db.companies.aggregate([
  { $group: { _id: "$location", avgStock: { $avg: "$salaryBand.stock" } } }
])

// Find companies where salary > 1.5x avg salary.
let avgSalary = db.companies.aggregate([{ $group: { _id: null, avg: { $avg: "$salaryBand.base" } } }]).toArray()[0].avg;
db.companies.find({ "salaryBand.base": { $gt: avgSalary * 1.5 } })

// Find locations with more than 3 companies.
db.companies.aggregate([
  { $group: { _id: "$location", count: { $sum: 1 } } },
  { $match: { count: { $gt: 3 } } }
])

// Find companies in Bangalore with WFH and >25 base.
db.companies.find({ location: "Bangalore", benefits: "WFH", "salaryBand.base": { $gt: 25 } })

// Find companies that don’t require CGPA >= 7.5.
db.companies.find({ "hiringCriteria.cgpa": { $lt: 7.5 } })

// Find top 3 companies by interview rounds count.
db.companies.aggregate([
  { $project: { name: 1, roundCount: { $size: "$interviewRounds" } } },
  { $sort: { roundCount: -1 } },
  { $limit: 3 }
])

// Find distribution of salaries into 5 bands.
db.companies.aggregate([
  { $bucketAuto: { groupBy: "$salaryBand.base", buckets: 5 } }
])

// Build a search API style query with $text + $meta.
db.companies.find(
  { $text: { $search: "System Design" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } })

// Count companies by experience requirement.
db.companies.aggregate([
  { $group: { _id: "$hiringCriteria.experience", count: { $sum: 1 } } }
])

// Find companies offering both Free Meals and Free Lunch.
db.companies.find({ benefits: { $all: ["Free Meals", "Free Lunch"] } })

// Find location with highest avg stock.
db.companies.aggregate([
  { $group: { _id: "$location", avgStock: { $avg: "$salaryBand.stock" } } },
  { $sort: { avgStock: -1 } },
  { $limit: 1 }
])

// Rank skills by frequency across dataset.
db.companies.aggregate([
  { $unwind: "$hiringCriteria.skills" },
  { $group: { _id: "$hiringCriteria.skills", freq: { $sum: 1 } } },
  { $sort: { freq: -1 } }
])

// Find company offering stock + base > 40.
db.companies.aggregate([
  { $addFields: { sum: { $add: ["$salaryBand.base", "$salaryBand.stock"] } } },
  { $match: { sum: { $gt: 40 } } }
])

// Find companies requiring Java but not System Design.
db.companies.find({
  "hiringCriteria.skills": "Java",
  "hiringCriteria.skills": { $ne: "System Design" }
})

// Find companies where interview type = "Culture Fit".
db.companies.find({ "interviewRounds.type": "Culture Fit" })

// Find companies where base > stock+bonus.
db.companies.find({ $expr: { $gt: ["$salaryBand.base", { $add: ["$salaryBand.stock", "$salaryBand.bonus"] }] } })

// Find company with maximum total compensation.
db.companies.aggregate([
  { $addFields: { totalComp: { $add: ["$salaryBand.base", "$salaryBand.bonus", "$salaryBand.stock"] } } },
  { $sort: { totalComp: -1 } },
  { $limit: 1 }
])

// Build a pipeline to compute salary percentiles.
db.companies.aggregate([
  { $bucketAuto: { groupBy: "$salaryBand.base", buckets: 4 } }
])

// Group companies by benefit count.
db.companies.aggregate([
  {
    $facet: {
      totalCompanies: [{ $count: "count" }],
      avgBase: [{ $group: { _id: null, avg: { $avg: "$salaryBand.base" } } }],
      mostCommonSkill: [
        { $unwind: "$hiringCriteria.skills" },
        { $group: { _id: "$hiringCriteria.skills", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 1 }
      ],
      mostCommonBenefit: [
        { $unwind: "$benefits" },
        { $group: { _id: "$benefits", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 1 }
      ],
      highestPayingCompany: [
        { $addFields: { totalComp: { $add: ["$salaryBand.base", "$salaryBand.bonus", "$salaryBand.stock"] } } },
        { $sort: { totalComp: -1 } },
        { $limit: 1 },
        { $project: { name: 1, totalComp: 1 } }
      ]
    }
  }
])

// Output final dashboard