function MobileNumberTransform(number) {
  return `(+${number.slice(0, 3)}) ${number.slice(3)}`;
}

export default MobileNumberTransform;
