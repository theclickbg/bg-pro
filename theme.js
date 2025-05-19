(function() {
  var allowedDomain = "theclickbgmt.blogspot.com";
  var currentDomain = window.location.hostname;

  if (!currentDomain.includes(allowedDomain)) {
    alert("⚠️ Warning: This theme is licensed for use only on " + allowedDomain);
    window.location.href = "#";
  }
})();
