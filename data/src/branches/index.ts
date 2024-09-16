import boisegooners from './boisegooners';
import cascadiagooners from './cascadiagooners';
import eastlagooners from './eastlagooners';
import pdxgooners from './pdxgooners';
import tacomagooners from './tacomagooners';
import { BranchData, BranchLogo } from './types';
import vancouverarsenal from './vancouverarsenal';

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
  ...exportDataHelper(eastlagooners),
  ...exportDataHelper(pdxgooners),
  ...exportDataHelper(tacomagooners),
  ...exportDataHelper(vancouverarsenal),
};

export const branchLogo = {
  ...exportLogoHelper(boisegooners),
  ...exportLogoHelper(cascadiagooners),
  ...exportLogoHelper(eastlagooners),
  ...exportLogoHelper(pdxgooners),
  ...exportLogoHelper(tacomagooners),
  ...exportLogoHelper(vancouverarsenal),
};
