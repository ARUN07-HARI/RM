export default function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/RISKAPPS/Services/riskmanagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/RISKAPPS/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/RISKAPPS/Actions/riskmanagementService/Mitigations/NavToMitigations_Createrisks.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RISKAPPS/Actions/riskmanagementService/Mitigations/NavToMitigations_Createrisks.action');
    }
}