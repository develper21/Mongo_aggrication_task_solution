// 1.Insert a new company document for "Tesla" in Bangalore with base = 29 LPA.
db.companies.insertOne({
  name: "Tesla",
  location: "Bangalore",
  salaryBand: { base: 29, bonus: 4, stock: 6 },
  hiringCriteria: { cgpa: 7.0, skills: ["DSA", "Python", "Distributed Systems"], experience: "1-2 years" },
  interviewRounds: [
    { round: 1, type: "OA" },
    { round: 2, type: "Technical" },
    { round: 3, type: "HR" }
  ],
  benefits: ["Relocation", "WFH"],
  headcount: 800
});

// 2.Insert multiple new companies at once (add "Stripe" and "Coinbase").
db.companies.insertMany([
  { name: "Stripe", location: "Bangalore", salaryBand: { base: 40, bonus: 8, stock: 12 } },
  { name: "Coinbase", location: "Hyderabad", salaryBand: { base: 38, bonus: 6, stock: 15 } }
]);

// 3.Find all companies.
db.companies.find().toArray();

// 4.Find one company (findOne()) in Bangalore.
db.companies.findOne({ location: "Bangalore" });

// 5.Find companies offering base > 30 LPA.
db.companies.find({ "salaryBand.base": { $gt: 30 } }).toArray();

// 6.Find companies in Hyderabad.
db.companies.find({ location: "Hyderabad" }).toArray();

// 7.Find companies requiring CGPA >= 8.0.
db.companies.find({ "eligibility.cgpa": { $gte: 8.0 } }).toArray();

// 8.Find companies that list "System Design" in skills.
db.companies.find({ skills: "System Design" });


// 9.Find companies that offer "Relocation".
db.companies.find({ preks: "Relocation"}).toArray();

// 10. Find companies with stock >= 15 LPA.
db.companies.find({ "salaryBand.stock": { $gte: 15 } })

// 11.Find companies with at least 4 interview rounds.
db.companies.find({ "interviewRounds.3": { $exists: true } })

// 12.Find companies with headcount > 5000.
db.companies.find({ headcount: { $gt: 5000 } })

// 13.Insert a company with only name and location.
db.companies.insertOne({ name: "Freshworks", location: "Chennai" })

// 14.Update Amazon’s bonus to 6.
db.companies.updateOne(
  { name: "Amazon" },
  { $set: { "salaryBand.bonus": 6 } }
)

// 15.Update all companies in Hyderabad to add benefit = "Free Snacks".
db.companies.updateMany(
  { location: "Hyderabad" },
  { $addToSet: { benefits: "Free Snacks" } }
)

// 16.Add skill "Python" to Google’s criteria.
db.companies.updateOne(
  { name: "Google" },
  { $addToSet: { "hiringCriteria.skills": "Python" } }
)

// 17.Remove "Gym" from Microsoft benefits.
db.companies.updateOne(
  { name: "Microsoft" },
  { $pull: { benefits: "Gym" } }
)

// 18.Replace entire salaryBand for Netflix.
db.companies.updateOne(
  { name: "Netflix" },
  { $set: { salaryBand: { base: 40, bonus: 8, stock: 20 } } }
)

// 19.Delete company "Infosys".
db.companies.deleteOne({ name: "Infosys" })

// 20.Delete all companies with base < 10.
db.companies.deleteMany({ "salaryBand.base": { $lt: 10 } })

// 21.Use $set to add a new field isTopTier: true for Google.
db.companies.updateOne(
  { name: "Google" },
  { $set: { isTopTier: true } }
)

// Use $inc to increase Amazon’s stock by 2.
db.companies.updateOne(
  { name: "Amazon" },
  { $inc: { "salaryBand.stock": 2 } }
)

// Use $rename to rename field headcount → employeeCount.
db.companies.updateMany({}, { $rename: { headcount: "employeeCount" } })

// Use $unset to remove "bonus" from salaryBand.
db.companies.updateMany({}, { $unset: { "salaryBand.bonus": "" } })

// Insert 5 dummy companies with minimal fields.
db.companies.insertMany([
  { name: "Dummy1" },
  { name: "Dummy2" },
  { name: "Dummy3" },
  { name: "Dummy4" },
  { name: "Dummy5" }
])

// Delete all dummy companies.
db.companies.deleteMany({ name: { $regex: /^Dummy/ } })

// Find all companies, project only name and salaryBand.
db.companies.find({}, { name: 1, salaryBand: 1 })

// Find all companies, exclude _id.
db.companies.find({}, { _id: 0, name: 1, location: 1 })

// Find only name and benefits for Microsoft.
db.companies.find({ name: "Microsoft" }, { name: 1, benefits: 1 })

// Count all companies in Bangalore.
db.companies.countDocuments({ location: "Bangalore" })

