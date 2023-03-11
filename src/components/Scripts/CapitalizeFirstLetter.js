function CapitalizeFirstLetter(name, surname) {
  return surname
    ? `${name[0].toUpperCase()}${name.slice(
        1
      )} ${surname[0].toUpperCase()}${surname.slice(1)}`
    : `${name[0].toUpperCase()}${name.slice(1)} `;
}

export default CapitalizeFirstLetter;
