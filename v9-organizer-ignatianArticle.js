  /***
   *     @author Victor Chimenti, MSCS-SE '20
   *     @file v9-organizer-ignatianArticle.js
   *     v9/organizer/ignatianArticle
   *
   *     This content type will work in conjunction with the Organizer and each item
   *     will contain one article.
   *
   *     Document will write once when the page loads
   *
   *     @version 5.8
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
    var externalLinkText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link Text' output='normal' modifiers='striptags,htmlentities' />");
    var journal = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Journal' output='normal' modifiers='striptags,htmlentities' />");
    var topics = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Topic' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
    var topicSetting = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Setting' output='normal' display_field='value' modifiers='striptags,htmlentities' />");
    var author = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Author' output='normal' modifiers='striptags,htmlentities' />");
    var articleFullBody = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Body' output='normal' display_field='value' />");
    var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' use-element='true' filename-element='Article Title' modifiers='striptags,htmlentities' />");
    var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");


      

    /***
     *  default initializations
     * 
     * */
    var beginningHTML = '<div class="newsItemWrapper card" id="id' + contentID + '" aria-label="' + articleTitle + '"><div class="newsItem standardContent">';
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
    var summaryString = '<p class="card-text articleSummary">' + articleSummary + '</p>';
    var dateString = '<p class="card-text fw-bold font-weight-bold publishDate"><strong class="dateLabel">Year:</strong> ' + publishDate + '</p>';
    var externalLinkString = '<span class="externalLink hidden">No Proper Link Provided</span>';
    var listOfTags = '<div class="newsroomArticle tags hidden visually-hidden"><ul></ul></div>';
    var listItems = '<li class="tag hidden visually-hidden"></li>';
    var byLine = '<p class="card-text text-muted font-weight-light author hidden visually-hidden">No Author Provided</p>';
    var topicSettingString = '<p class="card-text setting hidden visually-hidden">No Setting Provided</p>';
    var readMoreString = '<p class="readmore hidden visually-hidden">No Article Body Entered</p>';




    /***
     *  check for fulltext content
     * 
     * */
    if (articleFullBody != "") {
        titleLink = '<h3><a href="' + fullTextLink + '" title="Read the full post ' + articleTitle + '">' + articleTitle + '</a></h3>';
        readMoreString = '<p class="readmore"><a href="' + fullTextLink + '" title="Read the full post ' + articleTitle + '">Read More <span class="sr-only sr-only-focusable">about ' + articleTitle + '</span></a></p>';
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
        byLine = '<p class="card-text text-muted font-weight-light author"><small>By ' + author + '</small></p>';
    }


    /***
     *  parse the list of tags, add <li> tags
     * 
     * */
    if (topics != "") {
        var arrayOfTags = topics.split(',');
        for (let i = 0; i < arrayOfTags.length; i++) {
            let currentItem = arrayOfTags[i].trim();
            listItems += '<li class="tag">' + currentItem + '</li>';
        }

        // Print any tags that were selected
        listOfTags = '<div class="newsroomArticle tags"><ul class="categories">' + listItems + '</ul></div>';
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
    document.write(openSummaryWrapper);
    document.write(externalLinkString);
    document.write(byLine);
    document.write(summaryString);
    document.write(dateString);
    document.write(listOfTags);
    document.write(readMoreString);
    document.write(closeSummaryWrapper);
    document.write(closeBodyWrapper);
    document.write(closeRow);
    document.write(endingHTML);




  } catch (err) {
      document.write(err.message);
  }