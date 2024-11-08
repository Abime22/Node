function chegirma(foiz) {
   
    return function(narx) {
   
      const chegirmaNarxi = narx - (narx * foiz / 100);
      return chegirmaNarxi;
    };
  }
  


  const chegirma20 = chegirma(20);
  console.log(chegirma20(100)); 

  const chegirma50 = chegirma(50);
  console.log(chegirma50(200)); 

  const chegirma10 = chegirma(10);
  console.log(chegirma10(150)); 