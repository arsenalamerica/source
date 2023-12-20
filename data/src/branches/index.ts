import boisegooners from './boisegooners';
import cascadiagooners from './cascadiagooners';
import pdxgooners from './pdxgooners';
import tacomagooners from './tacomagooners';
import vancouverarsenal from './vancouverarsenal';

import { BranchData, BranchLogo } from './types';

const exportAllHelper = (branchObject: { data: BranchData }) => ({
  [branchObject.data.domain]: branchObject,
});

const exportDataHelper = ({ data }: { data: BranchData }) => ({
  [data.domain]: data,
});

const exportLogoHelper = ({
  data,
  Logo,
}: {
  data: BranchData;
  Logo: BranchLogo;
}) => ({
  [data.domain]: Logo,
});

export const branchData = {
  ...exportDataHelper(boisegooners),
  ...exportDataHelper(cascadiagooners),
  ...exportDataHelper(pdxgooners),
  ...exportDataHelper(tacomagooners),
  ...exportDataHelper(vancouverarsenal),
};

export const branchLogo = {
  ...exportLogoHelper(boisegooners),
  ...exportLogoHelper(cascadiagooners),
  ...exportLogoHelper(pdxgooners),
  ...exportLogoHelper(tacomagooners),
  ...exportLogoHelper(vancouverarsenal),
};

export default {
  ...exportAllHelper(boisegooners),
  ...exportAllHelper(cascadiagooners),
  ...exportAllHelper(pdxgooners),
  ...exportAllHelper(tacomagooners),
  ...exportAllHelper(vancouverarsenal),
};
