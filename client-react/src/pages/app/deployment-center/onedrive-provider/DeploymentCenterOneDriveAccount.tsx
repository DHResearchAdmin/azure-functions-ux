import React from 'react';
import { useTranslation } from 'react-i18next';
import { DeploymentCenterOneDriveProviderProps } from '../DeploymentCenter.types';
import { PrimaryButton, Label, Link } from '@fluentui/react';
import ReactiveFormControl from '../../../../components/form-controls/ReactiveFormControl';
import { additionalTextFieldControl } from '../DeploymentCenter.styles';
import { DeploymentCenterLinks } from '../../../../utils/FwLinks';
import { getDescriptionSection } from '../utility/DeploymentCenterUtility';
import { ScmType } from '../../../../models/site/config';

const DeploymentCenterOneDriveAccount: React.FC<DeploymentCenterOneDriveProviderProps> = props => {
  const { accountUser, accountStatusMessage, authorizeAccount } = props;

  const { t } = useTranslation();

  const OneDriveAccountControls = accountUser ? (
    <>
      {getDescriptionSection(
        ScmType.OneDrive,
        t('deploymentCenterOneDriveDescriptionText'),
        DeploymentCenterLinks.cloudFolderDeployment,
        t('learnMore')
      )}
      <ReactiveFormControl id="deployment-center-oneDrive-user" label={t('deploymentCenterOAuthSingedInAs')}>
        <div>
          {accountUser.createdBy.user.displayName}
          <Link
            key="deployment-center-oneDrive-change-account-link"
            onClick={authorizeAccount}
            className={additionalTextFieldControl}
            aria-label={t('deploymentCenterOAuthChangeAccount')}>
            {t('deploymentCenterOAuthChangeAccount')}
          </Link>
        </div>
      </ReactiveFormControl>
    </>
  ) : (
    <PrimaryButton ariaDescription={t('deploymentCenterOAuthAuthorizeAriaLabel')} onClick={authorizeAccount}>
      {t('deploymentCenterOAuthAuthorize')}
    </PrimaryButton>
  );

  const accountStatusMessageControl = <Label>{accountStatusMessage}</Label>;

  return accountStatusMessage ? accountStatusMessageControl : OneDriveAccountControls;
};

export default DeploymentCenterOneDriveAccount;
