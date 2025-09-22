const fs = require("fs");
const path = require("path");

// Get project root dynamically
const projectRoot = path.resolve(__dirname);

// Assume src folder is inside project root
const SRC_FOLDER = path.join(projectRoot, "src");

// Check if a file exists (with .js or .jsx)
function fileExists(filePath) {
  return (
    fs.existsSync(filePath) ||
    fs.existsSync(filePath + ".js") ||
    fs.existsSync(filePath + ".jsx")
  );
}

// Scan folder recursively
function scanFolder(folder) {
  if (!fs.existsSync(folder)) return;
  const entries = fs.readdirSync(folder, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(folder, entry.name);
    if (entry.isDirectory()) {
      scanFolder(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith(".js") || entry.name.endsWith(".jsx"))) {
      checkImports(fullPath);
    }
  });
}

// Check imports in a file
function checkImports(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const importRegex = /import\s+.*\s+from\s+["'](.+)["']/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    let importPath = match[1];
    if (!importPath.startsWith(".")) continue;

    const resolvedPath = path.resolve(path.dirname(filePath), importPath);

    if (!fileExists(resolvedPath)) {
      console.log(`❌ Missing or misnamed file: ${resolvedPath}`);
    }
  }
}

// Run
console.log("Scanning imports in src/ ...");
scanFolder(SRC_FOLDER);
console.log("✅ Import check complete.");
