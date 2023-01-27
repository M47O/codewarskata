/* There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:
	 w - 4
	 p - 3
	 b - 2
	 s - 1

The right side letters and their power:
	 m - 4
	 q - 3
	 d - 2
	 z - 1

The other letters don't have power and are only victims.

Example
	alphabetWar("z");        //=> Right side wins!
	alphabetWar("zdqmwpbs"); //=> Let's fight again!
	alphabetWar("zzzzs");    //=> Right side wins!
	alphabetWar("wwwwwwz");  //=> Left side wins! */

//Solution:
function alphabetWar(fight){
  let leftSideTotal = 0
  let rightSideTotal = 0
  const leftSide = fight.split("").filter(x => x == 'w' || x == 'p' || x == 'b' || x == 's')
  const rightSide = fight.split("").filter(x => x == 'm' || x == 'q' || x == 'd' || x == 'z')
  
  leftSide.forEach(x=> {
    if(x == 'w'){
      leftSideTotal += 4
    } else if(x == 'p'){
        leftSideTotal += 3
    } else if(x == 'b'){
        leftSideTotal += 2
    } else if(x == 's'){
        leftSideTotal += 1
    }
  })
  
  rightSide.forEach(x=> {
    if(x == 'm'){
      rightSideTotal += 4
    } else if(x == 'q'){
        rightSideTotal += 3
    } else if(x == 'd'){
        rightSideTotal += 2
    } else if(x == 'z'){
        rightSideTotal += 1
    }
  })
  
  return  leftSideTotal == rightSideTotal ? "Let's fight again!" : leftSideTotal > rightSideTotal ? "Left side wins!" : "Right side wins!"
  
}