// Age Calculator

const yrElm = document.querySelector(".yr");
const mntElm = document.querySelector(".mnt");
const dsElm = document.querySelector(".ds");

const ageObj = {
  todayIs: new Date(),
  birthDay: new Date("1986-08-09"),
  epochTime: new Date("1970-01-01"),
  diffAge: function () {
    return new Date(this.todayIs - this.birthDay);
  },
};

const ageCalc = (ao) => {
  const ageInYr = ao.diffAge().getFullYear() - ao.epochTime.getFullYear();
  const ageInMnt = ao.diffAge().getMonth() - ao.epochTime.getMonth();
  const ageInDay = ao.diffAge().getDate() - ao.epochTime.getDate();

  yrElm.textContent = ageInYr;
  mntElm.textContent = ageInMnt;
  dsElm.textContent = ageInDay;
};

ageCalc(ageObj);
