// Download button click functionality
document.getElementById("downloadBtn").addEventListener("click", () => {
  console.log("Download button clicked!");
  alert("Your VS Code is being prepared for download...");
});

// Search box enter event
document.getElementById("searchInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    alert(`You searched for: ${e.target.value}`);
  }
});