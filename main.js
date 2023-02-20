// Age Calculator

const yrElm = document.querySelector(".yr");
const mntElm = document.querySelector(".mnt");
const dsElm = document.querySelector(".ds");

const d_bt = document.querySelector("#bdt");

// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// --------------------------====================================++++++++++++++++++++++++++++++++
// ageCalc(ageObj);
// days in month
const MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let BIRTHDAY = new Date("1986-08-09");

d_bt.addEventListener("change", () => {
  BIRTHDAY = new Date(d_bt.value);
  ageCalc();
});

const ageCalc = () => {
  const TODAY = new Date();

  // get year, month and days from birthday's date
  let yrOfBirth = BIRTHDAY.getFullYear();
  let mntOfBirth = BIRTHDAY.getMonth() + 1;
  let dsOfBirth = BIRTHDAY.getDate();

  // get year, month and days from today's date
  let yrOfToday = TODAY.getFullYear();
  let mntOfToday = TODAY.getMonth() + 1;
  let dsOfToday = TODAY.getDate();

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
