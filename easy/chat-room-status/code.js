function chatroomStatus(users) {
  // Your code here.
  const numUsers = users.length;

  if (numUsers === 0) {
    return "no one online";
  } else if (numUsers === 1) {
    return `${users[0]} online`;
  } else if (numUsers === 2) {
    return `${users[0]} and ${users[1]} online`;
  } else {
    return `${users[0]}, ${users[1]} and ${numUsers - 2} more online`;
  }

}

module.exports = chatroomStatus;
