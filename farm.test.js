const { getYieldForPlant, getYieldForCrop, getTotalYield, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");

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

describe("getRevenueForCrop", () => {

    test("calculate the revenue for a crop with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30, //kg
            salePrice: 8,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            }
        }

        const environmentFactors = {
            sun: "high",
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(3600)
    });

});

describe("getProfitForCrop", () => {

    test("calculate the profit for a crop with environment factors ", () => {
        const corn = {
            name: "corn",
            yield: 30, 
            cost: 2, 
            salePrice: 5,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            }
        };

        const environmentFactors = {
            sun: "high",
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };

        expect(getProfitForCrop(input,environmentFactors)).toBe(2230);
    })
});

describe("getTotalProfit", () => {
    const corn = {
        name: "corn",
        yield: 30, 
        cost: 2, 
        salePrice: 5,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    };

    const pumpkin = {
        name: "pumpkin",
        yield: 4,
        cost: 3,
        salePrice: 6,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    };

    const environmentFactors = {
        sun: "medium",
    };

    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
    ];

    test("calculate the profit for multiple crops with environment factors", () => {
        expect(getTotalProfit(environmentFactors,{ crops })).toBe(782);

    })

});