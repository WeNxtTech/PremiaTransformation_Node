    const { getCustomer,getInsured , getSrcCode,getCurrency} = require('../services/modernDropDownService');
    const { successResponse, errorResponse } = require('../utils/response'); 


    exports.getCustomer = async (req, res) => {
    try {
        const data = await getCustomer();
        return successResponse(res, 200, 'Data fetched successfully', data);
    } catch (error) {
            return errorResponse(res, 500, 'Failed to fetch  data', error.message || error);

    }
    };



    exports.getInsured = async (req, res) => {
    try {
        const { custcode } = req.query; 
        const data = await getInsured(custcode);
        return successResponse(res, 200, 'Data fetched successfully', data);
    } catch (error) {
        return errorResponse(res, 500, 'Failed to fetch data', error.message || error);
    }
    };


       exports.getSrcCode = async (req, res) => {
    try {
        const { srccode } = req.query; 
        const data = await getSrcCode(srccode);
        return successResponse(res, 200, 'Data fetched successfully', data);
    } catch (error) {
        return errorResponse(res, 500, 'Failed to fetch data', error.message || error);
    }
    };

       exports.getCurrency = async (req, res) => {
    try {
        const data = await getCurrency();
        return successResponse(res, 200, 'Data fetched successfully', data);
    } catch (error) {
            return errorResponse(res, 500, 'Failed to fetch  data', error.message || error);

    }
    };