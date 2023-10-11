import cascadiagooners from './cascadiagooners';
import pdxgooners from './pdxgooners';
import tacomagooners from './tacomagooners';
import vancouverarsenal from './vancouverarsenal';

import { BranchObject } from './branchObject';

const exportHelper = (branchObject: BranchObject) => ({
  [branchObject.data.domain]: branchObject,
});

export default {
  ...exportHelper(cascadiagooners),
  ...exportHelper(pdxgooners),
  ...exportHelper(tacomagooners),
  ...exportHelper(vancouverarsenal),
};
