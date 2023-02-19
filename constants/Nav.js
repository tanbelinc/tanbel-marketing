export const Navigation = {
  data: {
    Home: "Home",
    Clients: "Clients",
    Services: "Services",
    Team: "Team",
    Review: "Review",
    FAQ: "FAQ",
    Contact: "Contact",
  },
  Object: function () {
    return this.data
  },
  Array: function () {
    return Object.values(this.data);
  },
};
