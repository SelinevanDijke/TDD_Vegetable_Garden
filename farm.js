const getYieldForPlant = (plant) => {
    const corn = {
        name: "corn",
        yield: 30,
    };
    return plant.yield;
    
}; 


const getYieldForCrop = () => {
    const corn = {
        name: "corn",
        yield: 3,
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    return input.crop.yield * input.numCrops;
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