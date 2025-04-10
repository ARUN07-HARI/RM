export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/RISKAPPS/Services/riskmanagementService.service').isDraftEnabled('risks')) {
        return clientAPI.executeAction({
            'Name': '/RISKAPPS/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'risks'
                },
                'OnSuccess': '/RISKAPPS/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RISKAPPS/Actions/CloseModalPage_Cancel.action');
    }
}