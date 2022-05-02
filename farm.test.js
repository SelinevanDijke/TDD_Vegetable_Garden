const { getYieldForPlant, getYieldForCrop, getTotalYield } = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
    };

    // test("Get yield for plant with no environment factors", () => {
    //     expect(getYieldForPlant(corn)).toBe(30);
    // });
    
    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, hard", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };

        const environmentFactors = {
            sun: "high",
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(45);

        // expect(getYieldForCrop(input)).toBe(30); <--- Simple test
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const pumpkin = {
            name: "pumpkin",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };

        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        
        expect(getTotalYield(environmentFactors, { crops })).toBe(105);

//      test("Calculate total yield with 0 amount", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
        
//         const crops = [{ crop: corn, numCrops: 0 }];
//         expect(getTotalYield({ crops })).toBe(0);
//     });
    });
});