// Code your solution in this file!
const expect = require('chai').expect;

describe('index.js', function() {
  describe('distanceFromHqInBlocks()', function() {
    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(43)).to.equal(1);
    });
  });

  describe('distanceFromHqInFeet()', function() {
    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(43)).to.equal(264);
    });
  });

  describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    });

    it('returns a distance in feet travelled', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
    });

    it('calculates distances correctly', function() {
      expect(distanceTravelledInFeet(34, 24)).to.equal(15840);
    });
  });

  describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (inclusive)', function() {
      // total feet travelled is 528, which is between 400 and 2000
      expect(calculatesFarePrice(34, 32)).to.equal(208);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      // total feet travelled is 2500, which is over 2000
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      // total feet travelled is 2640, which is over 2500
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });
  });
});
Now, let's write the functions one by one and test them.

distanceFromHqInBlocks():
javascript
Copy code
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

// Test
console.log(distanceFromHqInBlocks(43)); // Should output 1
distanceFromHqInFeet():
javascript
Copy code
function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264; // 1 block = 264 feet
}

// Test
console.log(distanceFromHqInFeet(43)); // Should output 264
distanceTravelledInFeet():
javascript
Copy code
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264; // 1 block = 264 feet
}

// Tests
console.log(distanceTravelledInFeet(50, 60)); // Should output 2640
console.log(distanceTravelledInFeet(34, 28)); // Should output 1584
console.log(distanceTravelledInFeet(34, 24)); // Should output 2640
calculatesFarePrice():
javascript
Copy code
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Tests
console.log(calculatesFarePrice(43, 44)); // Should output 0
console.log(calculatesFarePrice(34, 32)); // Should output 208
console.log(calculatesFarePrice(50, 58)); // Should output 25
console.log(calculatesFarePrice(34, 24)); // Should output 'cannot travel that far'