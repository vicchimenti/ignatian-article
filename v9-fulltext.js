  /***
   *     @author Victor Chimenti, MSCS-SE '20
   *     @file v9-fulltext.js
   *     v9/fulltext
   *
   *     Document will write once when the page loads
   *
   *     @version 6.0
   */




  try {

      /***
       *  default declarations
       * 
       * */
      var name = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
      var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Title' output='normal' display_field='value' />");
      var articleCaption = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Caption' output='normal' display_field='value' />");
      var articleAuthor = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Author' output='normal' display_field='value' />");
      var articlePhotoCredit = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Photography By' output='normal' display_field='value' />");
      var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Publish Date' output='normal' date_format='yyyy' />");
      var articleImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Image' output='normal' formatter='path/*' />");
      var articleImageAlt = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='media' name='Image' attribute='description' />");
      var externalLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link' output='normal' modifiers='striptags,htmlentities' />");
     
      var journal = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Journal' output='normal' modifiers='striptags,htmlentities' />");
    //   var externalLinkText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Journal' output='normal' modifiers='striptags,htmlentities' />");
    
      var topics = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Topic' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
      var topicSetting = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Setting' output='normal' display_field='value' modifiers='striptags,htmlentities' />");  
      
      var courses = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
      var level = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Level' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
      var program = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Program' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
      var resource = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Resource' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
      var author = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Author' output='normal' modifiers='striptags,htmlentities' />");

      var articleFullBody = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Body' output='normal' display_field='value' />");
      var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");
      var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");


  


      /***
       *  default initializations
       * 
       * */
      var beginningHTML = '<div class="newsArticleWrapper contentItem ignatianArticle card border-0" id="id' + contentID + '" aria-label="' + articleTitle + '" data-position-default="ZoneA" data-position-selected="ZoneA"><div class="article standardContent">';
      var endingHTML = '</div></div>';
      var titleLink = '<div class="card-header border-0"><h1 id="pageTitle">' + articleTitle + '</h1></div>';
      var openBodyWrapper = '<div class="articleBody card-body border-0">';
      var closeBodyWrapper = '</div>';
      var openImageWrapper = '<div class="imageWrapper hidden visually-hidden">';
      var closeImageWrapper = '</div>';
      var openPublishWrapper = '<div class="publishDetails">';
      var closePublishWrapper = '</div>';
      var articleCaptionString = '<h2 class="card-title hidden visually-hidden">No Caption Provided</h2>';
      var articleAuthorString = '<p class="card-text articleAuthor credits hidden visually-hidden">No Author Provided</p>';
      var articlePhotoCreditString = '<p class="card-text articlePhotoCredit credits hidden visually-hidden">No Photographer Provided</p>';
      var imageString = '<img class="hidden visually-hidden" />';
      var dateString = '<p class="publishDate card-text"><small>' + publishDate + '</small></p>';
      var externalLinkString = '<p class="externalLink hidden">No Proper Link Provided</p>';

      var listOfTags = '<div class="newsroomArticle tags pedagogy hidden visually-hidden"><ul class="categories"><li class="tag">No Pedagogy Provided</li></ul></div>';
      var listOfCourses = '<div class="newsroomArticle tags courses hidden visually-hidden"><ul class="categories"><li class="tag">No Course Type Provided</li></ul></div>';
      var listOfLevels = '<div class="newsroomArticle tags levels hidden visually-hidden"><ul class="categories"><li class="tag">No Level Provided</li></ul></div>';
      var byLine = '<p class="card-text text-muted font-weight-light author hidden visually-hidden">No Author Provided</p>';
      var resourceString = '<p class="card-text resource hidden visually-hidden">No Resource Provided</p>';
      var programString = '<p class="card-text program hidden visually-hidden">No Program Provided</p>';


      var topicSettingString = '<p class="card-text setting hidden visually-hidden">No Setting Provided</p>';



      var openRow = '<div class="row no-gutters">';
      var closeRow = '</div>';


  



      /***
       *  Parse for external link
       * 
       * */
    //   if (externalLink != "" && externalLinkText != "") {
    //       externalLinkString = '<p class="externalLink card-text"><a href="' + externalLink + '" title="' + externalLinkText + '" target="_blank" class="card-link"><em>' + externalLinkText + '</em></a></p>';
    //   }


    /***
     *  Parse for external link
     * 
     * */
    if (externalLink != "" && journal != "") {
        externalLinkString = '<span class="externalLink"><a href="' + externalLink + '" title="' + journal + '" target="_blank"><em>' + journal + '</em></a></span>';
    }


    /***
     *  Parse for image
     * 
     * */
    if (articleImage != "") {
        openImageWrapper = '<div class="imageWrapper">';
        imageString = '<img src="' + articleImage + '" class="articleImage card-img" alt="' + articleImageAlt + '" />';
    }



    /***
     *  Parse for caption
     * 
     * */
    if (articleCaption != "") {
        articleCaptionString = '<h2 class="card-title articleCaption">' + articleCaption + '</h2>';
    }



    /***
     *  Parse for author
     * 
     * */
    if (articleAuthor != "") {
        articleAuthorString = '<p class="card-text articleAuthor credits">By ' + articleAuthor + '</p>';
    }



    /***
     *  Parse for photo credit
     * 
     * */
    if (articlePhotoCredit != "") {
        articlePhotoCreditString = '<p class="card-text articlePhotoCredit credits">Photography by ' + articlePhotoCredit + '</p>';
    }



    /***
     *  Parse for Resource
     * 
     * */
    if (resource != "") {
        resourceString = '<p class="card-text resource"><strong class="articleLabel">Activity Type: </strong><span class="resourceType">' + resource + '</span></p>';
    }



    /***
     *  Parse for Program Type
     * 
     * */
    if (program != "") {
        programString = '<p class="card-text program"><strong class="articleLabel">Program Type: </strong><span class="programType">' + program + '</span></p>';
    }





    /***
     *  Parse for Setting
     * 
     * */
    if (topicSetting != "") {
        topicSettingString = '<p class="card-text setting"><strong class="articleLabel">Setting:</strong> ' + topicSetting + '</p>';
    }







        /***
         *  parse the list of topics tags, add <li> tags
         * 
         * */
         if (topics != "") {
    
            let listItems = '';
            let arrayOfTags = topics.split(',');
            for (let i = 0; i < arrayOfTags.length; i++) {
                listItems += '<li class="tag">' + arrayOfTags[i].trim() + '</li>';
            }
    
            // Print any tags that were selected
            listOfTags = '<div class="newsroomArticle tags pedagogy"><strong class="card-text articleLabel">Ignatian Pedagogy Element: </strong><ul class="categories">' + listItems + '</ul></div>';
        }

    
    
    
    

    
    
    
    

    
    
    
    

    
    
    
    

    
    
    

    
    
    
    

    
    
    
    
        /***
         *  parse the list of level tags, add <li> tags
         * 
         * */
        if (level != "") {
    
            let levelItems = '';
            let arrayOfLevels = level.split(',');
            for (let i = 0; i < arrayOfLevels.length; i++) {
                levelItems += '<li class="tag">' + arrayOfLevels[i].trim() + '</li>';
            }
    
            // Print any tags that were selected
            listOfLevels = '<div class="newsroomArticle tags levels"><strong class="card-text articleLabel">Level: </strong><ul class="categories">' + levelItems + '</ul></div><br>';
        }
    
    
    
    
        /***
         *  parse the list of courses tags, add <li> tags
         * 
         * */
        if (courses != "") {
    
            let courseItems = '';
            let arrayOfCourses = courses.split(',');
            for (let i = 0; i < arrayOfCourses.length; i++) {
                courseItems += '<li class="tag">' + arrayOfCourses[i].trim() + '</li>';
            }
    
            // Print any tags that were selected
            listOfCourses = '<div class="newsroomArticle tags courses"><strong class="card-text articleLabel">Course: </strong><ul class="categories">' + courseItems + '</ul></div><br>';
        }
    
    
    
    





      /***
       *  write document once
       * 
       * */
      document.write(beginningHTML);
      document.write(anchorTag);
      document.write(titleLink);
      document.write(openImageWrapper);
      document.write(imageString);
      document.write(closeImageWrapper);
      document.write(openBodyWrapper);
      document.write(articleCaptionString);
      document.write(articleAuthorString);
      document.write(articlePhotoCreditString);
      document.write(openPublishWrapper);
      document.write(externalLinkString);
      document.write(dateString);
      document.write(topicSettingString);
      document.write(listOfTags);  
      document.write(closePublishWrapper);
      document.write(articleFullBody);
      document.write(closeBodyWrapper);
      document.write(endingHTML);





          /***
     *  default declarations
     * 
     * */

      


    /***
     *  default initializations
     * 
     * */









    /***
     *  write document once
     * 
     * */
    document.write(beginningHTML);
    document.write(titleLink);
    document.write(openRow);
    document.write(openImageWrapper);
    document.write(imageString);
    document.write(closeImageWrapper);
    document.write(openBodyWrapper);
    document.write(externalLinkString);
    document.write(openSummaryWrapper);
    document.write(byLine);
    document.write(summaryString);
    document.write(dateString);
    document.write(topicSettingString);
    document.write(resourceString);
    document.write(programString);
    document.write(listOfLevels);
    document.write(listOfCourses);
    document.write(listOfTags);
    document.write(closeSummaryWrapper);
    document.write(closeBodyWrapper);
    document.write(closeRow);
    document.write(endingHTML);


  } catch (err) {
      document.write(err.message);
  }