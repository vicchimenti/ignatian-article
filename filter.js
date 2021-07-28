<script>
/***
*   @author Victor Chimenti, MSCS-SE '20
*   @file filter.js
*
*   jQuery
*   This script searches the Ignatian Article Application content items for matches to the
*   user selected search parameters in the filter field dropdown menus
*
*   @version 5.1
*/






$(function () {
    // After the DOM is ready, Wait until the window loads
    $(window).load(function () {
        // Once window loads set a timeout delay
        setTimeout(function () {




            //** global array holds list of content items that will render after filter selection **//
            var visibleItems = [];
            var parseItems = {};



            
            //   ***   Process and Parse Visible Items   ***   //
            $(function () {
                let parseItemsToDisplay = function() {
                    // assign array of currently visible content items
                    visibleItems = $('.ignatianArticle ').not('.hideByElement, .hideByLevel, hideByText');
                    // check to see if array is empty
                    if (visibleItems.length == 0) {
                        // when array is empty show the results message
                        $('.noResultsToShow').removeClass('hideResultsMessage');
                    } else {
                        // when array has content items suppress the results message
                        $('.noResultsToShow').addClass('hideResultsMessage');
                    }
                };
                parseItems.process = parseItemsToDisplay;
            });
            
            
            
            
            //   ***   Keyword Search   ***   //
            $(function () {
                // scan the keyword each character the user inputs
                $('#keystroke_filter').on('keyup', function () {
                    // Assign Search Key
                    let keyword = $(this).val().toLowerCase();
                    // filter the items for the input key
                    $(function () {
                        $('.ignatianArticle ').filter(function () {
                            // when the search key is not present in the item then hide the item
                            $(this).toggleClass('hideByText', !($(this).text().toLowerCase().indexOf(keyword) > -1));
                        });
                    });
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




            //   ***   Element Filter   ***   //
            $(function () {
                // When the Dropdown Menu Selector Element Types Change - Execute change function
                $('#SelectBox-ByElement').change(function () {
                    // Assign Search Key
                    let typeKey = $(this).val();
                    // If Search Key is Not Null then Compare to the Type List Items in Each Content Item
                    if (typeKey) {
                        // search tags in each item
                        $('ul.categories').filter(function (i, e) {
                            let typeValue = $(this).text();
                            // Check to see if the Key and Value contain a Match
                            if (typeValue.match(typeKey)) {
                                $(this).parents('.ignatianArticle ').removeClass('hideByElement');
                            } else {
                                $(this).parents('.ignatianArticle ').addClass('hideByElement');
                            }
                        });
                        // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.ignatianArticle ').removeClass('hideByElement');
                    }
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




            //   ***   Level Filter   ***   //
            $(function () {
                // When the Dropdown Menu Selector Level Change - Execute change function
                $('#SelectBox-ByLevel').change(function () {
                    // Assign Search Key
                    let typeKey = $(this).val();
                    // If Search Key is Not Null then Compare to the Type List Items in Each Content Item
                    if (typeKey) {
                        // search tags in each item
                        $('ul.categories').filter(function (i, e) {
                            let typeValue = $(this).text();
                            // Check to see if the Key and Value contain a Match
                            if (typeValue.match(typeKey)) {
                                $(this).parents('.ignatianArticle ').removeClass('hideByLevel');
                            } else {
                                $(this).parents('.ignatianArticle ').addClass('hideByLevel');
                            }
                        });
                        // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.ignatianArticle ').removeClass('hideByLevel');
                    }
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




        }, 10);
    });
});
</script>