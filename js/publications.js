  // JavaScript function to generate HTML content based on a template
    function generateDynamicHTML(image,title,authors,journalurl,journalinfo,arxivurl,arxivinfo,abstract) {
      // extract a part of abstract
      var paragraph = `${abstract}`;
      var extractedText = extractFirstFewWords(paragraph);

      var jouinf=`${journalinfo}`;
      var arxinf=`${arxivinfo}`;
      var jou;
      if (jouinf == '') {
        jou=`preprint: <a href="${arxivurl}">${arxivinfo}</a>`;
      }else if(arxinf==''){
        jou=`<a href="${journalurl}">${journalinfo}</a>`;
      }else{
        jou=`<a href="${journalurl}">${journalinfo}</a>,  preprint: <a href="${arxivurl}">${arxivinfo}</a>`;
      }

      var template = `
      <div class="row">
          <div class="col-md-3">
              <img  src="images/portfolio/${image}" class="im">
          </div>
          <div class="col-md-9">
              <h5><strong>${title}</strong></h5>                        
              <p><i>
                  ${authors}<br />`+
               jou  
              +`</i></p>
              <p>Abstract: `+
              extractedText
              +`...
              <button onclick="showAbstract('${abstract}')" class=but>Read More</button>    
              </p>   
               
          </div>  
      </div>   
      `;
      return template;
    }

    // JavaScript function to append HTML content to a specified element
    function appendDynamicHTML(image,title,authors,journalurl,journalinfo,arxivurl,arxivinfo,abstract, targetElementId) {
      var targetElement = document.getElementById(targetElementId);
      if (targetElement) {
        targetElement.innerHTML += generateDynamicHTML(image,title,authors,journalurl,journalinfo,arxivurl,arxivinfo,abstract);
      } else {
        console.error('Target element not found.');
      }
    }

    function showAbstract(content) {
      // Display a popup window with text
      window.alert(content);
    }


    function extractFirstFewWords(paragraph) {
      // Split the paragraph into an array of words
      var words = paragraph.split(/\s+/);
    
      // Take the first 50 words and join them back into a string
      var result = words.slice(0, 30).join(' ');
    
      return result;
    }

    // Call the function when the page loads
    window.onload = function() {
      // Example: Call the function with input parameters
      /*
      appendDynamicHTML(
              image,
              title,
              authors,
              journalurl,
              journalinfo,
              arxivurl,
              arxivinfo,
              abstract, 
              'output');
      */

      appendDynamicHTML(
                  'scaling.png',
                  'How much longer do you have to drive than the crow has to fly',
                  'Shanshan Wang*, Henrik M. Bette, Michael Schreckenberg, Thomas Guhr',
                  'https://doi.org/10.1038/s44260-024-00023-x',
                  'npj Complex. 1, 22 (2024)',
                  'https://doi.org/10.48550/arXiv.2406.06490',
                  'arXiv:2406.06490',
                  'When travelling by car from one location to another, our route is constrained by the road network. The network distance between the two locations is generally longer than the geodetic distance as the crow flies. We report a systematic relation between the statistical properties of these two distances. Empirically, we find a robust scaling between network and geodetic distance distributions for a variety of large motorway networks. A simple consequence is that we typically have to drive 1.3 ± 0.1 times longer than the crow flies. This scaling is not present in standard random networks; rather, it requires non-random adjacency. We develop a set of rules to build a realistic motorway network, also consistent with the above scaling. We hypothesise that the scaling reflects a compromise between two societal needs: high efficiency and accessibility on the one hand, and limitation of costs and other burdens on the other.', 
                  'output20');
      appendDynamicHTML(
                'responses_subsequent_sections.png',
                'Traffic Response Functions: Patterns, Propagation and Congestion',
                'Sebastian Gartzke, Shanshan Wang, Thomas Guhr, Michael Schreckenberg',
                '',
                '',
                'https://doi.org/10.48550/arXiv.2406.02307',
                'arXiv:2406.02307',
                'Using empirical data gathered on motorways in Germany, we follow a new approach by further exploring response functions as a possible tool to study traffic dynamics in motorway networks. We uncover the basic characteristics of responses of flow and density to given signals and the capability of responses to capture the correlation between these fundamental observables. Furthermore, we uncover the potential use of responses to characterize traffic patterns. We are able to demonstrate the differentiation of congestion patterns and the determination of the propagation velocity of moving congestion.', 
                'output19');
        appendDynamicHTML(
                'response_map.png',
                'Spatiotemporal statistical features of velocity responses to traffic congestions in a local motorway network',
                'Shanshan Wang*, Michael Schreckenberg, Thomas Guhr',
                'https://doi.org/10.1088/2632-072X/ad8059',
                'J. Phys. Complex. 5, 045003 (2024)',
                'https://doi.org/10.48550/arXiv.2406.17724',
                'arXiv.2406.17724',
                'The causal connection between congestions and velocity changes at different locations induces various statistical features, which we identify and measure in detail. We carry out an empirical analysis of large-scale traffic data on a  local motorway network around the Breitscheid intersection in the North Rhine-Westphalia, Germany. We put forward a response function which measures the velocity change at a certain location versus time conditioned on a congestion at another location. We use a novel definition of the corresponding congestion indicator to ensure causality. We find that the  response of velocities to the congestion exhibits phase changes in time. A  negative response at smaller time lags transforms into positive one at  larger time lags, implying a certain traffic mechanism. The response decays as a power law with the distance. We also identify a scaling property leading to a collapse of the response functions on one curve. ', 
                'output18');
      appendDynamicHTML(
              'simu_scenario3_3d.png',
              'Congestions and Spectral Transition in Time-Lagged Correlations of Motorway Traffic',
              'Gabor B. Hollbeck, René Pilarczyk, Shanshan Wang*, Michael Schreckenberg, Thomas Guhr',
              'https://doi.org/10.1016/j.physa.2024.129952',
              'Physica A 649, 129952 (2024)',
              'https://doi.org/10.48550/arXiv.2312.12051',
              'arXiv:2312.12051',
              'The congestion of a motorway section is propagated to its neighbouring sections, leading to correlations. The resulting correlation matrix encodes the information on congestion. Here, we study symmetrized time-lagged correlations and show how their spectral properties reveal congestion durations. We carry out an empirical analysis and find a transition behavior for the dominant eigenvalue as function of the time lag. Furthermore, we set up a numerical simulation model for indicator time series of traffic phases as well as a simplified model that we treat analytically. We consider various scenarios. Our results reveal a nonlinear relation between the spectral transition and the congestion duration. In our simplified model, we derive this relation analytically.', 
              'output17');  
      
      appendDynamicHTML(
        'statetransition.png',
        'Transitions between quasi-stationary states in traffic systems: Cologne orbital motorways as an example',
        'Shanshan Wang*, Michael Schreckenberg, Thomas Guhr',
        'https://doi.org/10.1088/1742-5468/acf210',
        'J. Stat. Mech. 2023, 093401 (2023)',
        'https://doi.org/10.48550/arXiv.2302.14596',
        'arXiv:2302.14596',
        'Traffic systems can operate in different modes. In a previous work, we identified these modes as different quasi-stationary states in the correlation structure. Here, we analyze the transitions between such quasi-stationary states, i.e. how the system changes its operational mode. In the longer run this might be helpful to forecast the time evolution of correlation patterns in traffic. Taking Cologne orbital motorways as an example, we construct a state transition network for each quarter of 2015 and find a seasonal dependence for those quasi-stationary states in the traffic system. Using the PageRank algorithm, we identify and explore the dominant states which occur frequently within a moving time window of 60 days in 2015. To the best of our knowledge, this is the first study of this type for traffic systems.', 
        'output16');

        appendDynamicHTML(
          'response_correlator.png',
          'Response functions as a new concept to study local dynamics in traffic networks',
          'Shanshan Wang*, Michael Schreckenberg, Thomas Guhr',
          'https://doi.org/10.1016/j.physa.2023.129116',
          'Physica A 626, 129116 (2023)',
          'https://doi.org/10.48550/arXiv.2211.08232',
          'arXiv:2211.08232',
          'Vehicle velocities in neighboring road sections are correlated with memory effects. We explore the response of the velocities in the sequence of sections to a congestion in a given section and its dynamic characteristics. To this end, we transfer the concept of response functions from previous applications in finance to traffic systems. The dynamical characteristics are of particular interest. We identify two phases, a phase of transient response and a phase of long-term response. The transient response is pronounced when considering the backward propagation of heavy congestions but almost vanishes for forward propagation. For each response phase, we find a linear relation between the velocity response and the congestion correlator, implying that the correlation of congestion is most likely the cause for the velocity response. We also construct a susceptible-decelerated-withdrawing model mathematically inspired by the susceptible–infectious–recovered (SIR) model in epidemiology to describe the transient response. We find that the heavy congestion on a section propagates forward and backward at a similar rate, but the forward sections are more likely to recover from the effect of heavy congestion than the backward sections.', 
          'output15');

        appendDynamicHTML(
              'eigenvectors.png',
              'Identifying subdominant collective effects in a large motorway network',
              'Shanshan Wang*, Michael Schreckenberg, Thomas Guhr',
              'https://doi.org/10.1088/1742-5468/ac99d4',
              'J. Stat. Mech. 2022, 113402 (2022)',
              'https://arxiv.org/abs/2202.07644',
              'arXiv:2202.07644',
              'In a motorway network, correlations between parts or, more precisely, between the sections of (different) motorways, are of considerable interest. Knowledge of flows and velocities on individual motorways is not sufficient, rather, their correlations determine or reflect, respectively, the functionality of and the dynamics on the network. These correlations are time-dependent as the dynamics on the network is highly non-stationary. Apart from the conceptual importance, correlations are also indispensable to detect risks of failure in a traffic network. Here, we proceed with revealing a certain hierarchy of correlations in traffic networks that is due to the presence and to the extent of collectivity. In a previous study, we focused on the collectivity motion present in the entire traffic network, i.e. the collectivity of the system as a whole. Here, we manage to subtract this dominant effect from the data and identify the subdominant collectivities which affect different, large parts of the traffic network. To this end, we employ a spectral analysis of the correlation matrix for the whole system. We thereby extract information from the virtual network induced by the correlations and map it on the true topology, i.e. on the real motorway network. The uncovered subdominant collectivities provide a new characterization of the traffic network. We carry out our study for the large motorway network of North Rhine-Westphalia, Germany.', 
              'output14');

        appendDynamicHTML(
              'traffic_flow.png',
              'Spatial Correlation Analysis of Traffic Flow on Parallel Motorways in Germany',
              'Sebastian Gartzke, Shanshan Wang, Thomas Guhr, Michael Schreckenberg',
              'https://doi.org/10.1016/j.physa.2022.127367',
              'Physica A 599, 127367 (2022)',
              'https://arxiv.org/abs/2109.04268',
              'arXiv:2109.04268',
              'With the widely used method of correlation matrix analysis, this study reveals the change of traffic states on parallel motorways in North Rhine-Westphalia, Germany. In terms of the time series of traffic flow and velocity, we carry out a quantitative analysis in correlations and reveal a high level of strongly positive traffic flow correlation and rich structural features in the corresponding correlation matrices. The strong correlation is mainly ascribed to the daily time evolution of traffic flow during the periods of rush hours and non-rush hours. In terms of free flow and congestion, the structural features are able to capture the average traffic situation we derive from our data. Furthermore, the structural features in correlation matrices for individual time periods corroborate our results from the correlation matrices regarding a whole day. The average correlations in traffic flows and velocities over all pairwise sections disclose the traffic behavior during each individual time period. Our contribution uncovers the potential application of correlation analysis on the study of traffic networks as a complex system.', 
              'output13');
      
        appendDynamicHTML(
              'NRW_map.png',
              'Collective behavior in the North Rhine-Westphalia motorway network',
              'Shanshan Wang*, Sebastian Gartzke, Michael Schreckenberg, Thomas Guhr',
              'https://doi.org/10.1088/1742-5468/ac3662',
              'J. Stat. Mech. 2021, 123401 (2021)',
              'https://arxiv.org/abs/2107.12947',
              'arXiv:2107.12947',
              'To understand the dynamics on complex networks, measurement of correlations is indispensable. In a motorway network, it is not sufficient to collect information on fluxes and velocities on all individual links, i.e. parts of the freeways between ramps and highway crosses. The interdependencies and mutual connections are also of considerable interest. We analyze correlations in the complete motorway network in North Rhine-Westphalia, the most populous state in Germany. We view the motorway network as a complex system consisting of road sections which interact via the motion of vehicles, implying structures in the corresponding correlation matrices. In particular, we focus on collective behavior, i.e. coherent motion in the whole network or in large parts of it. To this end, we study the eigenvalue and eigenvector statistics and identify significant sections in the motorway network. We find collective behavior in these significant sections and further explore its causes. We show that collectivity throughout the network cannot directly be related to the traffic states (free, synchronous and congested) in Kerner`s three-phase theory. Hence, the degree of collectivity provides a new, complementary observable to characterize the motorway network.', 
              'output12');


        appendDynamicHTML(
              'trafficstates.png',
              'Quasi-stationary states in temporal correlations for traffic systems: Cologne orbital motorway as an example',
              'Shanshan Wang*, Sebastian Gartzke, Michael Schreckenberg, Thomas Guhr',
              'https://iopscience.iop.org/article/10.1088/1742-5468/abbcd3',
              'J. Stat. Mech. 2020, 103404 (2020)',
              'https://arxiv.org/abs/2008.05530',
              'arXiv:2008.05530',
              'Traffic systems are complex systems that exhibit non-stationary characteristics. Therefore, the identification of temporary traffic states is significant. In contrast to the usual correlations of time series, here we study those of position series, revealing structures in time, i.e. the rich non-Markovian features of traffic. Considering the traffic system of the Cologne orbital motorway as a whole, we identify five quasi-stationary states by clustering reduced-rank correlation matrices of flows using the k-means method. The five quasi-stationary states with nontrivial features include one holiday state, three workday states and one mixed state of holidays and workdays. In particular, the workday states and the mixed state exhibit strongly correlated time groups shown as diagonal blocks in the correlation matrices. We map the five states onto reduced-rank correlation matrices of velocities and onto traffic states where free or congested states are revealed in both space and time. Our study opens a new perspective for studying traffic systems. This contribution is meant to provide a proof of concept and a basis for further study.', 
              'output11');


        appendDynamicHTML(
                'outgoing_connectivity.png',
                'Grasping asymmetric information in price impacts',
                'Shanshan Wang*, Sebastian Neus&uuml;&szlig;, Thomas Guhr',
                'https://doi.org/10.1140/epjb/e2018-80599-5',
                'Eur. Phys. J. B 91, 266 (2018)',
                'https://arxiv.org/abs/1710.07959',
                'arXiv:1710.07959',
                'The price impact for a single trade is estimated by the immediate response on an event time scale, i.e., the immediate change of midpoint prices before and after a trade. We work out the price impacts across a correlated financial market. We quantify the asymmetries of the distributions and of the market structures of cross-impacts, and find that the impacts across the market are asymmetric and non-random. Using spectral statistics and Shannon entropy, we visualize the asymmetric information in price impacts. Also, we introduce an entropy of impacts to estimate the randomness between stocks. We show that the useful information is encoded in the impacts corresponding to small entropy. The stocks with large number of trades are more likely to impact others, while the less traded stocks have higher probability to be impacted by others.', 
                'output10');

      appendDynamicHTML(
              'distribution.png',
              'Statistical properties of market collective responses',
              'Shanshan Wang*, Sebastian Neus&uuml;&szlig;, Thomas Guhr',
              'https://doi.org/10.1140/epjb/e2018-80665-0',
              'Eur. Phys. J. B 91, 191 (2018)',
              'https://arxiv.org/abs/1711.07630',
              'arXiv:1711.07630',
              'We empirically analyze the price and liquidity responses to trade signs, traded volumes and signed traded volumes. Utilizing the singular value decomposition, we explore the internal connections of price responses and of liquidity responses across the whole market. The statistical characteristics of their singular vectors are well described by the t location-scale distribution. Furthermore, we discuss the relation between prices and liquidity with respect to their overlapping factors. The factors of price and liquidity changes are non-random when these factors are related to the traded volumes. This means that the traded volumes play a critical role in the price change induced by the liquidity change. In contrast, the two kinds of factors are weakly overlapping when they are related to the trade signs and signed traded volumes. Hence, an imbalance of liquidity is related to the price change.', 
              'output9');
      
        appendDynamicHTML(
              'copula.png',
              'Local fluctuations of the signed traded volumes and the dependencies of demands: a copula analysis',
              'Shanshan Wang*, Thomas Guhr',
              'https://doi.org/10.1088/1742-5468/aab01c',
              'J. Stat. Mech. Theory Exp. 2018, 033407 (2018)',
              'https://arxiv.org/abs/1706.09240',
              'arXiv:1706.09240',
              'We investigate how the local fluctuations of the signed traded volumes affect the dependence of demands between stocks. We analyze the empirical dependence of demands using copulas and show that they are well described by a bivariate $\mathcal{K}$  copula density function. We find that large local fluctuations strongly increase the positive dependence but lower slightly the negative one in the copula density. This interesting feature is due to cross-correlations of volume imbalances between stocks. Also, we explore the asymmetries of tail dependencies of the copula density, which are moderate for the negative dependencies but strong for the positive ones. For the latter, we reveal that large local fluctuations of the signed traded volumes trigger stronger dependencies of demands than of supplies, probably indicating a bull market with persistent raising of prices.', 
              'output8');


        appendDynamicHTML(
              'average_responses.png',
              'Microscopic understanding of cross-responses between stocks: a two-component price impact model',
              'Shanshan Wang*, Thomas Guhr',
              'https://doi.org/10.1142/S2382626618500090',
              'Market Microstructure and Liquidity 03, 1850009 (2017)',
              'https://arxiv.org/abs/1609.04890',
              'arXiv:1609.04890',
              'We construct a price impact model between stocks in a correlated market. For the price change of a given stock induced by the short-term liquidity of this stock itself and of the information about other stocks, we introduce a self- and a cross-impact function of the time lag. We model the average cross-response functions for individual stocks employing the impact functions of the time lag, the impact functions of traded volumes and the trade-sign correlators. We further quantify and interpret the price impacts of time lag in terms of temporary and permanent components. To support our model, we also analyze empirical data, in particular the memory properties of the sign self- and average cross-correlators. The relation between the average cross-responses and the traded volumes which are smaller than their average is of power-law form.', 
              'output7');


        appendDynamicHTML(
                'trading_strategy.png',
                'Trading strategies for stock pairs regarding to the cross-impact cost',
                'Shanshan Wang*',
                '',
                '',
                'https://arxiv.org/abs/1701.03098',
                'arXiv:1701.03098 (2017)',
                'We extend the framework of trading strategies of Gatheral [2010] from single stocks to a pair of stocks. Our trading strategy with the executions of two round-trip trades can be described by the trading rates of the paired stocks and the ratio of their trading periods. By minimizing the potential cost arising from cross-impacts, i.e., the price change of one stock due to the trades of another stock, we can find out an optimal strategy for executing a sequence of trades from different stocks. We further apply the model of the strategy to a specific case, where we quantify the cross-impacts of traded volumes and of time lag with empirical data for the computation of costs. We thus picture the influence of cross-impacts on the trading strategy.', 
                'output6');

                appendDynamicHTML(
                  'active_response.png',
                  'Average cross-responses in correlated financial markets',
                  'Shanshan Wang*, Rudi Sch&auml;fer, Thomas Guhr',
                  'https://doi.org/10.1140/epjb/e2016-70137-0',
                  'Eur. Phys. J. B 89, 207 (2016)',
                  'https://arxiv.org/abs/1603.01586',
                  'arXiv:1603.01586',
                  'There are non-vanishing price responses across different stocks in correlated financial markets, reflecting non-Markovian features. We further study this issue by performing different averages, which identify active and passive cross-responses. The two average cross-responses show different characteristic dependences on the time lag. The passive cross-response exhibits a shorter response period with sizeable volatilities, while the corresponding period for the active cross-response is longer. The average cross-responses for a given stock are evaluated either with respect to the whole market or to different sectors. Using the response strength, the influences of individual stocks are identified and discussed. Moreover, the various cross-responses as well as the average cross-responses are compared with the self-responses. In contrast to the short-memory trade sign cross-correlations for each pair of stocks, the sign cross-correlations averaged over different pairs of stocks show long memory.', 
                  'output5');
    
            appendDynamicHTML(
                  'distribution_signed_return.png',
                  'Cross-response in correlated financial markets: individual stocks',
                  'Shanshan Wang*, Rudi Sch&auml;fer, Thomas Guhr',
                  'https://doi.org/10.1140/epjb/e2016-60818-y',
                  'Eur. Phys. J. B 89, 10 (2016)',
                  'https://arxiv.org/abs/1603.01580',
                  'arXiv:1603.01580',
                  'Previous studies of the stock price response to trades focused on the dynamics of single stocks, i.e. they addressed the self-response. We empirically investigate the price response of one stock to the trades of other stocks in a correlated market, i.e. the cross-responses. How large is the impact of one stock on others and vice versa? – This impact of trades on the price change across stocks appears to be transient instead of permanent as we discuss from the viewpoint of market efficiency. Furthermore, we compare the self-responses on different scales and the self- and cross-responses on the same scale. We also find that the cross-correlation of the trade signs turns out to be a short-memory process.', 
                  'output4');
          
            appendDynamicHTML(
                  'active_response_AAPL.png',
                  'Price response in correlated financial markets: empirical results',
                  'Shanshan Wang*, Rudi Sch&auml;fer, Thomas Guhr',
                  '',
                  '',
                  'https://arxiv.org/abs/1510.03205',
                  'arXiv:1510.03205 (2015)',
                  'Previous studies of the stock price response to individual trades focused on single stocks. We empirically investigate the price response of one stock to the trades of other stocks. How large is the impact of one stock on others and vice versa? -- This impact of trades on the price change across stocks appears to be transient instead of permanent. Performing different averages, we distinguish active and passive responses. The two average responses show different characteristic dependences on the time lag. The passive response exhibits a shorter response period with sizeable volatilities, and the active response a longer period. We also study the response for a given stock with respect to different sectors and to the whole market. Furthermore, we compare the self-response with the various cross-responses. The correlation of the trade signs is a short-memory process for a pair of stocks, but it turns into a long-memory process when averaged over different pairs of stocks.', 
                  'output3');
    
    
            appendDynamicHTML(
                  'evaluation_points.png',
                  'Geometric effect on the vortex configuration and motion in mesoscopic superconducting cylinders',
                  'Shan-Shan Wang, Guo-Qiao Zha',
                  'https://doi.org/10.1142/S0217979215500095',
                  'Int. J. Mod. Phys. B 29, 1550009 (2015)',
                  '',
                  '',
                  'Based on the time-dependent Ginzburg–Landau equations, we study numerically the vortex configuration and motion in mesoscopic superconducting cylinders. We find that the effects of the geometric symmetry of the system and the noncircular multiply-connected boundaries can significantly influence the steady vortex states and the vortex matter moving. For the square cylindrical loops, the vortices can enter the superconducting region in multiples of 2 and the vortex configuration exhibits the axial symmetry along the square diagonal. Moreover, the vortex dynamics behavior exhibits more complications due to the existed centered hole, which can lead to the vortex entering from different edges and exiting into the hole at the phase transitions.', 
                  'output2');
    
    
            appendDynamicHTML(
                    'order_parameter_and_current.png',
                    'Geometric effect on the phase transition in mesoscopic loops threaded by an Aharonov-Bohm flux',
                    'Guo-Qiao Zha, Shan-Shan Wang, Jing-Chao Wang, Shi-Ping Zhou',
                    'https://doi.org/10.1063/1.4742051',
                    'J. Appl. Phys. 112, 033907 (2012)',
                    '',
                    '',
                    'The quantum phase transition in mesoscopic noncircular loops threaded by an Aharonov-Bohm flux is systematically investigated by numerically solving the Bogoliubov-de Gennes equations self-consistently. We focus on the magnetic flux dependence of the s-wave superconducting order parameter and current in symmetric and asymmetric samples. The influence of surface indentation or bulge defects positioned at the inner or outer edge of the sample on the periodic oscillation is also discussed. We find various hc/e-flux periodicity evolution patterns, and the periodic phase transitions between the superconducing state and the resistive/normal state are demonstrated besides the superconducing state transitions. Our investigation may shed new light on material engineering and provide important insights to designing superconducting quantum devices.', 
                    'output1');
    
          
    };
