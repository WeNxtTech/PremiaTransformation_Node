const { Formula } = require('../models');

exports.createFormula = async (data) => {
     const existing = await Formula.findOne({
    where: { FRM_CODE: data.FRM_CODE }
  });

  if (existing) {
    throw new Error(`Formula with code ${data.FRM_CODE} already exists`);
  }

  const result = await Formula.create(data);
  return result;
 };

exports.updateFormula = async (FRM_CODE, updatedData) => {
  const formula = await Formula.findByPk(FRM_CODE);
  if (!formula) throw new Error(' Formula not found');

  await formula.update(updatedData);
  return formula;
};
exports.deleteFormula = async (FRM_CODE) => {
  const formula = await Formula.findByPk(FRM_CODE);
  if (!formula) throw new Error('Formula not found');

  await formula.destroy();
  return { message: 'Formula deleted successfully' };
}