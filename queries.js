// Find all the topics and tasks which are thought in the month of October
db.tasks.find({taskDate: {$gt: "2020-10-15",$lt: "2020-10-31"}})
db.topics.find({date: {$gt: "2020-10-15",$lt: "2020-10-31"}})
db.tasks.find({ taskDate: { $gte: '2020-10-15', $lte: '2020-10-31' } }).toArray().concat(db.topics.find({ date: { $gte: '2020-10-15', $lte: '2020-10-31' } }).toArray())


// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.drives.find({driveDate: {$gt: "2020-10-15",$lt: "2020-10-31"}})

// Find all the company drives and students who are appeared for the placement.


// Find the number of problems solved by the user in codekata
db.users.find({},{userId:1,name:1,problemsSolved:1})

// Find all the mentors with who has the mentee's count more than 15
db.mentor.find({ studentCount: { $gt: 15 }})

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.users.find({ id: { $nin: db.attendance.distinct('userId', { date: { $gte: '2020-10-15', $lte: '2020-10-31' } }) } }).toArray()