const HireMe = n => {
n.map(n=> {
    // (n % 3 === 0 && n % 5 === 0)
    if (n % 15 === 0) {
        console.log("GarçonFille");
    } else if (n % 5 ===0) {
        console.log("Fille");
    } else if (n % 3 === 0 ){
        console.log("Garçon");
    } else {
        console.log("Argument invalide !")
    }
})
};

HireMe([1, 5 , 6 , 10, 15])
