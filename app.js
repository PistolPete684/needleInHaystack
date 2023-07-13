function findNeedle(haystack) {
  //setup for loop to go through array
  for (let i = 0; i < haystack.length; i++) {
  //look for the variable string "needle"
  if (haystack[i] === "needle") {
  //Indicate where you found the "needle"
    return "found the needle at position " + i;
  }
}
  //return needle not found if no "needle"
  return "needle not found";
}