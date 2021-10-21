 // String
        let myString = " string";
        console.log(myString);

        // Number
        let myNumber = 22;
        let myOtherNumber = 12;
        console.log(myNumber, myOtherNumber);

        // Boolean
        let isFirstUser = true;
        let isSecondUser = false;
        if(isFirstUser) {
            console.log(isFirstUser);
        }else {
            console.log(isSecondUser);
        }

        // Null
        let isNull = null;
        console.log(isNull);

        // Undefined
        let isUndefined = undefined;
        console.log(isUndefined);


        // Arithmetic Operations

        let firstNum = 100;
        let secondNum = 50;

        // Addition
        console.log(firstNum + secondNum);

        // Subtraction
        console.log(firstNum - secondNum);

        // Multiplication
        console.log(firstNum * secondNum);

        // Division
        console.log(firstNum / secondNum);

        // Module
        let firstMod = 30;
        let secondMod = 3;
        console.log(firstMod % secondMod);



        // Find The Area Of A Rectangle
        let width = 7;
        let length = 5;
        console.log("The Area =", width * length);


        // Find The Area Of A Triangle
        let Side1 = 5;
        let Side2 = 6;
        let Side3 = 6;

        let semiPer = (Side1 + Side2+ Side3)/2
        let triArea = Math.sqrt(semiPer * (semiPer - Side1) * (semiPer - Side2) * (semiPer - Side3));
        console.log("The Area =", triArea);

        // Find The Area Of A Circle
        let radius = 7;
        console.log("The Area =", Math.PI * Math.pow(7, 2));
