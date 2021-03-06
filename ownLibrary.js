function isTouching(object1, object2) {
    if (Math.abs(object1.x - object2.x) <= object1.width / 2 + object2.width / 2 && Math.abs(object1.y - object2.y) <= object1.height / 2 + object2.height / 2) {
        return true;
    }
    else {
        return false;
    }
}

function bounceOff(object1, object2) {
    if (Math.abs(object1.x - object2.x) <= object1.width / 2 + object2.width / 2 && Math.abs(object1.y - object2.y) <= object1.height / 2 + object2.height / 2) {
        if (Math.abs(object1.x - object2.x) === object1.width / 2 + object2.width / 2) {
            object1.velocityX = (-1) * object1.velocityX;
        }
        else {
            object1.velocityY = (-1) * object1.velocityY;
        }
    }
}