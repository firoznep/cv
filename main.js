// Age Calculator

const yrElm = document.querySelector(".yr");
const mntElm = document.querySelector(".mnt");
const dsElm = document.querySelector(".ds");

// const ageObj = {
//   todayIs: new Date(),
//   birthDay: new Date("1986-01-09"),
//   epochTime: new Date("1970-01-01"),
//   diffAge: function () {
//     return new Date(this.todayIs - this.birthDay);
//   },
// };

// const ageCalc = (ao) => {
//   const ageInYr = ao.diffAge().getFullYear() - ao.epochTime.getFullYear();
//   const ageInMnt = ao.diffAge().getUTCMonth() - ao.epochTime.getUTCMonth();
//   const ageInDay = ao.diffAge().getUTCDate() - ao.epochTime.getUTCDate();

//   yrElm.textContent = ageInYr;
//   mntElm.textContent = ageInMnt;
//   dsElm.textContent = ageInDay;
// };

// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// ageCalc(ageObj);

const ageCalc = () => {
  // birthday and latest date
  const BIRTHDAY = new Date("1986-08-09");
  const TODAY = new Date();

  // get year, month and days from birthday's date
  let yrOfBirth = BIRTHDAY.getFullYear();
  let mntOfBirth = BIRTHDAY.getMonth() + 1;
  let dsOfBirth = BIRTHDAY.getDate();

  // get year, month and days from today's date
  let yrOfToday = TODAY.getFullYear();
  let mntOfToday = TODAY.getMonth() + 1;
  let dsOfToday = TODAY.getDate();

  // days in month
  const MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // if birthday's month or day is greater than today's month or day
  if (dsOfBirth > dsOfToday) {
    dsOfToday += MONTH[mntOfToday - 1];
    mntOfToday -= 1;
  }
  if (mntOfBirth > mntOfToday) {
    mntOfToday += 12;
    yrOfToday -= 1;
  }

  // get difference date
  let diffYr = yrOfToday - yrOfBirth;
  let diffMnt = mntOfToday - mntOfBirth;
  let diffDs = dsOfToday - dsOfBirth;

  // display result on page
  yrElm.textContent = diffYr;
  mntElm.textContent = diffMnt;
  dsElm.textContent = diffDs;
};
ageCalc();
