  /***
   *     @author Victor Chimenti, MSCS-SE '20
   *     @file v9-organizer-blogwithimage.js
   *     v9/organizer/blogwithimage
   *
   *     This content type will work in conjunction with the Organizer and each item
   *     will contain one article.
   *
   *     Document will write once when the page loads
   *
   *     @version 4.93
   */




  try {

      /***
       *  default declarations
       * 
       * */
      var name = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
      var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Title' output='normal' display_field='value' />");
      var articleSummary = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Summary' output='normal' display_field='value' />");
      var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Publish Date' output='normal' date_format='MMMM d, yyyy' />");
      var articleImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Image' output='normal' formatter='path/*' />");
      var articleImageAlt = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='media' name='Image' attribute='description' />");
      var externalLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link' output='normal' modifiers='striptags,htmlentities' />");
      var externalLinkText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link Text' output='normal' modifiers='striptags,htmlentities' />");
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
      var summaryString = '<p class="card-text">' + articleSummary + '</p>';
      var dateString = '<p class="card-text"><em class="publishDate text-muted">' + publishDate + '</em></p>';
      var externalLinkString = '<span class="externalLink hidden">No Proper Link Provided</span>';
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
      if (externalLink != "" && externalLinkText != "") {
          externalLinkString = '<span class="externalLink"><a href="' + externalLink + '" title="' + externalLinkText + '" target="_blank"><em>' + externalLinkText + '</em></a></span>';
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
       *  write document once
       * 
       * */
      document.write(beginningHTML);
      document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, titleLink));
      document.write(openRow);
      document.write(openImageWrapper);
      document.write(imageString);
      document.write(closeImageWrapper);
      document.write(openBodyWrapper);
      document.write(openSummaryWrapper);
      document.write(externalLinkString);
      document.write(summaryString);
      document.write(dateString);
      document.write(readMoreString);
      document.write(closeSummaryWrapper);
      document.write(closeBodyWrapper);
      document.write(closeRow);
      document.write(endingHTML);




  } catch (err) {
      document.write(err.message);
  }