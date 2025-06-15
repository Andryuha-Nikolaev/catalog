const insertSpaces = (inputStr: string) =>
  inputStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

export default insertSpaces;