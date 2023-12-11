// JavaScript function to generate HTML content based on a template
    function generateDynamicHTML(image,pdf,title,conference,talkposter,date,url) {

      var template = `
      <div class="row">
        <div class="col-md-4 image-container">
            <a href="${pdf}">
                <img src="files/${image}" class="imgstyle" alt="">
                <div class="hover-text">Click and View</div>
            </a> 
        </div>
        <div class="col-md-8">
            <div class="talk-text">
                <h6><strong>${title} </strong></h6>
                <p>${conference}<br />
                    ${talkposter}, ${date} &nbsp;[<a href="${url}">Link</a>].</p>
            </div> 
        </div>
      </div> 
      <br/> 
      `;
      return template;
    }

    // JavaScript function to append HTML content to a specified element
    function appendDynamicHTML(image,pdf,title,conference,talkposter,date,url, targetElementId) {
      var targetElement = document.getElementById(targetElementId);
      if (targetElement) {
        targetElement.innerHTML += generateDynamicHTML(image,pdf,title,conference,talkposter,date,url);
      } else {
        console.error('Target element not found.');
      }
    }

    // Call the function when the page loads
    window.onload = function() {
      /*
        appendDynamicHTML(
          image,
          pdf,
          title,
          conference,
          talkposter,
          date,
          url, 
          targetElementId);
        */
        appendDynamicHTML(
            'poster-response.png',
            'files/Poster-Response functions as a new concept to study local dynamics in traffic networks.pdf',
            'Response functions as a new concept to study local dynamics in traffic networks',
            'Dynamics Days Europe 2023, Naples, Italy',
            'Poster',
            'September 6-7, 2023',
            'https://sites.google.com/view/dynamicsdayseurope2023/poster-presentations', 
            'output10');
        appendDynamicHTML(
            'quasi2.png',
            'files/Quasi-stationary_states_in_temporal_correlations_and_their_transitions_in_traffic_systems.pdf',
            'Quasi-stationary states in temporal correlations and their transitions in traffic systems: Cologne orbital motorway as an example',
            'Dynamics Days Europe 2023, Naples, Italy',
            'Talk',
            'September 6, 2023',
            'https://sites.google.com/view/dynamicsdayseurope2023/program', 
            'output9');
        appendDynamicHTML(
          'response.png',
          'files/Response_functions_as_a_new_concept_to_study_local_dynamics_in_traffic_networks.pdf',
          'Response functions as a new concept to study local dynamics in traffic networks',
          'DPG Spring Meeting (Annual Conference of the German Physical Society) 2023, Dresden, Germany',
          'Talk',
          'March 29, 2023',
          'https://www.dpg-verhandlungen.de/year/2023/conference/skm/part/soe/session/11/contribution/1?lang=en', 
          'output8');
          
        appendDynamicHTML(
          'identifying.png',
          'files/Identifying_Subdominant_Collective_Effects_in_a_Large_Motorway_Network.pdf',
          'Identifying subdominant collective effects in a large motorway network',
          'DPG Spring Meeting (Annual Conference of the German Physical Society) 2023, Dresden, Germany',
          'Poster',
          'March 27, 2023',
          'https://www.dpg-verhandlungen.de/year/2023/conference/skm/part/soe/session/4/contribution/1?lang=en', 
          'output7');
        
        appendDynamicHTML(
          'quasi.png',
          'files/quasi-stationary_states_in_temporal_correlations_for_traffic_systems.pdf',
          'Quasi-stationary states in temporal correlations for traffic systems: Cologne orbital motorway as an example ',
          'Virtual DPG Spring Meeting (Annual Conference of the German Physical Society) BP-CPP-DY-SOE 2021, Germany',
          'Talk',
          'March 23, 2021',
          'https://www.dpg-verhandlungen.de/year/2021/conference/bpcppdysoe/part/dy/session/26/contribution/5?lang=en', 
          'output6');
        appendDynamicHTML(
          'microscopic.png',
          'files/Microscopic_understanding_of_price_cross-responses_between_stocks.pdf',
          'Microscopic understanding of price cross-responses between stocks ',
          'DPG Spring Meeting (Annual Conference of the German Physical Society) 2017, Dresden, Germany',
          'Talk',
          'March 20, 2017',
          'https://www.dpg-verhandlungen.de/year/2017/conference/dresden/part/soe/session/3/contribution/3', 
          'output5');
        appendDynamicHTML(
          'price_response.png',
          'https://www.dpg-verhandlungen.de/year/2016/conference/regensburg/part/soe/session/7/contribution/4',
          'Price response in correlated financial markets: empirical results ',
          'DPG Spring Meeting (Annual Conference of the German Physical Society) 2016, Regensburg, Germany',
          'Poster',
          'March 7, 2016',
          'https://www.dpg-verhandlungen.de/year/2016/conference/regensburg/part/soe/session/7/contribution/4', 
          'output4');
        appendDynamicHTML(
            'price.png',
            'files/price_cross-responses_in_correlated_financial_markets.pdf',
            'Price cross-responses in correlated financial markets',
            '',
            'Talk',
            'November 18, 2016',
            'files/price_cross-responses_in_correlated_financial_markets.pdf', 
            'output3');
        appendDynamicHTML(
          'influences.png',
          'files/influences_of_large_local_fluctuations_on_copula-based_dependence_of_demands_between_stocks.pdf',
          'Influences of large local fluctuations on copula-based dependence of demands between stocks',
          '',
          'Talk',
          'May 31, 2017',
          'files/influences_of_large_local_fluctuations_on_copula-based_dependence_of_demands_between_stocks.pdf', 
          'output2');
        appendDynamicHTML(
          'ranking.png',
          'files/Ranking_and_Clustering_Cities_in_North_Rhine-Westphalia_Germany.pdf',
          'Ranking and clustering cities in North Rhine-Westphalia, Germany',
          '',
          'Presentation',
          '2021',
          'https://shannwang.github.io/Machine_Learning/Clustering_cities_in_NRW.html', 
          'output1');
         

    };