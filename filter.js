<script>
/***
*   @author Victor Chimenti, MSCS-SE '20
*   @file filter.js
*
*   jQuery
*   This script searches the Ignatian Article Application content items for matches to the
*   user selected search parameters in the filter field dropdown menus
*
*   @version 5.3
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
                    visibleItems = $('.ignatianArticle ').not('hideByElement, hideByLevel, hideByCourse, hideByResource, hideByText');
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
                        $('div.pedagogy ul.categories').filter(function (i, e) {
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
                        $('div.levels ul.categories').filter(function (i, e) {
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




            //   ***   Course Filter   ***   //
            $(function () {
                // When the Dropdown Menu Selector Course Type Changes - Execute change function
                $('#SelectBox-ByCourse').change(function () {
                    // Assign Search Key
                    let typeKey = $(this).val();
                    // If Search Key is Not Null then Compare to the Type List Items in Each Content Item
                    if (typeKey) {
                        // search tags in each item
                        $('div.courses ul.categories').filter(function (i, e) {
                            let typeValue = $(this).text();
                            // Check to see if the Key and Value contain a Match
                            if (typeValue.match(typeKey)) {
                                $(this).parents('.ignatianArticle ').removeClass('hideByCourse');
                            } else {
                                $(this).parents('.ignatianArticle ').addClass('hideByCourse');
                            }
                        });
                        // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.ignatianArticle ').removeClass('hideByCourse');
                    }
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




            //   ***   Resource Filter   ***   //
            $(function () {
                // When the Dropdown Menu Selector Resource Changes - Execute change function
                $('#SelectBox-ByResource').change(function () {
                    // Assign Search Key
                    let typeKey = $(this).val();
                    // If Search Key is Not Null then Compare to the Type List Items in Each Content Item
                    if (typeKey) {
                        // search tags in each item
                        $('span.resourceType').filter(function (i, e) {
                            let typeValue = $(this).text();
                            // Check to see if the Key and Value contain a Match
                            if (typeValue.match(typeKey)) {
                                $(this).parents('.ignatianArticle').removeClass('hideByResource');
                            } else {
                                $(this).parents('.ignatianArticle').addClass('hideByResource');
                            }
                        });
                        // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.ignatianArticle ').removeClass('hideByResource');
                    }
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });


            //   ***   Resource/Activity Filter   ***   //
            $(function () {

                // When the Radio Checkbox Selector for Resource/Activity Changes - Execute change function 

                $('#SelectBox-ByActivity').change(function () {
                    // initialize an array of keys to hold each check box selected
                    let resourceKeys = [];
                    resourceKeys[0] = -1;
                    $('input[name=SelectBox-ByActivity]:checked').each(function (item) {
                        resourceKeys[item] = $(this).val();
                    });
                    // If Search Key array has at least one valid value then Compare to the Each Content Item in year
                    if (resourceKeys[0] != -1) {
                        $('span.resourceType').filter(function (i, e) {
                            // allow any to show all
                            // let any = "any";
                            let resourceValue = $(this).text();
                            // when the any radio is checked, show all items
                            if (resourceValue === 'any') {
                                $('.ignatianArticle').removeClass('hideByResource');
                            } else {
                                // set state to hidden for all items
                                $(this).parents('.ignatianArticle').addClass('hideByResource');
                                // Check to see if any Key is a match with the current Value
                                for (let index = 0; index < resourceKeys.length; index++) {
                                    if (resourceValue.match(resourceKeys[index])) {
                                        // make current item visible when we validate a match
                                        $(this).parents('.ignatianArticle').removeClass('hideByResource');
                                    }
                                }
                            }
                        });
                        // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.ignatianArticle').removeClass('hideByResource');
                    }
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




        }, 10);
    });
});
</script>