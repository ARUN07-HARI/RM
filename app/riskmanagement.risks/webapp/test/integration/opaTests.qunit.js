sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/risks/test/integration/FirstJourney',
		'riskmanagement/risks/test/integration/pages/risksList',
		'riskmanagement/risks/test/integration/pages/risksObjectPage'
    ],
    function(JourneyRunner, opaJourney, risksList, risksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTherisksList: risksList,
					onTherisksObjectPage: risksObjectPage
                }
            },
            opaJourney.run
        );
    }
);