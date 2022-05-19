const getYieldForPlant = (plant) => {
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

    const environmentFactor = environmentFactors.sun;

    if (environmentFactor === "low") {
        return plant.yield * 50 / 100;
    } else if (environmentFactor === "medium") {
        return plant.yield * 100 / 100;
    } else if (environmentFactor === "high") {
        return plant.yield * 150 / 100;
    }

    // return plant.yield + plant.sun; <-- With no enviromental factors
}; 

const getYieldForCrop = () => {
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

    const environmentFactor = environmentFactors.sun;
    
    if (environmentFactor === "low") {
        return (input.crop.yield * 50 / 100) * input.numCrops;
    } else if (environmentFactor === "medium") {
        return (input.crop.yield * 100 / 100) * input.numCrops;
    } else if (environmentFactor === "high") {
        return (input.crop.yield * 150 / 100) * input.numCrops;
    }

    // return input.crop.yield * input.numCrops;
};

const getTotalYield = () => {
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


    const multiplicationProcess = crops.map(item => {
        const environmentFactor = environmentFactors.sun;
        if(environmentFactor === "low") {
            return (item.crop.yield * -item.crop.factor.sun.low / 100) * item.numCrops
        } else if(environmentFactor === "medium") {
            return (item.crop.yield * 100 / 100) * item.numCrops
        } else if(environmentFactor === "high") {
            return (item.crop.yield * (100 + item.crop.factor.sun.high) / 100) * item.numCrops
        }
    });

//  const reduceCrops = multiplyCrops.reduce((e, item) => e + item, 0);
//  return reduceCrops;
    
    console.log(multiplicationProcess);
    const additionProcess = multiplicationProcess.reduce((acc, item) => acc + item, 0);
    return additionProcess;
}

const getRevenueForCrop = (input,environmentFactors) => {
    const environmentFactor = environmentFactors.sun;
    if(environmentFactor === "low"){
        return (input.crop.yield * -input.crop.factor.sun.low / 100) * input.crop.salePrice * input.numCrops;
    } else if(environmentFactor === "medium"){
        return (input.crop.yield * 100 / 100) * input.crop.salePrice * input.numCrops;
    } else if(environmentFactor === "high"){
        return (input.crop.yield * (100 + input.crop.factor.sun.high) / 100) * input.crop.salePrice * input.numCrops;
    }
}

const getProfitForCrop = (input, environmentFactors) => {
    const environmentFactor = environmentFactors.sun;
    if (environmentFactor === "low") {
        return ((input.crop.yield * -input.crop.factor.sun.low / 100) * input.numCrops * input.crop.salePrice) - input.crop.cost * input.numCrops;
    } else if (environmentFactor === "medium") {
        return ((input.crop.yield * 100 / 100) * input.numCrops * input.crop.salePrice) - input.crop.cost * input.numCrops;
    } else if (environmentFactor === "high") {
        return ((input.crop.yield * (100 + input.crop.factor.sun.high) / 100) * input.numCrops * input.crop.salePrice) - input.crop.cost * input.numCrops;
    }
}

const getTotalProfit = (environmentFactors,{crops}) => {
    const arrayProfitPerplant = crops.map(item => {
        const environmentFactor = environmentFactors.sun;
        if(environmentFactor === "low"){
            return ((item.crop.yield * (-item.crop.factor.sun.low / 100)) * item.numCrops * item.crop.salePrice) - (item.crop.cost * item.numCrops);
        } else if(environmentFactor === "medium"){
            return ((item.crop.yield * (100 / 100)) * item.numCrops * item.crop.salePrice) - (item.crop.cost * item.numCrops);
        }else if(environmentFactor === "high"){
            return ((item.crop.yield * ((100 + item.crop.factor.sun.high) / 100)) * item.numCrops * item.crop.salePrice) - (item.crop.cost * item.numCrops);
        }
    }) 
    const totalProfit = arrayProfitPerplant.reduce((acc,elem) => acc + elem,0)
    return totalProfit;
    }



module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};