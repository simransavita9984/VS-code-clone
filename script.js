// Using class selector with querySelector
document.querySelector(".downloadButton").addEventListener("click", () => {
  console.log("Download button clicked!");
  alert("Your VS Code is being prepared for download...");
});

document.querySelector(".searchInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    alert(`You searched for: ${e.target.value}`);
  }
});
