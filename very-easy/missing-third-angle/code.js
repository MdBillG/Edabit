function missingAngle(angle1, angle2) {

    console.log(angle1, angle2); // Debugging line to check the input values


    return (angle1 + angle2) === 90 ? 'right' : 180 - (angle1 + angle2) < 90 ? 'acute' : 'obtuse';


}

module.exports = missingAngle;
