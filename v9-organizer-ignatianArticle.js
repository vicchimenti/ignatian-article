  /***
   *     @author Victor Chimenti, MSCS
   *     @file v9-organizer-ignatianArticle.js
   *     v9/organizer/ignatianArticle
   *
   *     This content type will work in conjunction with the Organizer and each item
   *     will contain one article.
   *
   *     Document will write once when the page loads
   *
   *     @version 6.25
   */




  try {

    /***
     *  default declarations
     * 
     * */
    var name = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Title' output='normal' display_field='value' />");
    var articleSummary = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Summary' output='normal' display_field='value' />");
    var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Publish Date' output='normal' date_format='yyyy' />");
    var articleImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Image' output='normal' formatter='path/*' />");
    var articleImageAlt = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='media' name='Image' attribute='description' />");
    var externalLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link' output='normal' modifiers='striptags,htmlentities' />");
    var journal = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Journal' output='normal' modifiers='striptags,htmlentities' />");
    var topics = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Topic' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
    var topicSetting = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Setting' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
    var courses = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
    var level = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Level' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
    var program = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Program' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
    var resource = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Resource' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
    var author = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Author' output='normal' modifiers='striptags,htmlentities' />");
    var articleFullBody = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Body' output='normal' display_field='value' />");
    var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' use-element='true' filename-element='Article Title' modifiers='striptags,htmlentities' />");
    var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");

      


    /***
     *  default initializations
     * 
     * */
    var beginningHTML = '<div class="newsItemWrapper ignatianArticle card" id="id' + contentID + '" aria-label="' + articleTitle + '"><div class="newsItem standardContent">';
    var endingHTML = '</div></div>';
    var openRow = '<div class="row no-gutters">';
    var closeRow = '</div>';
    var titleLink = '<h3 class="card-title">' + articleTitle + '</h3>';
    var openBodyWrapper = '<div class="col-md-8">';
    var closeBodyWrapper = '</div>';
    var openSummaryWrapper = '<div class="articleSummary card-body">';
    var closeSummaryWrapper = '</div>';
    var openImageWrapper = '<div class="newsImage col-md-4 hidden visually-hidden">';
    var closeImageWrapper = '</div>';
    var imageString = '<img class="hidden visually-hidden" />';
    var summaryString = '<p class="card-text summaryText">' + articleSummary + '</p>';
    var dateString = '<p class="card-text fw-bold font-weight-bold publishDate"><strong class="articleLabel">Year: </strong>' + publishDate + '</p>';
    var externalLinkString = '<span class="externalLink hidden">No Proper Link Provided</span>';
    var listOfTags = '<div class="newsroomArticle tags pedagogy hidden visually-hidden"><ul class="categories"><li class="tag">No Pedagogy Provided</li></ul></div>';
    var listOfCourses = '<div class="newsroomArticle tags courses hidden visually-hidden"><ul class="categories"><li class="tag">No Course Type Provided</li></ul></div>';
    var listOfLevels = '<div class="newsroomArticle tags levels hidden visually-hidden"><ul class="categories"><li class="tag">No Level Provided</li></ul></div>';
    var byLine = '<p class="card-text text-muted font-weight-light author hidden visually-hidden">No Author Provided</p>';
    var topicSettingString = '<p class="card-text setting hidden visually-hidden">No Setting Provided</p>';
    var resourceString = '<p class="card-text resource hidden visually-hidden">No Resource Provided</p>';
    var programString = '<p class="card-text program hidden visually-hidden">No Program Provided</p>';




    /***
     *  check for fulltext content
     * 
     * */
    if (articleFullBody != "") {
        titleLink = '<h3><a href="' + fullTextLink + '" title="Read the full post ' + articleTitle + '">' + articleTitle + '</a></h3>';
    }




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
        openImageWrapper = '<div class="col-md-4">';
        imageString = '<img src="' + articleImage + '" class="articleImage card-img" alt="' + articleImageAlt + '" />';
    }




    /***
     *  Parse for author
     * 
     * */
    if (author != "") {
        byLine = '<p class="card-text author"><strong>By ' + author + '</strong></p>';
    }




    /***
     *  Parse for Setting
     * 
     * */
    if (topicSetting != "") {
        topicSettingString = '<p class="card-text setting"><strong class="articleLabel">Setting: </strong>' + topicSetting + '</p>';
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
        listOfTags = '<div class="newsroomArticle tags pedagogy"><strong class="card-text articleLabel">Ignatian Pedagogy: </strong><ul class="categories">' + listItems + '</ul></div>';
    }




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