// ==========================================================
// Shared news data, used by BOTH userdashboard.html and
// admindashboard.html so the dummy news is always the same.
// News added or deleted by the admin is saved in the browser
// (localStorage), so the user dashboard shows the same list.
// ==========================================================

var NEWS_KEY = "goclean_news";

// Default dummy news (edit here and both dashboards update)
var defaultNews = [
  {
    title: "New Recycling Centres Open in Selangor",
    date: "2026-11-20",
    location: "Shah Alam, Selangor",
    content: "Three new community recycling centres have opened to make it easier for residents to drop off paper, plastic and glass. Operating hours are 8am to 6pm daily."
  },
  {
    title: "Separate Waste Collection Schedule Begins",
    date: "2026-11-12",
    location: "Petaling Jaya, Selangor",
    content: "Households are reminded to separate recyclables from general waste. Recyclables will be collected every Tuesday, general waste on other days."
  },
  {
    title: "Community Clean-Up Day This Weekend",
    date: "2026-11-05",
    location: "Klang, Selangor",
    content: "Volunteers are invited to join a public clean-up of parks and riverside areas. Gloves and bags will be provided at the registration booth."
  }
];

// Newest first
function sortNews(list) {
  return list.slice().sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });
}

function getNews() {
  try {
    var saved = localStorage.getItem(NEWS_KEY);
    if (saved) { return sortNews(JSON.parse(saved)); }
  } catch (e) {}
  return sortNews(defaultNews);
}

function saveNews(list) {
  try { localStorage.setItem(NEWS_KEY, JSON.stringify(list)); } catch (e) {}
}

// Escape text so typed content can't break the page
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
