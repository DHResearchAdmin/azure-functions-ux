import * as React from 'react';
import Dropdown from '../../../../components/form-controls/DropDown';
import { Field, FormikProps } from 'formik';
import { AppSettingsFormValues } from '../AppSettings.Types';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { ScenarioIds } from '../../../../utils/scenario-checker/scenario-ids';
import { ScenarioService } from '../../../../utils/scenario-checker/scenario.service';

const Platform: React.SFC<FormikProps<AppSettingsFormValues> & InjectedTranslateProps> = props => {
  const { t, values } = props;
  const { site } = values;
  const scenarioChecker = new ScenarioService(t);

  return (
    <div>
      {scenarioChecker.checkScenario(ScenarioIds.platform64BitSupported, { site }).status !== 'disabled' && (
        <>
          <Field
            name="config.properties.use32BitWorkerProcess"
            component={Dropdown}
            label={t('platform')}
            id="app-settings-worker-process"
            disabled={!values.siteWritePermission}
            options={[
              {
                key: true,
                text: '32 Bit',
              },
              {
                key: false,
                text: '64 Bit',
              },
            ]}
          />
          <Field
            name="config.properties.managedPipelineMode"
            component={Dropdown}
            label={t('managedPipelineVersion')}
            id="app-settings-managed-pipeline-mode"
            disabled={!values.siteWritePermission}
            options={[
              {
                key: 0,
                text: t('integrated'),
              },
              {
                key: 1,
                text: t('classic'),
              },
            ]}
          />
          <Field
            name="config.properties.webSocketsEnabled"
            component={Dropdown}
            label={t('webSockets')}
            id="app-settings-web-sockets-enabled"
            disabled={!values.siteWritePermission}
            options={[
              {
                key: true,
                text: t('on'),
              },
              {
                key: false,
                text: t('Off'),
              },
            ]}
          />
        </>
      )}
      <Field
        name="config.properties.ftpsState"
        component={Dropdown}
        label={t('ftpState')}
        id="app-settings-ftps-state"
        disabled={!values.siteWritePermission}
        options={[
          {
            key: 'AllAllowed',
            text: t('allAllowed'),
          },
          {
            key: 'FtpsOnly',
            text: t('ftpsOnly'),
          },
          {
            key: 'Disabled',
            text: t('disabled'),
          },
        ]}
      />
      <Field
        name="config.properties.alwaysOn"
        component={Dropdown}
        label={t('alwaysOn')}
        id="app-settings-always-on"
        disabled={!values.siteWritePermission}
        options={[
          {
            key: true,
            text: t('on'),
          },
          {
            key: false,
            text: t('Off'),
          },
        ]}
      />
      <Field
        name="site.properties.clientAffinityEnabled"
        component={Dropdown}
        label={t('clientAffinityEnabledLabel')}
        id="app-settings-clientAffinityEnabled"
        disabled={!values.siteWritePermission}
        options={[
          {
            key: true,
            text: t('on'),
          },
          {
            key: false,
            text: t('Off'),
          },
        ]}
      />
      <Field
        name="config.properties.http20Enabled"
        component={Dropdown}
        label={t('httpVersion')}
        id="app-settings-http-enabled"
        disabled={!values.siteWritePermission}
        options={[
          {
            key: true,
            text: '2.0',
          },
          {
            key: false,
            text: '1.1',
          },
        ]}
      />
    </div>
  );
};
export default translate('translation')(Platform);