// Count all companies requiring CGPA >= 7.0.
db.companies.countDocuments({ "hiringCriteria.cgpa": { $gte: 7.0 } })

// Get distinct locations.
db.companies.distinct("location")

// Get distinct benefits offered.
db.companies.distinct("benefits")

// Check if any company offers stock = 20.
db.companies.findOne({ "salaryBand.stock": 20 })

// Insert company with nested object { perks: { transport: true } }.
db.companies.updateOne(
  { name: "Swiggy" },
  { $set: { perks: { transport: true } } }
)

// Push new round { round: 5, type: "CTO Interview" } to Meta.
db.companies.updateOne(
  { name: "Meta" },
  { $push: { interviewRounds: { round: 5, type: "CTO Interview" } } }
)

// Pull "HR" round out of Amazon’s rounds.
db.companies.updateOne(
  { name: "Amazon" },
  { $pull: { interviewRounds: { type: "HR" } } }
)

// Add "Health Insurance" only if not present in Swiggy benefits.
db.companies.updateOne(
  { name: "Swiggy" },
  { $addToSet: { benefits: "Health Insurance" } }
)

// Increase base salary by 2 for all companies in Bangalore.
db.companies.updateMany(
  { location: "Bangalore" },
  { $inc: { "salaryBand.base": 2 } }
)

// Delete all companies in "Delhi" (if any exist).
db.companies.deleteMany({ location: "Delhi" })

// Find companies with base between 25–35.
db.companies.find({ "salaryBand.base": { $gte: 25, $lte: 35 } })

// Find companies where stock < 10.
db.companies.find({ "salaryBand.stock": { $lt: 10 } })

// Find companies with bonus > 5 AND stock > 10.
db.companies.find({ "salaryBand.bonus": { $gt: 5 }, "salaryBand.stock": { $gt: 10 } })

// Find companies with base >= 30 OR stock >= 12.
db.companies.find({
  $or: [
    { "salaryBand.base": { $gte: 30 } },
    { "salaryBand.stock": { $gte: 12 } }
  ]
})

// Find companies NOT requiring "OS".
db.companies.find({ "hiringCriteria.skills": { $ne: "OS" } })

// Find companies requiring at least one skill from ["Java", "C++"].
db.companies.find({ "hiringCriteria.skills": { $in: ["Java", "C++"] } })

// Find companies requiring BOTH "DSA" and "System Design".
db.companies.find({ "hiringCriteria.skills": { $all: ["DSA", "System Design"] } })

// Find companies not offering WFH.
db.companies.find({ benefits: { $ne: "WFH" } })

// Find companies with > 3 benefits.
db.companies.find({ benefits: { $exists: true, $size: { $gt: 3 } } })

// Find companies with exactly 4 interview rounds.
db.companies.find({ "interviewRounds.3": { $exists: true }, "interviewRounds.4": { $exists: false } })

// Find companies where employeeCount > 2000.
db.companies.find({ employeeCount: { $gt: 2000 } })

// Find companies offering salaries in multiples of 5.
db.companies.find({ "salaryBand.base": { $mod: [5, 0] } })

// Find companies where CGPA is in [6.5, 7.0, 7.5].
db.companies.find({ "hiringCriteria.cgpa": { $in: [6.5, 7.0, 7.5] } })

// Find companies not in Bangalore.
db.companies.find({ location: { $ne: "Bangalore" } })

// Use regex to find skills ending in "Design".
db.companies.find({ "hiringCriteria.skills": { $regex: /Design$/ } })

// Use regex to find companies starting with "A".
db.companies.find({ name: { $regex: /^A/ } })

// Case-insensitive search for "amazon".
db.companies.find({ name: { $regex: /^amazon$/i } })

// Find companies where salaryBand.stock exists.
db.companies.find({ "salaryBand.stock": { $exists: true } })

// Find companies where perks does NOT exist.
db.companies.find({ perks: { $exists: false } })

// Find companies where salaryBand.base is of type number.
db.companies.find().sort({ "salaryBand.base": 1 })

// Sort companies by base ascending.
db.companies.find().sort({ "salaryBand.base": -1 })

// Sort by bonus, then stock.
db.companies.find().sort({ "salaryBand.bonus": 1, "salaryBand.stock": 1 })

// Limit results to top 5 highest base salary.
db.companies.find().sort({ "salaryBand.base": -1 }).limit(5)

// Skip first 5 and return next 5.
db.companies.find().sort({ "salaryBand.base": -1 }).skip(5).limit(5)

// Find company with maximum base salary.
db.companies.find().sort({ "salaryBand.base": -1 }).limit(1)

// Find company with minimum CGPA requirement.
db.companies.find().sort({ "hiringCriteria.cgpa": 1 }).limit(1)

// Return first 3 companies alphabetically by name.
db.companies.find().sort({ name: 1 }).limit(3)

// Find companies with at least one "Technical" interview round.
db.companies.find({ "interviewRounds.type": "Technical" })

