const dropdownSources = require("../dropdownSources");
class DropdownService {
  async getDropdownData(queryParams) {
    const { source } = queryParams;

    if (!source) {
      throw new Error("Missing dropdown source");
    }

    const sourceList = source.split(","); // support multiple dropdowns
    const results = {};

    const promises = sourceList.map(async (src) => {
      const config = dropdownSources[src];
      if (!config) return; // ignore invalid sources

      let where = {};

      // ⿡ Apply fixed filters (always applied)
      if (config.fixedWhere) {
        where = { ...where, ...config.fixedWhere };
      }

      // ⿢ Apply dependent dropdown filter (like countryId → states)
      if (config.filterKey && queryParams[config.filterKey] !== undefined) {
        where[config.filterKey] = queryParams[config.filterKey];
      }

      // ⿣ Apply allowedFilters (dynamic user filters)
      if (config.allowedFilters) {
        config.allowedFilters.forEach((field) => {
          if (queryParams[field] !== undefined) {
            where[field] = queryParams[field];
          }
        });
      }

      // Build query options
      const queryOptions = {
        where,
        attributes: config.attributes,
        order: config.order || [["name", "ASC"]]
      };

      // Optional Sequelize include (joins)
      if (config.include) {
        queryOptions.include = config.include;
      }

      const rows = await config.model.findAll(queryOptions);

      results[src] = rows;
    });

    await Promise.all(promises);

    return results;
  }
}

module.exports = new DropdownService();