
export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (emailRegex.test(email)){
        return false
    }else{
        return true
    }
  }

export function isInputEmptyOrSpaces(inputField) {

    const trimmedValue = inputField.value.trim();
    
    if (trimmedValue === '') {
      return true; 
    } else {
      return false;
    }
  }


export function containsOnlyAlphabets(inputField) {
    const inputValue = inputField.value;
    // Use a regular expression to check for alphabetic characters
    const regex = /^[A-Za-z]+$/;
    if (regex.test(inputValue)){
        return false
    }else{
        return true
    }
  }
  
