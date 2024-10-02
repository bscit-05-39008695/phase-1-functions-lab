// Constants
const HQ_LOCATION = 42; // Assuming HQ is at 42nd street
const FEET_PER_BLOCK = 264; // Standard block size in feet

// 1. Calculate distance from HQ in blocks
function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - HQ_LOCATION);
}

// 2. Calculate distance from HQ in feet
function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * FEET_PER_BLOCK;
}

// 3. Calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * FEET_PER_BLOCK;
}

// 4. Calculate fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25; // Fixed fare for distances over 2000 feet
    } else if (distance > 400) {
        const excessDistance = distance - 400; // First 400 feet are free
        return excessDistance * 0.02; // Charge 2 cents per foot
    } else {
        return 0; // Free for distances 400 feet or less
    }
}
