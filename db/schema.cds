namespace riskmanagement;

using { RM } from '../srv/external/RM.cds';

entity risks
{
    key ID : UUID;
    TITLE : String(100);
    Prio : String(5);
    Description : String(100);
    Impact : Integer;
    Criticality : Integer;
    mitigation : Association to one Mitigations;
    a_BusinessPartner : Association to one RM.A_BusinessPartner;
}

entity Mitigations
{
    key ID : UUID;
    CreatedAt : String(100);
    CreatedBy : String(100);
    Description : String(100);
    Owner : String(100);
    Timeline : String(100);
    risks : Association to many risks on risks.mitigation = $self;
}
