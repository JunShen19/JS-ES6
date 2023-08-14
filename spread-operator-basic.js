const boys = ["john", "tom", "kevin"];
const girls = ["susan", "anna"];

const friends = [...boys, ...girls];

// reference -> if you change one of them, they would all be changed.
// const newFriends = friends;

// it would only change newFriends
const newFriends = [...friends];
newFriends[0] = "karina";
