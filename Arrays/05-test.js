const str = '123-123-1234'

const convertPhoneNumberFormat = (fakerPhoneNum) => {
  fakerPhoneNum = fakerPhoneNum.replace(/-/, ") ");
  return "(" + fakerPhoneNum;
};

console.log(convertPhoneNumberFormat(str));