// Find companies where round 2 is "System Design".
db.companies.find({ "interviewRounds.1.type": "System Design" })

// Find companies where interviewRounds length > 3.
db.companies.find({ "interviewRounds.3": { $exists: true } })

// Find companies where second benefit = "WFH".
db.companies.find({ "benefits.1": "WFH" })

// Use $all to find companies requiring ["DSA", "Java"].
db.companies.find({ "hiringCriteria.skills": { $all: ["DSA", "Java"] } })

// Use $elemMatch for base > 25 and stock > 5 in salaryBand.
db.companies.find({ salaryBand: { $elemMatch: { base: { $gt: 25 }, stock: { $gt: 5 } } } })

// Use $in for location in ["Hyderabad", "Bangalore"].
db.companies.find({ location: { $in: ["Hyderabad", "Bangalore"] } })

// Use $nin for location not in ["Mumbai", "Pune"].
db.companies.find({ location: { $nin: ["Mumbai", "Pune"] } })

// Find company closest to base = 30.
db.companies.aggregate([
  { $project: { name: 1, base: "$salaryBand.base", diff: { $abs: { $subtract: ["$salaryBand.base", 30] } } } },
  { $sort: { diff: 1 } },
  { $limit: 1 }
])

// Use $not to exclude base < 20.
db.companies.find({ "salaryBand.base": { $not: { $lt: 20 } } })

// Use $expr to find companies where bonus < base/10.
db.companies.find({ $expr: { $lt: ["$salaryBand.bonus", { $divide: ["$salaryBand.base", 10] }] } })

// Use $size to find companies with exactly 2 benefits.
db.companies.find({ benefits: { $size: 2 } })

// Project new field totalComp = base+bonus+stock.
db.companies.aggregate([
  { $project: { name: 1, totalComp: { $add: ["$salaryBand.base", "$salaryBand.bonus", "$salaryBand.stock"] } } }
])

// Find companies where totalComp > 45.
db.companies.aggregate([
  { $project: { name: 1, totalComp: { $add: ["$salaryBand.base", "$salaryBand.bonus", "$salaryBand.stock"] } } },
  { $match: { totalComp: { $gt: 45 } } }
])

// Sort companies by totalComp descending.
db.companies.aggregate([
  { $project: { name: 1, totalComp: { $add: ["$salaryBand.base", "$salaryBand.bonus", "$salaryBand.stock"] } } },
  { $sort: { totalComp: -1 } }
])

// Use $mul to multiply stock by 2.
db.companies.updateMany({}, { $mul: { "salaryBand.stock": 2 } })

// Use $max to ensure bonus >= 5.
db.companies.updateMany({}, { $max: { "salaryBand.bonus": 5 } })

// Use $min to cap base salary at 35.
db.companies.updateMany({}, { $min: { "salaryBand.base": 35 } })

// Use $addToSet to ensure unique benefit "WFH".
db.companies.updateMany({}, { $addToSet: { benefits: "WFH" } })

// Use arrayFilters to update only 3rd round = "Tech Screen".
db.companies.updateMany(
  {},
  { $set: { "interviewRounds.$[elem].type": "Tech Screen" } },
  { arrayFilters: [{ "elem.round": 3 }] }
)

// Update multiple docs with $currentDate for lastUpdated.
db.companies.updateMany({}, { $currentDate: { lastUpdated: true } })

// Delete companies without benefits field.
db.companies.deleteMany({ benefits: { $exists: false } })

// Upsert: Update "Tesla" if exists, insert if not.
db.companies.updateOne(
  { name: "Tesla" },
  { $set: { location: "Bangalore" } },
  { upsert: true }
)

// Find all companies but exclude "salaryBand".
db.companies.find({}, { salaryBand: 0 })

// Project only name and computed field doubleStock = stock*2.
db.companies.aggregate([
  { $project: { name: 1, doubleStock: { $multiply: ["$salaryBand.stock", 2] } } }
])

// Match companies whose name length = 6 using $expr.
db.companies.find({ $expr: { $eq: [{ $strLenCP: "$name" }, 6] } })

// Query with $mod: base % 2 = 0.
db.companies.find({ "salaryBand.base": { $mod: [2, 0] } })

// Query with $where: headcount > 2000.
db.companies.find({ $where: "this.employeeCount > 2000" })

// Query using $text after creating text index on skills.
db.companies.createIndex({ "hiringCriteria.skills": "text" })
db.companies.find({ $text: { $search: "Java" } })

// Use collation for case-insensitive sort by name.
db.companies.find().collation({ locale: "en", strength: 2 }).sort({ name: 1 })

// Query with $type: "array" on benefits.
db.companies.find({ benefits: { $type: "array" } })

// Find companies where "Free Meals" is one of the benefits.
db.companies.find({ benefits: "Free Meals" })
