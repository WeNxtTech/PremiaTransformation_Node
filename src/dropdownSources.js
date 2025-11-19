const {
  Country,
  State,
  City,
  PolicyHolder,
  Role,
  Department,
  PcomCodes,
  PcomAppParameter
  
} = require("../src/models");

module.exports = {
  countries: {
    model: Country,
    attributes: ["id", "name"],
  },

  states: {
    model: State,
    attributes: ["id", "name", "countryId"],
                  // dependent dropdown
    allowedFilters: ["countryId"]
  },

  cities: {
    model: City,
    attributes: ["id", "name", "stateId"],
    filterKey: "stateId",
    allowedFilters: ["stateId"]
  },

  policy_holder: {
    model: PolicyHolder,
    attributes: ["id", "name", "code", "status"],
    allowedFilters: ["code", "status"],   // supports ?code=aravind&status=false
    fixedWhere: { deleted: false }        // always applied filter (optional)
  },

  roles: {
    model: Role,
    attributes: ["id", "name"]
  },

  departments: {
    model: Department,
    attributes: ["id", "name"]
  },

 PCOM_CODES_LOV: {
    model: PcomCodes,  
    attributes: [ [('PC_CODE'), 'id'],  [('PC_DESC'), 'name'] ],
    allowedFilters: ['PC_TYPE'],          
    group: ['PC_CODE','PC_DESC'],
    order: [['name','ASC']]
  },

   PCOM_APP_PARAMETER_LOV: {
    model: PcomAppParameter, 
    attributes: [  [('PARA_SUB_CODE'), 'id'],  [('PARA_NAME'), 'name']  ],
    allowedFilters: ['PARA_CODE'],          
    group: ['PARA_SUB_CODE','PARA_NAME'],
    order: [['name','ASC']]
  }
};