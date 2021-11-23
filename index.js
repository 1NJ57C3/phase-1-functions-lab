function distanceFromHqInBlocks(street) {
    // return Math.abs(street-42);
    if (street > 42) {
        return street-42
    } else if (street < 42) {
        return 42-street
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start, destination) {
    let ftBillable = distanceTravelledInFeet(start, destination);
    let fare = "";

    if (ftBillable <= 400) {
        fare = 0;
    } else if (ftBillable < 2000) {
        fare = (ftBillable - 400) * 0.02;
    } else if (ftBillable < 2500) {
        fare = 25;
    } else if (ftBillable > 2500) {
        fare = "cannot travel that far";
    }
    return fare;
}