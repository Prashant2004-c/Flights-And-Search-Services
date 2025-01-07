const { where } = require('sequelize');
const { City } = require('../models/index');
const city = require('../models/city');

class CityRepository {
    async createCity({ name }) {
        try{
            const city = await City.create({ name });
            return city;    
        } catch(error) {
            console.log("Something wrong in repository layer.");
            throw{error};
        }
    }

    async deleteCity (cityId) {
        try {
            await City.destroy({
                where: {
                    id : cityId
                }
            });
            return true;
        } catch(error) {
            console.log("Something wrong in repository layer.");
            throw{error};
        }
    }

    async getCity (cityId) {
        try {
            const city = await City.findbyPk(cityId);
            // const city = await City.findOne({
            //     where : {
            //         id : cityId
            //     }
            // });
            return city;
        } catch(error) {
            console.log("Something wrong in repository layer.");
            throw{error};
        }
    }

    async updateCity (cityId , data) { // data is object like {name:cityname}
        try {
            const city = await City.update(data , {
                where : {
                    id : cityId
                }
            })
        } catch(error) {
            console.log("Something wrong in repository layer.");
            throw{error};
        }
    }
}

module.exports = CityRepository;