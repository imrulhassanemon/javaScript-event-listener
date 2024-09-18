function calculateFinalScore(obj) {

    if (typeof obj !== 'object' || obj === null) {
    
    return "Invalid Input";
    
    }
    
    const { name, testScore, schoolGrade, isFFamily } = obj;
    
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean' || testScore < 0 || testScore >= 50 || schoolGrade < 0 || schoolGrade >= 30) {
    
    return "Invalid Input";
    
    }
    
    let finalScore = testScore + schoolGrade;
    
    if (isFFamily === true) {
    
    finalScore += 20;
    
    }
    
    return finalScore >= 80;
    
    }

const myfunc = calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  } )
console.log(myfunc)