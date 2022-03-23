let restaurant = {
  name: 'Hey',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    // Careful! arrow functions do not have their own this! Use the usual function syntax if need to access this.
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    if (this.checkAvailability(partySize) === true) {
      this.guestCount += partySize;
    }
    return;
  },
  removeParty: function (partySize) {
    if (this.guestCount - partySize >= 0) {
      this.guestCount -= partySize;
    }
    return;
  },
};

// seatParty

restaurant.seatParty(76);

console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(4));

restaurant.removeParty(2);
console.log(restaurant.checkAvailability(4));

console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(4));
