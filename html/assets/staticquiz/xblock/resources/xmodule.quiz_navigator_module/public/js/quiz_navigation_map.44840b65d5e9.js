window.onload = function () {
    // Find all the seq_contents divs on the page
    var seqContents = document.querySelectorAll('[id^="seq_contents_"]');

    // Loop through each seq_contents div
    var problemIds = [];
    seqContents.forEach(function (seqContent, seqIndex) {
        // Create a temporary div element and set its innerHTML to the content of the seq_contents div
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = seqContent.textContent;

        // Find all the problems-wrapper elements within the temporary div
        var problemsWrappers = tempDiv.querySelectorAll(
            '.xblock-student_view-problem, \
            .xblock-student_view-openassessment, \
            .xblock-student_view-coderunner, \
            .xblock-student_view-drag-and-drop-v2, \
            .xblock-student_view-essay_question'
        );

        // Extract the problem IDs from the data-usage-id attribute of each problems-wrapper element
        problemsWrappers.forEach(function (wrapper) {
            var problemId = wrapper.getAttribute('data-usage-id');
            problemIds.push({
                seqIndex: seqIndex,
                problemId: problemId
            });
        });
    });

    var xblockHandler = getXBlockHandlerUrl();

    collectProblems();

    getQuizMapAndRender();

    addFlexNavigator();

    // We cant use runtime handler url because it is not available if the unit contain xblock is not loaded
    function getXBlockHandlerUrl() {
        var XBlockId;
        var vertModDiv = document.querySelector('.vert-mod');
        var vertDiv = vertModDiv.querySelectorAll('.vert');
        for (var i = 0; i < vertDiv.length; i++) {
            var dataId = vertDiv[i].getAttribute('data-id');
            if (dataId && dataId.indexOf('quiz_navigation') !== -1) {
                XBlockId = dataId;
                break; // break out of the loop
            }
        }
        // If the XBlock ID is not found, find it from seq_contents
        if (!XBlockId) {
            var seqContents = document.querySelectorAll('[id^="seq_contents_"]');
            for (var i = 0; i < seqContents.length; i++) {
                // Create a temporary div element and set its innerHTML to the content of the seq_contents div
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = seqContents[i].textContent;
                var vertModDivTemp = tempDiv.querySelector('.vert-mod');
                var vertDivTemp = vertModDivTemp.querySelectorAll('.vert');
                for (var j = 0; j < vertDivTemp.length; j++) {
                    var dataId = vertDivTemp[j].getAttribute('data-id');
                    if (dataId && dataId.indexOf('quiz_navigation') !== -1) {
                        XBlockId = dataId;
                        break; // break out of the loop
                    }
                }
            }
        }
        var currentPath = window.location.pathname;
        var courseUrlPrefix = currentPath.split('/').slice(0, 3).join('/');
        var handlerUrl = courseUrlPrefix + '/xblock/' + XBlockId + '/handler/';
        return handlerUrl;
    }

    function collectProblems() {
    }

    function getQuizMapAndRender() {
        
    }

    function addFlexNavigator() {
        var $quizMap = $('.quiz-map-container');
        var quizMapTop = $quizMap.offset().top;

        $(window).scroll(fixSidebarOnScroll);
        function fixSidebarOnScroll() {
            var windowScrollTop = $(window).scrollTop();
            var widthBrowser = window.innerWidth;
            var examTimer = $('.exam-timer');

            if (windowScrollTop <= quizMapTop || widthBrowser < 770) {
                $quizMap.removeClass('sticky');
            }
            else if (windowScrollTop >= quizMapTop) {
                var quizMapBottom = $('.quiz-map')[0].getBoundingClientRect().bottom;
                var sequenceBottom = $('.sequence')[0].getBoundingClientRect().bottom;
                if(sequenceBottom - quizMapBottom > 0) {
                    $quizMap.addClass('sticky');
                    if($quizMap.hasClass('absolute-bottom')) {
                        $quizMap.removeClass('absolute-bottom');
                    }

                    if(examTimer.length > 0) {
                        $quizMap.css({'top': '145px'});
                    }
                } else {
                    if($quizMap.hasClass('sticky')) {
                        $quizMap.removeClass('sticky');
                    }

                    $quizMap.addClass('absolute-bottom');
                    if(examTimer.length > 0) {
                        $quizMap.css({'bottom': 'unset', 'top': '145px'});
                    }
                }
            }
        }
    }

    function checkNetworkStatus() {
        if (!navigator.onLine) {
          alert(gettext('Lost network connection. Please check your connection again'));
          location.reload();
        }
    }

    setInterval(checkNetworkStatus, 10000);
}

function QuizNavigationMapXBlock(runtime, element) {

}
