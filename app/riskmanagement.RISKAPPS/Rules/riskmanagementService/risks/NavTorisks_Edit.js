export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/RISKAPPS/Services/riskmanagementService.service').isDraftEnabled('risks')) {
        return clientAPI.executeAction({
            'Name': '/RISKAPPS/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'risks'
                },
                'OnSuccess': '/RISKAPPS/Actions/riskmanagementService/risks/NavTorisks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RISKAPPS/Actions/riskmanagementService/risks/NavTorisks_Edit.action');
    }
}