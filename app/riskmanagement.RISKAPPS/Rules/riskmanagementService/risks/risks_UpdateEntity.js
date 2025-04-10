export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RISKAPPS/Services/riskmanagementService.service').isDraftEnabled('risks')) {
        return clientAPI.executeAction({
            'Name': '/RISKAPPS/Actions/riskmanagementService/risks/risks_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/RISKAPPS/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'risks'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RISKAPPS/Actions/riskmanagementService/risks/risks_UpdateEntity.action');
    }
}