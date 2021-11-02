const hq = 42;
const feet = 264;

function distanceFromHqInBlocks (start){
    if (start > 42){
        return start- hq;
    }else if (start < 42){
        return hq - start;
    }
}

function distanceFromHqInFeet (start){
    return distanceFromHqInBlocks(start) * feet;
}

function distanceTravelledInFeet (hq, finish){
    if (finish > hq){
        return (finish - hq)*feet;
    }else{
        return (hq - finish)*feet;
    }
}
function calculatesFarePrice(start, destination){
    let calculatesFarePrice;
    let calculatesFeet= distanceTravelledInFeet(start, destination);
   if (calculatesFeet < 400 ){
        return calculatesFarePrice = 0;
   } else if (calculatesFeet > 400 && calculatesFeet < 2000){
       calculatesFarePrice = calculatesFeet - 400;
       return (calculatesFarePrice * 0.02);
   }
   else if (calculatesFeet > 2000 && calculatesFeet < 2499){
       calculatesFarePrice = 25;
       return calculatesFarePrice;
   }
   else if (calculatesFeet > 2500){
       return 'cannot travel that far';
   }

}