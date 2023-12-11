// JavaScript function to generate HTML content based on a template
    function generateDynamicHTML(imageurl1,image1,imageurl2,image2,imageurl3,image3,imageurl4,image4) {

      var template = `
      <div class="row">
          <div class="col-md-3  image-container" >
              <a href="${imageurl1}">
                  <img src="${image1}" class="imgstyle2" alt="">
                  <div class="hover-text">click and view matlab code</div>
              </a> 
          </div>
          <div class="col-md-3  image-container" >
              <a href="${imageurl2}">
                  <img src="${image2}" class="imgstyle2" alt="">
                  <div class="hover-text">click and view matlab code</div>
              </a> 
          </div>
          <div class="col-md-3  image-container" >
              <a href="${imageurl3}">
                  <img src="${image3}" class="imgstyle2" alt="">
                  <div class="hover-text">click and view matlab code</div>
              </a> 
          </div>
          <div class="col-md-3  image-container" >
              <a href="${imageurl4}">
                  <img src="${image4}" class="imgstyle2" alt="">
                  <div class="hover-text">click and view matlab code</div>
              </a> 
          </div>
      </div>
      `;
      return template;
    }

    // JavaScript function to append HTML content to a specified element
    function appendDynamicHTML(imageurl1,image1,imageurl2,image2,imageurl3,image3,imageurl4,image4, targetElementId) {
      var targetElement = document.getElementById(targetElementId);
      if (targetElement) {
        targetElement.innerHTML += generateDynamicHTML(imageurl1,image1,imageurl2,image2,imageurl3,image3,imageurl4,image4);
      } else {
        console.error('Target element not found.');
      }
    }

    // Call the function when the page loads
    window.onload = function() {
      /*
        appendDynamicHTML(
          imageurl1,
          image1,
          imageurl2,
          image2,
          imageurl3,
          image3,
          imageurl4,
          image4,
          targetElementId);
        */
          appendDynamicHTML(
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/14262',
            'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/16497/animation.gif?a=true',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/16054',
            'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/19994/animation.gif?a=true',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/15432',
            'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/18812/animation.gif?a=true',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/14072',
            'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/16117/animation.gif?a=true',
            'output9');
          
          appendDynamicHTML(
              'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/14947',
              'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/17857/animation.gif?a=true',
              'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/14972',
              'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/17907/animation.gif?a=true',
              'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/14982',
              'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/17927/animation.gif?a=true',
              'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/15437',
              'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/18822/animation.gif?a=true',
              'output8');
          appendDynamicHTML(
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/16059',
            'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/20004/animation.gif?a=true',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/15774',
            'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/19504/animation.gif?a=true',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/14112',
            'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/16197/animation.gif?a=true',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/6/entries/14107',
            'https://de.mathworks.com/responsive_image/300/300/0/0/0/cache/matlabcentral/communitycontests/uploaded_files/16187/animation.gif?a=true',
            'output7');

          appendDynamicHTML(
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11963',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12663/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11968',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12668/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11973',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12673/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11988',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12688/image.png',
            'output6');

          appendDynamicHTML(
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11698',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12398/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11858',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12558/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11908',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12608/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11918',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12618/image.png',
            'output5');

          appendDynamicHTML(
          'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/12363',
          'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/13068/image.png',
          'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/12353',
          'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/13058/image.png', 
          'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11843',
          'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12543/image.png',
          'https://de.mathworks.com/matlabcentral/communitycontests/contests/5/entries/11923',
          'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/12623/image.png',
          'output4');
          
          appendDynamicHTML(
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/4/entries/4101',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/4231/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/4/entries/4326',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/4461/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/4/entries/4111',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/4241/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/4/entries/4531',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/4686/image.png',
            'output3');
          appendDynamicHTML(
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/4/entries/3951',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/4061/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/4/entries/3956',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/4066/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/4/entries/3976',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/4091/image.png',
            'https://de.mathworks.com/matlabcentral/communitycontests/contests/4/entries/4331',
            'https://www.mathworks.com/matlabcentral/communitycontests/uploaded_files/4466/image.png',
            'output2');

    };