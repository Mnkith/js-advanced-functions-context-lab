/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }
 function createEmployeeRecord(ary){
    return {
      firstName: ary[0],
      familyName: ary[1],
      title: ary[2],
      payPerHour: ary[3],
      timeInEvents: [],
      timeOutEvents: [],
    }
  }

  function createEmployeeRecords(aryOfAry){
    const employeeRecords = []
    aryOfAry.forEach(e => employeeRecords.push(createEmployeeRecord(e)))
    return employeeRecords
  }
  

function createTimeInEvent(timeIn){
    this.timeInEvents.push({
      type: 'TimeIn',
      date: timeIn.split(' ')[0],
      hour: parseInt(timeIn.split(' ')[1])
    })
    return this
  }
  
  function createTimeOutEvent(timeOut){
    this.timeOutEvents.push({
      type: 'TimeOut',
      date: timeOut.split(' ')[0],
      hour: parseInt(timeOut.split(' ')[1])
    })
    return this
  }
  
  function hoursWorkedOnDate(date){
    const hIn = this.timeInEvents.find(e => e.date === date).hour / 100
    const hOut = this.timeOutEvents.find(e => e.date === date).hour / 100
    return hOut - hIn
  }
  
  function wagesEarnedOnDate(date){
      let f=hoursWorkedOnDate.bind(this)
    return  f(date) * this.payPerHour
  }
  
  function allWagesFor(){
    // let f = 
    return this.timeInEvents.reduce((acc, t) => acc + wagesEarnedOnDate.bind(this)(t.date), 0)
  }
  
  function calculatePayroll(ary){
    return ary.reduce((acc, rec) => acc + allWagesFor.call(rec), 0)
  }
  
  function findEmployeeByFirstName(recs, firstName){
    return recs.find(rec => rec.firstName = firstName)
  }