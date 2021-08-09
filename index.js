function scuberGreetingForFeet(distance){
  // Write your code here!
  let msg;

  if (distance > 2500) {
    msg = 'No can do.';
  } else if (distance > 2000) {
    msg = 'I will gladly take your thirty bucks.';
  } else if (distance < 400) {
    msg = 'This one is on me!';
  }

  return msg;
}

function ternaryCheckCity(city){
  let msg;
  city === 'NYC' ? (msg = 'Ok, sounds good.') : (msg = 'No go.');
  return msg;
}

function switchOnCharmFromTip(generosity){
  let msg;
  switch (generosity) {
    case 'generous' :
      msg = 'Thank you so much.';
      break;
    case 'not as generous' :
      msg = 'Thank you.';
      break;
    default:
      msg = 'Bye.';
  }
  return msg;
}