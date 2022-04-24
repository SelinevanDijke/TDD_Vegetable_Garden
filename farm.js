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
            yield: 3,
        };
    const pumpkin = {
        name: "pumpkin",
        yield: 4,
    };
    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
    ];

    const multiplyCrops = crops.map(item => item.crop.yield * item.numCrops);
    const reduceCrops = multiplyCrops.reduce((e, item) => e + item, 0);
    return reduceCrops;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};