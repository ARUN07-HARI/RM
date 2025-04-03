using { RM } from './external/RM.cds';

using { riskmanagement as my } from '../db/schema.cds';

@path : '/service/riskmanagementService'
service riskmanagementService
{
    annotate Mitigations with @restrict :
    [
        { grant : [ '*' ], to : [ 'Riskmanager' ] },
        { grant : [ 'READ' ], to : [ 'Riskviewer' ] }
    ];

    annotate risks with @restrict :
    [
        { grant : [ '*' ], to : [ 'Riskmanager' ] },
        { grant : [ 'READ' ], to : [ 'Riskviewer' ] }
    ];

    @odata.draft.enabled
    entity risks as
        projection on my.risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

    entity A_BusinessPartner as
        projection on RM.A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerCategory,
            BusinessPartnerFullName,
            BusinessPartnerIsBlocked
        };
}

annotate riskmanagementService with @requires :
[
    'authenticated-user',
    'Riskviewer',
    'Riskmanager'
];
