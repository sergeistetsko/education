function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/) // Split the string at spaces, underscores, or at the start of uppercase letters
        .join('-') // Join the split strings with a dash
        .toLowerCase(); // Convert all characters to lowercase
}


spinalCase('This Is Spinal Tap');