export function isInputEmptyOrSpaces(inputField) {

    const trimmedValue = inputField.value.trim();
    
    if (trimmedValue === '') {
      return true; 
    } else {
      return false;
    }
  }