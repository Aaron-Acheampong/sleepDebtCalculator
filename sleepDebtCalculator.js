const getSleepHours = day => {
    switch (day) {
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 7.5;
      break;
      case 'wednesday':
      return 7;
      break;
      case 'thursday':
      return 8;
      break;
      case 'friday':
      return 7;
      break;
      case 'saturday':
      return 7.6;
      break;
      case 'sunday':
      return 8;
      break;
  
    }
   
  };
  
  //console.log(getSleepHours('tuesday')); 
  const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +  getSleepHours('sunday') 
  ;
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
  
      if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You over slept by ${actualSleepHours-idealSleepHours}`);
  } else {
    console.log(`Get some ${idealSleepHours-actualSleepHours} hours additional rest `);
  }
  };
  
  calculateSleepDebt();
  
  
  