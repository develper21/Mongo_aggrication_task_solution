// Insert a new company document for "Tesla" in Bangalore with base = 29 LPA.
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
})

// Insert multiple new companies at once (add "Stripe" and "Coinbase").
db.companies.insertMany([
  { name: "Stripe", location: "Bangalore", salaryBand: { base: 40, bonus: 8, stock: 12 } },
  { name: "Coinbase", location: "Hyderabad", salaryBand: { base: 38, bonus: 6, stock: 15 } }
])

// Find all companies.
db.companies.find()

// Find one company (findOne()) in Bangalore.
db.companies.findOne({ location: "Bangalore" })

// Find companies offering base > 30 LPA.
db.companies.find({ "salaryBand.base": { $gt: 30 } })

// Find companies in Hyderabad.
db.companies.find({ location: "Hyderabad" })

// Find companies requiring CGPA >= 8.0.
db.companies.find({ "hiringCriteria.cgpa": { $gte: 8.0 } })

// Find companies that list "System Design" in skills.
db.companies.find({ "hiringCriteria.skills": "System Design" })

// Find companies that offer "Relocation".
db.companies.find({ benefits: "Relocation" })

// Find companies with stock >= 15 LPA.
db.companies.find({ "salaryBand.stock": { $gte: 15 } })

//Find companies with at least 4 interview rounds.
db.companies.find({ "interviewRounds.3": { $exists: true } })

//Find companies with headcount > 5000.
db.companies.find({ headcount: { $gt: 5000 } })

//Insert a company with only name and location.
db.companies.insertOne({ name: "Freshworks", location: "Chennai" })

// Update Amazon’s bonus to 6.
db.companies.updateOne(
  { name: "Amazon" },
  { $set: { "salaryBand.bonus": 6 } }
)

// Update all companies in Hyderabad to add benefit = "Free Snacks".
db.companies.updateMany(
  { location: "Hyderabad" },
  { $addToSet: { benefits: "Free Snacks" } }
)

// Add skill "Python" to Google’s criteria.
db.companies.updateOne(
  { name: "Google" },
  { $addToSet: { "hiringCriteria.skills": "Python" } }
)

// Remove "Gym" from Microsoft benefits.
db.companies.updateOne(
  { name: "Microsoft" },
  { $pull: { benefits: "Gym" } }
)

// Replace entire salaryBand for Netflix.
db.companies.updateOne(
  { name: "Netflix" },
  { $set: { salaryBand: { base: 40, bonus: 8, stock: 20 } } }
)

// Delete company "Infosys".
db.companies.deleteOne({ name: "Infosys" })

// Delete all companies with base < 10.
db.companies.deleteMany({ "salaryBand.base": { $lt: 10 } })

// Use $set to add a new field isTopTier: true for Google.
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