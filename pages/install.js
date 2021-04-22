import { Layout, Page, SettingToggle, TextStyle } from '@shopify/polaris';
import React, { useState } from 'react';
import Axios from 'axios';
import { useAppBridge } from '@shopify/app-bridge-react'
import { getSessionToken } from '@shopify/app-bridge-utils';

function install() {
    const app = useAppBridge();
    const [isInstalled, setisInstalled] = useState(null);
    const titleDescription = isInstalled ? "Uninstall" :"Install";
    const bodyDescription = isInstalled ? "installed" :"uninstalled";
    
    async function handleAction() {
        if (!isInstalled) {
            const token = await getSessionToken(app);
            const config = {
                headers: {Authorization: `Bearer ${token}`}
            }
            Axios.post('https://1ec401dcd447.ngrok.io/script_tag', {}, config);
        }
        setisInstalled(oldValue => !oldValue)
    };
    return (
        <Page>
            <Layout.AnnotatedSection
                title={`${titleDescription} Banner`}
                description="Toggle banner installation on yout shop">
                <SettingToggle
                    action={{
                        content: titleDescription,
                        onAction: handleAction,
                    }}
                    enabled={true}
                >
                    The banner script is{" "}
                    <TextStyle variation="strong">{bodyDescription}</TextStyle>
                </SettingToggle>
            </Layout.AnnotatedSection>
        </Page>
    );
}

export default install
